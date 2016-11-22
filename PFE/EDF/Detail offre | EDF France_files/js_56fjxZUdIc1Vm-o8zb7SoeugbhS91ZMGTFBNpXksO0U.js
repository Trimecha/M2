/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");g.id="mq-test-1";g.style.cssText="position:absolute;top:-100em";d.style.background="none";d.appendChild(g);return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';a.insertBefore(d,b);c=g.offsetWidth==42;a.removeChild(d);return{matches:c,media:h}}})(document);

/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(e){e.respond={};respond.update=function(){};respond.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches;if(respond.mediaQueriesSupported){return}var w=e.document,s=w.documentElement,i=[],k=[],q=[],o={},h=30,f=w.getElementsByTagName("head")[0]||s,g=w.getElementsByTagName("base")[0],b=f.getElementsByTagName("link"),d=[],a=function(){var D=b,y=D.length,B=0,A,z,C,x;for(;B<y;B++){A=D[B],z=A.href,C=A.media,x=A.rel&&A.rel.toLowerCase()==="stylesheet";if(!!z&&x&&!o[z]){if(A.styleSheet&&A.styleSheet.rawCssText){m(A.styleSheet.rawCssText,z,C);o[z]=true}else{if((!/^([a-zA-Z:]*\/\/)/.test(z)&&!g)||z.replace(RegExp.$1,"").split("/")[0]===e.location.host){d.push({href:z,media:C})}}}}u()},u=function(){if(d.length){var x=d.shift();n(x.href,function(y){m(y,x.href,x.media);o[x.href]=true;u()})}},m=function(I,x,z){var G=I.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),J=G&&G.length||0,x=x.substring(0,x.lastIndexOf("/")),y=function(K){return K.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+x+"$2$3")},A=!J&&z,D=0,C,E,F,B,H;if(x.length){x+="/"}if(A){J=1}for(;D<J;D++){C=0;if(A){E=z;k.push(y(I))}else{E=G[D].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1;k.push(RegExp.$2&&y(RegExp.$2))}B=E.split(",");H=B.length;for(;C<H;C++){F=B[C];i.push({media:F.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:k.length-1,hasquery:F.indexOf("(")>-1,minw:F.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:F.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}}j()},l,r,v=function(){var z,A=w.createElement("div"),x=w.body,y=false;A.style.cssText="position:absolute;font-size:1em;width:1em";if(!x){x=y=w.createElement("body");x.style.background="none"}x.appendChild(A);s.insertBefore(x,s.firstChild);z=A.offsetWidth;if(y){s.removeChild(x)}else{x.removeChild(A)}z=p=parseFloat(z);return z},p,j=function(I){var x="clientWidth",B=s[x],H=w.compatMode==="CSS1Compat"&&B||w.body[x]||B,D={},G=b[b.length-1],z=(new Date()).getTime();if(I&&l&&z-l<h){clearTimeout(r);r=setTimeout(j,h);return}else{l=z}for(var E in i){var K=i[E],C=K.minw,J=K.maxw,A=C===null,L=J===null,y="em";if(!!C){C=parseFloat(C)*(C.indexOf(y)>-1?(p||v()):1)}if(!!J){J=parseFloat(J)*(J.indexOf(y)>-1?(p||v()):1)}if(!K.hasquery||(!A||!L)&&(A||H>=C)&&(L||H<=J)){if(!D[K.media]){D[K.media]=[]}D[K.media].push(k[K.rules])}}for(var E in q){if(q[E]&&q[E].parentNode===f){f.removeChild(q[E])}}for(var E in D){var M=w.createElement("style"),F=D[E].join("\n");M.type="text/css";M.media=E;f.insertBefore(M,G.nextSibling);if(M.styleSheet){M.styleSheet.cssText=F}else{M.appendChild(w.createTextNode(F))}q.push(M)}},n=function(x,z){var y=c();if(!y){return}y.open("GET",x,true);y.onreadystatechange=function(){if(y.readyState!=4||y.status!=200&&y.status!=304){return}z(y.responseText)};if(y.readyState==4){return}y.send(null)},c=(function(){var x=false;try{x=new XMLHttpRequest()}catch(y){x=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return x}})();a();respond.update=a;function t(){j(true)}if(e.addEventListener){e.addEventListener("resize",t,false)}else{if(e.attachEvent){e.attachEvent("onresize",t)}}})(this);;
/*! Picturefill - v2.3.1 - 2015-04-09
* http://scottjehl.github.io/picturefill
* Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
window.matchMedia||(window.matchMedia=function(){"use strict";var a=window.styleMedia||window.media;if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(a,b,c){"use strict";function d(b){"object"==typeof module&&"object"==typeof module.exports?module.exports=b:"function"==typeof define&&define.amd&&define("picturefill",function(){return b}),"object"==typeof a&&(a.picturefill=b)}function e(a){var b,c,d,e,f,i=a||{};b=i.elements||g.getAllElements();for(var j=0,k=b.length;k>j;j++)if(c=b[j],d=c.parentNode,e=void 0,f=void 0,"IMG"===c.nodeName.toUpperCase()&&(c[g.ns]||(c[g.ns]={}),i.reevaluate||!c[g.ns].evaluated)){if(d&&"PICTURE"===d.nodeName.toUpperCase()){if(g.removeVideoShim(d),e=g.getMatch(c,d),e===!1)continue}else e=void 0;(d&&"PICTURE"===d.nodeName.toUpperCase()||!g.sizesSupported&&c.srcset&&h.test(c.srcset))&&g.dodgeSrcset(c),e?(f=g.processSourceSet(e),g.applyBestCandidate(f,c)):(f=g.processSourceSet(c),(void 0===c.srcset||c[g.ns].srcset)&&g.applyBestCandidate(f,c)),c[g.ns].evaluated=!0}}function f(){function c(){clearTimeout(d),d=setTimeout(h,60)}g.initTypeDetects(),e();var d,f=setInterval(function(){return e(),/^loaded|^i|^c/.test(b.readyState)?void clearInterval(f):void 0},250),h=function(){e({reevaluate:!0})};a.addEventListener?a.addEventListener("resize",c,!1):a.attachEvent&&a.attachEvent("onresize",c)}if(a.HTMLPictureElement)return void d(function(){});b.createElement("picture");var g=a.picturefill||{},h=/\s+\+?\d+(e\d+)?w/;g.ns="picturefill",function(){g.srcsetSupported="srcset"in c,g.sizesSupported="sizes"in c,g.curSrcSupported="currentSrc"in c}(),g.trim=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},g.makeUrl=function(){var a=b.createElement("a");return function(b){return a.href=b,a.href}}(),g.restrictsMixedContent=function(){return"https:"===a.location.protocol},g.matchesMedia=function(b){return a.matchMedia&&a.matchMedia(b).matches},g.getDpr=function(){return a.devicePixelRatio||1},g.getWidthFromLength=function(a){var c;if(!a||a.indexOf("%")>-1!=!1||!(parseFloat(a)>0||a.indexOf("calc(")>-1))return!1;a=a.replace("vw","%"),g.lengthEl||(g.lengthEl=b.createElement("div"),g.lengthEl.style.cssText="border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden",g.lengthEl.className="helper-from-picturefill-js"),g.lengthEl.style.width="0px";try{g.lengthEl.style.width=a}catch(d){}return b.body.appendChild(g.lengthEl),c=g.lengthEl.offsetWidth,0>=c&&(c=!1),b.body.removeChild(g.lengthEl),c},g.detectTypeSupport=function(b,c){var d=new a.Image;return d.onerror=function(){g.types[b]=!1,e()},d.onload=function(){g.types[b]=1===d.width,e()},d.src=c,"pending"},g.types=g.types||{},g.initTypeDetects=function(){g.types["image/jpeg"]=!0,g.types["image/gif"]=!0,g.types["image/png"]=!0,g.types["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),g.types["image/webp"]=g.detectTypeSupport("image/webp","data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")},g.verifyTypeSupport=function(a){var b=a.getAttribute("type");if(null===b||""===b)return!0;var c=g.types[b];return"string"==typeof c&&"pending"!==c?(g.types[b]=g.detectTypeSupport(b,c),"pending"):"function"==typeof c?(c(),"pending"):c},g.parseSize=function(a){var b=/(\([^)]+\))?\s*(.+)/g.exec(a);return{media:b&&b[1],length:b&&b[2]}},g.findWidthFromSourceSize=function(c){for(var d,e=g.trim(c).split(/\s*,\s*/),f=0,h=e.length;h>f;f++){var i=e[f],j=g.parseSize(i),k=j.length,l=j.media;if(k&&(!l||g.matchesMedia(l))&&(d=g.getWidthFromLength(k)))break}return d||Math.max(a.innerWidth||0,b.documentElement.clientWidth)},g.parseSrcset=function(a){for(var b=[];""!==a;){a=a.replace(/^\s+/g,"");var c,d=a.search(/\s/g),e=null;if(-1!==d){c=a.slice(0,d);var f=c.slice(-1);if((","===f||""===c)&&(c=c.replace(/,+$/,""),e=""),a=a.slice(d+1),null===e){var g=a.indexOf(",");-1!==g?(e=a.slice(0,g),a=a.slice(g+1)):(e=a,a="")}}else c=a,a="";(c||e)&&b.push({url:c,descriptor:e})}return b},g.parseDescriptor=function(a,b){var c,d=b||"100vw",e=a&&a.replace(/(^\s+|\s+$)/g,""),f=g.findWidthFromSourceSize(d);if(e)for(var h=e.split(" "),i=h.length-1;i>=0;i--){var j=h[i],k=j&&j.slice(j.length-1);if("h"!==k&&"w"!==k||g.sizesSupported){if("x"===k){var l=j&&parseFloat(j,10);c=l&&!isNaN(l)?l:1}}else c=parseFloat(parseInt(j,10)/f)}return c||1},g.getCandidatesFromSourceSet=function(a,b){for(var c=g.parseSrcset(a),d=[],e=0,f=c.length;f>e;e++){var h=c[e];d.push({url:h.url,resolution:g.parseDescriptor(h.descriptor,b)})}return d},g.dodgeSrcset=function(a){a.srcset&&(a[g.ns].srcset=a.srcset,a.srcset="",a.setAttribute("data-pfsrcset",a[g.ns].srcset))},g.processSourceSet=function(a){var b=a.getAttribute("srcset"),c=a.getAttribute("sizes"),d=[];return"IMG"===a.nodeName.toUpperCase()&&a[g.ns]&&a[g.ns].srcset&&(b=a[g.ns].srcset),b&&(d=g.getCandidatesFromSourceSet(b,c)),d},g.backfaceVisibilityFix=function(a){var b=a.style||{},c="webkitBackfaceVisibility"in b,d=b.zoom;c&&(b.zoom=".999",c=a.offsetWidth,b.zoom=d)},g.setIntrinsicSize=function(){var c={},d=function(a,b,c){b&&a.setAttribute("width",parseInt(b/c,10))};return function(e,f){var h;e[g.ns]&&!a.pfStopIntrinsicSize&&(void 0===e[g.ns].dims&&(e[g.ns].dims=e.getAttribute("width")||e.getAttribute("height")),e[g.ns].dims||(f.url in c?d(e,c[f.url],f.resolution):(h=b.createElement("img"),h.onload=function(){if(c[f.url]=h.width,!c[f.url])try{b.body.appendChild(h),c[f.url]=h.width||h.offsetWidth,b.body.removeChild(h)}catch(a){}e.src===f.url&&d(e,c[f.url],f.resolution),e=null,h.onload=null,h=null},h.src=f.url)))}}(),g.applyBestCandidate=function(a,b){var c,d,e;a.sort(g.ascendingSort),d=a.length,e=a[d-1];for(var f=0;d>f;f++)if(c=a[f],c.resolution>=g.getDpr()){e=c;break}e&&(e.url=g.makeUrl(e.url),b.src!==e.url&&(g.restrictsMixedContent()&&"http:"===e.url.substr(0,"http:".length).toLowerCase()?void 0!==window.console&&console.warn("Blocked mixed content image "+e.url):(b.src=e.url,g.curSrcSupported||(b.currentSrc=b.src),g.backfaceVisibilityFix(b))),g.setIntrinsicSize(b,e))},g.ascendingSort=function(a,b){return a.resolution-b.resolution},g.removeVideoShim=function(a){var b=a.getElementsByTagName("video");if(b.length){for(var c=b[0],d=c.getElementsByTagName("source");d.length;)a.insertBefore(d[0],c);c.parentNode.removeChild(c)}},g.getAllElements=function(){for(var a=[],c=b.getElementsByTagName("img"),d=0,e=c.length;e>d;d++){var f=c[d];("PICTURE"===f.parentNode.nodeName.toUpperCase()||null!==f.getAttribute("srcset")||f[g.ns]&&null!==f[g.ns].srcset)&&a.push(f)}return a},g.getMatch=function(a,b){for(var c,d=b.childNodes,e=0,f=d.length;f>e;e++){var h=d[e];if(1===h.nodeType){if(h===a)return c;if("SOURCE"===h.nodeName.toUpperCase()){null!==h.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var i=h.getAttribute("media");if(h.getAttribute("srcset")&&(!i||g.matchesMedia(i))){var j=g.verifyTypeSupport(h);if(j===!0){c=h;break}if("pending"===j)return!1}}}}return c},f(),e._=g,d(e)}(window,window.document,new window.Image);;
/*jshint bitwise:true, browser:true*/
/*global jQuery:false, console:false */
;(function cookies(W, D, $) {
/**
 * misc utility methods
 *
 * @requires	jQuery
 */

'use strict';

(function testConsole(oCons) {
	var aCons = 'assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,table,time,timeEnd,trace,warn'.split(','),
		noop = function() {},
		func;

	while(!!(func = aCons.pop())) {
		oCons[func] = oCons[func] || noop;
	}
})(function returnConsole() {
	try {
		console.log();
		return W.console;
	} catch (err) {
		return (W.console = {});
	}
}());

if (typeof W.edf === 'undefined') {
	W.edf = {};
}
if (typeof W.l10n === 'undefined') {
	W.l10n = {};
}

var edf = W.edf, $D = $(D), l10n = W.l10n;

edf.cookies = (function cookiesModule() {
	// =============================================================================
	// provides cookie management
	// based on Dustin Diaz
	// =============================================================================
	var DOMAIN = (function() {
		var hostname = window.location.hostname,
			testIp = /(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/gi,
			aDomain;

		if (!testIp.test(hostname)) {
			aDomain = window.location.hostname.split('.');
			if (aDomain.length > 2) {
				while(aDomain.length > 2) {
					aDomain.shift();
				}

				if (l10n && l10n.jsDebug) {
					console.info('cookies domain : ' + '.' + aDomain.join('.'));
				}
				/* returns ".abc.def" */
				return '.' + aDomain.join('.');
			}
		}

		if (l10n && l10n.jsDebug) {
			console.info('cookies domain : ' + hostname);
		}
		/* else returns hostname */
		return hostname;
	})(),

	oMod = {
		debug : function() {
			return l10n && l10n.jsDebug ? l10n.jsDebug : false;
		},

		get : function(name) {
			var start = D.cookie.indexOf(name + '='),
				len = start + name.length + 1,
				end;

			if ((!start) && (name != D.cookie.substring(0, name.length))) {
				return null;
			}

			if (start == -1) {
				return null;
			}

			end = D.cookie.indexOf(';', len);

			if (end == -1) {
				end = D.cookie.length;
			}

			return W.unescape(D.cookie.substring(len, end));
		},

		set : function(name, value, expires, path, domain, secure) {
			var today = new Date();

			today.setTime(today.getTime());

			if (expires) {
				expires = expires * 1000 * 60 * 60 * 24;
			}

			var expires_date = new Date(today.getTime() + (expires));

			D.cookie =  name + '=' + W.escape(value) +
						((expires) ? ';expires=' + expires_date.toGMTString() : '') +
						((path) ? ';path=' + path : '') +
						((domain || domain === '') ? ';domain=' + domain : ';domain=' + DOMAIN) +
						((secure) ? ';secure' : '');
		},

		remove : function(name, path, domain) {
			if (this.get(name)) {
				D.cookie = name + '=' + ((path) ? ';path=' + path : '') +
							((domain || domain === '') ? ';domain=' + domain : ';domain=' + DOMAIN) +
							';expires=Thu, 01-Jan-1970 00:00:01 GMT';
			}
		}
	};

	return oMod;
})();

edf.loadscript = (function loadscript() {
	// =============================================================================
	// async script loading
	// =============================================================================
	var TIME_OUT = 30000,

	_loadScript = function(sName, oData, bAsync, nTimeout) {
		var done = false,
			id = sName + '-script',
			jsElm,
			fTimeout,
			nTime = nTimeout || TIME_OUT,

		_handleLoad = function() {
			W.clearTimeout(fTimeout);
			if (!done) {
				done = true;
				$D.trigger('edf:loadscript.ready.' + sName, {
					data : oData,
					name : sName
				});
			}
		},

		_handleReadyStateChange = function() {
			if (!done && 'complete' === jsElm.readyState) {
			   	_handleLoad();
			}
		},

		_handleError = function(oEvt) {
			W.clearTimeout(fTimeout);
			this.src = this.onload = this.onreadystatechange = null;
			if (D.getElementById(this.id)) {
				this.parentNode.removeChild(this);
			}
			if (!done) {
				done = true;
				$D.trigger('edf:loadscript.error.' + sName, {
					data : oEvt,
					name : sName
				});
			}
		},

		_handleTimeout = function() {
			if (!done && 'complete' !== jsElm.readyState) {
				_handleError.call(jsElm, 'timeout');
			}
		};

		if (!D.getElementById(id)) {
			var firstScript = D.getElementsByTagName('script')[0],
				insertElm = firstScript.parentNode;

			if (l10n && l10n.services && l10n.services[sName]) {
				jsElm = D.createElement('script');
				jsElm.id = id;
				jsElm.async = typeof(bAsync) === 'undefined' ? true : bAsync;
				jsElm.onload = _handleLoad;
				jsElm.onreadystatechange = _handleReadyStateChange;
				jsElm.onerror = _handleError;
				jsElm.src = l10n.services[sName];

				if (insertElm) {
					insertElm.insertBefore(jsElm, firstScript);
				} else {
					D.getElementsByTagName('head')[0].appendChild(jsElm);
				}

				fTimeout = W.setTimeout(_handleTimeout, nTime);
			} else if (oMod.debug()) {
				console.warn('edf:loadscript error.' + sName + ': l10n.services.' + sName + ' is undefined');
			}
		} else if (oMod.debug()) {
			console.warn('edf:loadscript error.' + sName + ': \"script#' + sName + '-script\"' + ' already exists');
		}
	},

	_handleReadyEvent = function(oEvt, oEvtData) {
		var sName = oEvtData.name;
		if (oMod.debug()) {
			console.info('edf:loadscript ready.' + sName);
		}

		oMod.loaded[sName] = oMod.loading[sName];

		if (oEvtData.data && typeof oEvtData.data.callback === 'function') {
			oEvtData.data.callback();
		}

		delete oMod.loading[sName];
	},

	_handleErrorEvent = function(oEvt, oEvtData) {
		var sName = oEvtData.name;
		if (oMod.debug()) {
			console.error('edf:loadscript error.' + sName);
		}

		oMod.error[sName] = oMod.loading[sName];

		delete oMod.loading[sName];
	},

	oMod = {
		debug : function() {
			return l10n && l10n.jsDebug ? l10n.jsDebug : false;
		},

		loading : { /* stores currently loading scripts data */ },

		loaded : { /* stores loaded scripts data */ },

		error : { /* stores errors data */ },

		load : function(sName, oData, bAsync) {
			$D.on('edf:loadscript.ready.' + sName, _handleReadyEvent);

			$D.on('edf:loadscript.error.' + sName, _handleErrorEvent);

			this.loading[sName] = oData;
			_loadScript(sName, oData, bAsync);
		},

		reload : function(sName, oData, bAsync) {
			if (sName in this.loading) {
				if (oMod.debug()) {
					console.warn('edf:loadscript error.' + sName + ': \"script#' + sName + '-script\"' + ' currently loading');
				}
				return;
			}
			if (sName in this.loaded) {
				$('#' + sName + '-script').remove();

				$D.off('edf:loadscript.ready.' + sName);
				$D.off('edf:loadscript.error.' + sName);

				delete this.loaded[sName];
			}
			this.load(sName, oData, bAsync);
		}
	};

	return oMod;
})();

edf.throttle = function throttle(func, wait, options) {
// =============================================================================
// http://underscorejs.org/docs/underscore.html#section-82
// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run as
// much as it can, without ever going more than once per wait duration; but if
// you’d like to disable the execution on the leading edge, pass {leading: false}.
// To disable execution on the trailing edge, ditto.
// =============================================================================
	var context, args, result,
		timeout = null, previous = 0;
	if (!options) {
		options = {};
	}
	var later = function() {
		previous = options.leading === false ? 0 : new Date();
		timeout = null;
		result = func.apply(context, args);
		if (!timeout) {
			context = args = null;
		}
	};
	return function() {
		var now = new Date().getTime();
		if (!previous && options.leading === false) {
			previous = now;
		}
		var remaining = wait - (now - previous);
		context = this;
		args = arguments;
		if (remaining <= 0 || remaining > wait) {
			clearTimeout(timeout);
			timeout = null;
			previous = now;
			result = func.apply(context, args);
			if (!timeout) {
				context = args = null;
			}
		} else if (!timeout && options.trailing !== false) {
			timeout = setTimeout(later, remaining);
		}
		return result;
	};
};

edf.debounce = function debounce(func, wait, immediate) {
// =============================================================================
// http://underscorejs.org/docs/underscore.html#section-83
// Returns a function, that, as long as it continues to be invoked, will not be
// triggered. The function will be called after it stops being called for
// N milliseconds. If immediate is passed, trigger the function on the leading
// edge, instead of the trailing.
// =============================================================================
	var timeout, args, context, timestamp, result,

	later = function() {
		var last = new Date().getTime() - timestamp;

		if (last < wait && last >= 0) {
			timeout = setTimeout(later, wait - last);
		} else {
			timeout = null;
			if (!immediate) {
				result = func.apply(context, args);
				if (!timeout) {
					context = args = null;
				}
			}
		}
	};

	return function() {
		context = this;
		args = arguments;
		timestamp = new Date().getTime();

		var callNow = immediate && !timeout;

		if (!timeout) {
			timeout = setTimeout(later, wait);
		}
		if (callNow) {
			result = func.apply(context, args);
			context = args = null;
		}

		return result;
	};
};

edf.slugify = function slugify(text) {
	return text.toString().toLowerCase()
				.replace(/\s+/g, '-')		// Replace spaces with -
				.replace(/[^\w\-]+/g, '')	// Remove all non-word chars
				.replace(/\-\-+/g, '-')		// Replace multiple - with single -
				.replace(/^-+/, '')			// Trim - from start of text
				.replace(/-+$/, '');		// Trim - from end of text
};

edf.slugifyTag = function slugifyTag(str) {
	str = str.replace(/^\s+|\s+$/g, ''); // trim
	str = str.toLowerCase();

	// remove accents
	var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;",
		to   = "aaaaeeeeiiiioooouuuunc------";

	for (var i=0, l=from.length ; i<l ; i++)
	str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));


	str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
	.replace(/^\s+|\s+$/g, '') // trim @see EDFFR-2288 : problème avec "Chinon A « La Boule »"
	.replace(/\s+/g, '-') // collapse whitespace and replace by -
	.replace(/-+/g, '-'); // collapse dashes

	return str;
};

 
edf.locationSearch = (function locationSearch() {
// =============================================================================
// return an object from window.location.search
// =============================================================================
	var sSearch = W.location.search;

	if (sSearch) {
		var aSearch = sSearch.split('?')[1].split('&'),
			i = aSearch.length,
			oSearch = {};

		while(i--) {
			var aTmp = aSearch[i].split('=');

			oSearch[aTmp[0]] = aTmp[1];
		}

		return oSearch;
	}
})();

(function _receiveIframeMessage() {
// =============================================================================
// window.postMessage listener
// =============================================================================
	var debug = function() {
			return l10n && l10n.jsDebug ? l10n.jsDebug : false;
		},

		getOrigin = function(origin) {
			var aOrigins = ['edf.symex.be', 'edf.symexbelgium.com'],
				i = aOrigins.length;

			while(i--) {
				if (origin.indexOf(aOrigins[i]) > -1) {
					return true;
				}
			}

			return false;
		},

		receiveData = function(e) {
			if (e && e.data && getOrigin(e.origin)) {
				var oData = e.data,
					iFrameId = oData.id,
					sHeight = oData.height,
					sSrc =  oData.src ? oData.src.replace(/(http|https):/gi, '') : oData.src;

				if (debug()) {
					console.groupCollapsed('edf:iframe receiving iframe message');
					console.log(oData);
					console.groupEnd();
				}

				if (iFrameId && $('#' + iFrameId).length) {
					$('#' + iFrameId).css('height', sHeight);
				} else if (sSrc) {
					$('iframe').each(function() {
						var iFrameSrc = this.src.replace(/(http|https):/gi, '');

						if (sSrc === iFrameSrc) {
							if (sHeight) {
								$(this).css('height', sHeight);
							}
						}
					});
				}
			}
		};

	if (W.addEventListener) {
		W.addEventListener('message', receiveData, false);
	} else {
		W.attachEvent('onmessage', receiveData);
	}
})();

edf.drupalAjaxListener = (function() {
// =============================================================================
// parse Drupal AJAX response data to help specific controls or debug
// =============================================================================
	var _parseTree = function(aParts) {
		if (aParts.length === 1) {
			return aParts[0];
		}

		var obj = {},
			sFirst = aParts.shift();

		if ('undefined' === typeof obj[sFirst]) {
			obj[sFirst] = _parseTree(aParts);
		}

		return obj;
	},

	_mergeObjects = function(oTarget, oMerge) {
		var sType = typeof(oMerge);
		if ('object' === sType) {
			for(var i in oMerge) {
				if (oMerge.hasOwnProperty(i)) {
					sType = typeof(oTarget[i]);
					switch(sType) {
						case 'undefined' :
							oTarget[i] = oMerge[i];
							break;
						case 'object' :
							_mergeObjects(oTarget[i], oMerge[i]);
							break;
						case 'string' :
							/* create an array for key matching values */
							oTarget[i] = [oTarget[i], oMerge[i]];
							break;
						default :
							break;
					}
				}
			}
		} else if ('string' === sType) {
			if ($.isArray(oTarget)) {
				/* fill key matching array */
				oTarget.push(oMerge);
			} else {
				/* key has no value */
				oTarget[oMerge] = '';
			}
		} else {
			/* we should never end here */
			if (oMod.debug()) {
				console.warn('edf:drupalAjaxData unsupported data type');
				console.log(oMerge);
			}
		}

		return oTarget;
	},

	oMod = {
		running : false,

		debug : function() {
			return l10n && l10n.jsDebug ? l10n.jsDebug : false;
		},

		parse : function(settings) {
			var oTree = {},
				aTmp = settings.data.split('&'),
				i = aTmp.length;

			while(i--) {
				var a = decodeURIComponent(aTmp[i]).match(/([^\[|\]=]+)/g);

				_mergeObjects(oTree, _parseTree(a));
			}

			return oTree;
		},

		init : function() {
			if (!this.running) {
				this.running = true;
				$D.on('ajaxSuccess', function(oEvt, xhr, settings) {
					if (settings && settings.data) {
						oMod.data = oMod.parse(settings);

						if (oMod.debug()) {
							console.groupCollapsed('Drupal AJAX response settings');
							console.log(oMod.data);
							console.groupEnd();
						}

						$D.trigger('edf:drupalAjaxSuccess', oMod.data);
					}
				});	
			} else if (this.debug()) {
				console.warn('Drupal AJAX listener is already running');
			}
		}
	};

	return oMod;
})();

})(window, document, jQuery);;
/*jshint bitwise:true, browser:true, curly:true, eqeqeq:false, forin:true, noarg:true, regexdash:true, smarttabs:true, strict:false, undef:true*/
/*global jQuery:false, Modernizr:false, console:false*/
;(function viewport(W, D, $) {
if (typeof W.edf === 'undefined') {
	W.edf = {};
}
if (typeof W.l10n === 'undefined') {
	W.l10n = {};
}
var edf = W.edf,
	l10n = W.l10n;

edf.viewport = function() {
// =============================================================================
// handle viewport data and related events (resize, scroll...)
// note: module is launched asap (do not launch in another file!)
// =============================================================================

	var $W = $(W), $D = $(D), prevStatus,

	_detectTouchDevice = function() {
		/**
		 * The Modernizr.touch test only indicates if the browser supports
		 *	touch events, which does not necessarily reflect a touchscreen
		 *	device
		 *
		 * For more info, see: http://modernizr.com/downloads/modernizr-latest.js
		 *
		 * not used
		 */
		if (Modernizr && 'undefined' !== typeof Modernizr.touch) {
			return Modernizr.touch;
		}

		var bool,
			prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
			mod = 'modernizr',
			docElement = D.documentElement,
		injectElementWithStyles = function( rule, callback, nodes, testnames ) {
			var style, ret, node, docOverflow,
				div = D.createElement('div'),
				body = D.body,
				fakeBody = body || D.createElement('body');

			if ( parseInt(nodes, 10) ) {
				while ( nodes-- ) {
					node = D.createElement('div');
					node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
					div.appendChild(node);
				}
			}
			style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
			div.id = mod;
			(body ? div : fakeBody).innerHTML += style;
			fakeBody.appendChild(div);
			if ( !body ) {
				fakeBody.style.background = '';
				fakeBody.style.overflow = 'hidden';
				docOverflow = docElement.style.overflow;
				docElement.style.overflow = 'hidden';
				docElement.appendChild(fakeBody);
			}
			ret = callback(div, rule);
			if ( !body ) {
				fakeBody.parentNode.removeChild(fakeBody);
				docElement.style.overflow = docOverflow;
			} else {
				div.parentNode.removeChild(div);
			}
			return !!ret;
		};

		if (('ontouchstart' in W) || W.DocumentTouch && D instanceof W.DocumentTouch) {
			bool = true;
		} else {
			injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {
				bool = node.offsetTop === 9;
			});
		}
		return bool;
	},

	/*_handleTouchEvents = function() {
		// not used
		// possible use case : position:fixed fix for focused form elements in iOs
		$D.ready(function() {
			$D.find('input, textarea, select')
				.bind('focus.edf:viewport', function() {
					//$header.addClass('alternative');
				})
				.bind('blur.edf:viewport', function() {
					//$header.removeClass('alternative');

					// Fix for some scenarios where you need to start scrolling
					setTimeout(function() {
						$D.scrollTop($D.scrollTop());
					}, 1);
				});
		});
	},*/

	_handleResize = function(oEvt) {
		viewport.compute();
		$D.trigger('edf:viewport.resize', {
			originalEvent : oEvt,
			context : viewport
		});
	},

	_handleResizeEnd = function(oEvt) {
		viewport.compute();

		if (viewport.status !== prevStatus) {
			if (viewport.debug()) {
				console.info('edf:viewport changed :', prevStatus, '->', viewport.status);
			}
			/* trigger a viewport changed event */
			$D.trigger('edf:viewport.change', {
				originalEvent : oEvt,
				context : viewport
			});
			prevStatus = viewport.status;
		}

		$D.trigger('edf:viewport.resize-end', {
			originalEvent : oEvt,
			context : viewport
		});
	},

	_handleScroll = function(oEvt) {
		viewport.compute();

		$D.trigger('edf:viewport.scroll', {
			originalEvent : oEvt,
			context : viewport,
			scrollTop : $W.scrollTop(),
			scrollLeft : $W.scrollLeft()
		});
		edf.header.otherLocaSuggestion.close();
	},

	_handleScrollEnd = function(oEvt) {
		viewport.compute();

		$D.trigger('edf:viewport.scroll-end', {
			originalEvent : oEvt,
			context : viewport,
			scrollTop : $W.scrollTop(),
			scrollLeft : $W.scrollLeft()
		});
	},

	viewport = {
		debug : function() {
			return l10n && l10n.jsDebug ? l10n.jsDebug : false;
		},

		MOBILE : 320,

		PORTRAIT : 768,

		LANDSCAPE : 1024,

		DESKTOP : 1366,

		BREAKPOINTS : [320,768,1024,1366],

		ORIENTATION_EVENT: 'onorientationchange' in W ? 'orientationchange' : 'resize',

		// TOUCH : _detectTouchDevice(),

		isMobile : function() {
			return this.computeStatus() === 'mobile';
		},

		isPortrait : function() {
			return this.computeStatus() === 'portrait';
		},

		isLandscape : function() {
			return this.computeStatus() === 'landscape';
		},

		isDesktop : function() {
			return this.computeStatus() === 'desktop';
		},

		computeStatus : function() {
			var oComputedStyles, sContent = 'mobile';
			if ("getComputedStyle" in W) {
				oComputedStyles = D.querySelector('#page') ? W.getComputedStyle(D.querySelector('#page'), ':before') : null;
				sContent = oComputedStyles ? oComputedStyles.getPropertyValue('content') : 'mobile';
			}

			switch(true) {
				case sContent.indexOf('desktop') > -1 :
					this.status = 'desktop';
					break;
				case sContent.indexOf('landscape') > -1 :
					this.status = 'landscape';
					break;
				case sContent.indexOf('portrait') > -1 :
					this.status = 'portrait';
					break;
				default :
					this.status = 'mobile';
					break;
			}

			return this.status;
		},

		computeWidth: function() {
			viewport.width = $W.width();
			return viewport.width;
		},

		computeHeight: function() {
			viewport.height = $W.height();
			return viewport.height;
		},

		compute : function() {
			return {
				status : this.computeStatus(),
				width : this.computeWidth(),
				height : this.computeHeight()
			};
		},

		init: function() {
			viewport.$meta = $('meta[name=viewport]');

			prevStatus = this.status;

			_handleScroll = edf.throttle(_handleScroll, 150);
			_handleScrollEnd = edf.debounce(_handleScrollEnd, 300);
			_handleResize = edf.throttle(_handleResize, 150, { leading : false });
			_handleResizeEnd = edf.debounce(_handleResizeEnd, 300);

			$D.ready(function() {
				viewport.compute();
				_handleResizeEnd();
				_handleScrollEnd();

				$W
				.on(viewport.ORIENTATION_EVENT + '.edf:viewport', function() {
					_handleResize();
					_handleResizeEnd();
				})
				.on('scroll.edf:viewport', function() {
					_handleScroll();
					_handleScrollEnd();
				});
			});

			/* if (viewport.TOUCH) {
				_handleTouchEvents();
			} */
		}
	};

	viewport.init();

	return viewport;
}();

})(window, document, jQuery);;
/*jshint bitwise:true, browser:true*/
/*global jQuery:false, console:false */
;(function popins(W, D, $) {

'use strict';

(function testConsole(oCons) {
	var aCons = 'assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,table,time,timeEnd,trace,warn'.split(','),
		noop = function() {},
		func;

	while(!!(func = aCons.pop())) {
		oCons[func] = oCons[func] || noop;
	}
})(function returnConsole() {
	try {
		console.log();
		return W.console;
	} catch (err) {
		return (W.console = {});
	}
}());

if (typeof W.edf === 'undefined') {
	W.edf = {};
}
if (typeof W.l10n === 'undefined') {
	W.l10n = {};
}

var edf = W.edf, $D = $(D), l10n = W.l10n;

edf.popins = { /* stores all popin instances */ };

edf.Popin = (function popinsModule() {
// =============================================================================
// pop-in constructor
// =============================================================================
	var $html, $body, $focusElmt,

	_createErrorPopin = function(bOpen) {
		new Popin({
			id : 'error',
			html :  '<div id="popin-error" class="popin-wrapper">' +
					'	<div class="popin">' +
					'		<div class="popin-header">' +
					'			<button class="popin-close" aria-label="' + (l10n.close ? l10n.close : 'close') + '" role="button"></button>' +
					'			<h2 class="popin-title">' + (l10n.messages ? l10n.messages.error : 'error') + '</h2>' +
					'		</div>' +
					'		<div class="popin-content popin-description">' +
					'			<p>' + (l10n.messages ? l10n.messages.sorry : 'sorry') + '</p>' +
					'		</div>' +
					'	</div>' +
					'</div>'
		});

		if (bOpen) {
			edf.popins.error.open();
		}
	},

	_handleAria = function() {
		var $root = this.$root,
			$title = $root.find('.popin-title'),
			$description = $root.find('.popin-description'),
			oAttributes = {};

		if (!$root.attr('role')) {
			oAttributes.role = 'dialog';
		}

		if (!$root.attr('aria-labelledby') && $title.length) {
			oAttributes['aria-labelledby'] = 'aria-label-' + this.id;
			$title.attr('id', oAttributes['aria-labelledby']);
		}

		if (!$root.attr('aria-description') && $description.length) {
			oAttributes['aria-description'] = 'aria-description-' + this.id;
			$description.attr('id', oAttributes['aria-description']);
		}

		$root.attr(oAttributes);
	},

	_handleRequestSuccess = function(oEvt, oEvtData, xhr) {
		oEvtData.context.html = oEvtData.html; // oEvtData.context is the popin instance
		_addToDom.call(oEvtData.context);
	},

	_handleRequestError = function(oEvt, oEvtData) {
		if (debug()) {
			console.groupCollapsed('edf:popins request error');
			console.trace();
			console.log(oEvtData.data);
			console.groupEnd();
		}

		if (edf.popins.error) {
			var oData = oEvtData.data;

			if (oData && oData.responseText && oData.responseText.indexOf('class="popin-wrapper') > -1) {
				edf.popins.error.html = oEvtData.data.responseText;
			}
			oEvtData.context.opened = false;
			edf.popins.error.closeFocusElmt = oEvtData.context.closeFocusElmt;
			edf.popins.error.open();
		} else {
			_createErrorPopin(true);
		}
	},

	_handleRequestComplete = function(oEvt, oEvtData) {
		$D.off('request-success.edf:popins-' + oEvtData.context.id +
				', request-error.edf:popins-' + oEvtData.context.id +
				', request-complete.edf:popins-' + oEvtData.context.id);
	},

	_handleRequest = function() {
		var that = this,
			id = this.id;

		$body.append(this.loader);

		$D
			.on('request-success.edf:popins-' + id, _handleRequestSuccess)
			.on('request-error.edf:popins-' + id, _handleRequestError)
			.on('request-complete.edf:popins-' + id, _handleRequestComplete);

		$.ajax({
			url : this.url
		}).done(function(data) {
			$D.trigger('request-success.edf:popins-' + id, { context : that, html : data });
		}).fail(function(xhr) {
			$D.trigger('request-error.edf:popins-' + id, { context : that, data : xhr });
		}).always(function() {
			$D.trigger('request-complete.edf:popins-' + id, { context : that });
		});
	},

	_handleCloseEvt = function(oEvt) {
		var $target = $(oEvt.target);

		if (oEvt.type === 'keydown' && oEvt.keyCode === 27 || // esc key
			oEvt.type !== 'keydown' && ($target.is('.popin-wrapper') || $target.is('.popin-close') || $target.closest('.popin-close').length)) {
			oEvt.preventDefault();
			oEvt.data.close(); // oEvt.data is the popin instance
		}
	},

	_handleFocusOn = function() {
		if (!$focusElmt) {
			$focusElmt = $body.find(l10n.focusElmt);
		}
		$focusElmt.attr('tabindex', '-1');
		this.$root.find(l10n.focusElmt).attr('tabindex', '0')
			.eq(0).focus();
	},

	_handleFocusOff = function() {
		$focusElmt.removeAttr('tabindex');

		if (this.closeFocusElmt) {
			this.closeFocusElmt.focus();
		}
	},

	_addToDom = function() {
		$html.addClass('js-popin-opened');
		$body.find('.js-popin-loader').remove();
		this.$root = $(this.html);
		$body.append(this.$root);

		_handleFocusOn.call(this);
		_handleAria.call(this);

		$D
			.on('click.edf:popins-' + this.id + ', keydown.edf:popins-' + this.id, '.popin-wrapper', this, _handleCloseEvt)
			.trigger('open-popin.edf:popins-' + this.id, this);
	},

	debug = function() {
		return l10n && l10n.jsDebug ? l10n.jsDebug : false;
	},

	Popin = function(oCfg) {
		if (typeof(oCfg) === 'undefined' || !oCfg.id) {
			if (debug()) {
				console.warn('edf:popins please define an id');
			}
			return null;
		}

		if (oCfg.id in edf.popins) {
			if (debug()) {
				console.warn('edf:popins ' + oCfg.id + ' is already defined');
			}
			return null;
		}

		this.id = oCfg.id;

		edf.popins[this.id] = this;

		if (oCfg.html) {
			this.html = oCfg.html;
			this.cache = true;
		} else if (oCfg.url) {
			this.url = oCfg.url;
			this.cache = typeof(oCfg.cache) === 'boolean' ? oCfg.cache : true;
		} else {
			if (debug()) {
				console.warn('edf:popins no content defined');
			}
			return null;
		}

		return this;
	};

	Popin.prototype = {
		loader : '<div class="js-popin-loader"></div>',

		open : function() {
			if (this.opened) {
				if (debug()) {
					console.warn('edf:popins popin ' + this.id + ' is already opened');
				}
				return;
			}
			this.opened = true;
			this.closeFocusElmt = D.activeElement;

			if (!$body) {
				$body = $('body');
			}

			if (!$html) {
				$html = $('html');
			}

			if (!$html.length || !$body.length) {
				return;
			}

			if (this.html && this.cache) {
				_addToDom.call(this);
			} else if (this.url) {
				_handleRequest.call(this);
			}

			return this;
		},

		close : function() {
			$html.removeClass('js-popin-opened');
			if (this.$root) {
				this.$root.remove();
			}
			this.opened = false;

			_handleFocusOff.call(this);

			$D.trigger('close-popin.edf:popins-' + this.id, this);

			return this;
		},

		destroy : function() {
			if (this.opened) {
				this.close();
			}
			$D.off('.edf:popins-' + this.id);

			delete edf.popins[this.id];
		}
	};

	_createErrorPopin();

	return Popin;
})();
})(window, document, jQuery);;
/*jshint bitwise:true, browser:true*/
/*global jQuery:false, console:false */
;(function cookieManager(W, D, $) {
/**
 * edf.cookieManager : handles CNIL permissions cookie
 * @requires	jQuery
 * @requires	helpers.js
 * @requires	viewport.js
 * @requires	popin.js
 */

'use strict';

if (typeof W.edf === 'undefined') {
	W.edf = {};
}
if (typeof W.l10n === 'undefined') {
	W.l10n = {};
}

var edf = W.edf, $D = $(D), l10n = W.l10n;

edf.cookieManager = (function cookieManagerModule() {
// =============================================================================
// manage CNIL cookies permissions cases
// http://www.cnil.fr/vos-obligations/sites-web-cookies-et-autres-traceurs/
// =============================================================================
	var navigator = W.navigator,
		doNotTrack = (function() {
			var doNotTrack = navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1' || navigator.msDoNotTrack === '' || W.doNotTrack == '1';

			if (doNotTrack && l10n && l10n.jsDebug ? l10n.jsDebug : false) {
				console.warn('Your browser forbid tracking : please check your "do not track" option');
			}

			return doNotTrack;
		})(),

	cookieBanner = (function cookieBannerModule() {
// =============================================================================
// handles CNIL message display on landing page
// =============================================================================
		var $root, $cookieAlert, $footer,

		_handleOpenCookieManager = function(oEvt) {
			oEvt.preventDefault();

			if (edf.viewport.isDesktop()) {
				if (!edf.cookieManager.popin) {
					_createPopin();
				}

				edf.cookieManager.popin.open();
			} else {
				// open new window with javascript to avoid alert message when closing it
				W.open(this.href, 'cookieManager');
			}
		},

		_handleCloseClick = function(oEvt) {
			oEvt.preventDefault();

			oCookieBannerModule.hide();

			edf.cookieManager.getPermissionsCookie();

			if (!edf.cookieManager.permissions.h) { // idiot-proofing : check if user had changed perms in another window
				// set default permissions
				edf.cookieManager.permissions = {
					h : 1, // explicit consent
					f : 0,
					a : !doNotTrack ? 1 : 0,
					s : !doNotTrack ? 1 : 0,
					t : !doNotTrack ? 1 : 0
				};
				edf.cookieManager.setPermissionsCookie(true);
			}

			/* uncomment to reload tc3 script on message close to update analytics tags */
			// edf.loadscript.reload('tc3');
		},

		_handleResize = function() {
			if (edf.viewport.status === 'mobile') {
				/* make some space in mobile footer to avoid CNIL message on top of it */
				$footer.css('padding-bottom', $root.outerHeight());
			} else {
				$footer.removeAttr('style');
			}
		},

		oCookieBannerModule = {
			show : function() {
				$cookieAlert.addClass('visible');
				_handleResize();
				$D.on('edf:viewport.resize-end', _handleResize);
			},

			hide : function() {
				$cookieAlert.remove();
				$footer.removeAttr('style');
				$D.off('edf:viewport.resize-end', _handleResize);
			},

			init : function(bHasConsent) {
				/**
				 * CNIL message is displayed if user consent is false
				 */
				$root = $('#cookies-manager');
				$cookieAlert = $('#cookies-alert');
				$footer = $('#footer');

				if (!bHasConsent) {
					this.show();
					$cookieAlert.on('click', '.close', _handleCloseClick);
				} else {
					this.hide();
				}

				$D.on('open-popin.edf:popins-cookie-manager-popin', function() {
					cookieManagerForm.init();
				});

				$('#cookies-manager-btn').on('click.edf:cookies-manager', _handleOpenCookieManager);
			}
		};

		return oCookieBannerModule;
	})(),

	cookieManagerConfirmPopin = (function cookieManagerConfirmPopinModule() {
// =============================================================================
// handles fine-tuning form submit confirmation popin
// =============================================================================
		if (edf.Popin) {
			var sHtml = l10n && l10n.messages ?
			'<div id="popin-cookie-manager-confirm" class="popin-wrapper">' +
			'	<div class="popin">' +
			'		<div class="popin-header">' +
			'			<button type="button" class="popin-close" aria-label="' + l10n.close + '" role="button"></button>' +
			'			<h1 class="popin-title"> '+ l10n.messages.cookieManager.title +'</h1>' +
			'		</div>' +
			'		<div class="popin-content popin-description">' +
			'			<p>' + l10n.messages.cookieManager.confirm + '</p>' +
			'		</div>' +
			'	</div>' +
			'</div>' : null;

			var popinConfirm = new edf.Popin({
				id : 'cookie-manager-confirm',
				html : sHtml
			});

			if (edf.cookies.get('cookie-manager-confirm')) {
				$D
					.on('close-popin.edf:popins-cookie-manager-confirm', function() {
						edf.cookies.remove('cookie-manager-confirm', '/');
					})
					.ready(function() {
						popinConfirm.open();
					});
			}

			return popinConfirm;
		}

		return false;
	})(),

	cookieManagerForm = (function cookieManagerFormModule() {
// =============================================================================
// handles permissions fine-tuning form
// =============================================================================
		var _getPermissionsFromForm = function() {
			var oPermissions = {
				h : 1, // consent is obviously given
				f : 1, // user have submitted form
				e : edf.cookieManager.getExpirationDate()
			};

			oCookieManagerFormModule.$form.find('input:checkbox').each(function() {
				/* getting permissions from each checkboxes */
				oPermissions[this.name.split('|')[1].slice(0,1)] = !doNotTrack && this.checked ? 1 : 0;
			});

			return oPermissions;
		},

		_handleSubmit = function(oEvt) {
			oEvt.preventDefault();

			edf.cookieManager.permissions = _getPermissionsFromForm();
			edf.cookieManager.setPermissionsCookie();
			edf.cookies.set('cookie-manager-confirm', 1, 0,'/');

			if (W.opener) {
				// !desktop
				W.opener.location.reload();
				W.close();
			} else {
				// desktop
				W.location.reload();
			}
		},

		oCookieManagerFormModule = {
			init : function(bStandalone) {
				this.bStandalone = !!bStandalone;
				this.$form = $('#cookie-manager-form');

				var bFormPreviouslySubmitted = !edf.cookieManager.getFormSubmitted();

				this.$form.find('input:checkbox').each(function() {
					/* checked checkboxes on first form display else sets states from registered permissions */
					var $this = $(this),
						sName = $this.attr('name');

					switch(true) {
						case sName.indexOf('advertising') > -1 :
							$this.prop('checked', bFormPreviouslySubmitted || edf.cookieManager.getAdvertisingPermission());
							return;
						case sName.indexOf('tracking') > -1 :
							$this.prop('checked', bFormPreviouslySubmitted || edf.cookieManager.getTrackingPermission());
							return;
						case sName.indexOf('social') > -1 :
							$this.prop('checked', bFormPreviouslySubmitted || edf.cookieManager.getSocialPermission());
							return;
						default :
							break;
					}
				});

				this.$form.on('submit.edf:cookie-manager', _handleSubmit);
			},

			destroy : function() {
				this.$form.off('submit.edf:cookie-manager');

				delete this.$form;
			}
		};

		return oCookieManagerFormModule;
	})(),

	_createPopin = function() {
		oMod.popin = new edf.Popin({
			id : 'cookie-manager-popin',
			url : l10n.cookieManager + '?ajax=1'
		});
	},

	oMod = {
		debug : function() {
			return l10n && l10n.jsDebug ? l10n.jsDebug : false;
		},

		doNotTrack : doNotTrack,

		permissions : {
// =============================================================================
// default user permissions
// =============================================================================
			h : 0,	// hasconsent : global user consent
			f : 0,	// form : user has submitted cookie fine-tuning form
			/* having consent only doesn't mean we can place cookies */
			/* a, t & s permissions are mandatory for that */
			a : 0,	// user permission for advertising cookies
			t : 0,	// user permission for tracking cookies
			s : 0,	// user permission for social networks cookies
			/* utility storage */
			p : 0,	// stores previous page url while !h to detect page reload
			e : 0	// stores consent date to calculate 13 months cookie duration
		},

		cookies : {
			tracking : ['_ga', '_gat', '__utma', '__utmb', '__utmz', '__utmc'],
			advertising : ['Affiperf ON', 'AB Test Havas'],
			social : []
		},

		getConsent : function() {
			return this.permissions.h;
		},

		getAdvertisingPermission : function() {
			return !doNotTrack && this.permissions.h && this.permissions.a ? 1 : 0;
		},

		getTrackingPermission : function() {
			return !doNotTrack && this.permissions.h && this.permissions.t ? 1 : 0;
		},

		getSocialPermission : function() {
			return !doNotTrack && this.permissions.h && this.permissions.s ? 1 : 0;
		},

		getFormSubmitted : function() {
			return this.permissions.f;
		},

		getExpirationDate : function() {
			return this.permissions.e;
		},

		getPermissionsCookie : function() {
			/* read and return CNIL permissions from cookie */
			var data = edf.cookies.get('cookies-permissions');

			if (!!data) {
				var oCookiesGroups = {},
					aData = data.split('_'),
					i = aData.length;

				while (i--) {
					var permission = aData[i].slice(0,1),
						value = aData[i].slice(1),
						parsedValue = parseInt(value, 10);

					if (isNaN(parsedValue)) {
						parsedValue = value;
					}
					if ('a' === permission || 's' === permission || 't' === permission) {
						parsedValue = !doNotTrack && parsedValue ? parsedValue : 0;
					}
					oCookiesGroups[permission] = parsedValue;
				}

				this.permissions = oCookiesGroups;
			} else if (this.debug()) {
				console.info('edf:cookieManager permissions cookies not found');
			}

			if (this.debug()) {
				console.groupCollapsed('edf:cookieManager getPermissionsCookie');
				console.log(this.permissions);
				console.groupEnd();
			}

			return this.permissions;
		},

		setPermissionsCookie : function(bHasImplicitConsent) {
			/* set user CNIL permissions in cookie */
			var aData = [],
				expires = parseInt(this.permissions.e, 10);

			/* setting cookie expiration date 13 months after the first visit */
			if (!expires) {
				expires = new Date();
				expires.setMonth(expires.getMonth() + 13);
				/* storing date in cookie */
				this.permissions.e = expires.getTime();
			}
			if (this.debug() && (typeof bHasImplicitConsent === 'undefined' || bHasImplicitConsent)) {
				console.info('edf:cookieManager cookie expiration date set to', new Date(expires));
			}
			expires = (expires - new Date()) / 1000 / 60 / 60 / 24;

			if (this.form) {
				this.form.eachField(function(field) {
					this.permissions[field.name] = field.isChecked();
				});
			}

			for (var i in this.permissions) {
				if (this.permissions.hasOwnProperty(i)) {
					aData.push(i + this.permissions[i]);
				}
			}

			if (!this.permissions.h || (typeof bHasImplicitConsent === 'boolean' && !bHasImplicitConsent)) {
				expires = ''; // setting permissions as session cookie while consent is false
			}

			if (this.debug()) {
				console.groupCollapsed('edf:cookieManager setPermissionsCookie', expires === '' ? 'session' : 'persistant');
				console.log(this.permissions);
				console.log('user consent', !!this.permissions.h);
				console.log('user has submit permissions form', !!this.permissions.f);
				console.log('tracking', !!this.permissions.t);
				console.log('advertising', !!this.permissions.a);
				console.log('social', !!this.permissions.s);
				if (this.permissions.p) {
					console.log('previous page', this.permissions.p);
				}
				console.log('expires', (this.permissions.e - new Date()) / 1000 / 60 / 60 / 24);
				console.groupEnd();
			}

			edf.cookies.set('cookies-permissions', aData.join('_'), expires, '/');

			return this.permissions;
		},

		cleanUpCookies : function() {
			for (var i in this.cookies) {
				if (this.cookies.hasOwnProperty(i)) {
					if (!this['get' + i.slice(0,1).toUpperCase() + i.slice(1) + 'Permission']()) {
						var j = this.cookies[i].length;

						while (j--) {
							if (this.debug()) {
								console.log('removing ' + i + ' cookie', this.cookies[i][j]);
							}
							edf.cookies.remove(this.cookies[i][j], '/');
						}
					}
				}
			}
		},

		open : function() {
			/* open permission form */
			if (edf.viewport.isDesktop()) {
				/* popin */
				if ('undefined' === typeof this.popin) {
					_createPopin();
				}
				this.popin.open();
			} else {
				/* window */
				W.open(l10n.cookieManager, 'cookieManager');
			}
		},

		init : function(bStandalone) {
			if (bStandalone) {
				// standalone page for not desktop
				cookieManagerForm.init(bStandalone);
			} else {
				cookieBanner.init(hasImplicitConsent || W.location.pathname == l10n.legalNotice); // don't show banner on legals page
			}
		}
	};

// =============================================================================
// step1 : getting user's current permissions
// =============================================================================
	var oPermissions = oMod.getPermissionsCookie(),
		hasImplicitConsent = !!oPermissions.h,
		currentUrl = W.location.href;

// =============================================================================
// step2 : setting user's permissions according to current page case
// =============================================================================
	if (currentUrl == W.location.protocol + '//' + W.location.host + l10n.legalNotice || !!!l10n.legalNotice) {
		/* cookie information page exception */
		/* l10n.legalNotice is undefined on standalone cookie manager form, consider it as legal notice */
		if (oMod.debug()) {
			console.info('edf:cookieManager legals page exception');
		}

		// nothing to do
	} else if (!oPermissions.h && oPermissions.p === currentUrl) {
		/* landing page reload exception */
		if (oMod.debug()) {
			console.info('edf:cookieManager detecting landing page refresh');
		}

		hasImplicitConsent = false; // force consent to false to (re-)display message
		oPermissions.h = 0; // no consent
	} else if (!hasImplicitConsent && !!oPermissions.p && oPermissions.p !== currentUrl) {
		/* next page */
		if (oMod.debug()) {
			console.info('edf:cookieManager getting cookies implicit consent with pursued navigation');
		}

		hasImplicitConsent = true; // force consent to true to hide message
		oPermissions.h = 1; // consent

		if (oMod.getFormSubmitted()) {
			/* we should never get here in standard user browsing path... */
			oPermissions.a = oMod.getAdvertisingPermission(); // setting previously submitted advertising permission
			oPermissions.s = oMod.getSocialPermission(); // setting previously submitted social permission
			oPermissions.t = oMod.getTrackingPermission(); // setting previously submitted tracking permission
		} else {
			oPermissions.a = !doNotTrack ? 1 : 0; // setting default advertising permission
			oPermissions.s = !doNotTrack ? 1 : 0; // setting default social permission
			oPermissions.t = !doNotTrack ? 1 : 0; // setting default tracking permission
		}

	} else if (hasImplicitConsent) {
		/* default */
		if (oMod.debug()) {
			console.info('edf:cookieManager default case');
		}

		// nothing to do
	} else {
		/* landing page exception */
		if (oMod.debug()) {
			console.info('edf:cookieManager landing page');
		}

		oPermissions.h = 0; // no consent
	}

	if (oMod.debug()) {
		console.info('user consent', hasImplicitConsent);
	}

	oPermissions.p = hasImplicitConsent ? 0 : currentUrl;

// =============================================================================
// step3 : clean up unauthorized cookies
// =============================================================================
	/* uncomment if needed */
	// oMod.cleanUpCookies();

// =============================================================================
// step4 : write user's current permission in cookie
// =============================================================================
	oMod.setPermissionsCookie(hasImplicitConsent);

	$D.ready(function() {
		/* standalone permission form domready */
		if (D.getElementById('cookie-manager-form')) {
			oMod.init(true);
		}
	});

	return oMod;
})();

})(window, document, jQuery);;
/*jshint bitwise:true, browser:true*/
/*global jQuery:false, console:false */
;(function analytics(W, D, $) {
/**
 * edf.analytics : handles Tag Commander scripts load & event tracking
 * @requires	jQuery
 * @requires	l10n
 * @requires	helpers.js
 * @requires	viewport.js
 * @requires	cookies.js
 */

'use strict';

if (typeof W.edf === 'undefined') {
	W.edf = {};
}
if (typeof W.l10n === 'undefined') {
	W.l10n = {};
}
if (typeof W.tc_vars === 'undefined') {
	W.tc_vars = {};
}
if (typeof W.tc_events_3 === 'undefined') {
	W.tc_events_3 = function() {};
}
if (typeof W.Drupal === 'undefined') {
	W.Drupal = {};
}

var $W = $(W),
	$D = $(D),
	edf = W.edf,
	l10n = W.l10n,
	tc_vars = W.tc_vars,
	Drupal = W.Drupal,
	aDomainsNotExit = [
		'.edf.fr', 
		'.edf.com', 
		'.nurunfrance.com',
		'.edf.gp', 
		'.edf.mq', 
		'.edf.gf', 
		'.edf.pm',
		'.deutschland.edf.com',
		'.italy.edf.com',
		'.russia.edf.com',
		'.asia.edf.com',
		'.belgique.edf.com',
		'.americas.edf.com',
		'.afrique.edf.com',
		'.middle-east.edf.com',
		'.edfluminus.edf.com'
		]; /* Domaine non-considérés comme étant des sorties */
		/*
	aDomainsNotExit = [
		'edf.fr', 'www.edf.fr',
		'edf.com', 'www.edf.com',
		'edf-fr.local.nurunfrance.com',
		'edf-fr-content.test.nurunfrance.com',
		'particulier.edf.fr',
		'particuliers.edf.com',
		'pulse.edf.com',
		'travaux.edf.fr',
		'edf.gp', 'www.edf.gp',
		'edf.mq', 'www.edf.mq',
		'edf.gf', 'www.edf.gf',
		'edf.pm', 'www.edf.pm',
		'reunion.edf.fr',
		'corse.edf.fr'
		];*/ 

edf.analytics = (function analyticsModule() {
// =============================================================================
// Global analytics management
// =============================================================================
	var reDataPairs = /([^=]+)=([^;]+);?/g,

	_getElmData = function($elm, sDataName) {
		/**
		 * return object containing $elm data-sDataName attribute
		 */
		var sData = $elm.attr('data-' + sDataName);
		if (!sData) {
			return null;
		}

		var oData = {},
			aParts = reDataPairs.exec(sData);

		while(aParts) {
			oData[decodeURIComponent(aParts[1])] = decodeURIComponent(aParts[2]);
			aParts = reDataPairs.exec(sData);
		}

		return oData;
	},

	_setElmData = function($elm, sDataName, oData) {
		/**
		 * update/set $elm data-sDataName attribute
		 */
		var oExisting = _getElmData($elm, sDataName) || {},
			aData = [], sProp;

		for (sProp in oData) {
			if (oData.hasOwnProperty(sProp)) {
				oExisting[sProp] = oData[sProp];
			}
		}
		for (sProp in oExisting) {
			if (oExisting.hasOwnProperty(sProp)) {
				aData.push(sProp + '=' + oExisting[sProp]);
			}
		}

		$elm.attr('data-' + sDataName, aData.join(';'));
	},

	_handleEvent = function(oEvt, oEvtData) {
		if (oEvtData) {
			var $elm = $(oEvtData.elm),
				oData = _getElmData($elm, 'tag');

			if (!oData) {
				oData = oEvtData;
			}

			if (oData) {
				/* perform changes on tag data set before sending */
				oData = _handleBeforeActions($elm, oData);

				if (edf.loadscript.loaded.tc3) {
					if ('click' === oEvtData.type || 'telechargement' === oEvtData.type || 'navigation' === oEvtData.type || 'sortie' === oEvtData.type || 'action' === oEvtData.type) {
						oAnalytics.trackclick(oData);
					} else if ('page' === oEvtData.type) {
						oAnalytics.trackpage(oData);
					}
				}

				/* perform changes on element tag data set after sending */
				_handleAfterActions($elm, oData);
			}
		}
	},
	_extractDomain = function(url) {
	    var domain;
	    //find & remove protocol (http, ftp, etc.) and get domain
	    if (url.indexOf("://") > -1) {
	        domain = url.split('/')[2];
	    }
	    else {
	        domain = url.split('/')[0];
	    }

	    //find & remove port number
	    domain = domain.split(':')[0];

	    return domain;
	},
	_clickHandler = (function trackClickModule() {
// =============================================================================
// delegate click tracking
// =============================================================================
		var oClick = {
			isRunning : false,

			MAX_ITER_EXTERNAL : 10,

			getClickLocation : function($elm) {
				var edf_ev_emplacement_value = '';
				var bloc_social = $elm.closest('.bloc-social-network');
				if (bloc_social.length) {//Detect zone blocs sociaux
					if (bloc_social.hasClass('facebook')) {
						edf_ev_emplacement_value = 'facebook';
					} else if (bloc_social.hasClass('twitter')) {
						edf_ev_emplacement_value = 'twitter';
					} else if (bloc_social.hasClass('instagram')) {
						edf_ev_emplacement_value = 'instagram';
					} else if (bloc_social.hasClass('youtube')) {
						edf_ev_emplacement_value = 'youtube';
					}
				} else if ($elm.closest('.doc-item-dl-simple').length) {//Detect nb téléchargement
					edf_ev_emplacement_value = 'telechargements_documents';
				}else if ($elm.closest('.header-main-menu').length) {//Detect zone telecommande
					edf_ev_emplacement_value = 'Telecommande';
				} else if ($elm.closest('.header-secondary-menus').length) {//Detect zone galatik barre
					edf_ev_emplacement_value = 'Header';
				} else if ($elm.closest('#header-slideshow').length) {//Detect zone caroussel
					edf_ev_emplacement_value = 'Caroussel';
				} else if ($elm.closest('.content').length) {//Detect zone contenu
					edf_ev_emplacement_value = 'Push';
				} else if ($elm.closest('#personalization-wrapper').length) {//Detect zone perso
					edf_ev_emplacement_value = 'Push_Mag';
				} else if ($elm.closest('#footer').length) {//Detect zone Footer
					edf_ev_emplacement_value = 'Footer';
				} else if ($elm.length == 1 && $('.youtube-video iframe').length) {//Detect nb téléchargement
					edf_ev_emplacement_value = 'push_video';
				} 
				return edf_ev_emplacement_value;
			},
			isExitLink : function(sHref) {
				var currentDomain = _extractDomain(sHref);
				for (var i=0; i < aDomainsNotExit.length; i++) {
					if (currentDomain.indexOf(aDomainsNotExit[i]) >= 0) {
						return false;
					}
				}
				return true;
			},
			trackAllLinks : function() {
				var that = this;

				$D.click(function unifiedTrackingClickDelegation(oEvt) {
					var elm = oEvt.target,
						i = 0,
						maxIter = that.MAX_ITER_EXTERNAL;
					while (elm && i <= maxIter) {
						var sTag = elm.tagName ? elm.tagName.toUpperCase() : null;
						if ($(elm).hasClass('doubleclick')) {
							if(_getElmData($(elm), 'doubleClickType').n1 != undefined){var type = _getElmData($(elm), 'doubleClickType').n1}
							var onlyLaunchTagWithCat = ["etgn3lp", "etpconne", "etpcerbt"];

							/**
								cas spécifique quand il y a plusieurs tags de clique doubleclick sur une même page avec cat différentes
								On se base sur la cat (doubleclick_cat) de la page pour ou non lancer le tag
							**/
							if(onlyLaunchTagWithCat.indexOf(tC.internalvars.doubleclick_cat) != -1){								
								$D.trigger('edf:analytics.trackevent', {
									type : 'navigation',
									elm :  elm,
									category : 'doubleclick',
									n1 : type
								});
							}
						} 
						if (sTag && ('A' === sTag || 'BUTTON' === sTag && 'submit' !== elm.type)) {
							if ('A' === sTag && that.isExitLink(elm.href)) {
								/* Lien de sortie */

									var edf_ev_emplacement_value = that.getClickLocation($(elm));
									if(_getElmData($(elm), 'tag')){var namePush = _getElmData($(elm), 'tag').n3;}							
									$D.trigger('edf:analytics.trackevent', {
										type : 'sortie',
										category : 'all',
										n1 : 'Sortie',
										n2 : '',
										n3 : edf.slugifyTag($(elm).find('.text').text()),
										n4 : document.location.pathname,
										n7 : namePush,
										edf_ev_emplacement : edf_ev_emplacement_value
									});

							} else if ('A' === sTag && $(elm).parent().hasClass('header-quick-access-item')) {
								/* Quick Access */
								$D.trigger('edf:analytics.trackevent', {
									type : 'navigation',
									category : $("#header .header-main-menu-wrapper").data('section'),
									n1 : 'Quick_Access',
									n2 : '',
									n3 : edf.slugifyTag($(elm).text()),
									n4 : document.location.pathname
								});
							} else if ('A' === sTag && $(elm).parent().parent().hasClass('keywords')) {
								/* Keywords */
								$D.trigger('edf:analytics.trackevent', {
									type : 'navigation',
									category : 'articles',
									n1 : edf.slugifyTag($(".bloc-title h1").text()),
									keywords_nav : edf.slugifyTag($(elm).text())
								});
							} else {
								$D.trigger('edf:analytics.trackevent', {
									type : 'click',
									elm :  elm
								});
							}

							break;
						}
						i++;
						elm = elm.parentNode;
					}
				});
			},

			init : function() {
				if (!this.isRunning) {
					this.isRunning = true;
					if (oAnalytics.debug()) {
						console.info('edf:analytics click-tracking start');
					}
					this.trackAllLinks();
				}
			}
		};

		return oClick;
	})(),

	_getPlace = function() {
		/* returns 'tc_vars.S1/tc_vars.S2/tc_vars.S3' */
		var a = [];

		if (tc_vars.S1) { a.push(tc_vars.S1); }
		if (tc_vars.S2) { a.push(tc_vars.S2); }
		if (tc_vars.S3) { a.push(tc_vars.S3); }
		if (tc_vars.S4) { a.push(tc_vars.S4); }
		if (tc_vars.S5) { a.push(tc_vars.S5); }

		return a.join('/');
	},

	_scrollHandler = (function trackScrollModule() {
// =============================================================================
// handles scroll tracking
// =============================================================================
		var pageHeight, scroll50, scroll75,

		DataScroll = function($elm) {
			/**
			 * constructor : stores $elm data-display-tag
			 */
			this.$elm = $elm;
			this.tag = _getElmData(this.$elm, 'display-tag');
			if (tc_vars && tc_vars.html_id && $elm.closest('#' + tc_vars.html_id).length) {
				/* personalization tags */
				this.tag.n2 = _getPlace();
				this.tag.n4 = tc_vars.cible;
				this.tag.n6 = tc_vars.keywords;
				this.tag.html_id = tc_vars.html_id;

				/* updating click tag */
				var oTag = {};
				for (var i in this.tag) {
					if (this.tag.hasOwnProperty(i) && i !== 'n1') {
						oTag[i] = this.tag[i];
					}
				}
				_setElmData($elm, 'tag', oTag);
			} else if (!this.tag.n2) {
				this.tag.n2 = 'affichage';
			}

			return this;
		};

		DataScroll.prototype = {
			gettop : function() {
				return this.$elm.offset().top;
			},
			getbottom : function() {
				return this.gettop() + this.$elm.outerHeight();
			}
		};

		var _collectData = function() {
			/**
			 * gather display-tag datas
			 */
			if (!oScroll.scrollData) {
				oScroll.scrollData = [];
			}
			$('div[data-display-tag], a[data-display-tag]').each(function(i, elm) {
				var $elm = $(elm);

				oScroll.scrollData.push(new DataScroll($elm));
			});
		},

		_handleScroll = function(oEvt, oEvtData) {
			/**
			 * scroll tracking, based on "data-display-tag" attribute
			 */
			var scrollTop = oEvtData ? oEvtData.scrollTop : $W.scrollTop();

			pageHeight = $D.height();
			scroll50 = scroll50 ? pageHeight / 2 - edf.viewport.height : scroll50;
			scroll75 = scroll75 ? pageHeight * 3 / 4 - edf.viewport.height : scroll75;

			if (scroll50 && (scrollTop >= scroll50)) {
				oAnalytics.trackclick({
					type : 'action',
					category : 'all',
					n1 : 'scroll50'
				});
				scroll50 = false;
			}
			if (scroll75 && (scrollTop >= scroll75)) {
				oAnalytics.trackclick({
					type : 'action',
					category : 'all',
					n1 : 'scroll75'
				});
				scroll75 = false;
			}

			var aScrollData = oAnalytics.scroll.scrollData;

			if (aScrollData && aScrollData.length) {
				var i = aScrollData.length,
					scrollBottom = scrollTop + edf.viewport.height;

				while(i--) {
					var oData = aScrollData[i],
						elementTop = oData.gettop(),
						elementBottom = oData.getbottom();

					if (!oData.bTop && elementTop > scrollTop && scrollBottom > elementTop) {
						oData.bTop = true;
					}
					if (!oData.bBottom && elementBottom > scrollTop && scrollBottom > elementBottom) {
						oData.bBottom = true;
					}
					if (oData.bTop && oData.bBottom) {
						if (oAnalytics.debug()) {
							console.info('edf:analytics track display');
						}
						oAnalytics.trackpage(oData.tag);
						oData.$elm.removeAttr('data-display-tag');
						aScrollData.splice(i, 1); // remove push data from array to prevent multiple tags
					}
				}
			}
		},

		oScroll = {
			init : function() {
				pageHeight = $D.height();
				scroll50 = (pageHeight / 2) - edf.viewport.height;
				scroll75 = (3 * pageHeight / 4) - edf.viewport.height;

				_collectData();
				_handleScroll();
				if (!oScroll.started) {
					oScroll.started = true;
					$D.on('edf:viewport.scroll-end.analytics', _handleScroll);
				}
			},

			destroy : function() {
				$D.off('edf:viewport.scroll-end.analytics');
			}
		};

		return oScroll;
	})(),

	_formHandler = (function trackFormSubmitModule() {
// =============================================================================
// handles form submission tracking
// =============================================================================
		var _handleSubmit = function() {
			if (oAnalytics.debug()) {
				console.info('edf:analytics form submit');
			}

			$D.trigger('edf:analytics.trackevent', {
				type : 'click',
				elm : $(this)
			});
		},

		oForm = {
			init : function() {
				$D.on('submit.edf:analytics', 'form[data-tag]', _handleSubmit);
				$('form[data-tag]').each(function() {
					/* Views exposed form tracking */
					var $view = $(this).closest('.view');

					if ($view.length) {
						var aClasses = $view.attr('class').split(' '),
							i = aClasses.length,
							sClass;

						while(i--) {
							if (aClasses[i].indexOf('view-dom-id') === 0) {
								sClass = aClasses[i];
								break;
							}
						}

						Drupal.behaviors['analytics-' + sClass] = {
							attach : function($context) {
								if ($context.closest('.' + sClass).length) {
									$D.trigger('edf:analytics.trackevent', {
										type : 'click',
										elm : $context
									});
								}
							}
						};
					}
				});
			},

			destroy : function() {
				$D.off('submit.edf:analytics RefreshView.edf:analytics');
			}
		};

		return oForm;
	})(),

	_printHandler = (function() {
	    var beforePrint = function() {
	        $D.trigger('edf:analytics.trackevent', {
				type : 'action',
				category : 'all',
				n1 : 'Impression'
			});
	    };
	    var afterPrint = function() {
	        /* console.log('Functionality to run after printing'); */
	    };

	    if (window.matchMedia) {
	        var mediaQueryList = window.matchMedia('print');
	        if ("addListener" in mediaQueryList) {
		        mediaQueryList.addListener(function(mql) {
		            if (mql.matches) {
		                beforePrint();
		            } else {
		                afterPrint();
		            }
		        });
	    	}
	    }

	    window.onbeforeprint = beforePrint;
	    window.onafterprint = afterPrint;
	})(),

	_slickInitHandler = function(oEvt, slick) {
		var $slickContext = $(slick.$slides['context']);

		if(!$slickContext.hasClass('slider-nav')){
			_slickHandler(oEvt, slick);
			$slickContext.on('afterChange', _slickHandler);
		}

	},

	_slickHandler = function(oEvt, slick) {
// =============================================================================
// handles slick sliders tracking
// =============================================================================
		var trackSlide = function($active) {
			$D.trigger('edf:analytics.trackevent', {
				type : 'page',
				elm : $active[0]
			});
		};

		var $active = slick.$slides.filter('.slick-active');

		if (oAnalytics.ready) {
			trackSlide($active);

		} else {
			$D.on('edf:analytics.ready', function() {
				trackSlide($active);
			});
		}
	},

	_track = function(oData) {
		/**
		 * tc_events_3 interface
		 */
		var oTag = {
			Event_Type		: oData.type || '',
			event_category	: oData.category || 'all',
			event_n1		: oData.n1 || '',
			event_n2		: oData.n2 || '',
			event_n3		: oData.n3 || '',
			event_n5		: oData.n5 || '',
			event_n6		: oData.n6 || '',
			event_n7		: oData.n7 || '',
			event_value		: oData.value || '',
			html_id			: oData.html_id || '',
			Event			: oData.event,
			cible_nav		: oData.cible_nav || tc_vars.cible_nav || '',
			keywords_nav	: oData.keywords_nav || tc_vars.keywords_nav  || '',
			edf_ev_emplacement : oData.edf_ev_emplacement || ''
		};
		oTag.event_n4 = (function() {
			if (oData.n4) {
				if ('null' === oData.n4) {
					return '';
				}
				return oData.n4;
			}
			return _getPlace();
		})();

		oTag.event_name = (function() {
			var a = [],
				i = 1, j = 7;

			for (;i <= j; i++) {
				var n = oTag['event_n' + i];
				if (n) {
					a.push(n);
				}
			}

			return a.join('/');
		})();

		if (oAnalytics.debug()) {
			console.info('edf:analytics tag ' + oTag.Event_Type + '/' + oTag.event_category + '/' + oTag.event_name + '/' + oTag.edf_ev_emplacement);
			console.log(oTag);
		}
		W.tc_events_3(W, '3', oTag);

		/**
		 * second arg is a static id provided by tag-commander :
		 * see sites/default/files/stats/tc_edfgroupe_3.js
		 * search for a condition on "tc_array_events["id"]"q
		 */
	},

	oListeners = {
		/* modules handlers */
		/* binds module initialization to event key */
		'init' : _slickInitHandler,
		'edf:analytics.trackevent' : _handleEvent
	},

	oBeforeActions = {
		/* actions performed on tag before sending */
		/* named after n1 */
		'traduire' : function($elm, oData) {
			oData.n4 = $elm.find('select').val();

			return oData;
		},
		'telecommande' : function($elm, oData) {
			if (!oData.n3) {
				oData.n2 = $elm.closest('.main-menu-item-level-1').hasClass('js-selected') ? 'ouverture' : 'fermeture';
			}

			return oData;
		},
		'filtres' : function($elm, oData) {
			oData.n2 = edf.slugify($elm.find('select').find('option:selected').text());
			oData.n3 = $elm.find('select').val();

			return oData;
		}
	},

	_handleBeforeActions = function($elm, oData) {
		if (oData.n1 && oBeforeActions[oData.n1]) {
			return oBeforeActions[oData.n1]($elm, oData);
		}
		return oData;
	},

	oAfterActions = {
		/* actions performed on $elm after sending tag */
		/* named after n1 */
		/* args
				$elm : jQuery element
				oData : tag data
		 */
		'accordeon' : function($elm, oData) {
			if (!$elm.closest('.description-truncated, .description-full').length) {
				oData.n2 = 'ouverture' === oData.n2 ? 'fermeture' : 'ouverture';
				_setElmData($elm, 'tag', oData);
			}
		},
		'telecommande' : function($elm, oData) {
			oData.n2 = 'ouverture' === oData.n2 ? 'fermeture' : 'ouverture';
			_setElmData($elm, 'tag', oData);
		},
		'burger-menu' : function($elm, oData) {
			oData.n2 = 'ouverture' === oData.n2 ? 'fermeture' : 'ouverture';
			_setElmData($elm, 'tag', oData);
		},
		'carroussel_hp' : function($elm) {
			if (edf.loadscript.loaded.tc3) {
				//$elm.removeAttr('data-tag');
			}
		},
		'carroussel' : function($elm) {
			if (edf.loadscript.loaded.tc3) {
				//$elm.removeAttr('data-tag');
			}
		}
	},

	_handleAfterActions = function($elm, oData) {
		if (oData.n1 && oAfterActions[oData.n1]) {
			oAfterActions[oData.n1]($elm, oData);
		}
	},

	oAnalytics = {
		ready : false,

		events : {
			/**
			 * can be reached from outside for extending purpose
			 */
			listeners : oListeners,
			before : oBeforeActions,
			after : oAfterActions
		},

		debug : function() {
			// return true;
			return l10n && l10n.jsDebug ? l10n.jsDebug : false;
		},

		setvar : function(key, value) {
			/**
			 * sets tc_vars[key] = value
			 */
			if (typeof tc_vars !== 'undefined') {
				if (this.debug()) {
					console.info('edf:analytics setting tc_vars[\'' + key + '\'] =', value);
				}

				tc_vars[key] = value;
			} else if (this.debug()) {
				console.warn('edf:analytics tc_vars undefined');
			}
		},

		trackclick : function(oData) {
			oData.event = 'clic';
			_track(oData);
		},

		trackpage : function(oData) {
			oData.event = 'page';
		},

		scroll : _scrollHandler
	},

	bGridLoad = false,

	timeout = W.setTimeout(function() {
		/* timeout fallback if personnalization grid fails */
		if (oAnalytics.debug()) {
			console.warn('edf:analytics grid timeout');
		}
		if (!bGridLoad) {
			$D.trigger('edf:personnalization.error');
		}
		/* load tc3 */
		_loadTc3();
	}, 5000),

	_appendGrid = function(oEvt) {
		if (oEvt && oEvt.html && D.getElementById(tc_vars.html_id)) {
			$('#' + tc_vars.html_id).append(oEvt.html);
		}
		_loadTc3();
		bGridLoad = true;
	},
	personalizationGridCallback = function(oEvt) {
		if (oAnalytics.debug()) {
			console.info('edf:analytics grid callback');
			console.log(oEvt);
		}

		if (typeof(oEvt) != 'undefined' && typeof(oEvt.location) != 'undefined') {
			edf.userLocation = oEvt.location;
			edf.header.otherLocaSuggestion.init();
		}
		
		if (oEvt && oEvt.userProfile) {
			var aTmp = [], i, j;

			if (oEvt.userProfile.profiles) {
				var aProfiles = oEvt.userProfile.profiles;

				for (i = 0, j = aProfiles.length; i < j; i++) {
					aTmp[aTmp.length] = aProfiles[i].name;
				}
				oAnalytics.setvar('cible_nav', aTmp.join('|'));
			}

			if (oEvt.userProfile.keywords) {
				var aKeywords = oEvt.userProfile.keywords;

				aTmp = [];

				for (i = 0, j = aKeywords.length; i < j; i++) {
					aTmp[aTmp.length] = aKeywords[i].keyword;
				}
				oAnalytics.setvar('keywords_nav', aTmp.join('|'));
			}
      
      if (oEvt.location) {
        oAnalytics.setvar('location_nav', oEvt.location);
      }
		}
// =============================================================================
// step2 : insert grid response in page on domready then load tc3
// =============================================================================
		if (D.readyState !== 'loading') {
			_appendGrid(oEvt);
		} else {
			$D.ready(function() {
				_appendGrid(oEvt);
			});
		}
	},

	_loadTc1 = function() {
		if (oAnalytics.debug()) {
			console.info('edf:analytics request tc_1');
		}

		/* init analytics listeners */
		for (var i in oListeners) {
			if (oListeners.hasOwnProperty(i) && 'function' === typeof oListeners[i]) {
				$D.on(i, oListeners[i]);
			}
		}

		edf.loadscript.load('tc1');
	},

	_loadTc3 = function() {
		if (oAnalytics.debug()) {
			console.info('edf:analytics request tc_3');
		}

		W.clearTimeout(timeout);
		edf.loadscript.load('tc3', {
			callback : function() {
				$D.trigger('edf:analytics.ready');
			}
		});
	};

// =============================================================================
// /!\ changes on tc_vars must be made before loading tc_1

// if some analytics data have to be set outside this file, use something like :
/*
	$D.on('edf:analytics.beforeinit', function setMyCustomData() { ... });
	$D.trigger('edf:analytics.beforeinit');
*/
// =============================================================================

	if (!!tc_vars.grid) {
		oAnalytics.setvar('callback', personalizationGridCallback);
	} else {
		/* empty tc_vars.grid indicates personnalization isn't available on current page */
		/* so there will be no callback from rzr() for loading tc3 */
		if (oAnalytics.debug()) {
			console.info('edf:analytics grid not set');
		}
		W.clearTimeout(timeout);
		/* callback manually launched */
		personalizationGridCallback();
	}

	oAnalytics.setvar('env_dnt', edf.cookieManager.getTrackingPermission() ? true : false);
	oAnalytics.setvar('env_cookies', edf.cookieManager.getAdvertisingPermission() ? true : false);

	if (edf.locationSearch && edf.locationSearch.lgg) {
		oAnalytics.setvar('id_langue', edf.locationSearch.lgg);
		oAnalytics.setvar('langue', edf.locationSearch.lgg);
	}

// =============================================================================
// =============================================================================

// =============================================================================
// step3 : init tracking methods
// =============================================================================
	$D.on('edf:analytics.ready', function() {

		/* init tracking publishers on tc3 script load */
		W.clearTimeout(timeout);
		oAnalytics.ready = true;
		_clickHandler.init();
		_scrollHandler.init();
		_formHandler.init();
	});

// =============================================================================
// step1 : load tc_edfgroupe_1.js
// =============================================================================
	_loadTc1();

	return oAnalytics;
})();

})(window, document, jQuery);
;
