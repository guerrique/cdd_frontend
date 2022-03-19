// state and business logic that manipulates the state
// http library (responsible for making and receiving AJAX requests)

export const state = {
  director: {}
};

export const loadDirector = async function(id) {
  try {

    const res = await fetch(`http://localhost:3000/directors/${id}`);
    const data = await res.json();

    if(!res.ok) throw new Error(`${data.message} (${res.status})`);

    const director = data.data.attributes;

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

    const docs = data.included.map(doc => {
      doc = flattenObject(doc);
      delete doc.type;
      return doc;
    });

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
    // console.log(state.director);
  } catch (err) {
    alert(err);
  }
};




