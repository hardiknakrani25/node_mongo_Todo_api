// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27019/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//delete many
/* db.collection('Todos').deleteMany({text :'Eat lunch'}).then((result) => {
  console.log(result);
  
}).catch((err) => {
  console.log(err);
  
});
 */

 //delete One
 /* db.collection('Todos').deleteOne({  text:'Eat lunch'}).then((result) => {
   console.log(result);
   
 }).catch((err) => {
   console.log(err);
   
   
 }); */



//Find One and delete

/* db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
  console.log(result);
  
}).catch((err) => {
  console.log(err);
  
  
});
 */


 //delete many in user collection
 /* db.collection('Users').deleteMany({name:'Andrew'}).then((result) => {
   console.log(result);
   
 }).catch((err) => {
   console.log(err);  }); */
   
   //delete one in user collection

   db.collection('Users').deleteOne({_id:new ObjectID('5c14abdc2cbf0217e18534f8')}).then((result) => {
     console.log(result);
     
   }).catch((err) => {
     
 
 });


  //db.close();
});
