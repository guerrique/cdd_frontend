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
      useful_links: [newDirector.usefulLinksText1, newDirector.usefulLinksLink1,newDirector.usefulLinksText2, newDirector.usefulLinksLink2,newDirector.usefulLinksText3, newDirector.usefulLinksLink3],
      bio_short: newDirector.bioShort,
      bio_long: newDirector.bioLong,
      birth_year: newDirector.birthYear
    };
    const data = await sendJSON(`${API_URL}/directors`, director);
    console.log(data);
    state.director = {
      id: data.data.attributes.id,
      name: data.data.attributes.name,
      photo: data.data.attributes.photo,
      bioLong: data.data.attributes.bio_long,
      bioShort: data.data.attributes.bio_short,
      bioSource: data.data.attributes.bio_source,
      usefulLinks: data.data.attributes.useful_links
      // ,
      // docs: docs
    };
    console.log(state.director);
  } catch(err) {
    console.log(err);
  }
}





