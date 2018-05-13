import { Employee, Department } from '../../models';


const findAll = (req, res, next) => {
  let { range, sort, filter } = req.query;
  let offset, limit, order;

  if (range) {
    range = JSON.parse(range);
    offset = range[0];
    limit = range[1] - range[0] + 1;
  }
  if (sort) {
    sort = JSON.parse(sort);
    order = [sort];
  }
  if (filter) {
    filter = JSON.parse(filter);
  }

  console.log(range, sort, filter);
  console.log(offset, limit);

  Employee.findAndCountAll({
    where: { ...filter },
    order, offset, limit, attributes: { exclude: ['password'] }
  })
    .then(({ rows, count }) => res.status(200).send({ data: rows, total: count }))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

const findOneById = (req, res, next) => {
  const { id } = req.params;
  const { supervisor, department } = req.query;
  Employee.findById(id, {
    attributes: { exclude: ['password'] },
    include: [
      department == 'true' ? { model: Department, as: 'department' } : null,
      supervisor == 'true' ? {
        model: Employee, as: 'supervisor',
        attributes: { exclude: ['password', 'salary', 'bank_account'] }
      } : null
    ].filter(o => o != null)
  })
    .then((data) => {
      if (!data)
        return res.status(404).send({ message: 'Data not found' });
      return res.status(201).send({ data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

const updateOneById = async (req, res, next) => {
  const { id } = req.params;
  const new_data = req.body;
  try {
    let data = await Employee.findById(id);
    if (!data) {
      return res.status(404).send({ message: 'Data not found' });
    }
    data = await data.update(new_data);
    return res.status(200).send({ data, message: 'Data is updated' });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const insert = (req, res, next) => {
  const data = req.body;
  Employee.create(data)
    .then(data => res.status(201).send({ data, message: 'Data is inserted' }))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

const deleteOneById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await Employee.findById(id);
    if (!data) {
      return res.status(404).send({ message: 'Data not found' });
    }
    await data.destroy();
    return res.status(200).send({ data, message: 'Data is deleted' });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const changePassword = async (req, res, next) => {
  const { id } = req.params;
  const { currentPassword, newPassword } = req.body;
  try {
    const user = await Employee.findById(id);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    if (!user.authenticate(currentPassword)) {
      return res.status(401).send({ message: 'Current password is wrong' });
    }
    await user.update({ password: user.hashPassword(newPassword) });
    return res.status(200).send({ message: 'Change password successfully' });

  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
};

export default {
  findAll,
  findOneById,
  insert,
  updateOneById,
  deleteOneById,
  changePassword
};
