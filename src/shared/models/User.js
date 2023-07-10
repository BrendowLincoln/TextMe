const User = (object) => {
  var model = {
    id: "",
    nome: "",
    apelido: "",
    avatar: "",
    senha: "",
    emai: "",
    telefone: "",
    hash: "",
  };

  if (object) {
    model = { ...object, ...model };
  }
  return model;
};

export default User;
