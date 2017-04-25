const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to Mongo DB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     console.log("unable to insert todo", err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'palm',
  //   age: 33,
  //   location: 'Shizuoka'
  // }, (err, result) => {
  //   if (err) {
  //     console.log("unable to insert users", err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 4));
  // })
  db.close();
});
