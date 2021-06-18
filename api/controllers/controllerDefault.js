const {json} = require("body-parser");
const dateAction = require("../controllers/horaAction");
const getDefault1 = require("../data/getDefault.json");

module.exports = () => {
  const controller = {};

  controller.getDefault = (req, res) =>{
    if (!req.body){
      res.status(404).end();
    }
    else{
      res.status(200).json(getDefault1);
    }
    console.log("Requisição GET:", req.body);
    console.log("Resposta para o cliente:",getDefault1);
    dateAction();
  };

  return controller;
}