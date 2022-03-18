// state and business logic that manipulates the state
// http library (responsible for making and receiving AJAX requests)

export const state = {
  doc: {}
};

export const loadDoc = async function(id) {
  try {
    const res = await fetch(`http://localhost:3000/docs/${id}`);
    const data = await res.json();

    if(!res.ok) throw new Error(`${data.message} (${res.status})`);

    const doc = data.data.attributes;
    console.log(doc);

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
      directors: directors
    };
    console.log(state.doc);
  } catch (err) {
    console.log(err);
  }
};






