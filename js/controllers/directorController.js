// eventlisteners, navigation, UI events

import * as model from '../models/directorModel.js';
import directorView from '../views/directorView.js';

const controlDirector = async function() {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return

    // LOADING DIRECTOR
    await model.loadDirector(id);

    // RENDERING DIRECTOR
    console.log(model.state.director);
    directorView.render(model.state.director);

  } catch (err) {
    console.log(err);
  }
};

const init = function() {
  directorView.addHandlerRender(controlDirector);
};
init();


