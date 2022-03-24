import { API_URL } from '../config.js';
import { getJSON, sortArrObj} from '../helpers.js';


export const state = {
  docs: []
};

export const loadDocs = async function() {
  try {
    const data = await getJSON(`${API_URL}/docs`);

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

    this.state.docs = formatResponse(data.data);

  } catch(err) {
    console.log(`Error from the docSS model:${err}`);
    throw(err);
  }
};
