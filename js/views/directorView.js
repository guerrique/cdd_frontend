
class DirectorView {
  _parentElement = document.querySelector('.section-author');
  _container = document.querySelector('.container');
  _data;

  render(data) {
    this._data = data;
    // console.log(this._data.usefulLinks);
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
    if(this._data.usefulLinks.length !== 0) {
       const linksMarkup = this._generateLinksMarkup();
       this._container.insertAdjacentHTML('afterend', linksMarkup);
       }

  }

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  _generateMarkup() {
    return `
      <div class="section-author">
        <div class="section-author-photo">
          <img class="author-photo" src="img/authors/hu-jie.jpg" alt="">
        </div>
        <div class="section-author-text">
          <h1>${this._data.name}</h1>
          <div class="section-author-bio">
            <div class="section-author-bio-short">
              <p>${this._data.bioShort} <ion-icon class="plus-icon" name="add-circle-outline"></ion-icon>
              </p>
            </div>
            <div class="section-author-bio-long">
              <p>${this._data.bioLong} <span>Source: Wikipedia</span>
              </p>
            </div>
          </div>
          </div>
        <div class="section-author-filmo">
          <h3 class="section-author-filmo-title">Filmography</h3>
          <div class="section-author-filmo-list">
            <ul>${this._data.docs.map(doc => {
              return `<li><a href="documentary.html">${doc.name} (${doc.year})</a></li>`
            }).join('')}
            </ul>
          </div>
        </div>`;
  }

  _generateLinksMarkup(){
    return `  <div class="doc-more-infos">
    <div class="container">
      <h2>To go further...</h2>
      <div class="doc-links">
        <ul class="doc-links-list">
        ${this._data.usefulLinks.map(link => {
          return `<li>
            <a href="${link[1]}">${link[0]}</a>
          </li>`
        })}

        </ul>
      </div>
    </div>
  </div>`
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }
};

export default new DirectorView();
