class AddDirectorView {
  _parentElement = document.querySelector('.upload');

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function(e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
      // console.log(data);
    });
  }

};

export default new AddDirectorView();
