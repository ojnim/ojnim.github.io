export function injectHeader() {
  document.body.insertAdjacentHTML('afterbegin', `
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/experience.html">Experience</a>
        <a href="/blog.html">Blog</a>
      </nav>
    </header>
  `);
}

export function injectFooter() {
  document.body.insertAdjacentHTML('beforeend', `
    <footer>
      <p>© Copyright Seungmin Cho | Last updated: June 2025</p>
    </footer>
  `);
}
