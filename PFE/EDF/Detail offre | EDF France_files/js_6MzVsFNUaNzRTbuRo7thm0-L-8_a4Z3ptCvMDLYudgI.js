/*! VelocityJS.org (1.2.1). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(e){function t(e){var t=e.length,r=$.type(e);return"function"===r||$.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===r||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var $=function(e,t){return new $.fn.init(e,t)};$.isWindow=function(e){return null!=e&&e==e.window},$.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?a[o.call(e)]||"object":typeof e},$.isArray=Array.isArray||function(e){return"array"===$.type(e)},$.isPlainObject=function(e){var t;if(!e||"object"!==$.type(e)||e.nodeType||$.isWindow(e))return!1;try{if(e.constructor&&!n.call(e,"constructor")&&!n.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}for(t in e);return void 0===t||n.call(e,t)},$.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},$.data=function(e,t,a){if(void 0===a){var n=e[$.expando],o=n&&r[n];if(void 0===t)return o;if(o&&t in o)return o[t]}else if(void 0!==t){var n=e[$.expando]||(e[$.expando]=++$.uuid);return r[n]=r[n]||{},r[n][t]=a,a}},$.removeData=function(e,t){var a=e[$.expando],n=a&&r[a];n&&$.each(t,function(e,t){delete n[t]})},$.extend=function(){var e,t,r,a,n,o,i=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof i&&(u=i,i=arguments[s]||{},s++),"object"!=typeof i&&"function"!==$.type(i)&&(i={}),s===l&&(i=this,s--);l>s;s++)if(null!=(n=arguments[s]))for(a in n)e=i[a],r=n[a],i!==r&&(u&&r&&($.isPlainObject(r)||(t=$.isArray(r)))?(t?(t=!1,o=e&&$.isArray(e)?e:[]):o=e&&$.isPlainObject(e)?e:{},i[a]=$.extend(u,o,r)):void 0!==r&&(i[a]=r));return i},$.queue=function(e,r,a){function n(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,n=e.length;r>a;)e[n++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){r=(r||"fx")+"queue";var o=$.data(e,r);return a?(!o||$.isArray(a)?o=$.data(e,r,n(a)):o.push(a),o):o||[]}},$.dequeue=function(e,t){$.each(e.nodeType?[e]:e,function(e,r){t=t||"fx";var a=$.queue(r,t),n=a.shift();"inprogress"===n&&(n=a.shift()),n&&("fx"===t&&a.unshift("inprogress"),n.call(r,function(){$.dequeue(r,t)}))})},$.fn=$.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),r=this.offset(),a=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:$(e).offset();return r.top-=parseFloat(t.style.marginTop)||0,r.left-=parseFloat(t.style.marginLeft)||0,e.style&&(a.top+=parseFloat(e.style.borderTopWidth)||0,a.left+=parseFloat(e.style.borderLeftWidth)||0),{top:r.top-a.top,left:r.left-a.left}}};var r={};$.expando="velocity"+(new Date).getTime(),$.uuid=0;for(var a={},n=a.hasOwnProperty,o=a.toString,i="Boolean Number String Function Array Date RegExp Object Error".split(" "),s=0;s<i.length;s++)a["[object "+i[s]+"]"]=i[s].toLowerCase();$.fn.init.prototype=$.fn,e.Velocity={Utilities:$}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return g.isWrapped(e)?e=[].slice.call(e):g.isNode(e)&&(e=[e]),e}function i(e){var t=$.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,n){function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var n=0;m>n;++n){var o=u(r,e,a);if(0===o)return r;var i=l(r,e,a)-t;r-=i/o}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,n){var o,i,s=0;do i=r+(n-r)/2,o=l(i,e,a)-t,o>0?n=i:r=i;while(Math.abs(o)>h&&++s<v);return i}function d(t){for(var r=0,n=1,o=b-1;n!=o&&w[n]<=t;++n)r+=x;--n;var i=(t-w[n])/(w[n+1]-w[n]),s=r+i*x,l=u(s,e,a);return l>=y?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=n)&&p()}var m=4,y=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===n?t:0===t?0:1===t?1:l(d(t),r,n)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:n}]};var T="generateBezier("+[e,r,a,n]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return g.isString(e)?v.Easings[e]||(r=!1):r=g.isArray(e)&&1===e.length?s.apply(null,e):g.isArray(e)&&2===e.length?b.apply(null,e.concat([t])):g.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=v.Easings[v.defaults.easing]?v.defaults.easing:h),r}function c(e){if(e){var t=(new Date).getTime(),r=v.State.calls.length;r>1e4&&(v.State.calls=n(v.State.calls));for(var o=0;r>o;o++)if(v.State.calls[o]){var s=v.State.calls[o],l=s[0],u=s[2],f=s[3],d=!!f,m=null;f||(f=v.State.calls[o][3]=t-16);for(var y=Math.min((t-f)/u.duration,1),h=0,b=l.length;b>h;h++){var S=l[h],w=S.element;if(i(w)){var V=!1;if(u.display!==a&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var C=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];$.each(C,function(e,t){x.setPropertyValue(w,"display",t)})}x.setPropertyValue(w,"display",u.display)}u.visibility!==a&&"hidden"!==u.visibility&&x.setPropertyValue(w,"visibility",u.visibility);for(var T in S)if("element"!==T){var k=S[T],A,F=g.isString(k.easing)?v.Easings[k.easing]:k.easing;if(1===y)A=k.endValue;else{var E=k.endValue-k.startValue;if(A=k.startValue+E*F(y,u,E),!d&&A===k.currentValue)continue}if(k.currentValue=A,"tween"===T)m=A;else{if(x.Hooks.registered[T]){var j=x.Hooks.getRoot(T),H=i(w).rootPropertyValueCache[j];H&&(k.rootPropertyValue=H)}var N=x.setPropertyValue(w,T,k.currentValue+(0===parseFloat(A)?"":k.unitType),k.rootPropertyValue,k.scrollData);x.Hooks.registered[T]&&(i(w).rootPropertyValueCache[j]=x.Normalizations.registered[j]?x.Normalizations.registered[j]("extract",null,N[1]):N[1]),"transform"===N[0]&&(V=!0)}}u.mobileHA&&i(w).transformCache.translate3d===a&&(i(w).transformCache.translate3d="(0px, 0px, 0px)",V=!0),V&&x.flushTransformCache(w)}}u.display!==a&&"none"!==u.display&&(v.State.calls[o][2].display=!1),u.visibility!==a&&"hidden"!==u.visibility&&(v.State.calls[o][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],y,Math.max(0,f+u.duration-t),f,m),1===y&&p(o)}}v.State.isTicking&&P(c)}function p(e,t){if(!v.State.calls[e])return!1;for(var r=v.State.calls[e][0],n=v.State.calls[e][1],o=v.State.calls[e][2],s=v.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&x.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&x.setPropertyValue(p,"visibility",o.visibility)),o.loop!==!0&&($.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test($.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var f=!1;$.each(x.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,n=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(n)&&(f=!0,delete i(p).transformCache[t])}),o.mobileHA&&(f=!0,delete i(p).transformCache.translate3d),f&&x.flushTransformCache(p),x.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(d){setTimeout(function(){throw d},1)}s&&o.loop!==!0&&s(n),o.loop!==!0||t||($.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),v(p,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&$.dequeue(p,o.queue)}v.State.calls[e]=!1;for(var g=0,m=v.State.calls.length;m>g;g++)if(v.State.calls[g]!==!1){l=!0;break}l===!1&&(v.State.isTicking=!1,delete v.State.calls,v.State.calls=[])}var f=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),d=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r=(new Date).getTime(),a;return a=Math.max(0,16-(r-e)),e=r+a,setTimeout(function(){t(r+a)},a)}}(),g={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},$,m=!1;if(e.fn&&e.fn.jquery?($=e,m=!0):$=t.Velocity.Utilities,8>=f&&!m)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=f)return void(jQuery.fn.velocity=jQuery.fn.animate);var y=400,h="swing",v={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:$,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:y,easing:h,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){$.data(e,"velocity",{isSVG:g.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:1},debug:!1};t.pageYOffset!==a?(v.State.scrollAnchor=t,v.State.scrollPropertyLeft="pageXOffset",v.State.scrollPropertyTop="pageYOffset"):(v.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,v.State.scrollPropertyLeft="scrollLeft",v.State.scrollPropertyTop="scrollTop");var b=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o={x:-1,v:0,tension:null,friction:null},i=[0],s=0,l=1e-4,u=.016,c,p,f;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,o.tension=e,o.friction=t,c=null!==n,c?(s=a(e,t),p=s/n*u):p=u;;)if(f=r(f||o,p),i.push(1+f.x),s+=16,!(Math.abs(f.x)>l&&Math.abs(f.v)>l))break;return c?function(e){return i[e*(i.length-1)|0]}:s}}();v.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},$.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){v.Easings[t[0]]=l.apply(null,t[1])});var x=v.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<x.Lists.colors.length;e++){var t="color"===x.Lists.colors[e]?"0 0 0 1":"255 255 255 1";x.Hooks.templates[x.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,n;if(f)for(r in x.Hooks.templates){a=x.Hooks.templates[r],n=a[0].split(" ");var o=a[1].match(x.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),x.Hooks.templates[r]=[n.join(" "),o.join(" ")])}for(r in x.Hooks.templates){a=x.Hooks.templates[r],n=a[0].split(" ");for(var e in n){var i=r+n[e],s=e;x.Hooks.registered[i]=[r,s]}}},getRoot:function(e){var t=x.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return x.RegEx.valueUnwrap.test(t)&&(t=t.match(x.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(t)&&(t=x.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=x.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=x.Hooks.cleanRootPropertyValue(a,t),t.toString().match(x.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=x.Hooks.registered[e];if(a){var n=a[0],o=a[1],i,s;return r=x.Hooks.cleanRootPropertyValue(n,r),i=r.toString().match(x.RegEx.valueSplit),i[o]=t,s=i.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return x.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(x.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return v.State.isFirefox?"filter":"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var n=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=n?n[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=f)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=f||v.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(var e=0;e<x.Lists.transformsBase.length;e++)!function(){var t=x.Lists.transformsBase[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":v.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(i(r).transformCache[t]="("+n+")"),i(r).transformCache[t]}}}();for(var e=0;e<x.Lists.colors.length;e++)!function(){var t=x.Lists.colors[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return t;case"extract":var o;if(x.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?i=s[n]!==a?s[n]:s.black:x.RegEx.isHex.test(n)?i="rgb("+x.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(i=s.black),o=(i||n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=f||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=f?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=f?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(f||v.State.isAndroid&&!v.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(v.State.prefixMatches[e])return[v.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),g.isString(v.State.prefixElement.style[n]))return v.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,a;return e=e.replace(t,function(e,t,r,a){return t+t+r+r+a+a}),a=r.exec(e),a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&x.setPropertyValue(e,"display","none")}var l=0;if(8>=f)l=$.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===x.getPropertyValue(e,"display")&&(u=!0,x.setPropertyValue(e,"display",x.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(x.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(x.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var d;d=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===r&&(r="borderTopColor"),l=9===f&&"filter"===r?d.getPropertyValue(r):d[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var g=s(e,"position");("fixed"===g||"absolute"===g&&/top|left/i.test(r))&&(l=$(e).position()[r]+"px")}return l}var l;if(x.Hooks.registered[r]){var u=r,c=x.Hooks.getRoot(u);n===a&&(n=x.getPropertyValue(e,x.Names.prefixCheck(c)[0])),x.Normalizations.registered[c]&&(n=x.Normalizations.registered[c]("extract",e,n)),l=x.Hooks.extractValue(u,n)}else if(x.Normalizations.registered[r]){var p,d;p=x.Normalizations.registered[r]("name",e),"transform"!==p&&(d=s(e,x.Names.prefixCheck(p)[0]),x.Values.isCSSNullValue(d)&&x.Hooks.templates[r]&&(d=x.Hooks.templates[r][1])),l=x.Normalizations.registered[r]("extract",e,d)}if(!/^[\d-]/.test(l))if(i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r))if(/^(height|width)$/i.test(r))try{l=e.getBBox()[r]}catch(g){l=0}else l=e.getAttribute(r);else l=s(e,x.Names.prefixCheck(r)[0]);return x.Values.isCSSNullValue(l)&&(l=0),v.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(x.Normalizations.registered[r]&&"transform"===x.Normalizations.registered[r]("name",e))x.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(x.Hooks.registered[r]){var l=r,u=x.Hooks.getRoot(r);n=n||x.getPropertyValue(e,u),a=x.Hooks.injectValue(l,a,n),r=u}if(x.Normalizations.registered[r]&&(a=x.Normalizations.registered[r]("inject",e,a),r=x.Normalizations.registered[r]("name",e)),s=x.Names.prefixCheck(r)[0],8>=f)try{e.style[s]=a}catch(c){v.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;v.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(x.getPropertyValue(e,t))}var r="";if((f||v.State.isAndroid&&!v.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};$.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;$.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===f&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}x.setPropertyValue(e,"transform",r)}};x.Hooks.register(),x.Normalizations.register(),v.hook=function(e,t,r){var n=a;return e=o(e),$.each(e,function(e,o){if(i(o)===a&&v.init(o),r===a)n===a&&(n=v.CSS.getPropertyValue(o,t));else{var s=v.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&v.CSS.flushTransformCache(o),n=s}}),n};var S=function(){function e(){return l?T.promise||null:f}function n(){function e(e){function p(e,t){var r=a,i=a,s=a;return g.isArray(e)?(r=e[0],!g.isArray(e[1])&&/^[\d-]/.test(e[1])||g.isFunction(e[1])||x.RegEx.isHex.test(e[1])?s=e[1]:(g.isString(e[1])&&!x.RegEx.isHex.test(e[1])||g.isArray(e[1]))&&(i=t?e[1]:u(e[1],o.duration),e[2]!==a&&(s=e[2]))):r=e,t||(i=i||o.easing),g.isFunction(r)&&(r=r.call(n,w,P)),g.isFunction(s)&&(s=s.call(n,w,P)),[r||0,i,s]}function f(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=x.Values.getUnitType(e)),[a,r]}function d(){var e={myParent:n.parentNode||r.body,position:x.getPropertyValue(n,"position"),fontSize:x.getPropertyValue(n,"fontSize")},a=e.position===N.lastPosition&&e.myParent===N.lastParent,o=e.fontSize===N.lastFontSize;N.lastParent=e.myParent,N.lastPosition=e.position,N.lastFontSize=e.fontSize;var s=100,l={};if(o&&a)l.emToPx=N.lastEmToPx,l.percentToPxWidth=N.lastPercentToPxWidth,l.percentToPxHeight=N.lastPercentToPxHeight;else{var u=i(n).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");v.init(u),e.myParent.appendChild(u),$.each(["overflow","overflowX","overflowY"],function(e,t){v.CSS.setPropertyValue(u,t,"hidden")}),v.CSS.setPropertyValue(u,"position",e.position),v.CSS.setPropertyValue(u,"fontSize",e.fontSize),v.CSS.setPropertyValue(u,"boxSizing","content-box"),$.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){v.CSS.setPropertyValue(u,t,s+"%")}),v.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=N.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=N.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=N.lastEmToPx=(parseFloat(x.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===N.remToPx&&(N.remToPx=parseFloat(x.getPropertyValue(r.body,"fontSize"))||16),null===N.vwToPx&&(N.vwToPx=parseFloat(t.innerWidth)/100,N.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=N.remToPx,l.vwToPx=N.vwToPx,l.vhToPx=N.vhToPx,v.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),n),l}if(o.begin&&0===w)try{o.begin.call(m,m)}catch(y){setTimeout(function(){throw y},1)}if("scroll"===k){var S=/^x$/i.test(o.axis)?"Left":"Top",V=parseFloat(o.offset)||0,C,A,F;o.container?g.isWrapped(o.container)||g.isNode(o.container)?(o.container=o.container[0]||o.container,C=o.container["scroll"+S],F=C+$(n).position()[S.toLowerCase()]+V):o.container=null:(C=v.State.scrollAnchor[v.State["scrollProperty"+S]],A=v.State.scrollAnchor[v.State["scrollProperty"+("Left"===S?"Top":"Left")]],F=$(n).offset()[S.toLowerCase()]+V),s={scroll:{rootPropertyValue:!1,startValue:C,currentValue:C,endValue:F,unitType:"",easing:o.easing,scrollData:{container:o.container,direction:S,alternateValue:A}},element:n},v.debug&&console.log("tweensContainer (scroll): ",s.scroll,n)}else if("reverse"===k){if(!i(n).tweensContainer)return void $.dequeue(n,o.queue);"none"===i(n).opts.display&&(i(n).opts.display="auto"),"hidden"===i(n).opts.visibility&&(i(n).opts.visibility="visible"),i(n).opts.loop=!1,i(n).opts.begin=null,i(n).opts.complete=null,b.easing||delete o.easing,b.duration||delete o.duration,o=$.extend({},i(n).opts,o);var E=$.extend(!0,{},i(n).tweensContainer);for(var j in E)if("element"!==j){var H=E[j].startValue;E[j].startValue=E[j].currentValue=E[j].endValue,E[j].endValue=H,g.isEmptyObject(b)||(E[j].easing=o.easing),v.debug&&console.log("reverse tweensContainer ("+j+"): "+JSON.stringify(E[j]),n)}s=E}else if("start"===k){var E;i(n).tweensContainer&&i(n).isAnimating===!0&&(E=i(n).tweensContainer),$.each(h,function(e,t){if(RegExp("^"+x.Lists.colors.join("$|^")+"$").test(e)){var r=p(t,!0),n=r[0],o=r[1],i=r[2];if(x.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=x.Values.hexToRgb(n),u=i?x.Values.hexToRgb(i):a,c=0;c<s.length;c++){var f=[l[c]];o&&f.push(o),u!==a&&f.push(u[c]),h[e+s[c]]=f}delete h[e]}}});for(var R in h){var O=p(h[R]),z=O[0],q=O[1],M=O[2];R=x.Names.camelCase(R);var I=x.Hooks.getRoot(R),B=!1;if(i(n).isSVG||"tween"===I||x.Names.prefixCheck(I)[1]!==!1||x.Normalizations.registered[I]!==a){(o.display!==a&&null!==o.display&&"none"!==o.display||o.visibility!==a&&"hidden"!==o.visibility)&&/opacity|filter/.test(R)&&!M&&0!==z&&(M=0),o._cacheValues&&E&&E[R]?(M===a&&(M=E[R].endValue+E[R].unitType),B=i(n).rootPropertyValueCache[I]):x.Hooks.registered[R]?M===a?(B=x.getPropertyValue(n,I),M=x.getPropertyValue(n,R,B)):B=x.Hooks.templates[I][1]:M===a&&(M=x.getPropertyValue(n,R));var W,G,D,X=!1;if(W=f(R,M),M=W[0],D=W[1],W=f(R,z),z=W[0].replace(/^([+-\/*])=/,function(e,t){return X=t,""}),G=W[1],M=parseFloat(M)||0,z=parseFloat(z)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(R)?(z/=100,G="em"):/^scale/.test(R)?(z/=100,G=""):/(Red|Green|Blue)$/i.test(R)&&(z=z/100*255,G="")),/[\/*]/.test(X))G=D;else if(D!==G&&0!==M)if(0===z)G=D;else{l=l||d();var Y=/margin|padding|left|right|width|text|word|letter/i.test(R)||/X$/.test(R)||"x"===R?"x":"y";switch(D){case"%":M*="x"===Y?l.percentToPxWidth:l.percentToPxHeight;break;case"px":break;default:M*=l[D+"ToPx"]}switch(G){case"%":M*=1/("x"===Y?l.percentToPxWidth:l.percentToPxHeight);break;case"px":break;default:M*=1/l[G+"ToPx"]}}switch(X){case"+":z=M+z;break;case"-":z=M-z;break;case"*":z=M*z;break;case"/":z=M/z}s[R]={rootPropertyValue:B,startValue:M,currentValue:M,endValue:z,unitType:G,easing:q},v.debug&&console.log("tweensContainer ("+R+"): "+JSON.stringify(s[R]),n)}else v.debug&&console.log("Skipping ["+I+"] due to a lack of browser support.")}s.element=n}s.element&&(x.Values.addClass(n,"velocity-animating"),L.push(s),""===o.queue&&(i(n).tweensContainer=s,i(n).opts=o),i(n).isAnimating=!0,w===P-1?(v.State.calls.push([L,m,o,null,T.resolver]),v.State.isTicking===!1&&(v.State.isTicking=!0,c())):w++)}var n=this,o=$.extend({},v.defaults,b),s={},l;switch(i(n)===a&&v.init(n),parseFloat(o.delay)&&o.queue!==!1&&$.queue(n,o.queue,function(e){v.velocityQueueEntryFlag=!0,i(n).delayTimer={setTimeout:setTimeout(e,parseFloat(o.delay)),next:e}}),o.duration.toString().toLowerCase()){case"fast":o.duration=200;break;case"normal":o.duration=y;break;case"slow":o.duration=600;break;default:o.duration=parseFloat(o.duration)||1}v.mock!==!1&&(v.mock===!0?o.duration=o.delay=1:(o.duration*=parseFloat(v.mock)||1,o.delay*=parseFloat(v.mock)||1)),o.easing=u(o.easing,o.duration),o.begin&&!g.isFunction(o.begin)&&(o.begin=null),o.progress&&!g.isFunction(o.progress)&&(o.progress=null),o.complete&&!g.isFunction(o.complete)&&(o.complete=null),o.display!==a&&null!==o.display&&(o.display=o.display.toString().toLowerCase(),"auto"===o.display&&(o.display=v.CSS.Values.getDisplayType(n))),o.visibility!==a&&null!==o.visibility&&(o.visibility=o.visibility.toString().toLowerCase()),o.mobileHA=o.mobileHA&&v.State.isMobile&&!v.State.isGingerbread,o.queue===!1?o.delay?setTimeout(e,o.delay):e():$.queue(n,o.queue,function(t,r){return r===!0?(T.promise&&T.resolver(m),!0):(v.velocityQueueEntryFlag=!0,void e(t))}),""!==o.queue&&"fx"!==o.queue||"inprogress"===$.queue(n)[0]||$.dequeue(n)}var s=arguments[0]&&(arguments[0].p||$.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||g.isString(arguments[0].properties)),l,f,d,m,h,b;if(g.isWrapped(this)?(l=!1,d=0,m=this,f=this):(l=!0,d=1,m=s?arguments[0].elements||arguments[0].e:arguments[0]),m=o(m)){s?(h=arguments[0].properties||arguments[0].p,b=arguments[0].options||arguments[0].o):(h=arguments[d],b=arguments[d+1]);var P=m.length,w=0;if(!/^(stop|finish)$/i.test(h)&&!$.isPlainObject(b)){var V=d+1;b={};for(var C=V;C<arguments.length;C++)g.isArray(arguments[C])||!/^(fast|normal|slow)$/i.test(arguments[C])&&!/^\d/.test(arguments[C])?g.isString(arguments[C])||g.isArray(arguments[C])?b.easing=arguments[C]:g.isFunction(arguments[C])&&(b.complete=arguments[C]):b.duration=arguments[C]}var T={promise:null,resolver:null,rejecter:null};l&&v.Promise&&(T.promise=new v.Promise(function(e,t){T.resolver=e,T.rejecter=t}));var k;switch(h){case"scroll":k="scroll";break;case"reverse":k="reverse";break;case"finish":case"stop":$.each(m,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var A=[];return $.each(v.State.calls,function(e,t){t&&$.each(t[1],function(r,n){var o=b===a?"":b;return o===!0||t[2].queue===o||b===a&&t[2].queue===!1?void $.each(m,function(r,a){a===n&&((b===!0||g.isString(b))&&($.each($.queue(a,g.isString(b)?b:""),function(e,t){g.isFunction(t)&&t(null,!0)}),$.queue(a,g.isString(b)?b:"",[])),"stop"===h?(i(a)&&i(a).tweensContainer&&o!==!1&&$.each(i(a).tweensContainer,function(e,t){t.endValue=t.currentValue
}),A.push(e)):"finish"===h&&(t[2].duration=1))}):!0})}),"stop"===h&&($.each(A,function(e,t){p(t,!0)}),T.promise&&T.resolver(m)),e();default:if(!$.isPlainObject(h)||g.isEmptyObject(h)){if(g.isString(h)&&v.Redirects[h]){var F=$.extend({},b),E=F.duration,j=F.delay||0;return F.backwards===!0&&(m=$.extend(!0,[],m).reverse()),$.each(m,function(e,t){parseFloat(F.stagger)?F.delay=j+parseFloat(F.stagger)*e:g.isFunction(F.stagger)&&(F.delay=j+F.stagger.call(t,e,P)),F.drag&&(F.duration=parseFloat(E)||(/^(callout|transition)/.test(h)?1e3:y),F.duration=Math.max(F.duration*(F.backwards?1-e/P:(e+1)/P),.75*F.duration,200)),v.Redirects[h].call(t,t,F||{},e,P,m,T.promise?T:a)}),e()}var H="Velocity: First argument ("+h+") was not a property map, a known action, or a registered redirect. Aborting.";return T.promise?T.rejecter(new Error(H)):console.log(H),e()}k="start"}var N={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},L=[];$.each(m,function(e,t){g.isNode(t)&&n.call(t)});var F=$.extend({},v.defaults,b),R;if(F.loop=parseInt(F.loop),R=2*F.loop-1,F.loop)for(var O=0;R>O;O++){var z={delay:F.delay,progress:F.progress};O===R-1&&(z.display=F.display,z.visibility=F.visibility,z.complete=F.complete),S(m,"reverse",z)}return e()}};v=$.extend(S,v),v.animate=S;var P=t.requestAnimationFrame||d;return v.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(P=function(e){return setTimeout(function(){e(!0)},16)},c()):P=t.requestAnimationFrame||d}),e.Velocity=v,e!==t&&(e.fn.velocity=S,e.fn.velocity.defaults=v.defaults),$.each(["Down","Up"],function(e,t){v.Redirects["slide"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},f={};l.display===a&&(l.display="Down"===t?"inline"===v.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i);for(var r in p){f[r]=e.style[r];var a=v.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}f.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in f)e.style[t]=f[t];c&&c.call(i,i),s&&s.resolver(i)},v(e,p,l)}}),$.each(["In","Out"],function(e,t){v.Redirects["fade"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),v(this,u,l)}}),v}(window.jQuery||window.Zepto||window,window,document)});;
/*jshint bitwise:true, browser:true*/
/*global jQuery:false */
;(function footer(W, D, $) {
/**
 * Footer management
 *
 * initialized in global.js
 */

'use strict';

if (typeof W.edf === 'undefined') {
	W.edf = {};
}
var edf = W.edf;

edf.footer = (function edfFooterModule() {
	var $tabsUl, $tabsLi, $tabs, $contents, $select,

	_toggleTab = function($tab) {
		$tabs.attr({
			'tabindex' : -1,
			'aria-selected' : 'false'
		});
		$tabsLi.removeClass('expanded');
		$tab.attr({
			'aria-selected' : 'true',
			'tabindex' : 0
		}).closest('li').addClass('expanded');

		$contents.attr('aria-hidden', 'true').removeClass('expanded');

		// remove aria-hidden on tab linked
		$('#footer_' + $tab.attr('aria-controls')).removeAttr('aria-hidden').addClass('expanded');
	},

	_handleTabAction = function(oEvt) {
		oEvt.preventDefault();

		var $this = $(this),
			tagName = this.tagName.toLowerCase(),
			$tab = tagName === 'a' ? $this : tagName === 'select' ? $tabs.eq($this.val()) : null;

		if ($tab && $tab.length) {
			_toggleTab($tab);
		}
	},

	_handleTabKey = function(oEvt) {
		var $activated = $tabs.filter('[aria-selected="true"]').closest('.depth-1'),
			keyCode = oEvt.keyCode,

		clickFirstTab = function() {
			$tabs.first().click().focus();
		},

		clickLastTab = function() {
			$tabs.last().click().focus();
		};

		if ($.inArray(keyCode, [35,36,37,38,39,40]) > -1) {
			oEvt.preventDefault();
		}

		if (!oEvt.ctrlKey) {
			// strike up or left in the tab
			switch(keyCode) {
				case 37 : // left arrow key
				case 38 : // top arrow key
					// go to prev tab
					if ($activated.index() === 0) {
						// first to last
						clickLastTab();
					} else {
						$activated.prev().children('.tab').click().focus();
					}
					break;
				case 39 : // right arrow key
				case 40 : // bottom arrow key
					// go to next tab
					if ($activated.index() === $tabs.length - 1) {
						// last to first
						clickFirstTab();
					} else {
						$activated.next().children('.tab').click().focus();
					}
					break;
				case 36 : // home key
					clickFirstTab();
					break;
				case 35 : // end key
					clickLastTab();
					break;
				default :
					break;
			}
		}
	},

	oMod = {
		init : function() {
			this.$root = $('#footer');

			$tabsUl = this.$root.find('.menu.tabs');
			$tabsLi = $tabsUl.children('li');
			$tabs = $tabsUl.find('.tab');
			$contents = this.$root.find('.menu.menu-full').find('.depth-1');

			$select = this.$root.find('select#select-categories');

			$tabsUl.attr('role', 'tablist')
				.children('.depth-1').attr('role', 'presentation');

			$tabs.attr('role', 'tab').each(function() {
				// controls/tabindex attributes
				var $this = $(this),
					controls = $this.attr('href').replace('#', '');

				if (typeof controls !== 'undefined' && controls !== '') {
					$this.attr({
						'aria-controls': controls,
						'tabindex': -1,
						'aria-selected': 'false',
						'id' : 'label_' + controls
					});
				} else {
					$this.remove();
				}
			});

			$contents.attr({
				'role':'tabpanel',		// contents
				'aria-hidden':'true'	// all hidden
			}).each(function() {
				$(this).attr('aria-labelledby', 'label_' + this.id);
			});

			// if no selected => select first
			var $default = this.$root.find('.depth-1.expanded');
			if ($default.length === 0) {
				$tabsUl.find('.first a').attr({
					'aria-selected' : 'true',
					'tabindex' : 0
				});

				$contents.find('.first').removeAttr('aria-hidden');
			} else {
				$default.filter('[role=presentation]').children('a').attr({
					'aria-selected' : 'true',
					'tabindex' : 0
				});
				$default.filter('[role=tabpanel]').removeAttr('aria-hidden');
			}

			var $sticky = $('#sticky-bottom'),
				_setStickyPadding = function() {
					if (edf.viewport.isLandscape() || edf.viewport.isDesktop()) {
						oMod.$root.css({ 'padding-bottom' : $sticky.height() });
					} else {
						oMod.$root.css({ 'padding-bottom' : 0 });
					}
				};
			if ($sticky.length) {
				_setStickyPadding();
				$(document).on('edf:viewport.change', _setStickyPadding);
			}

			this.$root
				.on('click.edf:footer change.edf:footer', '.tab, select', _handleTabAction)
				.on('keydown.edf:footer', '.tab', _handleTabKey);

			return this;
		}
	};

	return oMod;
})();
})(window, document, jQuery);;
/*jshint bitwise:true, browser:true*/
/*global jQuery:false, console:false */
;(function global(W, D, $) {
/**
 * misc global scripts
 * @requires	jQuery
 * @requires	viewport.js
 * @requires	cookies.js
 * @requires	header.js
 * @requires	footer.js
 */

'use strict';

if (typeof W.edf === 'undefined') {
	W.edf = {};
}
if (typeof W.l10n === 'undefined') {
	W.l10n = {};
}
var edf = W.edf, $W = $(W), $D = $(D), l10n = W.l10n,

$html = $('html, body'),
$body;

edf.breadcrumbs = (function breadcrumbsModule(){
	return {
		init : function() {
			var $breadcrumbs = $('#breadcrumbs');

			if ($breadcrumbs.length) {

			}
		},
		destroy : function() {

		}
	};
})();

edf.toolbars = (function toolbarsModule() {
// =============================================================================
// sticky toolbars
// =============================================================================
	var $tools, $aside, $article, $sticky, $stickyChapters,
		scrollTop = $W.scrollTop(),
		headerHeight,
		asideOffsetTop,
		articleHeight, articleOffsetTop, articleMarginTop,
		bIsWidePage,
		stickyHeight, stickyMarginTop,
		aChapters = {},

	_handleScroll = function(oEvt, oEvtData) {
		scrollTop = oEvtData ? oEvtData.scrollTop : $W.scrollTop();
		headerHeight = edf.header.getHeight();
		articleHeight = $article.height();
		bIsWidePage = edf.viewport.isLandscape() || edf.viewport.isDesktop();
		asideOffsetTop = $aside.offset().top + parseInt($aside.css('padding-top'), 10);
		articleOffsetTop = $article.offset().top;
		//console.log(scrollTop + ' >= ' + articleOffsetTop + ' + ' + articleHeight + ' - ' + headerHeight + ' - ' + stickyHeight);

		if (scrollTop <= asideOffsetTop - headerHeight) {
			$sticky.removeClass('fixed absolute').addClass('static').css({
				'position': 'static',
				'height' : 'auto'
			});
		} else if (bIsWidePage && (scrollTop >= articleOffsetTop + articleHeight - headerHeight - stickyHeight )) {
			$sticky.removeClass('static fixed').addClass('absolute').css({
				'position':'absolute',
				'top': 'auto',
				'bottom': 0,
				'height' : stickyHeight
			});
		} else if (bIsWidePage) {
			$sticky.removeClass('static absolute').addClass('fixed').css({
				'position': 'fixed',
				'top' : headerHeight,
				'height' : stickyHeight
			});
		}

		/* Handle chapter highlight in sticky TOC */
		if ($stickyChapters && $stickyChapters.length) {

			_handleChapters(); // to reset offsets

			var currentChapter = '',
				i = 0;

			for (var id in aChapters) {
				if (i === 0) {
					currentChapter = id;
				}
				if ($stickyChapters.find('a[href=' + id + ']').offset().top >= aChapters[id]) {
					currentChapter = id;
				}
				i++;
			}
			$stickyChapters.find('li a').removeClass('active');
			$stickyChapters.find('a[href=' + currentChapter + ']').addClass('active');
		}
	},

	_handleAside = function() {
		$aside = $('.aside');

		if ($aside.length && $aside.find('.sticky').length) {
			$sticky = $aside.find('.sticky').not('.sticky .sticky');
			$article = $aside.closest('.content');//$aside.parent();//$('.main-article');

			headerHeight = edf.header.getHeight();
			articleHeight = $article.height();
			asideOffsetTop = $aside.offset().top + parseInt($aside.css('padding-top'), 10);

			articleMarginTop = parseInt($article.css('margin-top'));
			stickyMarginTop = parseInt($sticky.css('margin-top'));
			stickyHeight = $sticky.outerHeight();
			bIsWidePage = edf.viewport.isLandscape() || edf.viewport.isDesktop();

			if (bIsWidePage && $sticky.width() !== 0) {
				$sticky.css('width', $aside.width());
			} else {
				$sticky.css({'width':'auto'/*, 'max-width': $aside.width()*/});
			}
			_handleScroll();
			$D.on('edf:viewport.scroll', _handleScroll);
		}
	},

	_handleToolBar = function() {
		/* Tools bar (print, translate form) */
		$('.print').click(function(oEvt){
			oEvt.preventDefault();
			W.print();
		});
	},

	_handleChapters = function() {
		/* Highlight toolbar current chapter according to scroll */
		var chapterId = '';
		aChapters = {};
		$stickyChapters = $('.aside .sticky.chapters');
		$stickyChapters.find('li a').each(function(i) {
			if (i === 0) {
				$(this).addClass('active');
			}
			chapterId = $(this).attr('href');
			aChapters[chapterId] = $(chapterId).offset().top;
		});
	};

	return {
		init : function() {
			$tools = $('.tools');
			$sticky = $('.aside .sticky');

			if ($tools.length) {
				_handleToolBar();
			}
			if ($sticky.length) {
				_handleAside();
				$D.on('edf:viewport.resize', edf.throttle(_handleAside,200));
				if ($sticky.hasClass('chapters')) {
					_handleChapters();
				}
			}

		},
		destroy : function() {
			$D.off('edf:viewport.scroll', _handleScroll);
			$D.off('edf:viewport.change', _handleAside);
		}
	};
})();


edf.anchors = (function anchorsModule() {
// =============================================================================
// handles anchors smooth scroll
// =============================================================================
	var $a,$L,

	_smoothScroll = function($elm, focus, callback) {
		if (typeof focus === 'undefined') {
			focus = true;
		}
		if (typeof $elm === 'undefined') {
			$elm = $html;
		}

		$elm.velocity('scroll', {
			duration: 800,
			delay: 0,
			easing:'ease-in-out',
			offset : edf.viewport.status === 'desktop' ? - edf.header.getHeight() : 0,
			complete : function() {
				var $this = $(this);
				if(focus) {
					if (!$this.is(l10n.focusElmt)) {
						// make non focusable element focusable
						$this.attr('tabindex', '-1');
					}
					$this.focus();
				}
				if(typeof callback === 'function') {
					callback.call($this);
				}
			}
		});
	},

	_scrollToHash = function(hash, focus, callback) {
		if ('string' !== typeof hash) {
			hash = W.location.hash;
		}

		if (hash && D.getElementById(hash.substr(1))) {
			/*Special case with accordion*/
			if(hash.indexOf('accordion') > -1){
				$(hash).addClass('open');
				$(hash).next('ul').addClass('open');
			}
			_smoothScroll($(hash), focus, callback);
		}
	};

	return {
		init : function() {
			$a = $('a:not(.no-smooth-scroll)', 'body').each(function() {
				/* scroll on anchors click */
				/* avoid with the "no-smooth-scroll" class */
				var sType = typeof(this.hash);
				if (sType !== 'undefined' && sType !== 'unknown') { // IE "security problem" if href is not valid
					var hash = this.hash;

					if (hash && hash !== '#' && D.getElementById(hash.substr(1))) {
						$(this).on('click.edf:anchors', function(oEvt) {
							oEvt.preventDefault();

							_smoothScroll($(hash));
						});
					}
				}
			});

			$L = $('a', 'body').each(function() {
				var hash = this.hash;
				if (hash && hash !== '#' && hash == '#espace-client') {
					$(this).on('click.edf:anchors', function(oEvt) {
						oEvt.preventDefault();
						_popupLoginAnchor.init();
					});
				}
			});

			$W
			/* scroll if hash on load */
				.on('load.edf:anchors', _scrollToHash)
			/* scroll on hashchange */
				.on('hashchange.edf:anchors', function() {
					if ($W.scrollTop() > 0) {
						W.setTimeout(_scrollToHash, 200);
					}
				});
		},

		scroll : _scrollToHash,

		destroy : function() {
			$a.off('click.edf:anchors');
			$W.off('hashchange.edf:anchors');
		}
	};
})();

var _instagramImageLoader = (function instagramLoaderModule() {
// =============================================================================
// lazy loading for footer instagram block :
// load images when block is in viewport
// =============================================================================
	var _loadImage = function($img, fnCallBack) {
		var oImg = new Image(),
			sSrc = $img.addClass('js-loading').attr('data-src');

		oImg.onload = function() {
			$img.attr('src', sSrc).removeClass('js-loading').addClass('js-loaded');

			if (typeof fnCallBack === 'function') {
				fnCallBack.call();
			}
		};
		oImg.src = sSrc;
	},

	_update = function() {
		$('.view-bloc-social-network.instagram').each(function() {
			var $this = $(this),
				oOffset = $this.offset();

			oMod.aData = [];

			if (!$this.hasClass('loaded')) {
				oMod.aData.push({
					top : oOffset.top - edf.viewport.height,
					//left : oOffset.left,
					$elm : $this
				});
			}
		});
	},

	_load = function($elm) {
		$elm.addClass('loaded').find('img[data-src]').each(function(i) {
			_loadImage($(this));
			if (i === 0) {
				_update();
			}
		});
	},

	_test = function(oEvt, oEvtData) {
		var aData = oMod.aData,
			scrollTop = oEvtData ? oEvtData.scrollTop : $W.scrollTop();

		for (var i = 0, j = aData.length; i < j; i++) {
			var item = aData[i],
				$elm = item.$elm;

			if ($elm.is(':visible') && !$elm.hasClass('loaded') && scrollTop > item.top) {
				_load($elm);
			} else {
				item.top = $elm.offset().top - edf.viewport.height;
			}
		}
	},

	oMod = {
		init : function() {
			_update();
			if (this.aData && this.aData.length) {
				_test();
				$D.on('edf:viewport.scroll-end edf:viewport.resize-end', _test);
			}
		}
	};

	return oMod;
})();

var _openYoutube = (function openYoutubeEmbedModule() {
// =============================================================================
// handles footer youtube block
// =============================================================================
	var _handleClick = function(oEvt) {
		oEvt.preventDefault();

		var $this = $(this);
		var url=$this.attr('href');
		var query="rel=0&amp;showinfo=1&amp;autoplay=1";
		if (url.indexOf("?") == -1) {
			url =url+"?"+query;
		} else{
			url =url+"&amp;"+query;
		}
		
		if($this.closest('.visual').length){
			$this.closest('.visual').addClass('youtube-open');
		}

		$this.after('<div class="js-youtube-embed"><iframe src="' + url  + '"></iframe></div>');
		$this.remove();
	},

	oMod = {
		init : function() {
			$body.on('click.edf:open-youtube', 'a.open-youtube', _handleClick);
		},

		destroy : function() {
			$body.off('click.edf:open-youtube');
		}
	};

	return oMod;
})();

var _handleTranslationSelect = (function() {
	var _handleChange = function(oEvt) {
		oEvt.preventDefault();
		oEvt.stopPropagation();

		oMod.$form.submit();
	},

	oMod = {
		init : function() {
			this.$select = $('#translate-language');
			if (this.$select.length) {
				this.$form = this.$select.closest('form');
				this.$select.off().on('change.edf:translate-page', _handleChange);

				return this;
			}
			return false;
		},

		destroy : function() {
			if (this.$select && this.$select.length) {
				this.$select.off('change.edf:translate-page');

				return this;
			}
			return false;
		}
	};

	return oMod;
})();

edf.popup = function(url, width, height) {
	// Calculate the position of the popup so
	// it’s centered on the screen.
	var left = (screen.width / 2) - (width / 2),
		top = (screen.height / 2) - (height / 2);

	W.open(
		url,
		'',
		'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=' + width + ',height=' + height + ',top=' + top + ',left=' + left
	);
};

if (l10n.jsDebug) {
// =============================================================================
// handy pseudo console/debug panel
// =============================================================================
	edf.debug = function(message) {
		var $debug = $('#debug');
		if ($debug.length) {
			$debug.append('<br>' + message);
		} else {
			$body.prepend('<div id="debug">' + message + '</div>');
			$debug = $('#debug');
		}
		$debug.show();
		$debug[0].scrollTop = $debug[0].scrollHeight;
	};
}

var _fixImageRatio = (function() {
// =============================================================================
// fix image ratio for flex descendant image in IE
// =============================================================================
	var _fixRatioFirstPass = function() {
		oMod.$img.each(function() {
			var $img = $(this),
				nHeight = parseInt($img.attr('height'), 10),
				nWidth = parseInt($img.attr('width'), 10);

			if (nHeight && nWidth) {
				$img.css({
					'width' : $img.width(),
					'height' : parseInt($img.width() / (nWidth / nHeight), 10)
				});
				$img.removeAttr('height');
				$img.removeAttr('width');
				$img.attr('data-height',nHeight);
				$img.attr('data-width',nWidth);
			} else {
				/* removes images without width/height attributes from selection */
				oMod.$img = oMod.$img.not(this);
			}
		});
	},

	_fixRatio = function() {
		oMod.$img.each(function(index) {
			var $img = $(this),
				nHeight = parseInt($img.attr('data-height'),10),
				nWidth = parseInt($img.attr('data-width'),10);
			
			$img.removeAttr('style');
			
			$img.css({
				'width' : $img.width(),
				'height' : parseInt($img.width() / (nWidth / nHeight), 10)
			});
		});

	},

	oMod = {
		init : function() {
			// testing for IE flex support
			// images with specified width/height attributes are not correctly resized when flexed under IE10/11
			if ('undefined' !== typeof (document.documentElement.getElementsByTagName('body')[0].style.msFlex) &&
				 ($(".monthBlock").length < 1)) {

				this.$img = $('#content-area').find('img:not(".no-fix-ratio")');

				_fixRatioFirstPass();
				$D.on('edf:viewport.resize-end', _fixRatio);
			}
		},

		destroy : function() {
			$D.off('edf:viewport.resize-end', _fixRatio);
			this.$img.removeAttr('style');
		}
	};

	return oMod;
})();

var _popupLogin = (function(){
	var $aButton, $headerMenuUserAccount, $headerMenuBtn, $burgerMenuBtn;

	var _openPopupLogin = function(){
		if(!$headerMenuUserAccount.hasClass('js-header-menu-block-opened') || edf.viewport.isLandscape() || 
			edf.viewport.isDesktop()){
			$headerMenuBtn.trigger('click.edf:header');
		}
		if(edf.viewport.isMobile() || edf.viewport.isPortrait()){
			$burgerMenuBtn.trigger('click.edf:header');
			$html.animate({scrollTop: $headerMenuBtn.offset().top },0);
		}
	};

	var oMod = {
		init : function() {
			$aButton = $(".btn-open-login");
			$headerMenuUserAccount = $('.header-menu-user-account');
			$headerMenuBtn = $headerMenuUserAccount.find('.header-menu-btn');
			$burgerMenuBtn = $('.burger-menu button');
			$aButton.on('click', _openPopupLogin);
		}
	};
	return oMod;
})();

var _popupLoginAnchor = (function(){
	var $aButton, $headerMenuUserAccount, $headerMenuBtn, $burgerMenuBtn;

	var _openPopupLoginAnchor = function(){
		if(!$headerMenuUserAccount.hasClass('js-header-menu-block-opened') || edf.viewport.isDesktop() || edf.viewport.isLandscape() || edf.viewport.isPortrait()){
			$headerMenuBtn.trigger('click.edf:header');
			if(edf.viewport.isLandscape() || edf.viewport.isPortrait()){
				$html.animate({scrollTop: $headerMenuBtn.offset().top },0);
			}
		}
		if(edf.viewport.isMobile()){
			$burgerMenuBtn.trigger('click.edf:header');
			$html.animate({scrollTop: $headerMenuBtn.offset().top },0);
		}
	};

	var oMod = {
		init : function() {
			$headerMenuUserAccount = $('.header-menu-user-account');
			$headerMenuBtn = $headerMenuUserAccount.find('.header-menu-btn');
			$burgerMenuBtn = $('.burger-menu button');
			_openPopupLoginAnchor();
		}
	};
	return oMod;
})();

var _detectOutdatedBrowser = (function() {

	var isOutdated = function() {
		var outdatedBrowser = false;
		if ( !Modernizr.testProp('textShadow') /* IE9 */
		  || !Modernizr.testProp('boxShadow') /* IE8 */
		  || !Modernizr.testProp('transition')
		) {
			outdatedBrowser = true;
		}	
		return outdatedBrowser;
	};

	var displayOutdatedBrowserMessage = function(){
		var outdatedBrowserMessage = '<div id="outdatedBrowser"><button>'+ W.l10n.close +'<svg xmlns="http://www.w3.org/2000/svg" viewBox="135.058 85.02 8.224 8.224" focusable="false" role="img"><g transform="translate(-5.88725,-5.888)"><path d="m146.1,95.02,2.854-2.854c0.287-0.288,0.287-0.754,0-1.042-0.289-0.288-0.754-0.288-1.043,0l-2.854,2.854-2.854-2.854c-0.287-0.288-0.754-0.288-1.041,0-0.289,0.288-0.289,0.754,0,1.042l2.854,2.854-2.855,2.854c-0.287,0.288-0.287,0.754,0,1.042,0.145,0.144,0.334,0.216,0.521,0.216,0.189,0,0.377-0.072,0.521-0.216l2.854-2.854,2.855,2.854c0.143,0.144,0.332,0.216,0.52,0.216,0.189,0,0.377-0.072,0.521-0.216,0.287-0.288,0.287-0.754,0-1.042l-2.84-2.854z" fill="#ffffff"/></g></svg></button><p>' + W.l10n.outdatedBrowserMessage + '</p><p><a href="http://www.firefox.com/">Firefox</a>, <a href="http://windows.microsoft.com/ie">Internet Explorer</a>, <a href="http://www.google.com/chrome">Chrome</a>, <a href="http://www.apple.com/safari">Safari</a></p></div>';
		$('body').prepend(outdatedBrowserMessage);
	};
	var handleEvents = function(){
		$("#outdatedBrowser button").click(function(){
			$("#outdatedBrowser").remove();
		});
	};
	var oMod = {
		init : function() {
			var bIsOutdated = isOutdated();
			if (bIsOutdated) {
				displayOutdatedBrowserMessage();
				handleEvents();
			}
		}
	};
	return oMod;
})();

var _animation = (function() {

	var animatePush = function() {
		var $push_animate = $('.animate-push a');
		$('.webform-submit').addClass('animate');
		$push_animate.on('mouseenter focus', function(){	
			$(this).parents('.animate-push').addClass('animateThis');
		});
		$push_animate.on('mouseleave blur', function(){	
			$(this).parents('.animate-push').removeClass('animateThis');
		});
	};

	var oMod = {
		init : function() {
			animatePush();
		}
	};
	return oMod;
})();

var _scrollIframe = (function(){
	var scrollIntoIframe = function(){
		var iframeID = "iframe_infostrates",
			scroll = {
		        insideIframe: false,
		        scrollX:      null,
		        scrollY:      null
		    },
	    	isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream; // Détecte si le périphérique mobile est sous iOS
	    

	    // Au redimensionnement
	    $D.on('edf:viewport.resize', function () {
	        var iframeObj = $('#' + iframeID);
	        resizeIframe(iframeObj, isIOS);
	    });
	    // Lorsque la souris entre dans l'iframe (ou lors du focus pour les mobile)
	    $('#' + iframeID).on('mouseenter touchstart', function(event) {
	        scroll.insideIframe = true;
	        if (('mouseenter' == event.type) && !isIOS) {
	            scroll.scrollX = $W.scrollLeft();
	            scroll.scrollY = $W.scrollTop();
	        }
	    });
	    // Lorsque l'on sort de l'iframe (sous moblie)
	    $D.on('touchmove touchstart', function(event) {
	        scroll.insideIframe = false;
	    });
	    // Et sous desktop
	    $('#' + iframeID).mouseleave(function() {
	        scroll.insideIframe = false;
	    });
	    // Au scroll de la page
	    $D.scroll(function() {
	        // Si on est dans l'iframe, on ne scroll que dans celle-ci
	        if (scroll.insideIframe) {
	            window.scrollTo(scroll.scrollX, scroll.scrollY);
	        }
	    });   	
	}
    var oMod = {
		init : function() {
			scrollIntoIframe();
		}
	};
	return oMod;
})();

$D.ready(function globalDomReady() {
	$body = $('body');

	edf.cookieManager.init(); /* cookies.js */
	edf.header.init(); /* header.js */
	edf.footer.init(); /* footer.js */

	edf.toolbars.init();
	edf.anchors.init();
	_detectOutdatedBrowser.init();
	_instagramImageLoader.init();
	_openYoutube.init();
	_handleTranslationSelect.init();

	_fixImageRatio.init();
	_popupLogin.init();
	$D.ready(function() {
        var iframeObj = $('#iframe_infostrates');
        iframeObj.on('load', function() {
			_scrollIframe.init();
        });
    });	

	if (edf.viewport.isDesktop()) {
		_animation.init();	
	}

	$('.social-share').on('click', function(e) {
		e.preventDefault();
		edf.popup($(this).attr('href'), 450, 450);
	});

	$('.back-link, .folder-menu-closer').click( function(){
        $('.folder-menu-wrapper').toggleClass('folder-menu-open');
        
    })
	$('.burger-menu').click( function(){
		$('.folder-menu-wrapper').removeClass('folder-menu-open');
    })

	$('.burger-menu').on('click', function(){
		$('.main-menu-remote-wrapper.type-3 .main-menu-level-2').first().addClass('js-opened', function(){
    	$('.main-menu-item-level-1').first().addClass('js-selected');
    });
	})
});



})(window, document, jQuery);;
/*jshint bitwise:true, browser:true*/
/*global jQuery:false */
;(function header(W, D, $) {
/**
 * header management
 *
 * @requires	jQuery
 * @requires	l10n
 * @requires helpers.js
 * @requires viewport.js
 *
 * initialized in global.js
 */

'use strict';

if (typeof W.edf === 'undefined') {
	W.edf = {};
}
if (typeof W.l10n === 'undefined') {
	W.l10n = {};
}
var edf = W.edf, l10n = W.l10n, $W = $(W), $D = $(D), $html = $('html');

edf.header = (function edfHeaderModule() {
// =============================================================================
// main header module
// =============================================================================
	var edfViewport = edf.viewport,
		$header, $nav, $mainMenu, $remote, $content, $btnBack, $backMenu, $headerMenuBlocks, $burger,
		$secondaryMenus, $mask,

	FOCUS_ELMTS = l10n.focusElmt,
	ANIM_DURATION = 600,
	EASING = 'ease-in-out',

	_loadImage = function($img, fnCallBack) {
		/**
		 * lazy images load
		 */
		var oImg = new Image(),
			sSrc = $img.addClass('js-loading').attr('data-src');

		oImg.onload = function() {
			$img.attr('src', sSrc).removeClass('js-loading').addClass('js-loaded');

			if (typeof fnCallBack === 'function') {
				fnCallBack.call();
			}
		};
		oImg.src = sSrc;
	},

	oVelocityOptions = {
		duration : ANIM_DURATION,
		easing : EASING
	},

	_setHtmlHeaderStatus = function() {
		return $html.addClass('js-header-menu-opened');
	},

	_removeHtmlHeaderStatus = function() {
		return $html.removeClass('js-header-menu-opened');
	},

	_removeNavStyles = function() {
		return $nav.removeAttr('style');
	},

	_setMainMenuHeight = function() {
		var height = edfViewport.height - $secondaryMenus.height();
		$backMenu.css({ 'min-height' : height });

		return $mainMenu.css({ 'min-height' : height });
	},

	_removeMainMenuStyles = function() {
		// $backMenu.removeAttr('style');
		oBackMenu.resetBackMenu();

		return $mainMenu.removeAttr('style');
	},

	_setHeaderFromScrolledToMetaHome = function() {
		return $header.addClass('meta-home').removeClass('js-meta-home-scrolled');
	},

	_setHeaderFromMetaHomeToScrolled = function() {
		return $header.removeClass('meta-home').addClass('js-meta-home-scrolled');
	},

	_setHeaderOpened = function() {
		return $header.addClass('js-remote-opened');
	},

	_setHeaderClosed = function() {
		return $header.removeClass('js-remote-opened');
	},

	_resetHeaderStatus = function() {
		$html.removeClass('scrolled');
		if (oMod.iSlickSliderHeight) {
			_setHeaderFromScrolledToMetaHome();
			_removeMainMenuStyles();
		}
	},

	_setHeaderStatus = function(oEvt, oEvtData) {
		/**
		 * Toggles meta-home when scroll exceeds slideshow height
		 */
		var scrollTop = oEvtData ? oEvtData.scrollTop : $W.scrollTop();

		if (scrollTop) {
			if (!oCrisis.hasCrisis || oCrisis.hasCrisis && scrollTop > oCrisis.$headerCrisis.height()) {
				$html.addClass('scrolled');
			} else if (oCrisis.hasCrisis && scrollTop < oCrisis.$headerCrisis.height()) {
				$html.removeClass('scrolled');
			}

			if (oMod.iSlickSliderHeight) {
				if ((!oCrisis.hasCrisis && scrollTop > oMod.iSlickSliderHeight) ||
					oCrisis.hasCrisis && scrollTop > (oMod.iSlickSliderHeight + oCrisis.$headerCrisis.height())) {
					if (!oRemote.$current && !$header.hasClass('js-meta-home-scrolled')) {
						_removeHtmlHeaderStatus();
						_removeMainMenuStyles();
					}
					if(oRemote.$current && oRemote.$current.length && !$header.hasClass('js-meta-home-scrolled')) {
						oMainMenu.showMask();
					}
					_setHeaderFromMetaHomeToScrolled();
				} else {
					_setHeaderFromScrolledToMetaHome();

					if (oRemote.$current && oRemote.$current.length) {
						_setHtmlHeaderStatus();
						_setHeaderOpened();
						oRemote.$current.removeAttr('style').css({ 'left' : 0 });
						oMainMenu.hideMask();
					} else {
						/* Added to avoid mask to remain after scrolling up */
						if(oMainMenu.bIsOpen) {
							oMainMenu.toggleMainMenu.apply($burger);
							$mainMenu.removeClass('js-main-menu-open');
							_removeHtmlHeaderStatus();
						}
						_setHeaderClosed();
						$header.find('.main-menu-level-2.js-opened').removeAttr('style');
						$header.find('.main-menu-item-level-1.js-selected').removeClass('js-selected');
					}
				}
			}
		} else {
			_resetHeaderStatus();
		}
	},

	_handleScroll = function() {
		/**
		 * window scroll handler
		 */
		if (edfViewport.isDesktop()) {
			_setHeaderStatus();
			/* see viewport.js */
			$D.off('edf:viewport.scroll', _setHeaderStatus) // prevent multiple bindings
				.on('edf:viewport.scroll', _setHeaderStatus);
		} else {
			_resetHeaderStatus();
			$D.off('edf:viewport.scroll', _setHeaderStatus);
		}
	},

	_handleResize = function() {
		/**
		 * window resize handler
		 */
		_handleScroll();

		if (oMainMenu.bIsOpen) {
			_removeMainMenuStyles();
			_removeNavStyles();
			switch(edfViewport.status) {
				default :
				case 'mobile' :
					$backMenu.css('min-height', edfViewport.height);
					$nav.css('min-height', edfViewport.height);
					break;
				case 'portrait' :
				case 'landscape' :
					_setMainMenuHeight();
					break;
				case 'desktop' :
					oMainMenu.bIsOpen = false;
					oMainMenu.toggleMainMenu();
					if (oRemote.$current) {
						oRemote.openRemote(oRemote.$current);
					}
					break;
			}
		}
	},

	oSecondaryMenus = (function() {
// =============================================================================
// secondary menus handler module (lang, search, contact...)
// =============================================================================
		var openSecondaryMenus = function($headerMenu) {
			if (!edfViewport.isMobile()) {
				if (oMod.bIsMetaHome && oRemote.$current) {
					oRemote.closeRemote();
				}
				if (oMainMenu.bIsOpen) {
					oMainMenu.toggleMainMenu();
				}
			}
			$header.addClass('js-header-menu-block-opened');
			$headerMenu.addClass('js-header-menu-block-opened')
				.find('.header-menu-block').find(FOCUS_ELMTS).attr('tabindex', '0').stop()
				.siblings('.js-header-menu-block-opened').removeClass('js-header-menu-block-opened');

			this.$current = $headerMenu;
		},

		closeSecondaryMenus = function($headerMenu) {
			if (!$headerMenu && this.$current) {
				$headerMenu = this.$current;
			} else {
				return;
			}
			$header.removeClass('js-header-menu-block-opened');
			$headerMenu.removeClass('js-header-menu-block-opened');
			_removeHtmlHeaderStatus();

			this.$current = null;
		},

		resetSecondaryMenus = function() {
			this.closeSecondaryMenus();
		},

		toggleSecondaryMenus = function(oEvt) {

			oEvt.preventDefault();
			oMod.otherLocaSuggestion.close();
			var $this = $(this),
				$headerMenu = $this.closest('.header-menu');

			if ($headerMenu.is(oSecondaryMenus.$current)) {
				$this.attr('aria-expanded', 'false');
				oSecondaryMenus.closeSecondaryMenus();
			} else {
				oSecondaryMenus.closeSecondaryMenus();
				$this.attr('aria-expanded', 'true');
				oSecondaryMenus.openSecondaryMenus($headerMenu);
			}

			var buttonName = $this.parent().attr('class').replace("js-header-menu-block-opened", "").replace("header-menu", "").trim();
			$(document).trigger('edf:analytics.trackevent', {
				type : 'navigation',
				category : 'all',
				n1 : buttonName,
				n2 : '',
				n3 : ''
			});
		};

		return {
			openSecondaryMenus : openSecondaryMenus,
			closeSecondaryMenus : closeSecondaryMenus,
			resetSecondaryMenus : resetSecondaryMenus,
			toggleSecondaryMenus : toggleSecondaryMenus
		};
	})(),

	oRemote = (function() {
// =============================================================================
// remote module
// contains main navigation
// =============================================================================
		var _openMetaHome = function($item) {
			$remote.find(FOCUS_ELMTS).attr('tabindex', '-1');

			var $focusElmts = $item.find(FOCUS_ELMTS).removeAttr('tabindex');

			$focusElmts.first().focus();
			$focusElmts.last().blur(function() {
				oRemote.$opener.focus();
			});
			oMainMenu.bIsOpen = true;
			$mainMenu.addClass('js-main-menu-open');
			oMod.otherLocaSuggestion.close();
		},

		_closeMetaHome = function($item) {
			$remote.find(FOCUS_ELMTS).removeAttr('tabindex');
			$item.find(FOCUS_ELMTS).attr('tabindex', '-1');

			oRemote.$current = null;
			oMainMenu.bIsOpen = false;
			$mainMenu.removeClass('js-main-menu-open');
		},

		openRemote = function($item) {
			oMod.otherLocaSuggestion.close();
			if (edfViewport.isDesktop()) {
				oSecondaryMenus.closeSecondaryMenus();

				_setHeaderOpened();
				$item.addClass('js-opened').velocity($header.hasClass('meta-home') ? { 'left' : 0 } : { 'opacity' : 1 }, oVelocityOptions);

				var $img = $item.find('img:not(.js-loaded, .js-loading)');
				if ($img.length) {
					_loadImage($img);
				}

				if ($header.hasClass('meta-home')) {
					_openMetaHome($item);
				} else {
					var $focusElmts = $item.find(FOCUS_ELMTS).removeAttr('tabindex');

					$focusElmts.first().focus();
					$focusElmts.last().blur(function() {
						$mainMenu.find('.main-menu-item-level-1.js-selected').find('button').focus();
					});
				}
			} else {
				$item.addClass('js-opened');
			}
			this.$current = $item;
		},

		closeRemote = function($item) {
			if (!$item) {
				$item = this.$current;
			}
			if ($item && $item.length) {
				if (edfViewport.isDesktop()) {
					if (oRemote.$opener && oRemote.$opener.length) {
						oRemote.$opener.closest('.js-selected').removeClass('js-selected');
					} else {
						$mainMenu.find('.js-selected').removeClass('js-selected');
					}
					$item.velocity($header.hasClass('meta-home') ? { 'left' : '-100%' } : { 'opacity' : 0 }, {
						duration : ANIM_DURATION,
						easing : EASING,
						complete : function() {
							$item.removeClass('js-opened').removeAttr('style');
							_setHeaderClosed();
						}
					});

					if ($header.hasClass('meta-home')) {
						_closeMetaHome($item);
					}
				} else {
					_setHeaderClosed();
					$item.removeClass('js-opened');
				}
			}

			this.$current = null;
		},

		swapRemote = function($opened, $item) {
			/**
			 * swap currently opened remote with another one
			 */
			if ($header.hasClass('meta-home')) {
				$opened.velocity({ 'left' : '-100%' }, {
					duration : ANIM_DURATION / 2,
					easing : EASING,
					complete : function() {
						oRemote.openRemote($item);
						$opened.removeClass('js-opened').removeAttr('style')
							.find(FOCUS_ELMTS).attr('tabindex', '-1');
					}
				});

				this.$current = $item;
			} else {
				oRemote.openRemote($item);
				$opened.removeClass('js-opened').velocity({ 'opacity' : 0 }, {
					duration : ANIM_DURATION,
					easing : EASING,
					complete : function() {
						$opened.removeAttr('style')
							.find(FOCUS_ELMTS).attr('tabindex', '-1');
					}
				});
			}
		},

		toggleRemote = function(oEvt) {
			/**
			 * open/close remote if it's closed/opened
			 */
			if (oEvt) {
				oEvt.preventDefault();
			}
			oMod.otherLocaSuggestion.close();
			var $opener = oRemote.$opener = $(this);

			var $parent = $opener.closest('.main-menu-item-level-1'),
				$item = $remote.find('.' + $opener.data('remote')),
				$opened = $item.siblings('.js-opened');

			if ($item.hasClass('js-opened')) {
				oRemote.closeRemote($item);
				$opener.attr('aria-expanded', false);
				$parent.removeClass('js-selected');
			} else if ($opened.length) {
				oRemote.swapRemote($opened, $item);
				$opener.attr('aria-expanded', true);
				$parent.addClass('js-selected')
					.siblings('.js-selected').removeClass('js-selected').find('button').attr('aria-expanded', false);
			} else {
				oRemote.openRemote($item);
				$opener.attr('aria-expanded', true);
				$parent.addClass('js-selected');
			}
		},

		resetRemote = function() {
			$remote.find('.js-opened').removeClass('js-opened').removeAttr('style');
			$remote.find('.js-selected').removeClass('js-selected').removeAttr('style');
			_setHeaderClosed();

			this.$current = null;
		};

		return {
			openRemote : openRemote,
			closeRemote : closeRemote,
			swapRemote : swapRemote,
			toggleRemote : toggleRemote,
			resetRemote : resetRemote
		};
	})(),

	oBackMenu = (function() {
// =============================================================================
// "All EDF site" hidden menu
// =============================================================================
		var openBackMenu = function() {
			$backMenu.addClass('js-menu-back-opened');

			if (oRemote.$current && $header.hasClass('meta-home')) {
				oRemote.closeRemote();
			} else if (edfViewport.isDesktop()) {
				$backMenu.css('min-height', $mainMenu.height());
			}

			if (edfViewport.isDesktop()) {
				$backMenu.velocity({ 'left' : '0' }, oVelocityOptions);
			}

			$btnBack.attr('aria-expanded', true);
			oBackMenu.bIsOpen = true;
			return $backMenu;
		},

		closeBackMenu = function() {
			$backMenu.removeClass('js-menu-back-opened');

			if (edfViewport.isDesktop()) {
				$backMenu.velocity({ 'left' : '-100%' }, {
					duration : ANIM_DURATION,
					easing : EASING,
					complete : function() {
						oBackMenu.resetBackMenu();
					}
				});
			}

			$btnBack.attr('aria-expanded', false).focus();
			oBackMenu.bIsOpen = false;

			return $backMenu;
		},

		resetBackMenu = function() {
			oBackMenu.bIsOpen = false;
			$btnBack.attr('aria-expanded', false);
			return $backMenu.removeClass('js-menu-back-opened').removeAttr('style');
		},

		toggleBackMenu = function(oEvt) {
			oEvt.preventDefault();
			oMod.otherLocaSuggestion.close();
			return oBackMenu.bIsOpen ? oBackMenu.closeBackMenu() : oBackMenu.openBackMenu();
		};

		return {
			openBackMenu : openBackMenu,
			closeBackMenu : closeBackMenu,
			resetBackMenu : resetBackMenu,
			toggleBackMenu : toggleBackMenu
		};
	})(),

	oMainMenu = (function() {
// =============================================================================
// main burger menu
// =============================================================================
		var _openRemote = function() {
			var $selected = $header.find('.main-menu-item-level-1.selected'),
				$item;

			if (!oRemote.$current) {
				if ($selected.length) {
					// opens current page remote item
					$item = $selected.addClass('js-selected').find('.main-menu-toggler');
				}/* else {
					// opens first available remote item
					// disabled since page can be outside site tree
					$item = $header.find('.main-menu-item-level-1').eq(0).addClass('js-selected').find('.main-menu-toggler');
 				}*/

				if ($item && $item.length) {
					oRemote.openRemote($remote.find('.' + $item.data('remote')));
				}
			}
			oMod.otherLocaSuggestion.close();
		},

		_openMainMenu = function() {
			var viewportStatus = edfViewport.status;

			_setHtmlHeaderStatus();
			oMainMenu.bIsOpen = true;

			if (!edfViewport.isMobile()) {
				oSecondaryMenus.closeSecondaryMenus();

				if (!edfViewport.isDesktop()) {
					_setMainMenuHeight();
				}
			}

			switch (viewportStatus) {
				default :
				case 'mobile' :
					$backMenu.css('min-height', edfViewport.height);
					$nav.css('min-height', edfViewport.height);
					break;
				case 'portrait' :
				case 'landscape' :
					break;
				case 'desktop' :
					_openRemote();
					oBackMenu.resetBackMenu();
					$remote.find('.main-menu-level-2').removeAttr('style');
					var $img = $remote.find('.main-menu-level-2:first-child').find('.push img');
					_loadImage($img);
					$mainMenu.addClass('js-main-menu-open');
			}
		},

		_closeMainMenu = function() {
			var viewportStatus = edfViewport.status;

			if (viewportStatus !== 'desktop') {
				_removeHtmlHeaderStatus();
				oBackMenu.closeBackMenu();
			}

			oMainMenu.bIsOpen = false;
			switch (viewportStatus) {
				default :
				case 'mobile' :
					_removeNavStyles();
					break;
				case 'portrait' :
				case 'landscape' :
					_removeMainMenuStyles();
					break;
				case 'desktop' :
					if (!oMod.bIsMetaHome || $header.hasClass('js-meta-home-scrolled')) {
						_removeHtmlHeaderStatus();
						oBackMenu.resetBackMenu();
						oRemote.closeRemote();
						$mainMenu.removeClass('js-main-menu-open');
					}
					break;
			}
		},

		toggleMainMenu = function(oEvt) {
			/**
			 * Actions performed on burger menu button click
			 */
			if (oEvt) {
				oEvt.preventDefault();
			}
			oMod.otherLocaSuggestion.close();
			var $this = $(this);

			// preventing clicks while animating
			if (edfViewport.status === 'desktop') {
				$this.attr('disabled', 'disabled');
				$mainMenu.one('transitionend.edf:header webkitTransitionEnd.edf:header oTransitionEnd.edf:header otransitionend.edf:header MSTransitionEnd.edf:header', function() {
					$this.removeAttr('disabled');
				});
				if (this.id == 'nav-mask') {
					$this.removeAttr('disabled');
				}
			}


			if (edfViewport.status != 'mobile' && this.id === 'nav-mask') {
				oSecondaryMenus.closeSecondaryMenus();
			} else if (oMainMenu.bIsOpen) {
				/* close */
				if (edf.header.oSlideshow && !edf.header.oSlideshow.paused) {
					edf.header.oSlideshow.slick.slickPlay();
				}
				$this.attr('aria-expanded', 'false');
				_closeMainMenu();
			} else {
				/* open */
				if (edf.header.oSlideshow) {
					edf.header.oSlideshow.slick.slickPause();
				}
				$this.attr('aria-expanded', 'true');
				_openMainMenu();
			}
		},

		showMask = function() {
			$mask.show();
		},

		hideMask = function() {
			$mask.hide();
		};

		return {
			toggleMainMenu : toggleMainMenu,
			showMask : showMask,
			hideMask : hideMask
		};
	})(),

	oCrisis = (function crisisMessageModule() {
// =============================================================================
// crisis header
// =============================================================================
		var VISIBLE = 'js-show',
			STORE = 'viewed-crisis',

		_handleClick = function(oEvt) {
			oEvt.preventDefault();

			oModule.close();
		},

		oModule = {
			open : function() {
				this.$headerCrisis.addClass(VISIBLE);
			},

			close : function() {
				this.hasCrisis = false;
				this.$headerCrisis.removeClass(VISIBLE);
				edf.cookies.set(STORE, true, null, '/');
			},

			init : function() {
				this.$headerCrisis = $('#header-crisis');

				this.hasCrisis = !edf.cookies.get(STORE);

				if (this.$headerCrisis.length && this.hasCrisis) {
					this.open();
					this.$headerCrisis.on('click.edf:header-crisis', _handleClick);
				}
			}
		};

		return oModule;
	})(),
	/**
	 * 	Affiche un message d'alerte en cas de navigateur obsolète (<= IE9)
	 */
	otherLocaSuggestion = (function otherLocaSuggestion() {

		var locaCookieName = 'LocaTooltip',
			aDomainLocaTooltipAllowed = [
				'edf.fr',
				'edf-fr',
				'onebo-ppr.edf-group.net',
				'one-ppr.edf-group.net',
				'onebo-lot2-ppr.edf-group.net'
			],
			cookieExpires = 30,
			bBadDomain = true,
			$toolTipSelector = $("#marketTooltip");


		var oModule = {
			open : function() {
				if ($toolTipSelector.length) {
					$toolTipSelector.addClass('displayed');
				}
			},

			close : function() {
				if ($toolTipSelector.length) {
					$toolTipSelector.removeClass('displayed');
				}
			},

			domainAllowTooltip : function() {
				var currentDomain = window.location.hostname;
				for (var i=0; i < aDomainLocaTooltipAllowed.length; i++) {
					if (currentDomain.indexOf(aDomainLocaTooltipAllowed[i]) >= 0) {
						return true;
					}
				}
				return false;
			},

			init : function() {
				/* Le domaine courant est il en France metropolitaine ? */
			 	if (oModule.domainAllowTooltip()) {
					/* Detection du cookie de localisation */
					if (edf.cookies.get(locaCookieName) != 'true') {
						/* Detection et localisation par IP */
						/* Comparaison du domaine courant et du domaine IP */
						
						if (typeof(edf.userLocation) != 'undefined' && null != edf.userLocation) {
                            if (typeof(edf.userLocation.countryCode) != 'undefined') {
                                bBadDomain = (edf.userLocation.countryCode == 'FR' && edf.userLocation.regionName != 'Corse') ? false : true;
                            }
						}
						
						if (bBadDomain) {
							/* Affichage de la popin de loca */
							oModule.open();
							$toolTipSelector.find('.close').click(function() {
								oModule.close();
							});

							/* Ecriture du cookie de loca */
							edf.cookies.set(locaCookieName, 'true', cookieExpires);

							/* Tag */
							$(document).on('edf:analytics.ready', function() {
								$(document).trigger('edf:analytics.trackevent', {
									type : 'click',
									category : 'all',
									n1 : 'Relocalisation',
									n2 : '',
									n3 : 'popin'
								});
							});
						}
					}
				}
			}
		};
		return oModule;
	})(),

	oAuthenticate = (function() {
		var $menuUserAccount, $menuAccountInfo;

		function _displayAuth(account, connected) {
			if(connected) {
				$menuUserAccount.addClass('js-existing-account');
				$menuAccountInfo.addClass('js-'+account+'-authenticate');
			}else{
				$menuAccountInfo.removeClass('js-'+account+'-authenticate');
			}
		}

		function _displayThrobber() {
			$menuAccountInfo.html('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div><div class="message">Chargement...</div></div>');
		}

		var oMod = {
			currentProfil: '',
			init: function() {
				$menuUserAccount = $nav.find('.header-menu-user-account');
				$menuAccountInfo = $menuUserAccount.find('.menu-account-info');

				this.currentProfil = $menuUserAccount.find('.link-section.selected').attr('id');
				if (this.currentProfil !== undefined) {
					_displayAuth(this.currentProfil, edf.cookies.get('b2b-entreprises-connected') != null);
					_displayAuth(this.currentProfil, edf.cookies.get('collectivite-connected') != null);
					var cb = function(){};
					if(this.currentProfil == 'candidat') {
						cb = Drupal.behaviors.rzr_custom_forms.submitFormCandidatAjax;
					}
					this.getForm(this.currentProfil, cb);
				}
			},
			getForm: function(account, callback) { // Call in rzr_custom_forms.js
				this.currentProfil = account;
				_displayThrobber();
				if(callback !== undefined) {
					this.callback = callback;
				}
				if(account == 'entreprise') {
					_displayAuth(account, edf.cookies.get('b2b-entreprises-connected') != null);
				}else if(account == 'collectivite') {
					_displayAuth(account, edf.cookies.get('collectivite-connected') != null);
				}
				$.ajax({
					method: "GET",
					url: "/display_auth/" + account,
					success : function(data, statut){ 
						if(edf.header.oAuthenticate.currentProfil == account) {
							$menuAccountInfo.html(data);
							if(edf.header.oAuthenticate.callback !== undefined) {
								edf.header.oAuthenticate.callback();
							}
						}
					}
				});
			}
		};

		return oMod;
	})(),

	oMod = {
// =============================================================================
// global header module
// gather other menu modules
// =============================================================================
		oSecondaryMenus : oSecondaryMenus,

		oRemote : oRemote,

		oBackMenu : oBackMenu,

		oMainMenu : oMainMenu,

		getHeight : function() {
			return this.$header.find('.header-inner').height();
		},

		oCrisis : oCrisis,

		otherLocaSuggestion : otherLocaSuggestion,

		oAuthenticate : oAuthenticate,

		reset : function() {
			_removeHtmlHeaderStatus();
			if (this.bIsMetaHome) {
				$header.removeClass('js-meta-home-scrolled').addClass('meta-home');
			}
			_removeNavStyles();
			$mainMenu.removeClass('js-remote-opened').removeAttr('style');
			oSecondaryMenus.resetSecondaryMenus();
			oBackMenu.resetBackMenu();
			oRemote.resetRemote();
		},

		init : function() {
			oCrisis.init();
			otherLocaSuggestion.init();

			oMod.$header = $header = $('#header', 'body');
			$nav = $header.find('.header-nav');
			$mainMenu = $nav.find('.header-main-menu');
			$secondaryMenus = $nav.find('.header-secondary-menus');
			$remote = $mainMenu.find('.main-menu-remote-wrapper');
			$btnBack = $mainMenu.find('.btn-menu-back');
			$backMenu = $mainMenu.find('.menu-back-wrapper');
			$headerMenuBlocks = $header.find('.header-menu-block');
			$burger = $header.find('.burger-menu button');
			$content = $('#main-wrapper', 'body');
			$mask = $("#nav-mask");

			oAuthenticate.init();
			$header
				.on('click.edf:header', '.burger-menu button', oMainMenu.toggleMainMenu)
				.on('click.edf:header', '.header-menu-btn', oSecondaryMenus.toggleSecondaryMenus)
				.on('click.edf:header', '.main-menu-toggler', oRemote.toggleRemote)
				.on('click.edf:header', '.btn-menu-back, .header-menu-close', oBackMenu.toggleBackMenu);
			$D
				.on('click.edf:header', '#nav-mask', oMainMenu.toggleMainMenu)
				/* see viewport.js */
				.on('edf:viewport.change', _handleResize);

			if (D.getElementById('header-slideshow')) {
				oMod.bIsMetaHome = true;
				oMod.iSlickSliderHeight = $('#header-slideshow').outerHeight();
			}

			_handleScroll();
		}
	};

	return oMod;
})();

})(window, document, jQuery);;
