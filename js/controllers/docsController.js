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

const controlSearch = async function() {
  try {
    const query = docsView.getQuery();
    if(!query) return;

    // LOAD SEARCH RESULTS
    await model.loadDocs(query);

    // DISPLAY SEARCH RESULTS
    console.log(model.state.search.results);
    docsView.render(model.state.search.results);

  } catch(err) {
    console.log(err);
  }
}

const init = function() {
  docsView.addHandlerRender(docsController);
  // searchView.addHandlerSearch(controlSearchResults);
  docsView.addHandlerSearch(controlSearch);

  // window.addEventListener('load', docsController);
}
init();
