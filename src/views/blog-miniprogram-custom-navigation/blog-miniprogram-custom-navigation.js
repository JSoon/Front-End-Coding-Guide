axios({
    method: 'GET',
    url: `./blog-miniprogram-custom-navigation.md`,
    responseType: 'text',
  })
  .then(function (response) {
    const {
      data
    } = response;
    const contentBox = document.querySelector('#J_Content');
    contentBox.innerHTML = marked(data);
  });