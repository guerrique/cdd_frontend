
class DirectorView {
  #parentElement = document.querySelector('.section-author');
  #data;

  render(data) {
    this.#data = data;
    const markup = this.#generateMarkup();
    this.#clear();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  #generateMarkup() {
    return `
      <div class="section-author">
        <div class="section-author-photo">
          <img class="author-photo" src="img/authors/hu-jie.jpg" alt="">
        </div>
        <div class="section-author-text">
          <h1>${this.#data.name}</h1>
          <div class="section-author-bio">
            <div class="section-author-bio-short">
              <p>${this.#data.bioShort} <ion-icon class="plus-icon" name="add-circle-outline"></ion-icon>
              </p>
            </div>
            <div class="section-author-bio-long">
              <p>${this.#data.bioLong} <span>Source: Wikipedia</span>
              </p>
            </div>
          </div>
          </div>
        <div class="section-author-filmo">
          <h3 class="section-author-filmo-title">Filmography</h3>
          <div class="section-author-filmo-list">
            <ul>${this.#data.docs.map(doc => {
              return `<li><a href="documentary.html">${doc.name} (${doc.year})</a></li>`
            }).join('')}
            </ul>
          </div>
        </div>`;
  }

  #clear() {
    this.#parentElement.innerHTML = '';
  }
};

export default new DirectorView();
