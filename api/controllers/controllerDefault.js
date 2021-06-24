const {json} = require("body-parser");
const dateAction = require("../controllers/horaAction");
const responseGet = require("../data/getDefault.json");
const responsePost = require("../data/postDefault.json");

module.exports = () => {
  const controller = {};

  controller.getDefault = (req, res) =>{
    if (!req.body){
      res.status(404).end();
    }
    else{
      res.status(200).json(responseGet);
    }
    console.log("Requisição GET:", req.body);
    console.log("Resposta para o cliente:",responseGet);
    dateAction();
  };

  controller.postDefault = (req, res) =>{
    if (!req.body){
      res.status(404).end();
    }
    else{
      res.status(201).json(responsePost);
    }
    console.log("Requisição POST:", req.body);
    console.log("Resposta para o cliente:",responsePost);
    dateAction();
  };

  return controller;
}