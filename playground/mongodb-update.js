const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to Mongo DB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('58fed9bbb047426b0d8a2573')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndUpdate({
  //   name: 'meguri'
  // }, {
  //   $set: {
  //     name: 'sachiko',
  //     age: 60
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  // db.close();
});
