

const sectionAuthorContainer = document.querySelector('.section-author');


const showDoc = async function() {
  try {
    // fetch method returns a response object.
    // we then call the json method on that response, which returns another promise
    // which we then have to await again, and in the end we get the data stored in that variable
    const res = await
      fetch('http://localhost:3000/directors/55');

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
        usefulLinks: data.useful_links
      };

      const sectionAuthorMarkup = `<div class="section-author">
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
        </div>`;

        sectionAuthorContainer.insertAdjacentHTML('afterbegin', sectionAuthorMarkup);
console.log(data);
console.log('----------------------------------');
console.log(data.docs);

console.log(director);
  } catch (err) {
    alert(err);
  }
}

// window.onload(showDoc());
window.addEventListener('load', showDoc);

