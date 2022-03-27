const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  //call next() to make sure that express passes the request to the correct handler.
  next();
  //actions go here
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

//This is static file middleware.
//The str that we pass as a parameter here is the relative path of the folder we want to make available on the server
app.use('/site', express.static(path.join(__dirname, 'public')));
//------built-in middleware to convert req data to json. By default it's an empty array.
app.use(express.json());

app.use('/', (req, res) => {
  res.render('index.hbs', {
    title: 'My Friends Are Very Clever',
    caption: "Let's go skiing!",
  });
});
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
