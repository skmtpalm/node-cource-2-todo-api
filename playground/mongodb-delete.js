const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to Mongo DB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  // deleteOne

  // db.collection('Todos').deleteOne({text: "Eat lunch"}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false});

  // db.collection('Users').deleteMany({name: 'palm'}).then((result) => {
  //   console.log(result)
  // })

  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID('58febd410013fc083548de83')
  // }).then((result) => {
  //   console.log(result);
  // });
  // db.close();
});
