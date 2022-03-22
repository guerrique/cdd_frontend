import { API_URL } from '../config.js';
import { getJSON } from '../helpers.js';

export const state = {
  directors: []
}

export const loadDirectors = async function() {
  try {
    const data = await getJSON(`${API_URL}/directors`);

    const formatResponse = function(response) {
      const formatted = [];
      response.forEach(obj => {
        const res = {};
        res.id = obj.id;
        res.name = obj.attributes.name.replace(/[^a-z\d\s]+/gi,'').trim();

        // to get only chinese
        // res.name = obj.attributes.name.replace(/[^\u4e00-\u9fa5]/g, '');
        formatted.push(res);
      });
      return formatted;
    }

    this.state.directors = formatResponse(data.data).sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

  } catch(err) {
    console.log(err);
  }
}
