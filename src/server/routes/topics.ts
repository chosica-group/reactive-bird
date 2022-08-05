const { Sequelize } = require('sequelize');
import { Router } from 'express';
import { Comments } from '../models/comments';
import { Topics } from '../models/topics'

const router = Router();

router.get('/', (req, res) => {
  Topics.findAll(
    {
      attributes: {
        include: [
          [Sequelize.fn('COUNT', Sequelize.col('comments.id')), 'commentsCount']
        ]
      },
      include: [{
        attributes: [],
        model: Comments
      }],
      group: ['topics.id'],
      order: [['count', 'DESC']]
    }
  )
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
  Topics.create(req.body)
    .then(topic => {
      res.status(201).send(topic);
    })
    .catch(err => {
      res.status(501).send({ message: err.message });
    });
});

export default router;
