class AddDirectorView {
  _parentElement = document.querySelector('.director-upload');
  _addUsefulLinkSection = document.querySelector('.useful-links-section');
  _addUsefulLinkButton = document.querySelector('.add-link-button');

  addHandlerRender(handler) {
    if (document.querySelector('.director-upload')) {
      this._addUsefulLinkField();
      this._addHandlerUpload(handler);
      console.log('tout est bon');
    } else {
      console.log('t\'es passé par là mais tu t\'arrete ici');
    }
  }

  _addUsefulLinkField() {
    const block = this._addUsefulLinkSection;
    this._addUsefulLinkButton.addEventListener('click', function(e) {
      let p = e.target.parentElement.previousElementSibling.lastElementChild.dataset.id;

      const markup = `
      <div class="useful-link" data-id="${+p + 1}" id="${+p+1}">
        <input name="usefulLinkText-${+p + 1}" class="useful-link-text" placeholder="title of the link" data-link-text="${+p+1}" type="text">
        <input name="usefulLinksLink-${+p + 1}" data-link="${+p+1}" placeholder="link" type="text"><p>---</p>
      </div>`;

      block.insertAdjacentHTML('beforeend', markup);
    });
  }

  _addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function(e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  addHandlerRedirect(id) {
    window.location.href = `http://127.0.0.1:8887/director.html#${id}`;
  }
};

export default new AddDirectorView();




