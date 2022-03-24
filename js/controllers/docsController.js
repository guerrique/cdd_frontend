import * as model from '../models/docsModel.js';
import docsView from '../views/docsView.js';

const docsController = async function() {
  try {

    // LOADING DOCS
    await model.loadDocs();

    // RENDERING DOCS
    docsView.render(model.state.docs);

  } catch(err) {
    console.log(err);
  }
}

const init = function() {
  docsView.addHandlerRender(docsController);
  // window.addEventListener('load', docsController);
}
init();
