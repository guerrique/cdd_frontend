class DocView {
  _parentElement = document.querySelector('.section-doc');
  _moreInfoElement = document.querySelector('.doc-more-infos');
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    const markupInfo = this._generateMarkupInfo();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
    this._moreInfoElement.insertAdjacentHTML('afterbegin', markupInfo);

  }

  _clear () {
    this._parentElement.innerHTML = '';
  }

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  _generateMarkup() {
    return `
      <h2 class="doc-title">
        ${this._data.name}
      </h2>
      <h3 class="doc-author">
       by
        ${this._data.directors.map(director => {
          return `<a href="#">${director.name} </a>`
        })}

      </h3>

      <div class="doc-infos">
        <div class="doc-year flex-center"><ion-icon class="doc-icon" name="calendar-number-outline"></ion-icon>${this._data.year}</div>
        <div class="doc-duration flex-center"><ion-icon class="doc-icon" name="time-outline"></ion-icon>${this._data.duration}</div>
        <div class="doc-chinese-name">
        ${this._data.chineseName}</div>
      </div>

      <img class="doc-poster" src="img/last-train-home-poster.jpg" alt="">

      <div class="doc-summary">
        <div class="doc-summary-short">
          <p>
            ${this._data.docTextShort}
            <ion-icon class="plus-icon" name="add-circle-outline"></ion-icon>
          </p>
        </div>
        <div class="doc-summary-long">
          <p>
            ${this._data.docTextLong}
          </p>
        </div>
      </div>
      ${this._data.awards.length === 0 ? '' : `<div class="doc-awards">
        <h3>Awards</h3>
        <div class="doc-awards-short">
          <ul class="doc-awards-list">
            ${this._data.awards.map(award => {
              return `<li><ion-icon class="star-icon" name="star-outline"></ion-icon> ${award}</li>`
            }).join('')}
          </ul>
        </div>
      </div>` }

      ${!(this._data.trailerLink) ? '' : `<div class="doc-trailer">
        <h3>Official Trailer</h3>
        ${this._data.trailerLink}
      </div>`}
    </div>
  `
  };

  _generateMarkupInfo() {
    return `${!(this._data.usefulLinks) ? '' : `
      <div class="container">
        <h2>To go further...</h2>
        <div class="doc-links">
          <ul class="doc-links-list">
          ${this._data.usefulLinks.map(link => {
            return `<li>
              <a href=${link[1]}>${link[0]}</a>
            </li>`
          })}
          </ul>
        </div>`}`
  }
}

export default new DocView();
