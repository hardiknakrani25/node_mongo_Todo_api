var mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27019/TodoApp');

var Todo=mongoose.model('Todo',{
    text:{
type:String,
require:true,
minlength:1,
trim:true
    },
    completed:{
type:Boolean,
default:false
    },
    completedAt:{
type:Number,
default:null
    }
})





/* var newTodo=new Todo({text:'Cook dinner'})
newTodo.save().then((result) => {
    console.log(result);
    
}).catch((err) => {
    console.log(err);
    
});

var othertodo=new Todo({
    text:'Feed the cat',
    completed:true,
    completedAt:123
})
othertodo.save().then((result) => {
    console.log(result);
    
}).catch((err) => {
    console.log(err);
    
}); */



var user=mongoose.model('User',{
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    }
})

var user=new user({
email:'hdnakarani@gmail.com'
})
user.save().then((result) => {
    console.log('user saved',result);
    
}).catch((err) => {
    console.log(err);
    
});