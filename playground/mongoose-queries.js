const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');

const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');


// var id = '58ff014398b21342ecdc94';
//
// if (!ObjectID.isValid(id)) {
//   console.log('id not valid')
//}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by find id', todo)
// }).catch((e) => console.log(e));

// const userId = '58feebd9cbbb670e1f8652a';
// User.findById(userId).then((user) => {
//   if (!user) {
//     return console.log('Unable to find user');
//   }
//   console.log('User', user);
// }, (e) => {
//   console.log(e);
// })
