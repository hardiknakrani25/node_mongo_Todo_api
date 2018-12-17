const {ObjectID}=require('mongodb');
const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');


//Todo remove
/* 
Todo.remove({}).then((result) => {
    console.log(result);
    
}).catch((err) => {
    console.log(err);
    
});
 */


//Todo.findOneAndRemove
//Todo.findBy id and remove

Todo.findByIdAndRemove('5c173adb3be15d584a92dc4e').then((todo)=>{
console.log(todo);

})