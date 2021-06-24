dataAction = () => {
  const datefull = new Date();
  const date = ("0" + datefull.getDate()).slice(-2);
  const month = ("0" + (datefull.getMonth() + 1)).slice(-2);
  const year = datefull.getFullYear();
  const hours = datefull.getHours();
  const minutes = datefull.getMinutes();
  const seconds = datefull.getSeconds();

  console.log(
    "Realizado em: ",
    date + "/" + month + "/" + year,
    "as",
    +hours + ":" + minutes + ":" + seconds
  );
  console.log("===================");
};

module.exports = dataAction;
