const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const config = require("config");

module.exports = () => {
  const app = express();

  app.set("port", process.env.PORT || config.get("server.port"));
  app.disable("x-powered-by");

  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json());

  let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
  }
  app.use(allowCrossDomain);

  require("../api/routes/rotasDefault")(app);

  return app;
};
