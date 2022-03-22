class DirectorsView {
  _data;
  _parentElement = document.querySelector('.section-authors');


  render(data) {
    this._data = data;
    this._data.map(dir => console.log(dir.name));
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
    return `<ul class="authors-list">
      ${this._data.map(dir => {
        return `<li>${dir.name}</li>`
      }).join('')}</ul>`
    }
  }


export default new DirectorsView();
