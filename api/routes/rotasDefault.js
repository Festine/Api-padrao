module.exports = app => {
  const controller = require('../controllers/controllerDefault')();

  app.get('/get/', controller.getDefault);
  app.post('/post/', controller.postDefault);

}