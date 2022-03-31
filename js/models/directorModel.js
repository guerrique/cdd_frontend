// state and business logic that manipulates the state
// http library (responsible for making and receiving AJAX requests)

import { API_URL } from '../config.js';
import { getJSON } from '../helpers.js';
import { sendJSON } from '../helpers.js';
import { fieldsInArray } from '../helpers.js';

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

    console.log(data.data.attributes.useful_links)
    const usefulLinksLoad = data.data.attributes.useful_links;
    const formattedLinks = [];
    while (usefulLinksLoad.length > 0) {
      formattedLinks.push(usefulLinksLoad.splice(0,2));
    };

    const director = data.data.attributes;
    state.director = {
      id: id,
      name: director.name,
      photo: director.photo,
      bioLong: director.bio_long,
      bioShort: director.bio_short,
      bioSource: director.bio_source,
      usefulLinks: formattedLinks,
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
    const usefulLinksForm = fieldsInArray(newDirector, 'useful');

    const director = {
      name: newDirector.name,
      useful_links: usefulLinksForm,
      bio_short: newDirector.bioShort,
      bio_long: newDirector.bioLong,
      bio_source: newDirector.bioSource,
      birth_year: newDirector.birthYear,
      death_year: newDirector.deathYear,
      photo: newDirector.photo
    };
    const data = await sendJSON(`${API_URL}/directors`, director);
    // console.log(data);
    state.director = {
      id: data.data.id,
      name: data.data.attributes.name,
      photo: data.data.attributes.photo,
      bioLong: data.data.attributes.bio_long,
      bioShort: data.data.attributes.bio_short,
      bioSource: data.data.attributes.bio_source,
      usefulLinks: data.data.attributes.useful_links,
      birthYear: data.data.attributes.birth_year,
      deathYear: data.data.attributes.death_year,
      docs: data.data.relationships.docs
    };

    const usefulLinksRes = state.director.usefulLinks;
    const usefulLinks = [];
    while (usefulLinksRes.length > 0) {
      usefulLinks.push(usefulLinksRes.splice(0,2));
    };
    state.director.usefulLinks = usefulLinks;
  } catch(err) {
    console.log(err);
    throw(err);
  }
}





