const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to Mongo DB server');
  //
  // db.collection('Todos').find({
  //   _id: new ObjectID('58feb45dc7654506a4ac03f0')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos counts: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Users').find(
  //   {name: 'meguri'}
  // ).toArray().then((docs) => {
  //   console.log('Users');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch users', err);
  // })

  db.collection('Users').find({
    name: 'meguri'
  }).count().then((count) => {
    console.log(`Users count: ${count}`)
  }, (err) => {
    console.log('Unable to fetch user count', err);
  });
  // db.close();
});
