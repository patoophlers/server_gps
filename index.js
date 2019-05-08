const express=require('express');
const mysql=require('mysql');

const app=express();
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'espatula01',
  });

  connection.connect((err)=>{
      if(err){
          throw err;
      }
      console.log('mysql connected');
  });

app.listen(3000,()=>{
    console.log('Server started');
});

