import searchView from '../views/searchView.js';

const controlSearch = async function() {
  try {
    const query = searchView.getQuery();
    if(!query) return;
    console.log(query);

  } catch(err) {
    console.log(err);
  }
}

const init = function() {
  searchView.addHandlerSearch(controlSearch);
}
init();
