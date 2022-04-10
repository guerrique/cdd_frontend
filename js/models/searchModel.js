import { getJSON } from '../helpers.js';
import { API_URL } from '../config.js';

export const state = {
  search: {
    query: '',
    results: []
  }
}

export const loadSearchResults = async function(query) {
  try {
    state.search.query = query;
    console.log(query);
    const data = await getJSON(`${API_URL}search_entries/index?query=${query}&commit=Search`);
    console.log(data);
  } catch(err) {
    throw err;
    console.log('Error from the model: ', err);
  }
}


// http://127.0.0.1:3000/search_entries/index?query=Howard&commit=Search
