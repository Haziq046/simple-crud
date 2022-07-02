var express = require('express');
var router = express.Router();

const todos = [];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { todos });
});

router.get('/add', function (req, res, next) {
  res.render('add');
});

router.post('/add', function (req, res, next) {
  todos.push(req.body);
  res.redirect("/");
});

router.post('/edit/:title', function (req, res, next) {
  todos[(todos.findIndex(x => x.title == req.params.title))] = req.body;
  res.redirect("/");
});

router.get('/edit/:title', function (req, res, next) {
  const todo = todos[(todos.findIndex(x => x.title == req.params.title))];
  console.log(todo);
  res.render("edit", { todo });
});

router.get('/delete/:title', function (req, res, next) {
  todos.splice((todos.findIndex(x => x.title == req.params.title)), 1)
  res.redirect("/");
});

module.exports = router;
