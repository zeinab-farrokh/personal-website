const getCookie = (cookieName) => {
  return document.cookie.split("=")[1];
};

export { getCookie };
