import { API_URL } from '../config.js';
import { getJSON, sortArrObj } from '../helpers.js';

export const state = {
  directors: []
}

export const loadDirectors = async function() {
  try {
    const data = await getJSON(`${API_URL}directors`);

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

    this.state.directors = formatResponse(data.data);

  } catch(err) {
    console.log(`Error from the directorSS model:${err}`);
    throw(err);
  }
}
