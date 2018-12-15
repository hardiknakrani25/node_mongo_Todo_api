// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27019/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//update item

/* db.collection('Todos').findOneAndUpdate({_id:new ObjectID('5c14d6de9204d7b5dccfd1e1')},{

$set:{completed:true}
},{returnOriginal:false}).then((result) => {
  console.log(result);
  
}).catch((err) => {
  console.log(err);
  
}); */


db.collection('Users').findOneAndUpdate({_id:new ObjectID('5c14ac2440f43d17fe014de1')},
{
  $set:{name:'Hardik'},
  $inc:{age:1}
},{
returnOriginal:false
}).then((result) => {
  console.log(result);
  
}).catch((err) => {
  
});

  //db.close();
});
