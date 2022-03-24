import * as model from '../models/docsModel.js';
import docsView from '../views/docsView.js';

const docsController = async function() {
  try {

    // LOADING DOCS
    await model.loadDocs();

  } catch(err) {
    console.log(err);
  }
}

const init = function() {
  window.addEventListener('load', docsController);
}
init();
