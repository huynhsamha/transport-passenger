import { Bus, BusType } from '../models';


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

  Bus.findAndCountAll({
    where: { ...filter },
    order, offset, limit,
    include: [{ model: BusType, as: 'bus_type' }]
  })
    .then(({ rows, count }) => res.status(200).send({ data: rows, total: count }))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

const findOneById = (req, res, next) => {
  const { id } = req.params;
  Bus.findById(id, { include: [{ model: BusType, as: 'bus_type' }] })
    .then((data) => {
      if (!data) {
        return res.status(404).send({ message: 'Data not found' });
      }
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
  delete new_data.id;
  delete new_data.created_at;
  delete new_data.updated_at;
  try {
    let data = await Bus.findById(id);
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
  Bus.create(data)
    .then(data => res.status(201).send({ data, message: 'Data is inserted' }))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

const deleteOneById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await Bus.findById(id);
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

const deleteMany = (req, res, next) => {
  let { filter } = req.query;
  if (filter) {
    filter = JSON.parse(filter);
  }
  console.log(filter);

  Bus.destroy({ where: { ...filter } })
    .then(affectedRows => res.status(200).send({ data: filter.id, affectedRows }))
    .catch(err => res.status(500).send(err));
};

export default {
  findAll,
  findOneById,
  insert,
  updateOneById,
  deleteOneById,
  deleteMany
};
