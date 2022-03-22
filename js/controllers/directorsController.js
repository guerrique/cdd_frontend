import * as model from '../models/directorsModel.js';
import directorsView from '../views/directorsView.js';

const controlDirectors = async function() {
  try {
    await model.loadDirectors();
    // console.log(model.state.directors)
    directorsView.render(model.state.directors);

  } catch(err) {
    console.log(err);
  }
}

const init = function() {
  directorsView.addHandlerRender(controlDirectors);
};
init();
