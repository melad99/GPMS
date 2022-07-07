const postFetch = (url, data, handelDom) => {
  showLoading();
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((result) => result.json())
    .then((json) => {
      hideLoading();
      handelDom(json);
    })
    .catch();
};
