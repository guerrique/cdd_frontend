import { API_URL } from '../config.js';
import { getJSON, sortArrObj} from '../helpers.js';


export const state = {
  docs: [],
  search: {
    query: '',
    results: []
  }
};

export const loadDocs = async function(query) {
  try {
    const formatResponse = function(response) {
      const formatted = [];
      response.forEach(obj => {
        const formattedObj = {};
        formattedObj.id = obj.id;
        formattedObj.name = obj.attributes.name;
        formattedObj.year = obj.attributes.year;
        formatted.push(formattedObj);
      });
      return sortArrObj(formatted);
    }
    if(!query) {

    const data = await getJSON(`${API_URL}/docs`);


    this.state.docs = formatResponse(data.data);
  } else {
    this.state.search.query = query;

    const data = await getJSON(`${API_URL}/docs?search=${query}`);
    // console.log(data);
    this.state.search.results = formatResponse(data.data);
    // this.state.docs = formatResponse(data.data);
    console.log(this.state.search.results);
  }

  } catch(err) {
    console.log(`Error from the docSS model:${err}`);
    throw(err);
  }
};
