// custom-elements.js
class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
              <div class="header">
    <div class="header-top">
      <a href="">
        <img class="logo" src="img/CDD-logo.png" alt="China Documentaries Database logo">
      </a>
      <button class="btn-mobile-nav">
        <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
      <nav class="main-nav">
        <ul class="main-nav-list">
          <li>
            <a href="#" class="main-nav-link">HOME</a>
          </li>
          <li>
            <a href="#" class="main-nav-link">+ Search</a>
          </li>
          <li>
            <a href="authors.html" class="main-nav-link">+ Find by author</a>
          </li>
          <li>
            <a href="movies.html" class="main-nav-link">+ Find by title</a>
          </li>
          <li>
            <a href="#" class="main-nav-link">+ Get a random one</a>
          </li>
          <li>
            <a href="#" class="main-nav-link">+ About</a>
          </li>
          <li>
            <a href="#" class="main-nav-link">&nbsp;</a>
          </li>
          <li>
            <a href="#" class="main-nav-link admin-link">+ Add a doc</a>
          </li>
          <li>
            <a href="#" class="main-nav-link admin-link">+ Add an author</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
        `
    }
}

class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer>
    <div class="container flex-footer">
      <div>Copyright &copy; <span class="year">2027</span> by China Documentaries Database</div>
    </div>
  </footer>`
  }
}

window.customElements.define('app-header', AppHeader);
window.customElements.define('app-footer', AppFooter);
