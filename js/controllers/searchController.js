import searchView from '../views/searchView.js';
import * as model from '../models/searchModel.js';

const controlSearch = async function() {
  try {

    // Get search query
    const query = searchView.getQuery();
    if(!query) return;
    // console.log(query);

    // Load search results
    await model.loadSearchResults(query);

    // Render results

  } catch(err) {
    console.log('error from the controller: ',err);
  }
}

const init = function() {
  searchView.addHandlerSearch(controlSearch);
}
init();
