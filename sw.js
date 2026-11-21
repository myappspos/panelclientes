/* Panel de clientes · service worker mínimo.
   No guarda copias del panel a propósito: así nunca ves datos viejos.
   Solo existe para que el navegador permita instalar la app. */
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(ev){ ev.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(){});
