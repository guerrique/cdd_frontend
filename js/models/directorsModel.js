import { API_URL } from '../config.js';
import { getJSON } from '../helpers.js';

export const state = {
  directors: [],
  sortedDirectors: []
}

export const loadDirectors = async function() {
  try {
    const data = await getJSON(`${API_URL}/directors`);

    const formatResponse = function(response) {
      const formatted = [];
      response.forEach(obj => {
        const res = {};
        res.id = obj.id;
        // takes out the chinese characters
        res.name = obj.attributes.name.replace(/[^a-z\d\s]+/gi,'').trim();
        formatted.push(res);
      });
      formatted.sort((a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
      return formatted;
    }

    const sortDirectors = function(directors) {
      let sortedDirectors = directors.reduce((previous, current) => {
        let k = current['name'][0].toLocaleUpperCase();
        if(previous[k]) previous[k].push(current);
        else previous[k] = [current];
          return previous;
      }, {});
      return sortedDirectors;
    }

    this.state.directors = formatResponse(data.data);
    this.state.sortedDirectors = sortDirectors(this.state.directors);

  } catch(err) {
    console.log(err);
  }
}
