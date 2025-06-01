export function injectHeader() {
  document.body.insertAdjacentHTML('afterbegin', `
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/blog.html">Blog</a>
        <a href="/projects.html">Projects</a>
        <a href="/news.html">News</a>
      </nav>
    </header>
  `);
}

export function injectFooter() {
  document.body.insertAdjacentHTML('beforeend', `
    <footer>
      <p>© 2025 Your Name</p>
    </footer>
  `);
}
