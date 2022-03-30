class AddDirectorView {
  _parentElement = document.querySelector('.director-upload');
  _addUsefulLinkSection = document.querySelector('.useful-links-section');
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
    const block = this._addUsefulLinkSection;
    this._addUsefulLinkButton.addEventListener('click', function(e) {
      let p = e.target.parentElement.previousElementSibling.lastElementChild.dataset.id;

      console.log('parent element previous sibling', e.target.parentElement.previousElementSibling.lastElementChild);

      const markup = `
      </div><div class="useful-link" data-id="${+p + 1}" id="${+p+1}">
        <input name="usefulLinkText-${+p + 1}" class="useful-link-text" placeholder="title of the link" data-link-text="${+p+1}" type="text">
        <input name="usefulLinksLink-${+p + 1}" data-link="${+p+1}" placeholder="link" type="text"><p>---</p>
      </div>`;

      // block.previousElementSibling.insertAdjacentHTML('beforeend', markup);
      block.insertAdjacentHTML('beforeend', markup);
      console.log(markup);

    })
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function(e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      console.log(data);
      handler(data);
    });
  }

  addHandlerRedirect(id) {
    window.location.href = `http://127.0.0.1:8887/author.html#${id}`;
  }
};

export default new AddDirectorView();




