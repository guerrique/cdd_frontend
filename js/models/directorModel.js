// state and business logic that manipulates the state
// http library (responsible for making and receiving AJAX requests)

import { API_URL } from '../config.js';
import { getJSON } from '../helpers.js';
import { sendJSON } from '../helpers.js';

export const state = {
  director: {}
};

export const loadDirector = async function(id) {
  try {
    const data = await getJSON(`${API_URL}directors/${id}`);
    // console.log(data);


    // Getting the related Docs infos nicely flattened
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

      const docs = [];
    if(data.included) {
      const docs = data.included.map(doc => {
      doc = flattenObject(doc);
      delete doc.type;
      return doc;
    });
    }

    const director = data.data.attributes;
    state.director = {
      id: id,
      name: director.name,
      photo: director.photo,
      bioLong: director.bio_long,
      bioShort: director.bio_short,
      bioSource: director.bio_source,
      usefulLinks: director.useful_links,
      docs: docs
    };
    console.log(state.director);
  } catch (err) {
    console.error(`Error from the director model: ${err}`);
    throw(err);
  }
};

export const uploadDirector = async function(newDirector) {
  try {
    const director = {
      name: newDirector.name,
      useful_links: [newDirector.usefulLinks],
      bio_short: newDirector.bioShort,
      bio_long: newDirector.bioLong,
      birth_year: newDirector.birthYear
    };
    console.log(director);
    // console.log(Object.values(director).forEach(val => console.log(val + typeof(val))))
    console.log(JSON.stringify(director));
    const data = await sendJSON(`${API_URL}/directors`, director);
    console.log(data);
  } catch(err) {
    console.log(err);
  }
}





