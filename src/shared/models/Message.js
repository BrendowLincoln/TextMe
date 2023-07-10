const Message = (object) => {
    var model = {
        id: "",
        from: "",
        to: "",
        avatar: "",
        mensagem: "",
        dataHora: ""
    };
  
    if (object) {
      model = { ...object, ...model };
    }
    return model;
  };
  
  export default Message;
  