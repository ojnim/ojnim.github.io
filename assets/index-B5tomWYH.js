(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function s(){document.body.insertAdjacentHTML("afterbegin",`
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/blog.html">Blog</a>
        <a href="/projects.html">Projects</a>
        <a href="/news.html">News</a>
      </nav>
    </header>
  `)}function c(){document.body.insertAdjacentHTML("beforeend",`
    <footer>
      <p>© Copyright Seungmin Cho | Last updated: June 2025</p>
    </footer>
  `)}s();c();
//# sourceMappingURL=index-B5tomWYH.js.map
