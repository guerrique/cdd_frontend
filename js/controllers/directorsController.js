import * as model from '../models/directorsModel.js';
import directorsView from '../views/directorsView.js';

const controlDirectors = async function() {
  try {

    // LOADING DIRECTORS
    await model.loadDirectors();

    // RENDERING DIRECTORS
    directorsView.render(model.state.directors);

  } catch(err) {
    console.log(err);
  }
}

const controlSearch = async function() {
  try {
    // Get query from view
    const query = directorsView.getQuery();
    if (!query) return;
    // Get search results from model
    await model.loadDirectors(query);

    // Load search results
    console.log(model.state.search.results);
    directorsView.render(model.state.search.results);
  } catch(err) {
    console.log(err);
  }
}

const init = function() {
  directorsView.addHandlerRender(controlDirectors);
  directorsView.addHandlerSearch(controlSearch);
};
init();
