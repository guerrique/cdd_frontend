// eventlisteners, navigation, UI events

import * as model from '../models/directorModel.js';
import directorView from '../views/directorView.js';

const controlDirector = async function() {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return

    // LOADING DIRECTOR
    await model.loadDirector(id);

    // RENDERING DIRECTOR
    directorView.render(model.state.director);



  } catch (err) {
    alert (err);
  }
};

['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlDirector));



