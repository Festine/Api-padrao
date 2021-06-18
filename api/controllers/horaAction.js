dataAction = () => {
  const datefull = new Date();
  const date = ('0' + datefull.getDate()).slice(-2);
  const month = ('0' + (datefull.getMonth() + 1)).slice(-2);
  const year = datefull.getFullYear();


  console.log("Realizado em: ", date); 

}

module.exports = dataAction;