"use strict";var precacheConfig=[["/index.html","50dd645cb2cac29bd2ed5cedfa77e8e6"],["/static/css/main.a19942c7.css","3f018b0edf09ef071abf290bf2b7b7e5"],["/static/js/main.d717f86d.js","7a4a11d005d9b0c7d908678254290b19"],["/static/media/bottom-bar.beb870d7.png","beb870d7a745e75b147e4f46810c2874"],["/static/media/closet-installation-image.84ca83a2.png","84ca83a2d6317653b1b9efe8dbeac7eb"],["/static/media/dots-iphone.3edb4eb4.gif","3edb4eb46daf3c306d01a69c93f0c383"],["/static/media/home.5311f129.png","5311f129e2c33f9e457cd13dda58b8e1"],["/static/media/iphone-notification.9fafecb5.png","9fafecb5f3829183969d4fc8f248f80b"],["/static/media/lockscreen-notification-with-msg.5311f129.png","5311f129e2c33f9e457cd13dda58b8e1"],["/static/media/lockscreen-notification.d2c980d9.png","d2c980d9fff8a1c2cbddbb5e74578bf0"],["/static/media/lockscreen.2790e097.png","2790e09751dbaca34411270a7ed23256"],["/static/media/notification-earlier.dc221ca5.png","dc221ca5fcbc429bde50dd776ca28d00"],["/static/media/notification-now.823c6725.png","823c6725389c02e12de67569aca5deb5"],["/static/media/screen-01.634c12e8.png","634c12e825285047053f147ea3dd7496"],["/static/media/screen-02.8325a992.png","8325a99223d937f0bbb5609e9b4adbc9"],["/static/media/screen-03.9543360f.png","9543360f86722224f13c576643c4e38d"],["/static/media/screen-04.52889846.png","5288984643b89eff1805c53817f016c7"],["/static/media/screen-05.791c85de.png","791c85de813c0a5589354d221443a4fe"],["/static/media/top-bar.92e50bef.png","92e50bef235d3ba1a3f8e9ab6af894e6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});