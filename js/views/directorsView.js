class DirectorsView {
  _data;
  _parentElement = document.querySelector('.section-authors');


  render(data) {
    this._data = data;
    // console.log(this._data);
    // this._data.map(dir => console.log(dir.name));
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  _generateMarkup() {
    return Object.entries(this._data).map((ent) => {
      return `<h1 class="abc-title">${ent[0]}</h1>
                <ul class="authors-list">
                  ${ent[1].map(obj => {
        return `<li><a href="author.html#${obj.id}">${obj.name}</a></li>`
         }).join('')}</ul>`
      })
    }
  }

export default new DirectorsView();
