dataAction = () => {
  const date_obj = new Date();
  const data =  date_obj.toLocaleString("pt-BR", {
    hour12:false,
    hour:"2-digit",
    second:"2-digit",
    second:"2-digit",
    minute:"2-digit",
    year:"2-digit",
    month:"2-digit",
    day:"2-digit",
  });

  console.log(
    "Realizado em:",
    data
  );
  console.log("===================");
};

module.exports = dataAction;
