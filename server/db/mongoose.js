var mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27019/TodoApp');

module.exports={mongoose};
