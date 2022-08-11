import { Router } from 'express';
import { Comments } from '../models/comments';
import { Topics } from '../models/topics'

const router = Router();

router.get('/', (req, res) => {
  Topics.findAll({ include: { as: 'comments', model: Comments } })
    .then(topics => res.send(topics))
    .catch(err => {
      res.status(500).send({ message: err.message});
    });
});

router.get('/:id', (req, res) => {
  Topics.findOne({ where: { id: req.params.id }})
    .then(topics => res.send(topics))
    .catch(err => {
      res.status(500).send({ message: err.message});
    });
});

router.post('/', (req, res) => {
  Topics.create({ ...req.body, createdAt: new Date(), updatedAt: new Date() })
    .then(topic => {
      res.status(201).send(topic);
    })
    .catch(err => {
      res.status(501).send({ message: err.message });
    });
});

export default router;
