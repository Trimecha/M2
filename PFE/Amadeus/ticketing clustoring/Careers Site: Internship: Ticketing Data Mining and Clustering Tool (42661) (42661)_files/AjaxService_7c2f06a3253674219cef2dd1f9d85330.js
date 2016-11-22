function AjaxService(){}
AjaxService._defaultErrorHandler=function(a,e){var b=window.jsSFMessages||window.MSGS,l=b&&b.COMMON_AJAX_EXCEPTION_CONVERTER_ERROR||'An application error occurred.  Please try again later, or copy the below error information and send it to your support group if the issue keeps occurring. \n\n(Once you have read this message, you can dismiss it using either the "OK" or "Cancel" button.)',c="errorId\x3d"+(e.errorId||"null")+", timestamp\x3d"+(e.timestamp||"null"),g=document.getElementById("serverinfo");if(g){var g=
g.innerHTML,m=g.indexOf("Server:");if(0<=m){var q=g.substring(m+7),m=q.indexOf("\n");0<=m&&(q=q.substring(0,m))&&(c+=", server\x3d"+q.trim())}(g=encodeURIComponent(g.trim()))&&(c+=", versionInfo\x3d"+g)}e.errorId&&e.timestamp?prompt(l,c):alert(b&&b.COMMON_AJAX_DEFAULT_ERROR||"An application error occurred. Please try again later, or notify support if the issue keeps occurring.")};AjaxService._viewid="";AjaxService._seqParam="";AjaxService._redirectUrl="";AjaxService._preHook={};
AjaxService._postHook={};AjaxService.setViewId=function(a){AjaxService._viewid=a};AjaxService.getViewId=function(){return AjaxService._viewid};AjaxService.setSeqParam=function(a){AjaxService._seqParam=a};AjaxService.setRedirectUrl=function(a){AjaxService._redirectUrl=a};AjaxService.getRedirectUrl=function(){return AjaxService._redirectUrl};AjaxService.getMBeanInstance=function(a){return AjaxServiceFactory[a]};AjaxService.setErrorHandler=function(a){AjaxService._defaultErrorHandler=a;dwr.engine.setErrorHandler(AjaxService._defaultErrorHandler)};
AjaxService.beginRemoteBatch=function(){dwr.engine.beginBatch()};AjaxService.endRemoteBatch=function(){dwr.engine.endBatch()};
AjaxService.appendFragmentToDiv=function(a,e,b,l){var c=void 0,g=void 0,m=AjaxService._defaultErrorHandler;void 0!=b&&("function"==typeof b?c=b:(void 0!=b.exceptionHandler&&"function"==typeof b.exceptionHandler&&(m=b.exceptionHandler),c=b.callback,g=b.argument));a={callback:function(a,c,e){return function(b){strEndsWith=function(a,b){return a.match(b+"$")==b};isAllReadyIncluded=function(a,b,c,d){if(document.getElementById(a))return!0;for(var e=b.length,f=0;f<e;f++){var g=b[f];if(d!==g.parentNode){var h=
g[c];if(h&&strEndsWith(a,h))return g.id=a,!0}}return!1};if(""!=b&&void 0!=a){b=new String(b);for(var g=[],m=document.getElementsByTagName("script"),l=document.getElementsByTagName("head")[0],s=l.getElementsByTagName("link"),r=0;a&&r<a.length;r++){var p=Util.gebi(a[r]),h=[],h=b.split("\x3c@"+a[r]+"@\x3e"),k=h[1];b=h[2];g.push(k);p.innerHTML=k;k=p.getElementsByTagName("script");for(h=0;k&&h<k.length;h++){var d=k[h];if(d.src){var f=d.src;if(!isAllReadyIncluded(f,m,"src",p)){var n=document.createElement("script");
n.type="text/javascript";n.id=f;n.src=d.src;l.appendChild(n)}}else if(d.childNodes&&0<d.childNodes.length){if((f=d.childNodes)&&3!=f[0].nodeType)f=d.childNodes[0].childNodes;d=new String;for(n=0;n<f.length;n++)d+=f[n].nodeValue;d=d.replace("\x3c!--","");d=d.replace("--\x3e","");eval(d)}else d.text&&""!=d.text&&(f=new String(d.text),f=f.replace("\x3c!--",""),f=f.replace("--\x3e",""),eval(f))}k=p.getElementsByTagName("link");for(h=0;k&&h<k.length;h++)f=k[h].href,isAllReadyIncluded(f,s,"href",p)||(d=
document.createElement("link"),d.type=k[h].type,d.href=k[h].href,d.rel=k[h].rel,d.title=k[h].title,d.id=f,l.appendChild(d))}void 0!=c&&c(g,e)}}}(a,c,g),exceptionHandler:m,argument:g};uiComponentAccessor.render(e,l,a)};AjaxService.getAllFieldParams=function(a,e){for(var b={},l=0;l<a.elements.length;l++){var c=a.elements[l];"checkbox"==c.type?!0==c.checked&&(b[c.name]="true"):"select"==c.type?b[c.name]=c.selectedIndex.value:"radio"==c.type?!0==c.checked&&(b[c.name]=c.value):b[c.name]=c.value}return b};
AjaxService._preCall=function(){var a=void 0;document.getElementById(AjaxService._seqParam)&&(a=document.getElementById(AjaxService._seqParam).value);var e={};void 0!=a&&(e[AjaxService._seqParam]=String(a));e.viewId=AjaxService._viewid;return e};AjaxService.init=function(){dwr.engine.setErrorHandler(AjaxService._defaultErrorHandler);dwr.engine.setTextHtmlHandler(function(a){void 0!=AjaxService._redirectUrl&&window.setLocation(AjaxService._redirectUrl)})};
AjaxService._getHookId=function(){var a=0;return function(){a++;return"hook:"+a}}();AjaxService._generateHookFunction=function(a){return function(){for(var e in a)a[e]()}};AjaxService.addPreHook=function(a){var e=AjaxService._getHookId();AjaxService._preHook[e]=a;dwr.engine.setPreHook(AjaxService._generateHookFunction(AjaxService._preHook));return e};AjaxService.removePreHook=function(a){delete AjaxService._preHook[a];dwr.engine.setPreHook(AjaxService._generateHookFunction(AjaxService._preHook))};
AjaxService.clearPreHooks=function(){AjaxService._preHook={};dwr.engine.setPreHook(null)};AjaxService.addPostHook=function(a){var e=AjaxService._getHookId();AjaxService._postHook[e]=a;dwr.engine.setPostHook(AjaxService._generateHookFunction(AjaxService._postHook));return e};AjaxService.removePostHook=function(a){delete AjaxService._postHook[a];dwr.engine.setPostHook(AjaxService._generateHookFunction(AjaxService._postHook))};AjaxService.clearPostHooks=function(){AjaxService._postHook={};dwr.engine.setPostHook(null)};
String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")});Array.isArray||(Array.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)});