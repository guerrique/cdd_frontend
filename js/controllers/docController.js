// eventlisteners, navigation, UI events

import * as model from '../models/docModel.js';
import docView from '../views/docView.js';
import addDocView from '../views/addDocView.js';

const controlDoc = async function() {
  try {
    const id = window.location.hash.slice(1);
    // console.log(id);

    if(!id) return

    // LOADING DOCUMENTARY
    await model.loadDoc(id);

    // RENDERING DOCUMENTARY
    docView.render(model.state.doc);
    // console.log(model.state.doc);

  } catch (err) {
    console.log(err);
  }
};

const controlAddDoc = async function(newDoc) {
  try {
    // console.log('data from form', newDoc);
    await model.uploadDoc(newDoc);
    addDocView.addHandlerRedirect(model.state.doc.id);
  } catch(err) {
    console.log(err);
  }
}

const controlDeleteDoc = async function(docId) {
  try {
    const id = window.location.hash.slice(1);
    await model.deleteDoc(id);
    docView.addHandlerRedirect();
  } catch(err) {
    console.log(err);
  }
}

const init = function() {
  docView.addHandlerRender(controlDoc);
  docView.addHandlerDelete(controlDeleteDoc);
  addDocView.addHandlerRender(controlAddDoc);
};
init();

// ---------------------------------------------------------------------------------
// const docSumEl = document.querySelector('.section-doc');
// // console.log(docSumEl);
// docSumEl.addEventListener('click', function(e) {
//     e.target.closest('.doc-summary').classList.toggle('active');

// console.log(e);
// });

// /const authBioEl = document.querySelector('.section-author');
// authBioEl.addEventListener('click', function(e) {

//   e.target.closest('.section-author-bio').classList.toggle('active');

//   console.log(e.target.closest('.section-author-bio').classList);
//   console.log(e);

// });

