const Todo = require('../../models/todo');
const User = require('../../models/user');


module.exports = {
  index,
  create,
  update,
  delete: deleteOne
};

async function index(req, res) {
  const comments = await Todo.find({})
  .populate("user")
  console.log(todos)
  res.status(200).json({todos});
}

async function create(req, res) {
  // console.log(req.user)
  console.log(req.body)
  const todo = await Todo.create(req.body);
  const todoUser = await User.findById(req.body.user);
  const todoInfo = {todo, todoUser};
  res.status(201).json(todoInfo);
}

async function update(req, res) {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedTodo);
}

async function deleteOne(req, res) {
  const deletedTodo = await Todo.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedTodo);
}