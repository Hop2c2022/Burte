const Url = require("../database/module/URI")
const mongoose = require("mongoose")
const { createUrlQueary, getidUrlQueary, historyUrlQueary } = require("../query/URIquery")

  exports.urlGetController = async( req, res ) => {
    const result = await Url.find()
    res.status(200).send(result)
  }
  
  exports.urlPostController = async(req, res) =>{
    try{
      const result = await createUrlQueary(req)
      res.status(201).send(result)
    }catch(err){
      res.status(403).send(err.message)
      console.log(err.message);
    }
      
  }

  exports.urlGetControllerById = async(req, res) =>{
    try{
      const result = await getidUrlQueary(req)
      res.status(201).send(result)
    }catch(err){
      res.status(403).send(err.message)
      console.log(err.message);
    }
      
  }
  exports.urlhisController = async(req, res) =>{
    try{
      const result = await historyUrlQueary(req)
      res.status(201).send(result)
    }catch(err){
      res.status(403).send(err.message)
      console.log(err.message);
    }
      
  }

