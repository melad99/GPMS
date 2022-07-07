const getFetch = (url, handelDom) => {
  showLoading();
  fetch(url, { method: "GET" })
    .then((result) => result.json())
    .then((json) => {
      hideLoading();
      handelDom(json);
    })
    .catch();
};
