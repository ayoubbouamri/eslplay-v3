// Placeholder for custom JavaScript
async function inject(sel, url){const el=document.querySelector(sel); if(!el) return;
  const res = await fetch(url); el.innerHTML = await res.text();}
inject("#site-header","partials/header.html");
inject("#site-footer","partials/footer.html");
