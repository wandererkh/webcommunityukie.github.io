/*'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["index.html","style/style.css"]);

toolbox.router.get('/images/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});*/

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('\'1z 1F\';4 O=(7 1D()).1E();4 Y=[[\'/\',O+\'1B\']];4 C=O+\'-1l-J-1A-1l-J-\'+(g.1n?g.1n.1P:\'\');4 B=[/^1N/];4 1p=2(n,F){4 5=7 q(n);9(5.x.1c(-1)===\'/\'){5.x+=F}3 5.s()};4 X=2(h){9(!h.1K){3 o.v(h)}4 1i=\'z\'1H h?o.v(h.z):h.1I();3 1i.6(2(z){3 7 1J(z,{1f:h.1f,A:h.A,1x:h.1x})})};4 16=2(n,1w,1v,G){4 5=7 q(n);9(!G||!(5.x.P(G))){5.y+=(5.y?\'&\':\'\')+1u(1w)+\'=\'+1u(1v)}3 5.s()};4 1j=2(N,1r){9(N.1G===0){3!0}4 19=(7 q(1r)).x;3 N.1M(2(Z){3 19.P(Z)})};4 1h=2(n,B){4 5=7 q(n);5.y=5.y.1c(1).17(\'&\').m(2(r){3 r.17(\'=\')}).1L(2(r){3 B.1O(2(12){3!12.1C(r[0])})}).m(2(r){3 r.1e(\'=\')}).1e(\'&\');3 5.s()};4 15=\'1y-J\';4 j=7 1W(Y.m(2(D){4 1b=D[0];4 18=D[1];4 E=7 q(1b,g.1k);4 l=16(E,15,18,/\\.\\w{8}\\./);3[E.s(),l]}));2 10(d){3 d.1g().6(2(1d){3 1d.m(2(i){3 i.5})}).6(2(14){3 7 V(14)})}g.I(\'2g\',2(c){c.13(K.M(C).6(2(d){3 10(d).6(2(11){3 o.1q(2h.2i(j.U()).m(2(l){9(!11.t(l)){4 i=7 1a(l,{2f:\'2e-2b\'});3 S(i).6(2(f){9(!f.2k){1m 7 L(\'1a 2d \'+l+\' 2j a \'+\'f 2p A \'+f.A)}3 X(f).6(2(W){3 d.2o(l,W)})})}}))})}).6(2(){3 g.1Q()}))});g.I(\'2n\',2(c){4 1t=7 V(j.U());c.13(K.M(C).6(2(d){3 d.1g().6(2(1s){3 o.1q(1s.m(2(T){9(!1t.t(T.5)){3 d.2l(T)}}))})}).6(2(){3 g.2m.2c()}))});2 29(u){3 7 o((v,1o)=>{u=u.m(p=>o.v(p));u.2a(p=>p.6(v));u.1X((a,b)=>a.H(()=>b)).H(()=>1o(L(\'1Y 1V\')))})};g.I(\'S\',2(c){9(c.i.1U===\'1R\'){4 k;4 5=1h(c.i.5,B);k=j.t(5);4 R=\'F.1S\';9(!k&&R){5=1p(5,R);k=j.t(5)}4 Q=\'\';9(!k&&Q&&(c.i.1T===\'1Z\')&&1j([],c.i.5)){5=7 q(Q,g.1k).s();k=j.t(5)}9(k){c.20(K.M(C).6(2(d){3 d.P(j.26(5)).6(2(f){9(f){3 f}1m L(\'27 28 f 25 24 21 22 23.\')})}).H(2(e){3 S(c.i)}))}}})',62,150,'||function|return|var|url|then|new||if|||event|cache||response|self|originalResponse|request|urlsToCacheKeys|shouldRespond|cacheKey|map|originalUrl|Promise||URL|kv|toString|has|promises|resolve||pathname|search|body|status|ignoreUrlParametersMatching|cacheName|item|absoluteUrl|index|dontCacheBustUrlsMatching|catch|addEventListener|precache|caches|Error|open|whitelist|milliseconds|match|navigateFallback|directoryIndex|fetch|existingRequest|values|Set|responseToCache|cleanResponse|precacheConfig|whitelistedPathRegex|setOfCachedUrls|cachedUrls|ignoredRegex|waitUntil|urls|hashParamName|createCacheKey|split|hash|path|Request|relativeUrl|slice|requests|join|headers|keys|stripIgnoredUrlParameters|bodyPromise|isPathWhitelisted|location|sw|throw|registration|reject|addDirectoryIndex|all|absoluteUrlString|existingRequests|setOfExpectedUrls|encodeURIComponent|paramValue|paramName|statusText|_sw|use|v5|4353454|test|Date|getTime|strict|length|in|blob|Response|redirected|filter|some|utm_|every|scope|skipWaiting|GET|html|mode|method|failed|Map|reduce|All|navigate|respondWith|expected|is|missing|was|that|get|The|cached|promiseAny|forEach|origin|claim|for|same|credentials|install|Array|from|returned|ok|delete|clients|activate|put|with'.split('|'),0,{}))
