class DocView {
  #parentElement = document.querySelector('.section-doc');
  #data;

  render(data) {
    this.#data = data;
    const markup = this.#generateMarkup();
    this.#clear();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  #clear () {
    this.#parentElement.innerHTML = '';
  }

  #generateMarkup() {
    return `<div class="section-doc">
      <h2 class="doc-title">
        ${this.#data.name}
      </h2>
      <h3 class="doc-author">
        by <a href="#"></a>
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
      <div class="doc-awards">
        <h3>Awards</h3>
        <div class="doc-awards-short">
          <ul class="doc-awards-list">
            <li><ion-icon class="star-icon" name="star-outline"></ion-icon> Winner - Golden gate award 2010 - San Francisco international film festival - Investigative documentary prize</li>
            <li><ion-icon class="star-icon" name="star-outline"></ion-icon> Winner - Riverrun 2010 - Best documentary</li>
            <li><ion-icon class="star-icon" name="star-outline"></ion-icon> Winner - IDFA 2009 - Best feature length documentary
            <ion-icon class="plus-icon" name="add-circle-outline"></ion-icon>
            </li>

          </ul>

        </div>
        <div class="doc-awards-long">
          <ul class="doc-awards-list">
            <li><ion-icon class="star-icon" name="star-outline"></ion-icon> Winner - RIDM 2009 - Best canadian film</li>
            <li><ion-icon class="star-icon" name="star-outline"></ion-icon> Winner - Whistler film festival 2009 - Best feature documentary</li>
            <li><ion-icon class="star-icon" name="star-outline"></ion-icon> Winner - Victoria film festival 2010 - Best documentary</li>
            <li><ion-icon class="star-icon" name="star-outline"></ion-icon> Official selection - Sundance film festival 2010</li>
            <li><ion-icon class="star-icon" name="star-outline"></ion-icon> Winner - Los Angeles asian pacific film festival 2010 - Grand jury prize for outstanding documentary feature</li>
            <li><ion-icon class="star-icon" name="star-outline"></ion-icon> Winner - Los Angeles asian pacific film festival 2010 - Best cinematography</li>
          </ul>
        </div>
      </div>

      <div class="doc-trailer">
        <h3>Official Trailer</h3>
        ${this.#data.trailerLink}
      </div>
    </div>`
  };
}

export default new DocView();
