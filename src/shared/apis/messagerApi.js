import axios from "axios";

const ONLINE_SERVER_URL =
  "http://bdfemasschat-env-2.eba-7p43uarw.sa-east-1.elasticbeanstalk.com";
const LOCAL_SERVER_URL = "http://192.168.1.10:8080";
const BASE_API = LOCAL_SERVER_URL;

export const getUser = async (identification) => {
  const user = await axios
    .get(`${BASE_API}/message/buscarUsuarios/${identification}`)
    .then(({ data }) => data)
    .catch((err) =>
      console.log("An error ocurred on the getUser method: ", err)
    );

  return user;
};

export const getUsersWithMessages = async (id) => {
  const users = await axios
    .get(`${BASE_API}/message/buscarUsuariosComConversa/${id}`)
    .then(({ data }) => data)
    .catch((err) =>
      console.log("An error ocurred on the getUsersWithMessages method: ", err)
    );

  return users;
};

export const getContacts = async (login) => {
  const users = await axios
    .get(`${BASE_API}/message/buscarUsuarios/${login}`)
    .then(({ data }) => data)
    .catch((err) =>
      console.log("An error ocurred on the getContacts method: ", err)
    );

  return users;
};

export const getMessages = async (id, idOther) => {
  const messages = await axios
    .get(`${BASE_API}/message/buscarMensagensComUmUsuario/${id}/${idOther}`)
    .then(({ data }) => data)
    .catch((err) =>
      console.log("An error ocurred on the getUsersWithMessages method: ", err)
    );

  return messages;
};

export const sendMessage = async (idFrom, idTo, message) => {
  await axios
    .post(`${BASE_API}/message/enviarMensagem`, {
      idFrom,
      idTo,
      mensagem: message,
    })
    .catch((err) =>
      console.log("An error ocurred on the getUsersWithMessages method: ", err)
    );
};

export const registerUser = async (user) => {
  return await axios.post(`${BASE_API}/user/`, user);
};
