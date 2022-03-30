// eventlisteners, navigation, UI events

import * as model from '../models/directorModel.js';
import directorView from '../views/directorView.js';
import addDirectorView from '../views/addDirectorView.js';

const controlDirector = async function() {
  try {
    const id = window.location.hash.slice(1);
    // console.log(id);

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

const controlAddDirector = async function(newDirector) {
  try {
    await model.uploadDirector(newDirector);

    addDirectorView.addHandlerRedirect(model.state.director.id);


    // no need?
    // window.location.href = `http://127.0.0.1:8887/author.html#${model.state.director.id}`;
    // directorView.render(model.state.director);
  } catch(err) {
    console.log(err)
  }
}

const init = function() {
  directorView.addHandlerRender(controlDirector);
  // addDirectorView.addHandlerRender(controlAddDirector);
  addDirectorView.addHandlerUpload(controlAddDirector);
};
init();


