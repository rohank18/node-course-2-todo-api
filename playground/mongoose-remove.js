const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
  console.log(result);
});

// Todo.findOneAndRemove({_id: '5a57ccae34753beb15eeb7f2'}).then((todo) => {
//
// });
//
// Todo.findByIdAndRemove('5a57ccae34753beb15eeb7f2').then((todo) => {
//   console.log(todo);
// });
