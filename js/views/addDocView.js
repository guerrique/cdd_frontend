class AddDocView {
  _parentElement = document.querySelector('.doc-upload');
  _addUsefulLinkSection = document.querySelector('.useful-links-section');
  _addUsefulLinkButton = document.querySelector('.add-link-button');
  _addAwardSection = document.querySelector('.add-award-section');
  _addAwardButton = document.querySelector('.add-award-button');

  // addHandlerRender(handler) {
  //   if (document.querySelector('.doc-upload')) {
  //     window.addEventListener('load', handler);
  //     this._addUsefulLinkField();
  //     this._addAwardField();
  //     console.log('tout est bon');
  //   } else {
  //     console.log('t\'es passé par là mais tu t\'arrete ici');
  //   }
  // }

  _addUsefulLinkField() {
    const block = this._addUsefulLinkSection;
    this._addUsefulLinkButton.addEventListener('click', function(e) {
      console.log(e);
      let p = e.target.parentElement.previousElementSibling.lastElementChild.dataset.id;

      const markup = `
      <div class="useful-link" data-id="${+p + 1}" id="${+p+1}">
        <input name="usefulLinkText-${+p + 1}" class="useful-link-text" placeholder="title of the link" data-link-text="${+p+1}" type="text">
        <input name="usefulLinksLink-${+p + 1}" data-link="${+p+1}" placeholder="link" type="text"><p>---</p>
      </div>`;

      block.insertAdjacentHTML('beforeend', markup);
      console.log(markup);
    });
  }

  _addAwardField() {
    const blockAward = this._addAwardSection;
    this._addAwardButton.addEventListener('click', function(e) {
      let p = e.target.parentElement.previousElementSibling.lastElementChild.dataset.id;

      const markup = `<div class="award" data-id="${+p + 1}">
                <input name="awardText-${+p + 1}" type="text"><p>---</p>
              </div>`;

      blockAward.insertAdjacentHTML('beforeend', markup);
      console.log(markup);
    });
  }

  addHandlerUpload(handler) {
    console.log('ça se passe');
    this._addUsefulLinkField();
    this._addAwardField();

    this._parentElement.addEventListener('submit', function(e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  addHandlerRedirect(id) {
    window.location.href = `http://127.0.0.1:8887/documentary.html#${id}`;
  }
}

export default new AddDocView();
