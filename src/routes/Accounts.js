const express = require('express');
const routes = express.Router();

// SERVICES 
const CreateService = require('../services/Create.js');
const ReadService = require('../services/Read.js');
const UpdateService = require('../services/Update.js');
const DeleteService = require('../services/Delete.js');

routes.post('/create', async (req,res) => {
  const { username, password } = req.body;
  
  const query = await CreateService(username,password);
  
  if(query){
    res
      .status(200)
      .send({
        status: query,
        message: "Successfully Created"
      })
  }else{
    res
      .status(500)
      .send({
        status: query,
        message: "Failed to create"
      })
  }
})

routes.get('/read', async (req,res) => {
  const {dataFields} = req.query;
  const query = await ReadService(dataFields);
  if(query){
    res
      .status(200)
      .send(query)
  }
})

routes.get('/read/all',async (req,res) => {
  const query = await ReadService('*');
  if(query){
    res
      .status(200)
      .send(query)
  }
})

routes.get('/delete/:id', async (req,res) => {
  const { id } = req.params;
  const query = await DeleteService(id);
  if(query){
    res
      .status(200)
      .send({
        status: query,
        message: "Successfully Deleted"
      });
  }else{
    res
      .status(500)
      .send({
        status: query,
        message: "Something went wrong..."
      })
  }
})

routes.post('/update', async (req,res) => {
const { id,newUserName,newPassword } = req.query;
  const query = await UpdateService(id,newUserName,newPassword);
  if(query){
    res
      .status(200)
      .send({
        status: query,
        message: "Successfully Updated"
      });
  }else{
    res
      .status(500)
      .send({
        status: query,
        message: "Something went wrong..."
      })
  }
  
})

module.exports = routes;