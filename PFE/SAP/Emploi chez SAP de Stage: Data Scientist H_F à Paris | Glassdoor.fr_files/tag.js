﻿// V-U2-DPLY-WS-01 at 15/03/2016 08:10:58
if (typeof veTagData === 'undefined') {
    var veTagData = (function () {
        var b,
            tag = document.getElementById('veConnect'),
            d = {
                journeycode: '73928F64-1A51-4EC3-B59E-37B96492C91F',
                captureConfigUrl: 'cdsusa.veinteractive.com/CaptureConfigService.asmx/CaptureConfig',
                chatServicesUrl: 'cdsusa.veinteractive.com/ConversationService.asmx/',
                assistServicesUrl: 'appsapiusa.veinteractive.com',
                veHostDomain: '//configusa.veinteractive.com',

                captureConfig: {
  CaptureUrl: "cdsusa.veinteractive.com/CaptureConfigService.asmx/CaptureConfig",
  customerid: 1004123,
  datareceiverurl: "cdsusa.veinteractive.com/DataReceiverService.asmx/DataReceiver",
  Forms: [
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: "UserEmail",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Id",
          FormMappingId: 84931,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2,
          HtmlPath: null
        }
      ],
      FormId: 20127,
      FormTypeId: 1,
      FormURLs: [
        "glassdoor.com/post-job"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    },
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: "h3",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 84932,
          HtmlAttributeTag: "Value",
          HtmlType: "p",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        },
        {
          ClientFieldName: ".margBot p:eq(1)",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 84933,
          HtmlAttributeTag: "Value",
          HtmlType: "p",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        },
        {
          ClientFieldName: "ApplyToEmail",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Id",
          FormMappingId: 84934,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2,
          HtmlPath: null
        }
      ],
      FormId: 35673,
      FormTypeId: 1,
      FormURLs: [
        "glassdoor.com/partners/post-a-job/createOrEdit_input.htm"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    },
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: ".ng-binding:last",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 84935,
          HtmlAttributeTag: "Value",
          HtmlType: "span",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 8,
          HtmlPath: null
        }
      ],
      FormId: 35674,
      FormTypeId: 1,
      FormURLs: [
        "glassdoor.com/partners/post-a-job/productPricing_input.htm"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    },
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: ".ng-binding:last",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 84936,
          HtmlAttributeTag: "Value",
          HtmlType: "span",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 8,
          HtmlPath: null
        }
      ],
      FormId: 35675,
      FormTypeId: 1,
      FormURLs: [
        "glassdoor.com/partners/post-a-job/checkout_input.htm"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    }
  ],
  IdentifyAbandonmentOr: true,
  JourneyCode: "73928F64-1A51-4EC3-B59E-37B96492C91F",
  JourneyId: 5433,
  JourneyTimeOut: 1800,
  NumberIdentifiedFields: 0,
  OptOutField: 0
},
                /*
                 * The custom settings are based on the standard defined on Settings.js.
                 */
                settings: { domainsToIgnore: ['glassdoor.com' ], unsupportedBrowsersVersionPlatform: { 'ie' : ['8'] }, consoleMessagesEnabled: false,
 elementsStoppingAppsOnClick: [ ],
 autocompleteInputsHandler: [ ],
 keywordsRegExp: [ { source: 'Example', regexp: / /, notSearchEngine: false, replaceCharactersBySpace: '-', storeSearchTerm: false, showNoProducts: false, ignoreCloses: false } ],
 cookies: { enabled: false , timeToLive: 60},
gdm: {
    timeCreated: 'Tue Apr 21 2015 14:59:51 GMT-0400 (Eastern Daylight Time)',
    codeVersion: '1.3.1',

    exclude: false,
    ros: true,
    flexId: '492486',
    completionId: 520769,
    journeyCode: 'CBakkCicwHcwtmididsh',
    segmentIds: [2729520, 2729522, 2729521],

    dbm: {
        src: '',
        cat: {
            ros: '',
            conversion: ''
        },
        ros: true
    },

    orderId: {
        selector: '.row.ng-scope.ng-pristine.ng-valid .minor.ng-binding:first',
        mask: '',
        'regex': null,
        page: {
            params: {  },
            urls: [  ]
        },
    },

    productPages: {
        selector: '',
        'default': '',
        page: {
            params: {  },
            urls: [  ]
        },
        'regex': null
    },

    basketPages: {
        selectors: {
            productId: '', 
            productPrice: ''
        },
        page: {
            params: {  },
            urls: [  ]
        },
        'regex': null
    },

    orderValue: {
        selector: '[name="amount"]',
        'default': '1.00',
         mask: 'currency',
        page: {
            params: {  },
            urls: [ 'glassdoor.com/partners/post-a-job/checkout_input.htm' ]
        },
        updates: false,
        'regex': /[^0-9,\.]/g
    },

    completePage: {
        page: {
            params: { successMessageKey: 'job-posting.success.job-posting-created' },
            urls: [ 'glassdoor.com/partners/post-a-job/myJobs/index.htm' ]                  
        },  

        dynamicIdentifier: {
            selector: '',
            criteria: '',
            value: ''
        }
    }
}
}
,

                /*
                 * Custom events that allow custom behavior per journey. The standard is defined on CustomEvents.js.
                 */
                customEvents: {
  onLoad: function() {
    !function e(t,n,r){function o(a,c){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!c&&u)return u(a,!0);if(i)return i(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){var n=t[a][1][e];return o(n?n:e)},l,l.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e){var t=e("debug")("mode:production");t("launching application");try{e("./main")}catch(n){t("Error",n)}},{"./main":8,debug:2}],2:[function(e,t,n){function r(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function o(){var e=arguments,t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+n.humanize(this.diff),!t)return e;var r="color: "+this.color;e=[e[0],r,"color: inherit"].concat(Array.prototype.slice.call(e,1));var o=0,i=0;return e[0].replace(/%[a-z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(i=o))}),e.splice(i,0,r),e}function i(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(e){try{null==e?u.removeItem("debug"):u.debug=e}catch(t){}}function c(){var e;try{e=u.debug}catch(t){}return e}n=t.exports=e("./debug"),n.log=i,n.formatArgs=o,n.save=a,n.load=c,n.useColors=r;var u;u="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:window.localStorage,n.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],n.formatters.j=function(e){return JSON.stringify(e)},n.enable(c())},{"./debug":3}],3:[function(e,t,n){function r(){return n.colors[l++%n.colors.length]}function o(e){function t(){}function o(){var e=o,t=+new Date,i=t-(s||t);e.diff=i,e.prev=s,e.curr=t,s=t,null==e.useColors&&(e.useColors=n.useColors()),null==e.color&&e.useColors&&(e.color=r());var a=Array.prototype.slice.call(arguments);a[0]=n.coerce(a[0]),"string"!=typeof a[0]&&(a=["%o"].concat(a));var c=0;a[0]=a[0].replace(/%([a-z%])/g,function(t,r){if("%%"===t)return t;c++;var o=n.formatters[r];if("function"==typeof o){var i=a[c];t=o.call(e,i),a.splice(c,1),c--}return t}),"function"==typeof n.formatArgs&&(a=n.formatArgs.apply(e,a));var u=o.log||n.log||console.log.bind(console);u.apply(e,a)}t.enabled=!1,o.enabled=!0;var i=n.enabled(e)?o:t;return i.namespace=e,i}function i(e){n.save(e);for(var t=(e||"").split(/[\s,]+/),r=t.length,o=0;r>o;o++)t[o]&&(e=t[o].replace(/\*/g,".*?"),"-"===e[0]?n.skips.push(new RegExp("^"+e.substr(1)+"$")):n.names.push(new RegExp("^"+e+"$")))}function a(){n.enable("")}function c(e){var t,r;for(t=0,r=n.skips.length;r>t;t++)if(n.skips[t].test(e))return!1;for(t=0,r=n.names.length;r>t;t++)if(n.names[t].test(e))return!0;return!1}function u(e){return e instanceof Error?e.stack||e.message:e}n=t.exports=o,n.coerce=u,n.disable=a,n.enable=i,n.enabled=c,n.humanize=e("ms"),n.names=[],n.skips=[],n.formatters={};var s,l=0},{ms:4}],4:[function(e,t){function n(e){var t=/^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]),r=(t[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"y":return n*l;case"days":case"day":case"d":return n*s;case"hours":case"hour":case"h":return n*u;case"minutes":case"minute":case"m":return n*c;case"seconds":case"second":case"s":return n*a;case"ms":return n}}}function r(e){return e>=s?Math.round(e/s)+"d":e>=u?Math.round(e/u)+"h":e>=c?Math.round(e/c)+"m":e>=a?Math.round(e/a)+"s":e+"ms"}function o(e){return i(e,s,"day")||i(e,u,"hour")||i(e,c,"minute")||i(e,a,"second")||e+" ms"}function i(e,t,n){return t>e?void 0:1.5*t>e?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}var a=1e3,c=60*a,u=60*c,s=24*u,l=365.25*s;t.exports=function(e,t){return t=t||{},"string"==typeof e?n(e):t.long?o(e):r(e)}},{}],5:[function(e,t){!function(e){function n(){try{return c in e&&e[c]}catch(t){return!1}}function r(e){return e.replace(/^d/,"___$&").replace(p,"___")}var o,i={},a=e.document,c="localStorage",u="script";if(i.disabled=!1,i.version="1.3.17",i.set=function(){},i.get=function(){},i.has=function(e){return void 0!==i.get(e)},i.remove=function(){},i.clear=function(){},i.transact=function(e,t,n){null==n&&(n=t,t=null),null==t&&(t={});var r=i.get(e,t);n(r),i.set(e,r)},i.getAll=function(){},i.forEach=function(){},i.serialize=function(e){return JSON.stringify(e)},i.deserialize=function(e){if("string"!=typeof e)return void 0;try{return JSON.parse(e)}catch(t){return e||void 0}},n())o=e[c],i.set=function(e,t){return void 0===t?i.remove(e):(o.setItem(e,i.serialize(t)),t)},i.get=function(e,t){var n=i.deserialize(o.getItem(e));return void 0===n?t:n},i.remove=function(e){o.removeItem(e)},i.clear=function(){o.clear()},i.getAll=function(){var e={};return i.forEach(function(t,n){e[t]=n}),e},i.forEach=function(e){for(var t=0;t<o.length;t++){var n=o.key(t);e(n,i.get(n))}};else if(a.documentElement.addBehavior){var s,l;try{l=new ActiveXObject("htmlfile"),l.open(),l.write("<"+u+">document.w=window</"+u+'><iframe src="/favicon.ico"></iframe>'),l.close(),s=l.w.frames[0].document,o=s.createElement("div")}catch(d){o=a.createElement("div"),s=a.body}var f=function(e){return function(){var t=Array.prototype.slice.call(arguments,0);t.unshift(o),s.appendChild(o),o.addBehavior("#default#userData"),o.load(c);var n=e.apply(i,t);return s.removeChild(o),n}},p=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");i.set=f(function(e,t,n){return t=r(t),void 0===n?i.remove(t):(e.setAttribute(t,i.serialize(n)),e.save(c),n)}),i.get=f(function(e,t,n){t=r(t);var o=i.deserialize(e.getAttribute(t));return void 0===o?n:o}),i.remove=f(function(e,t){t=r(t),e.removeAttribute(t),e.save(c)}),i.clear=f(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(c);for(var n,r=0;n=t[r];r++)e.removeAttribute(n.name);e.save(c)}),i.getAll=function(){var e={};return i.forEach(function(t,n){e[t]=n}),e},i.forEach=f(function(e,t){for(var n,r=e.XMLDocument.documentElement.attributes,o=0;n=r[o];++o)t(n.name,i.deserialize(e.getAttribute(n.name)))})}try{var g="__storejs__";i.set(g,g),i.get(g)!=g&&(i.disabled=!0),i.remove(g)}catch(d){i.disabled=!0}i.enabled=!i.disabled,"undefined"!=typeof t&&t.exports&&this.module!==t?t.exports=i:"function"==typeof define&&define.amd?define(i):e.store=i}(Function("return this")())},{}],6:[function(e,t){var n=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1};t.exports={PatternPrototype:{match:function(e){var t,n,r,o,i,a,c,u;if(o=this.regex.exec(e),null==o)return null;if(n=o.slice(1),this.isRegex)return n;for(t={},r=c=0,u=n.length;u>c;r=++c)a=n[r],i=this.names[r],null!=a&&("_"===i?(null==t._&&(t._=[]),t._.push(a)):t[i]=a);return t}},newPattern:function(e,n){var r,o,i;if(null==n&&(n="/"),r=e instanceof RegExp,"string"!=typeof e&&!r)throw new TypeError("argument must be a regex or a string");return[":","*"].forEach(function(e){if(n===e)throw new Error("separator can't be "+e)}),o=Object.create(t.exports.PatternPrototype),o.isRegex=r,o.regex=r?e:(i=t.exports.toRegexString(e,n),new RegExp(i)),r||(o.names=t.exports.getNames(e,n)),o},escapeForRegex:function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},getNames:function(e,r){var o,i,a,c,u;if(null==r&&(r="/"),e instanceof RegExp)return[];for(o=t.exports.escapeForRegex(r),c=new RegExp("((:?:[^"+o+"()]+)|(?:[*]))","g"),a=[],u=c.exec(e);null!=u;){if(i=u[1].slice(1),"_"===i)throw new TypeError(":_ can't be used as a pattern name in pattern "+e);if(n.call(a,i)>=0)throw new TypeError("duplicate pattern name :"+i+" in pattern "+e);a.push(i||"_"),u=c.exec(e)}return a},escapeSeparators:function(e,n){var r,o;return null==n&&(n="/"),r=t.exports.escapeForRegex(n),o=new RegExp(r,"g"),e.replace(o,r)},toRegexString:function(e,n){var r,o;return null==n&&(n="/"),o=t.exports.escapeSeparators(e,n),o=o.replace(/\((.*?)\)/g,"(?:$1)?").replace(/\*/g,"(.*?)"),r=t.exports.escapeForRegex(n),t.exports.getNames(e,n).forEach(function(e){return o=o.replace(":"+e,"([^\\"+n+"]+)")}),"^"+o+"$"}}},{}],7:[function(e,t){function n(e){o("Launching GDM Script"),function(e){var t=document,n=t.createElement("script");n.async=!0,n.defer=!0,n.src=e,t.getElementsByTagName("head")[0].appendChild(n)}((iatDev=window.location.href.indexOf("iatDev=1")>-1||document.cookie.indexOf("iatDev=1")>-1,"//"+("http:"!==window.location.protocol||iatDev?"":"h")+"fp.gdmdigital.com/"+e+".js?r="+1e16*Math.random()+"&m=992&a="+e+(iatDev?"&d=1":"")))}var r=e("./utils/type"),o=e("debug")("GDM Handler");t.exports={start:function(e){r(e,"object")&&!e.exclude&&e.flexId&&n(e.flexId)}}},{"./utils/type":21,debug:2}],8:[function(e){var t=e("debug")("main");e("./utils/polyfills");var n=e("./settings"),r=e("./gdmhandler"),o=e("./run");t("VERSION: "+n.version.join(".")),t("running gdm handler"),r.start(n.gdm),t("running main code"),o.start(n.genie)},{"./gdmhandler":7,"./run":11,"./settings":12,"./utils/polyfills":19,debug:2}],9:[function(e,t){function n(e,t){this.urlMatch=!1;var n=t.page||{};this.params=n.params||{},this.urls=n.urls||[],this.dynamicId=t.dynamicIdentifier||{},this.namespace=e.namespace,this.name=e.name,this.setUpLogger()}var r=e("./pubsub-js"),o=e("./utils/checkElements"),i=e("./utils/type"),a=e("./utils/urls"),c=e("debug"),u=e("./utils/jq"),s=e("./utils/criteria").criteria,l=e("./settings").genie,d={productPages:{namespace:"product",name:"productPages"},basketPages:{namespace:"basket",name:"basketPages"},orderValue:{namespace:"value",name:"orderValue"},orderId:{namespace:"id",name:"orderId"},completePage:{namespace:"complete",name:"completePage"}};n.prototype.check=function(){var e=!1,t=this;return this.log("checking through urls"),u.each(this.urls,function(n,r){var o=t.params;i(r,"object")&&r.params&&Object.size(r.params)&&(o=u.extend({},o,urls.params)),a.test(r,o)&&(e=!0,t.log(t.namespace,"matches with url",r,"and params",o))}),this.UrlMatch=e,e},n.prototype.setUpLogger=function(){this.log=c("page:"+this.namespace)},n.prototype.dynamicIdentifier=function(){var e=this.dynamicId,t=this;this.dynamicIdentifierExists()&&this.UrlMatch&&(this.log("checking for dynamic identifier"),o.checkUpdates(e.selector,function(n,o){return s[e.criteria||"yesPlease"](o,e.value)?(t.log("dynamic identifier test passed now ready to act"),r.publishSync("page."+t.namespace,l[t.name]),!0):void 0}))},n.prototype.run=function(){return this.check()?this.dynamicIdentifierExists()?(this.dynamicIdentifier(),!1):(this.log("url found and no dynamic identifier running page action"),r.publishSync("page."+this.namespace,l[this.name]),!0):void 0},n.prototype.dynamicIdentifierExists=function(){return Object.size(this.dynamicId)&&this.dynamicId.selector&&this.dynamicId.selector.length},n.prototype.fromCompletePage=function(){return this.urls.length?!1:!0},t.exports={product:new n(d.productPages,l.productPages),basket:new n(d.basketPages,l.basketPages),value:new n(d.orderValue,l.orderValue),id:new n(d.orderId,l.orderId),complete:new n(d.completePage,l.completePage)}},{"./pubsub-js":10,"./settings":12,"./utils/checkElements":14,"./utils/criteria":15,"./utils/jq":16,"./utils/type":21,"./utils/urls":22,debug:2}],10:[function(e,t){"use strict";function n(e){var t;for(t in e)if(e.hasOwnProperty(t))return!0;return!1}function r(e){return function(){if(window.vedebugmode)throw e}}function o(e,t,n){try{e(t,n)}catch(o){setTimeout(r(o),0)}}function i(e,t,n){e(t,n)}function a(e,t,n,r){var a,c=d[t],u=r?i:o;if(d.hasOwnProperty(t))for(a in c)c.hasOwnProperty(a)&&u(c[a],e,n)}function c(e,t,n){return function(){var r=String(e),o=r.lastIndexOf(".");for(a(e,e,t,n);-1!==o;)r=r.substr(0,o),o=r.lastIndexOf("."),a(e,r,t)}}function u(e){for(var t=String(e),r=Boolean(d.hasOwnProperty(t)&&n(d[t])),o=t.lastIndexOf(".");!r&&-1!==o;)t=t.substr(0,o),o=t.lastIndexOf("."),r=Boolean(d.hasOwnProperty(t)&&n(d[t]));return r}function s(e,t,n,r){var o=c(e,t,r),i=u(e);return i?(n===!0?o():setTimeout(o,0),!0):!1}var l={},d={},f=-1;l.publish=function(e,t){return s(e,t,!1,l.immediateExceptions)},l.publishSync=function(e,t){return s(e,t,!0,l.immediateExceptions)},l.subscribe=function(e,t){if("function"!=typeof t)return!1;d.hasOwnProperty(e)||(d[e]={});var n="uid_"+String(++f);return d[e][n]=t,n},l.clearAllSubscriptions=function(){d={}},l.unsubscribe=function(e){var t,n,r,o="string"==typeof e&&d.hasOwnProperty(e),i=!o&&"string"==typeof e,a="function"==typeof e,c=!1;if(o)return void delete d[e];for(t in d)if(d.hasOwnProperty(t)){if(n=d[t],i&&n[e]){delete n[e],c=e;break}if(a)for(r in n)n.hasOwnProperty(r)&&n[r]===e&&(delete n[r],c=!0)}return c},t.exports=l},{}],11:[function(e,t){function n(){var e,t,n=R.genie,r=F?s(n.orderValue):g(T)||n.orderValue["default"],o=q?s(n.orderId):g(_)||(new Date).getTime(),i=n.completionId,a=(n.gdmConversionCode,n.gdmSegementId,g(V)||null),c=(g(N)||null,n.journeyCode),u=n.dbm.src,l=n.dbm.cat.conversion||n.dbm.cat.ros;if(i&&(e="//secure.adnxs.com/px?id="+i+"&seg="+n.segmentIds[1]+"&order_id="+o+"&value="+r+"&t=2",x(e),S("App Nexus Completion Pixel added to complete page")),c&&c.length){var d={companyId:c,items:(a?a+"|":"")+"BASKETVAL:"+r,orderId:o};t=E.adgenie(d,!0),S("adGenie Completion Pixel added to complete page"),x(t)}if(u&&l){var f={src:u,cat:l,orderId:o,orderValue:r},p=E.dbm.conversion(f);x(p),S("Doubleclick Bid Manager Conversion Pixel added to complete page")}D.clearAllSubscriptions()}function r(e){var t,n;t=E.ros(e.segmentIds),n=E.ros(e.segmentIds,!0),x(t),x(n),j("ROS Pixel added to the site.")}function o(e){var t={src:e.dbm.src,cat:e.dbm.cat.ros};srcDbm=E.dbm.ros(t),x(srcDbm),j("DBM ROS Pixel added to the site.")}function i(t){var n,r,o,i=t["default"]?!1:!0,a=s(t,i),u=R.genie,l=u.journeyCode;if(!a)return C("No Default provided and product element not found on this page"),void c(e("./settings").genie);n=E.product(u.segmentIds),r=E.product(u.segmentIds,!0),x(n),x(r);var d={adgCompanyID:l,adgItem:a};o=E.adgenie(d,!1),C("Genie Src is:",o),x(o),C("Product Page Pixel added to the site.")}function a(e){var t=R.genie.journeyCode;if(e){var n={adgCompanyID:t,adgBasketItems:e};genieSrc=E.adgenie(n,!1),x(genieSrc),A("Basket pixel added added to the site.",genieSrc)}}function c(e){return e.ros&&(j("Page qualifies for ROS"),r(e)),e.dbm.ros&&e.dbm.cat.ros&&(j("Page qualifies for Doubleclick Bid Manager ROS"),o(e)),!1}function u(e,t,n,r){return t=O(t,"regexp")?t:new RegExp("","g"),e.text()&&e.text().trim().replace(t,"")||e.val()&&e.val().trim().replace(t,"")||String(n||r)}function s(e,t){var n=I(e.selector),r=(new Date).getTime();if(!n.length)return t?"":e["default"]||r;var o=u(n,e.regex,e["default"],r);return encodeURIComponent(o)}function l(e){var t=w.check(e.selectors.productId),n=w.check(e.selectors.productPrice),r=m(n),o=h(t);setTimeout(function(){p(r,V),p(o,N)},0),a(o)}function d(e){var t=e.updates&&e.urls.length?" - DYNAMAICALLY":"",n=e.updates&&e.urls.length?w.checkUpdates:w.check;P("Checking For Order Value"+t),n(e.selector,function(n){var r=M[e.mask||"doNothing"](u(n,e.regex,e["default"]));P("Order Value element found"+t+" : "+r),p(r,T)})}function f(e){k("Checking For order Id"),w.check(e.selector,function(t){var n=M[e.mask||"doNothing"](u(t,e.regex,e["default"]));k("Order ID found "+n),p(n,_)})}function p(e,t){P("Storing "+t+" as "+e),v.set(b+t,e)}function g(e){return P("Obtaining from storage "+e),v.get(b+e)}function m(e){if(!e||!e.length)return"";var t="",n=e.length;return n?(e.each(function(e,r){var o=w.getValOrText(I(r));o=M.currency(o),t+="PROD"+(e+1)+":"+o+(n-1>e?"|":"")}),t):""}function h(e){if(!e||!e.length)return"";var t="",n=e.length;return n?(e.each(function(e,r){var o=w.getValOrText(I(r));o=encodeURIComponent(o),t+=o+(n-1>e?"|":"")}),t):""}{var v=e("./utils/store"),b=e("./settings").namespace,y=(e("./utils/urls"),e("./pages")),w=e("./utils/checkElements"),x=e("./utils/addPixel"),I=e("./utils/jq"),E=e("./utils/pixelSrc"),S=e("debug")("conversion:pixel"),O=e("./utils/type"),P=e("debug")("run:value"),k=e("debug")("run:id"),j=e("debug")("run:ros"),C=e("debug")("run:product"),A=e("debug")("run:basket"),R=(e("./utils/criteria").criteria,e("./settings")),D=e("./pubsub-js"),M=e("./utils/criteria").masks,T="orderValue",_="orderId",N="idList",V="itemString",q=y.id.fromCompletePage(),F=y.value.fromCompletePage(),L={value:function(e,t){d(t)},id:function(e,t){f(t)},product:function(e,t){i(t)},basket:function(e,t){l(t)},complete:function(e,t){n(t)}};({value:D.subscribe("page.value",L.value),id:D.subscribe("page.id",L.id),product:D.subscribe("page.product",L.product),basket:D.subscribe("page.basket",L.basket),complete:D.subscribe("page.complete",L.complete)})}t.exports={start:function(e){var t,n,r,o;c(e),n=y.value.run();y.id.run();t=y.complete.run(),t||(r=y.basket.run()),t||r||(o=y.product.run())}}},{"./pages":9,"./pubsub-js":10,"./settings":12,"./utils/addPixel":13,"./utils/checkElements":14,"./utils/criteria":15,"./utils/jq":16,"./utils/pixelSrc":18,"./utils/store":20,"./utils/type":21,"./utils/urls":22,debug:2}],12:[function(e,t){var n=window.veTagData.settings.gdm;t.exports={gdm:n.gdm||{exclude:n.exclude,flexId:n.flexId,gdmConversionCode:n.gdmConversionCode,gdmSegementId:n.gdmSegementId},genie:{gdmConversionCode:n.gdmConversionCode,gdmSegementId:n.gdmSegementId||n.gdmSegmentId,completionId:n.completionId,journeyCode:n.journeyCode,segmentIds:n.segmentIds,orderId:n.orderId,orderValue:n.orderValue,completePage:n.completePage,ros:n.ros,basketPages:n.basketPages,productPages:n.productPages,dbm:n.dbm||{}},dbm:n.dbm,namespace:"veapps."+(n.flexId||"")+(n.journeyCode||"")+".GDM.",version:[1,3,1]}},{}],13:[function(e,t){function n(e){var t=document.createElement("img");t.width=1,t.height=1,t.src=e,t.style.visibility="hidden",document.body.appendChild(t),setTimeout(function(){t.style.display="none"},1e3)}t.exports=n},{}],14:[function(e,t){function n(e,t,n){var r=0;e=e||1e3,t=t||600;var o=setInterval(function(){var e=n();r++,(e||t&&r>=t)&&(i("Clearing Check Interval"),clearInterval(o))},e);return o}function r(e,t){var r,o=!1;if(a(t,"function"))var u=n(null,null,function(){return o===!0?void clearInterval(u):(r=c(e),r.length?(o=!0,i("Success function is about to be called"),clearInterval(u),t(r),r):!1)});if(r=c(e),r.length){if(o=!0,i("Success function is about to be called"),!a(t,"function"))return r;clearInterval(u),t(r)}return r}function o(e){return a(e,"string")&&(e=c(e)),e.length?e.val()&&e.val().trim()||e.text()&&e.text().trim():""}var i=e("debug")("checkElement"),a=e("./type"),c=e("./jq");t.exports={check:function(e,t){return i("Element is being checked"),r(e,t)},checkUpdates:function(e,t,r){null==r&&(r=t,t="");var i,u,s,l=n(500,2e3,function(){return u=c(e),s=o(u),!a(s,"nan")&&!a(s,"null")&&!a(s,"undefined")&&s!==t&&(t=s,i=r(u,s))?(clearInterval(l),!0):void 0})},getValOrText:o}},{"./jq":16,"./type":21,debug:2}],15:[function(e,t){var n=(e("./type"),{contains:function(e,t){return e=String(e.toLowerCase()),e.indexOf(String(t).toLowerCase())>-1},equal:function(e,t){return String(e)===String(t)},not:function(e,t){return-1===String(e).indexOf(String(t))},yesPlease:function(){return!0}}),r={number:function(e){var t=String(e).match(/([\d]{4,25})/);return t[1]},alphanumeric:function(e){var t=String(e).match(/([\dA-Z]{4,25})/);return t[1]},currency:function(e){return String(e).replace(/[^0-9\.,]/g,"")},doNothing:function(e){return String(e)}};t.exports={criteria:n,masks:r}},{"./type":21}],16:[function(e,t){t.exports=window.VEjQuery||window.$},{}],17:[function(e,t){function n(e,t,n){veTagData.settings.consoleMessagesEnabled&&!o(console,"undefined")&&console.info(e,t||"",n||"")}function r(e,t,n){veTagData.settings.consoleMessagesEnabled&&!o(console,"undefined")&&console.log(e,t||"",n||"")}var o=e("./type");t.exports=n,t.exports.safe=r},{"./type":21}],18:[function(e,t){{var n=("https:"===(window.location.protocol||"https:")?!0:!1,e("./jq"));e("./type"),e("./log")}t.exports={ros:function(e,t){return t?"//secure.adnxs.com/seg?add="+(e[2]||e[0])+"&t=2":"//ib.adnxs.com/seg?add="+(e[2]||e[0])+"&t=2"},product:function(e,t){return t?"//secure.adnxs.com/seg?add="+e[0]+"&t=2":"//ib.adnxs.com/seg?add="+e[0]+"&t=2"},adgenie:function(e,t){var r="//adverts.adgenie.co.uk/"+(t?"conversion.php?":"genieTracker.php?"),o=0;return n.isEmptyObject(e)?r:(n.each(e,function(t,n){o++,n&&(r=r+t+"="+n+(o>=Object.size(e)?"":"&"))}),r)},appnexus:function(e){return e},dbm:{ros:function(e){var t=Math.random()+"",n=1e13*t,r="https://ad.doubleclick.net/activity;src=";return r+e.src+";type=invmedia;cat="+e.cat+";ord="+n+"?"},conversion:function(e){var t="https://ad.doubleclick.net/activity;src=";return t+e.src+";type=sales;cat="+e.cat+";qty=[Quantity];cost="+e.orderValue+";ord="+e.orderId+"?"}}}},{"./jq":16,"./log":17,"./type":21}],19:[function(e){var t=e("./type");t(Object.create,"function")||(Object.create=function(){var e=function(){};return function(t){if(arguments.length>1)throw Error("Second argument not supported");if("object"!=typeof t)throw TypeError("Argument must be an object");e.prototype=t;var n=new e;return e.prototype=null,n}}()),t(Object.size,"function")||(Object.size=function(e){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}),Array.prototype.forEach||(Array.prototype.forEach=function(e,t){var n,r,o,i,a,c=Object(this),u=c.length,s=u>>>0;if("function"!=typeof e)throw new TypeError;for(n=t?t:void 0,r=0;s>r;)o=r.toString(),i=c.hasOwnProperty(o),i&&(a=c[o],e.call(n,a,r,c)),r+=1;return void 0}),function(){for(var e,n=function(){},r=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],o=r.length,i=window.console=window.console||{};o--;)e=r[o],i[e]||(i[e]=n);Function.prototype.bind&&t(i,"object")&&t(i.log,"object")&&r.forEach(function(){i[e]=Function.prototype.call.bind(i[e],i)})}(),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){"use strict";if(null==this)throw new TypeError;var t=Object(this),n=t.length>>>0;if(0===n)return-1;var r=0;if(arguments.length>1&&(r=Number(arguments[1]),r!==r?r=0:0!==r&&1/0!==r&&r!==-1/0&&(r=(r>0||-1)*Math.floor(Math.abs(r)))),r>=n)return-1;for(var o=r>=0?r:Math.max(n-Math.abs(r),0);n>o;o++)if(o in t&&t[o]===e)return o;return-1}),String.prototype.trim||!function(){var e=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;String.prototype.trim=function(){return this.replace(e,"")}}()},{"./type":21}],20:[function(e,t){function n(e){var t="testStorage";try{return window[e].setItem(t,t),window[e].removeItem(t),!0}catch(n){return!1}}var r,o,i,a,c=e("./type"),u=function(){},s="localStorage";i={set:u,get:u,remove:u,clear:u,SUPPORT:"none"},a={set:function(e,t){return window[s].setItem(e,t)},get:function(e){return window[s].getItem(e)},remove:function(e){return window[s].removeItem(e)},clear:function(){return window[s].clear()},SUPPORT:"simple"};var l;window.JSON&&c(window.JSON.parse,"function")&&c(window.JSON.stringify,"function")?(r=e("store"),o=r.enabled?r:i):o=l||(l=n(s))?a:i,t.exports=o},{"./type":21,store:5}],21:[function(e,t){var n=Object.prototype.toString;t.exports=function(e,t){switch(n.call(e)){case"[object Date]":return"date"===t;case"[object RegExp]":return"regexp"===t;case"[object Arguments]":return"arguments"===t;case"[object Array]":return"array"===t;case"[object Error]":return"error"===t}return null===e?"null"===t:void 0===e?"undefined"===t:e!==e?"nan":e&&1===e.nodeType?"element"===t:(e=e.valueOf?e.valueOf():Object.prototype.valueOf.apply(e),t===typeof e)}},{}],22:[function(e,t){function n(e){if(""===e||"?"===e)return{};var t,n,r,o={};for(t=e.replace(/^\?/,"").split("&"),n=0;n<t.length;n++)r=t[n].split("="),o[r[0]]=r[1];return o}function r(e){try{var t=(e+"").toLowerCase();return t=t.replace("http://",""),t=t.replace("https://",""),t=t.replace("#","?"),t=t.replace(";","?"),"www."===t.substr(0,4)&&(t=t.replace("www.","")),t}catch(n){return""}}function o(e){"www."===e.substr(0,4)&&(e=e.replace("www.","")),e=e.toLowerCase();var t=a.newPattern(e),n=!!t.match(s);return c("Result of URLs matching "+e+" is",n),n}function i(e){var t=!0;return Object.size(e)?(u.each(e,function(e,n){e=String(e),n=String(n);var r=a.newPattern(n);(null==l[e]||!r.match(l[e])&&!r.match(decodeURIComponent(l[e])))&&(t=!1)}),t):t}var a=e("url-pattern"),c=e("debug")("urls"),u=e("./jq"),s=r(window.location.hostname+(window.location.pathname.length>1?window.location.pathname:"")),l=n(window.location.search||"");c("PAGE_URL and PAGE_PARAMS have been set."),t.exports={test:function(e,t){return o(e)&&i(t)}}},{"./jq":16,debug:2,"url-pattern":6}]},{},[1]);
  }
},

                /*
                 * Criteria filters that are setup by tech team. The types of Criteria filters possible are:
                 *       * Personality - The matching of this criteria filters will defined the personality that the chat will have
                 *       * Variation
                 */
                criteriaFilters: {},

                /*
                 * All the apps that Ve Interactive has with the events
                 */
                apps: [
  {
    name: "Chat",
    exit: true,
    inactivity: true,
    backButton: true,
    load: true,
    enabled: true,
    maxActivationsPerSession: null,
    activateOnlyOnLastTab: false,
    minTimeBetweenActivations: null,
    exitIntent: true
  }
]
            };
        if (!tag) {

            // Send the request in order to create the cookie session
            if (d.settings.cookie && d.settings.cookie.enabled) {
                var xdr = null;
                if (window.XMLHttpRequest) {
                    xdr = new XMLHttpRequest();
                }

                if (xdr !== null) {
                    var url = d.chatServicesUrl.split('/')[0] + // Getting the rcs URL
                                '/DataReceiverService.asmx/SessionInit?journeyCode=a4744012-dfdd-4cec-8fa0-3840fd30a461&timeToLive=' +
                                (d.settings.cookie.timeToLive ? d.settings.cookie.timeToLive : 60); // either the time exist either we use the default time (minutes)

                    xdr.open("GET", location.protocol + "//" + url);
                    xdr.withCredentials = true;
                    xdr.send();
                }
            }


            // Adding the Capture-apps file to the DOM
            tag = document.createElement('script');
            tag.type = 'text/javascript';
            tag.id = 'veConnect';
            tag.async = true;
            tag.src = window.location.protocol + d.veHostDomain +'/scripts/3.0/capture-3.0.3.js';
            b = document.getElementsByTagName('script')[0];
            b.parentNode.insertBefore(tag, b);
        }
        return d;
    })();
};
