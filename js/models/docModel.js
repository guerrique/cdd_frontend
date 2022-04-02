// state and business logic that manipulates the state
// http library (responsible for making and receiving AJAX requests)

import { API_URL } from '../config.js';
import { getJSON } from '../helpers.js';
import { sendJSON } from '../helpers.js';
import { deleteJSON } from '../helpers.js';
import { fieldsInArray } from '../helpers.js';

export const state = {
  doc: {}
};

export const loadDoc = async function(id) {
  try {

    const data = await getJSON(`${API_URL}docs/${id}`);
    // console.log(data);

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


    let directors = [];
    if(data.included) {
      directors = data.included.map(dir => {
        dir = flattenObject(dir);
        delete dir.type;
        return dir;
      });
    }

    const usefulLinksLoad = data.data.attributes.useful_links;
    const formattedLinks = [];
    while (usefulLinksLoad.length > 0) {
      formattedLinks.push(usefulLinksLoad.splice(0,2));
    };

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
      usefulLinks: formattedLinks,
      awards: doc.awards,
      directors: directors
    };
    // console.log(state.doc);
  } catch (err) {
    console.error(`Error from the doc model: ${err}`);
    throw(err);
  }
};

export const uploadDoc = async function(newDoc) {
  try {
    const usefulLinks = fieldsInArray(newDoc, 'useful');
    const awards = fieldsInArray(newDoc, 'award');
    const directors = [];
    newDoc.directors.split(',').forEach(id => directors.push(id));

    [newDoc.directors];
    const doc = {
      name: newDoc.name,
      chinese_name: newDoc.chineseName,
      year: newDoc.year,
      duration: newDoc.duration,
      poster: newDoc.poster,
      doc_text_short: newDoc.docTextShort,
      doc_text_long: newDoc.docTextLong,
      doc_text_source: newDoc.docTextSource,
      director_ids: directors,
      awards: awards,
      useful_links: usefulLinks,
      trailer_link: newDoc.trailerLink
    };
    // console.log('doc before upload', doc);

    const data = await sendJSON(`${API_URL}/docs`, doc);
    // console.log('reply from API', data);
    state.doc = {
      id: data.data.id,
      name: data.data.attributes.name,
      chineseName: data.data.attributes.chinese_name,
      year: data.data.attributes.year,
      duration: data.data.attributes.duration,
      poster: data.data.attributes.poster,
      docTextShort: data.data.attributes.doc_text_short,
      docTextLong: data.data.attributes.doc_text_long,
      docTextSource: data.data.attributes.doc_text_source,
      awards: data.data.attributes.awards,
      usefulLinks: data.data.attributes.useful_links,
      directors: data.data.relationships.directors
    }

    const usefulLinksRes = state.doc.usefulLinks;
    state.doc.usefulLinks = [];
    while (usefulLinksRes.length > 0) {
      state.doc.usefulLinks.push(usefulLinksRes.splice(0,2));
    };

    // console.log(state.doc);

  } catch (err) {
    throw err;
  }
}

export const deleteDoc = async function(id) {
  try {
    const res = await deleteJSON(`${API_URL}docs/${id}`);
    console.log(res);
  } catch(err) {
    throw err;
  }
}





