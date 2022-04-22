import { API_URL } from '../config.js';
import { getJSON, sortArrObj } from '../helpers.js';

export const state = {
  directors: [],
  search: {
    query: '',
    results: []
  }
}

export const loadDirectors = async function(query) {
  try {
    const formatResponse = function(response) {
      const formatted = [];
      response.forEach(obj => {
        const res = {};
        res.id = obj.id;
        // takes out the chinese characters
        res.name = obj.attributes.name.replace(/[^a-z\d\s]+/gi,'').trim();
        formatted.push(res);
      });
      return sortArrObj(formatted);
    }
      console.log(query === '');
      console.log(!query || query === '');
      if(!query || query === '') {
        const data = await getJSON(`${API_URL}directors`);
        this.state.directors = formatResponse(data.data);
      } else {
        this.state.search.query = query;
        const data = await getJSON(`${API_URL}/directors?search=${query}`);
        this.state.search.results = formatResponse(data.data);
        console.log(this.state.search.results);
      }

  } catch(err) {
    console.log(`Error from the directorSS model:${err}`);
    throw(err);
  }
}
