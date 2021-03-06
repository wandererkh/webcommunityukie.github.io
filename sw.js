'use strict';

/*importScripts('sw-toolbox.js');

toolbox.precache(["index.html","style/style.css"]);

toolbox.router.get('/images/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});*/

//var curTime=(new Date()).getTime();var precacheConfig=[['/',curTime+'7200000']];var cacheName=curTime+'-sw-precache-v5-'+(self.registration?self.registration.scope:'');var ignoreUrlParametersMatching=[/^utm_/];var addDirectoryIndex=function(originalUrl,index){var url=new URL(originalUrl);if(url.pathname.slice(-1)==='/'){url.pathname+=index}return url.toString()};var cleanResponse=function(originalResponse){if(!originalResponse.redirected){return Promise.resolve(originalResponse)}var bodyPromise='body'in originalResponse?Promise.resolve(originalResponse.body):originalResponse.blob();return bodyPromise.then(function(body){return new Response(body,{headers:originalResponse.headers,status:originalResponse.status,statusText:originalResponse.statusText})})};var createCacheKey=function(originalUrl,paramName,paramValue,dontCacheBustUrlsMatching){var url=new URL(originalUrl);if(!dontCacheBustUrlsMatching||!(url.pathname.match(dontCacheBustUrlsMatching))){url.search+=(url.search?'&':'')+encodeURIComponent(paramName)+'='+encodeURIComponent(paramValue)}return url.toString()};var isPathWhitelisted=function(whitelist,absoluteUrlString){if(whitelist.length===0){return!0}var path=(new URL(absoluteUrlString)).pathname;return whitelist.some(function(whitelistedPathRegex){return path.match(whitelistedPathRegex)})};var stripIgnoredUrlParameters=function(originalUrl,ignoreUrlParametersMatching){var url=new URL(originalUrl);url.search=url.search.slice(1).split('&').map(function(kv){return kv.split('=')}).filter(function(kv){return ignoreUrlParametersMatching.every(function(ignoredRegex){return!ignoredRegex.test(kv[0])})}).map(function(kv){return kv.join('=')}).join('&');return url.toString()};var hashParamName='_sw-precache';var urlsToCacheKeys=new Map(precacheConfig.map(function(item){var relativeUrl=item[0];var hash=item[1];var absoluteUrl=new URL(relativeUrl,self.location);var cacheKey=createCacheKey(absoluteUrl,hashParamName,hash,/\.\w{8}\./);return[absoluteUrl.toString(),cacheKey]}));function setOfCachedUrls(cache){return cache.keys().then(function(requests){return requests.map(function(request){return request.url})}).then(function(urls){return new Set(urls)})}self.addEventListener('install',function(event){event.waitUntil(caches.open(cacheName).then(function(cache){return setOfCachedUrls(cache).then(function(cachedUrls){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(cacheKey){if(!cachedUrls.has(cacheKey)){var request=new Request(cacheKey,{credentials:'same-origin'});return fetch(request).then(function(response){if(!response.ok){throw new Error('Request for '+cacheKey+' returned a '+'response with status '+response.status)}return cleanResponse(response).then(function(responseToCache){return cache.put(cacheKey,responseToCache)})})}}))})}).then(function(){return self.skipWaiting()}))});self.addEventListener('activate',function(event){var setOfExpectedUrls=new Set(urlsToCacheKeys.values());event.waitUntil(caches.open(cacheName).then(function(cache){return cache.keys().then(function(existingRequests){return Promise.all(existingRequests.map(function(existingRequest){if(!setOfExpectedUrls.has(existingRequest.url)){return cache.delete(existingRequest)}}))})}).then(function(){return self.clients.claim()}))});function promiseAny(promises){return new Promise((resolve,reject)=>{promises=promises.map(p=>Promise.resolve(p));promises.forEach(p=>p.then(resolve));promises.reduce((a,b)=>a.catch(()=>b)).catch(()=>reject(Error('All failed')))})};self.addEventListener('fetch',function(event){if(event.request.method==='GET'){var shouldRespond;var url=stripIgnoredUrlParameters(event.request.url,ignoreUrlParametersMatching);shouldRespond=urlsToCacheKeys.has(url);var directoryIndex='index.html';if(!shouldRespond&&directoryIndex){url=addDirectoryIndex(url,directoryIndex);shouldRespond=urlsToCacheKeys.has(url)}var navigateFallback='';if(!shouldRespond&&navigateFallback&&(event.request.mode==='navigate')&&isPathWhitelisted([],event.request.url)){url=new URL(navigateFallback,self.location).toString();shouldRespond=urlsToCacheKeys.has(url)}if(shouldRespond){event.respondWith(caches.open(cacheName).then(function(cache){return cache.match(urlsToCacheKeys.get(url)).then(function(response){if(response){return response}throw Error('The cached response that was expected is missing.')})}).catch(function(e){return fetch(event.request)}))}}})


//This is the "Offline copy of pages" wervice worker

//Install stage sets up the index page (home page) in the cahche and opens a new cache
self.addEventListener('install', function(event) {
  var indexPage = new Request('index.html');
  event.waitUntil(
    fetch(indexPage).then(function(response) {
      return caches.open('pwabuilder-offline').then(function(cache) {
        console.log('[PWA Builder] Cached index page during Install'+ response.url);
        return cache.put(indexPage, response);
      });
  }));
});

//If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener('fetch', function(event) {
  var updateCache = function(request){
    return caches.open('pwabuilder-offline').then(function (cache) {
      return fetch(request).then(function (response) {
        console.log('[PWA Builder] add page to offline'+response.url)
        return cache.put(request, response);
      });
    });
  };

  event.waitUntil(updateCache(event.request));

  event.respondWith(
    fetch(event.request).catch(function(error) {
      console.log( '[PWA Builder] Network request Failed. Serving content from cache: ' + error );

      //Check to see if you have it in the cache
      //Return response
      //If not in the cache, then return error page
      return caches.open('pwabuilder-offline').then(function (cache) {
        return cache.match(event.request).then(function (matching) {
          var report =  !matching || matching.status == 404?Promise.reject('no-match'): matching;
          return report
        });
      });
    })
  );
})
