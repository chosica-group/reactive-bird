import { Router } from 'express';
import { Comments } from '../models/comments';

const router = Router();

router.get('/:id/comments', (req, res) => {
  Comments.findAll({ where: { topicId: req.params.id } })
    .then((comments) => res.send(comments))
    .catch((err) => {
      res.status(500).send({ message: err.message});
    });
});

router.post('/:id/comments', (req, res) => {
  Comments.create({ ...req.body, topicId: req.params.id })
    .then(comment => {
      res.status(201).send(comment);
    })
    .catch(err => {
      res.status(501).send({ message: err.message });
    });
});

export default router;
