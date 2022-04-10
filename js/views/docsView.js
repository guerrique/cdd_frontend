class DocsView {
  _data;
  _parentElement = document.querySelector('.section-authors');
  _searchElement = document.querySelector('.search');

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  addHandlerSearch(handler) {
    this._searchElement.addEventListener('submit', function(e) {
      e.preventDefault();
      handler();
    })
      console.log(this._searchElement);
  }

  render(data) {
    this._data = data;
    this._clear();
    console.log(this._data);
    console.log(this._data === {});
    if (this._data === {}) {
      const markup = '<h3>No documentary found with that name, sorry</h3>';
      this._parentElement.insertAdjacentHTML('afterbegin', markup);
    } else {
      const markup = this._generateMarkup();
      this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
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

  getQuery() {
    const query = this._searchElement.querySelector('.search__field').value;
    // this._clearInput();
    return query;
  }

  // _clearInput() {
  //   this._parentElement.querySelector('.search__field').value = '';
  // }

}

export default new DocsView();

