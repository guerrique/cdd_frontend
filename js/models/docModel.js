// state and business logic that manipulates the state
// http library (responsible for making and receiving AJAX requests)

import { API_URL } from '../config.js';
import { getJSON } from '../helpers.js';

export const state = {
  doc: {}
};

export const loadDoc = async function(id) {
  try {

    const data = await getJSON(`${API_URL}docs/${id}`);


    // Getting the related Directors infos nicely flattened
    const flattenObject = (obj) => {
      const flattened = {}

      Object.keys(obj).forEach((key) => {
        const value = obj[key];
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
          Object.assign(flattened, flattenObject(value));
        } else {
          flattened[key] = value;
        }
      })
      return flattened;
    };

    const directors = data.included.map(dir => {
      dir = flattenObject(dir);
      delete dir.type;
      return dir;
    });

    const doc = data.data.attributes;
    state.doc = {
      id: id,
      name: doc.name,
      chineseName: doc.chinese_name,
      year: doc.year,
      poster: doc.poster,
      docTextShort: doc.doc_text_short,
      docTextLong: doc.doc_text_long,
      docTextSource: doc.doc_text_source,
      duration: doc.duration,
      trailerLink: doc.trailer_link,
      usefulLinks: doc.useful_links,
      awards: doc.awards,
      directors: directors
    };
    // console.log(state.doc);
  } catch (err) {
    console.error(`Error from the doc model: ${err}`);
    throw(err);
  }
};






