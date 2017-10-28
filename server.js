const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const db=require('./back_end/models/dbs');
const api=require('./back_end/routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'/dist')));

app.use('/api',api);

// Send all other requests to the Angular app
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'dist/index.html'));
});

const port=process.env.PORT||'3000';
app.set('port',port);

const server=http.createServer(app);
server.listen(port,()=>{
  console.log('running on localhost: '+port);
});
