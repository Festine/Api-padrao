module.exports = (app) => {
  const controller = require("../controllers/controllerDefault")();
  //rotas desativa
  app.put("/*", controller.invalidMethod);
  app.delete("/*", controller.invalidMethod);
  app.options("/*", controller.invalidMethod);
  app.path("/*", controller.invalidMethod);
  //rotas ativas
  app.get("/*", controller.getDefault);
  app.post("/post/", controller.postDefault);
}
