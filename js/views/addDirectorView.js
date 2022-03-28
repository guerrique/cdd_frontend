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

  addHandlerRedirect(id) {
    window.location.href = `http://127.0.0.1:8887/author.html#${id}`;
  }
};

export default new AddDirectorView();
