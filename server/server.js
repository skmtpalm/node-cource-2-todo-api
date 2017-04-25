var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Save todo', doc)
// }, (e) => {
//   console.log('Unable to save todo', e);
// });

// var otherTodo = new Todo({
//   text: 'Something to do'
// });
// //
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save', e);
// });


//User
// email - require it  - trim it - set type - set min length of 1
// name

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

var newUser = new User({
  email: 'hachihachi.8og@gmail.com   '
});


newUser.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save user', e)
});
