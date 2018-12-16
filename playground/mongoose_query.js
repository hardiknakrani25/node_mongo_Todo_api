const {ObjectID}=require('mongodb');
const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');

var id='5c15d34b57f06bef1986b522';

if(!ObjectID.isValid(id)){
    console.log('**Id not valid**');
    
};

Todo.find({
    _id:id
}).then((todos)=>{
    console.log('Todos',todos);
    
})


Todo.findOne({
    _id:id
}).then((todo)=>{
    console.log('Todo',todo);
    
})


Todo.findById(id).then((todo)=>{
    if(!todo) return console.log('Id not Found');
    
    console.log('TodoByID',todo);
    
}).catch((e)=>console.log(e));