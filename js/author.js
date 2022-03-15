

const sectionAuthorContainer = document.querySelector('.section-author');
const sectionAuthorFilmo = document.querySelector('.section-author-filmo');

const showDir = async function() {
  try {
    // fetch method returns a response object.
    // we then call the json method on that response, which returns another promise
    // which we then have to await again, and in the end we get the data stored in that variable
    const res = await
      fetch('http://localhost:3000/directors/59');

      const data = await res.json();

      let director = data;
      director = {
        id: data.id,
        name: data.name,
        birthYear: data.birth_year,
        deathYear: data.death_year,
        photo: data.photo,
        bioShort: data.bio_short,
        bioLong: data.bio_long,
        bioSource: data.bio_source,
        usefulLinks: data.useful_links,
        docs: data.docs
      };

      const sectionAuthorMarkup = `
      <div class="section-author">
        <div class="section-author-photo">
          <img class="author-photo" src="img/authors/hu-jie.jpg" alt="">
        </div>
        <div class="section-author-text">
          <h1>${director.name}</h1>
          <div class="section-author-bio">
            <div class="section-author-bio-short">
              <p>${director.bioShort} <ion-icon class="plus-icon" name="add-circle-outline"></ion-icon>
              </p>
            </div>
            <div class="section-author-bio-long">
              <p>${director.bioLong} <span>Source: Wikipedia</span>
              </p>
            </div>
          </div>
          </div>
        <div class="section-author-filmo">
          <h3 class="section-author-filmo-title">Filmography</h3>
          <div class="section-author-filmo-list">
            <ul>${director.docs.map(doc => {
              return `<li><a href="documentary.html">${doc.name} (${doc.year})</a></li>`
            }).join('')}


            </ul>
          </div>
        </div>`;

        sectionAuthorContainer.insertAdjacentHTML('afterbegin', sectionAuthorMarkup);
// console.log(data);
// console.log('----------------------------------');
// console.log(data.docs);

// console.log(director);
// console.log(director.docs);
  } catch (err) {
    alert(err);
  }
}

// const showDirDocs = async function() {
//   try {

//   } catch (err) {
//     alert(err);
//     const res = await fetch('http://localhost:3000/directors/58')
//   }
// }

// window.onload(showDir());
window.addEventListener('load', showDir);

