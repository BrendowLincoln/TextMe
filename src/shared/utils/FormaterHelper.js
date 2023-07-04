const telephoneFormatter = (value) => {
  let formatedTelephone = "";
  if (value.length > 0) {
    formatedTelephone = "(" + value.slice(0, 2);
    if (value.length > 2) {
      formatedTelephone += ") " + value.slice(2, 7);
      if (value.length > 7) {
        formatedTelephone += "-" + value.slice(7, 11);
      }
    }
  }

  return formatedTelephone;
};

const sanitizeTelephone = (value) => {
  return value.replace(/\D/g, "");
};

export { telephoneFormatter, sanitizeTelephone };
