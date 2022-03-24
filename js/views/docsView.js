class DocsView {
  _data;
  _parentElement = document.querySelector('.section-authors');

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  render(data) {
    this._data = data;
    this._clear();
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  _generateMarkup() {
    return Object.entries(this._data).map((ent) => {
      return `<h1 class="abc-title">${ent[0]}</h1>
                <ul class="authors-list">
                  ${ent[1].map(obj => {
        return `<li><a href="documentary.html#${obj.id}">${obj.name}</a></li>`
         }).join('')}</ul>`
      })
  }
}

export default new DocsView();

