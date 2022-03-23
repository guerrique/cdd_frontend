import * as model from '../models/directorsModel.js';
import directorsView from '../views/directorsView.js';

const controlDirectors = async function() {
  try {
    // get directors from the model
    await model.loadDirectors();

    // render the directors
    directorsView.render(model.state.sortedDirectors);

  } catch(err) {
    console.log(err);
  }
}

const init = function() {
  directorsView.addHandlerRender(controlDirectors);
};
init();
