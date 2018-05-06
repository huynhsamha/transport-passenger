import { Manager, Employee, Department } from '../../models';


const findAll = (req, res, next) => {
  let { offset, limit } = req.query;
  offset = parseInt(offset, 10) || 0;
  limit = parseInt(limit, 10) || 100;
  Manager.findAll({
    offset, limit,
    include: [{
      model: Employee, as: 'information',
      attributes: { exclude: ['password'] }
    }]
  })
    .then(data => res.status(200).send({ data }))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

const findOneById = (req, res, next) => {
  const { id } = req.params;
  const { department } = req.query;
  Manager.findById(id, {
    include: [{
      model: Employee, as: 'information',
      attributes: { exclude: ['password'] },
      include: [
        department == 'true' ? { model: Department, as: 'department' } : null
      ].filter(o => o != null)
    }]
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
    let data = await Manager.findById(id);
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
  Manager.create(data)
    .then(data => res.status(201).send({ data, message: 'Data is inserted' }))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

const deleteOneById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await Manager.findById(id);
    if (!data) {
      return res.status(404).send({ message: 'Data not found' });
    }
    await data.destroy();
    return res.status(200).send({ message: 'Data is deleted' });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const findSubordinates = async (req, res, next) => {
  const { id } = req.params;
  let { offset, limit } = req.query;
  offset = offset || 0;
  limit = limit || 100;
  try {
    const manager = await Manager.findById(id);
    if (!manager) {
      return res.status(404).send({ message: 'Manager not found' });
    }
    const data = await manager.getSubordinates({
      offset, limit,
      attributes: { exclude: ['password', 'bank_account'] }
    });
    return res.status(200).send({ data });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};


export default {
  findAll,
  findOneById,
  insert,
  updateOneById,
  deleteOneById,
  findSubordinates
};
