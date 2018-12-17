var env=process.env.NODE_ENV || 'development';

console.log('ENV ****',env);


if(env==='development'){
  process.env.PORT=3000;
  process.env.MONGODB_URI='mongodb://localhost:27019/TodoApp';
}else if(env ==='test'){
  process.env.PORT=3000;
  process.env.MONGODB_URI='mongodb://localhost:27019/TodoAppTest';
}
