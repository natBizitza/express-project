const express = require('express');

const friendsController = require('../controllers/friends.controller');

const friendsRouter = express.Router();

//middleware
friendsRouter.use((req, res, next) => {
  console.log('ip address', req.ip);
  next();
});

friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriend);
friendsRouter.post('/', friendsController.postFriend);

module.exports = friendsRouter;