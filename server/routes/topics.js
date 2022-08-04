const express = require('express');
const { Sequelize } = require('sequelize');
const topics = require('../models').topics;
const comments = require('../models').comments;
const router = express.Router();

router.get('/', (req, res) => {
  topics.findAll(
    {
      attributes: {
        include: [
          [Sequelize.fn('COUNT', Sequelize.col('comments.id')), 'commentsCount']
        ]
      },
      include: [{
        attributes: [],
        model: comments
      }],
      group: ['topics.id'],
      order: [['count', 'DESC']]
    }
  )
    .then((topics) => res.send(topics))
    .catch((err) => {
      res.status(500).send({ message: err.message});
    });
});

router.get('/:id', (req, res) => {
  topics.findOne({ where: { id: req.params.id }})
    .then((topics) => res.send(topics))
    .catch((err) => {
      res.status(500).send({ message: err.message});
    });
});

router.post('/', (req, res) => {
  topics.create(req.body)
    .then(topic => {
      res.status(201).send(topic);
    })
    .catch(err => {
      res.status(501).send({ message: err.message });
    });
});

module.exports = router;
