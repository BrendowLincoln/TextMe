const User = (object) => {
    var model = {
        "id": 0,
        "nome": "",
        "apelido": "",
        "avatar": "",
        "senha": "",
        "email": "",
        "telefone": "",
        "hash": ""
    };

    if(object) {
        model = { ...object, ...model };
    }
    return model;
};

export default User;