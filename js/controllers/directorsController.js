import * as model from '../models/directorsModel.js';
import directorsView from '../views/directorsView.js';

const controlDirectors = async function() {
  try {

    // LOADING DIRECTORS
    await model.loadDirectors();

    // RENDERING DIRECTORS
    directorsView.render(model.state.directors);

  } catch(err) {
    console.log(err);
  }
}

const init = function() {
  directorsView.addHandlerRender(controlDirectors);
};
init();
