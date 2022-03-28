class AddDirectorView {
  _parentElement = document.querySelector('.director-upload');
  _addUsefulLinkBlock = document.querySelector('.useful-link-block');
  _addUsefulLinkButton = document.querySelector('.add-link-button');

  addHandlerRender(handler) {
    if (document.querySelector('.director-upload')) {
      window.addEventListener('load', handler);
      this._addUsefulLinkField();
      console.log('tout est bon');
    } else {
      console.log('t\'es passé par là mais tu t\'arrete ici');
    }
  }

  _addUsefulLinkField() {
    const block = this._addUsefulLinkBlock;
    this._addUsefulLinkButton.addEventListener('click', function(e) {
      const markup = `<input name="usefulLinksText1" placeholder="title of the link" type="text"><input name="usefulLinksLink1" placeholder="link" type="text">`;
      block.insertAdjacentHTML('beforeend', markup);
    })
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function(e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  addHandlerRedirect(id) {
    window.location.href = `http://127.0.0.1:8887/author.html#${id}`;
  }
};

export default new AddDirectorView();




