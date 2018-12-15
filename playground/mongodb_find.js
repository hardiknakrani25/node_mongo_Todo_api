// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27019/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

/* 
  db.collection('Todos').find().count().then((count) => {

    console.log(`Todos count: ${count}`);
  }).catch((err) => {
    conslole.log(err);
  }); 
  
  */


  db.collection('Users').find({name:'jen'}).count().then((count) => {
    console.log(`Users count ${count}`);
    
  }).catch((err) => {
    console.log(err);
    
  });

  //db.close();
});
