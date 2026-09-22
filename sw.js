/* Meu Semestre — service worker: deixa o app abrir mesmo sem internet */
const CACHE = "meu-semestre-v3";
const ASSETS = [
  "./",
  "./index.html",
  "./firebase-config.js",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-32.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => !k.startsWith(CACHE)).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* internet primeiro (pega sempre a versão nova); sem internet, usa a guardada */
function networkFirst(req, key) {
  return fetch(req)
    .then(r => { if (r.ok) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(key || req, cp)); } return r; })
    .catch(() => caches.match(key || req));
}
/* guardada primeiro (bibliotecas e fontes que não mudam) */
function cacheFirst(req, name) {
  return caches.open(name).then(c => c.match(req).then(m => m || fetch(req).then(r => { c.put(req, r.clone()); return r; })));
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    e.respondWith(req.mode === "navigate" ? networkFirst(req, "./index.html") : networkFirst(req));
    return;
  }
  if (url.hostname === "www.gstatic.com" && url.pathname.startsWith("/firebasejs/")) {
    e.respondWith(cacheFirst(req, CACHE + "-libs"));
    return;
  }
  if (url.hostname.endsWith("fonts.googleapis.com") || url.hostname.endsWith("fonts.gstatic.com")) {
    e.respondWith(cacheFirst(req, CACHE + "-fontes"));
  }
});
