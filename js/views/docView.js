class DocView {
  #parentElement = document.querySelector('.section-doc');
  #moreInfoElement = document.querySelector('.doc-more-infos');
  #data;

  render(data) {
    this.#data = data;
    const markup = this.#generateMarkup();
    const markupInfo = this.#generateMarkupInfo();
    this.#clear();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
    this.#moreInfoElement.insertAdjacentHTML('afterbegin', markupInfo);

  }

  #clear () {
    this.#parentElement.innerHTML = '';
  }

  #generateMarkup() {
    return `
      <h2 class="doc-title">
        ${this.#data.name}
      </h2>
      <h3 class="doc-author">
       by
        ${this.#data.directors.map(director => {
          return `<a href="#">${director.name} </a>`
        })}

      </h3>

      <div class="doc-infos">
        <div class="doc-year flex-center"><ion-icon class="doc-icon" name="calendar-number-outline"></ion-icon>${this.#data.year}</div>
        <div class="doc-duration flex-center"><ion-icon class="doc-icon" name="time-outline"></ion-icon>${this.#data.duration}</div>
        <div class="doc-chinese-name">
        ${this.#data.chineseName}</div>
      </div>

      <img class="doc-poster" src="img/last-train-home-poster.jpg" alt="">

      <div class="doc-summary">
        <div class="doc-summary-short">
          <p>
            ${this.#data.docTextShort}
            <ion-icon class="plus-icon" name="add-circle-outline"></ion-icon>
          </p>
        </div>
        <div class="doc-summary-long">
          <p>
            ${this.#data.docTextLong}
          </p>
        </div>
      </div>
      ${this.#data.awards.length === 0 ? '' : `<div class="doc-awards">
        <h3>Awards</h3>
        <div class="doc-awards-short">
          <ul class="doc-awards-list">
            ${this.#data.awards.map(award => {
              return `<li><ion-icon class="star-icon" name="star-outline"></ion-icon> ${award}</li>`
            }).join('')}
          </ul>
        </div>
      </div>` }

      ${!(this.#data.trailerLink) ? '' : `<div class="doc-trailer">
        <h3>Official Trailer</h3>
        ${this.#data.trailerLink}
      </div>`}
    </div>
  `
  };

  #generateMarkupInfo() {
    return `${!(this.#data.usefulLinks) ? '' : `
      <div class="container">
        <h2>To go further...</h2>
        <div class="doc-links">
          <ul class="doc-links-list">
          ${this.#data.usefulLinks.map(link => {
            return `<li>
              <a href=${link[1]}>${link[0]}</a>
            </li>`
          })}
          </ul>
        </div>`}`
  }
}

export default new DocView();
