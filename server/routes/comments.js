const express = require('express');
const comments = require('../models').comments;
const router = express.Router();

router.get('/:id/comments', (req, res) => {
  comments.findAll({ where: { topicId: req.params.id } })
    .then((comments) => res.send(comments))
    .catch((err) => {
      res.status(500).send({ message: err.message});
    });
});

router.post('/:id/comments', (req, res) => {
  comments.create({ ...req.body, topicId: req.params.id })
    .then(comment => {
      res.status(201).send(comment);
    })
    .catch(err => {
      res.status(501).send({ message: err.message });
    });
});

module.exports = router;
