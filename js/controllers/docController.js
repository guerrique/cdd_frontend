// eventlisteners, navigation, UI events

import * as model from '../models/docModel.js';
import docView from '../views/docView.js';

const controlDoc = async function() {
  try {
    const id = window.location.hash.slice(1);
    // console.log(id);

    if(!id) return

    // LOADING DOCUMENTARY
    await model.loadDoc(id);

    // RENDERING DOCUMENTARY
    docView.render(model.state.doc);

  } catch (err) {
    console.log(err);
  }
};

['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlDoc));

// ---------------------------------------------------------------------------------
const docSumEl = document.querySelector('.section-doc');
// console.log(docSumEl);
docSumEl.addEventListener('click', function(e) {
    e.target.closest('.doc-summary').classList.toggle('active');

console.log(e);
});

// /const authBioEl = document.querySelector('.section-author');
// authBioEl.addEventListener('click', function(e) {

//   e.target.closest('.section-author-bio').classList.toggle('active');

//   console.log(e.target.closest('.section-author-bio').classList);
//   console.log(e);

// });
