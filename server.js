const app = require("./config/express")();
const port = app.get('port');

app.listen(port, () => {
  console.log("API rodando na porta " + port);
  console.log("===========================");
});
