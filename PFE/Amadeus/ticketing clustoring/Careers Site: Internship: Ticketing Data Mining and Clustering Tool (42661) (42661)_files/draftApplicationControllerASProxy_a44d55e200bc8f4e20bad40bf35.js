window.dwr||(window.dwr={});dwr.engine||(dwr.engine={});window.DWREngine||(window.DWREngine=dwr.engine);window.AjaxServiceFactory||(window.AjaxServiceFactory={});AjaxServiceFactory.draftApplicationController=draftApplicationControllerASProxy;function draftApplicationControllerASProxy(){}
draftApplicationControllerASProxy.deleteDraftedApplication=function(c,a){var b={};"undefined"!=typeof a&&("function"==typeof a?b.callback=a:b=a);b.headers=AjaxService._preCall();"undefined"!=typeof cid&&(b.headers.cid=cid);dwr.engine._execute("/xi/ajax/remoting","draftApplicationControllerProxy","deleteDraftedApplication",c,b)};
draftApplicationControllerASProxy.getDraftApplicationId=function(c,a){var b={};"undefined"!=typeof a&&("function"==typeof a?b.callback=a:b=a);b.headers=AjaxService._preCall();"undefined"!=typeof cid&&(b.headers.cid=cid);dwr.engine._execute("/xi/ajax/remoting","draftApplicationControllerProxy","getDraftApplicationId",c,b)};
draftApplicationControllerASProxy.getDraftApplicationsList=function(c){var a={};"undefined"!=typeof c&&("function"==typeof c?a.callback=c:a=c);a.headers=AjaxService._preCall();"undefined"!=typeof cid&&(a.headers.cid=cid);dwr.engine._execute("/xi/ajax/remoting","draftApplicationControllerProxy","getDraftApplicationsList",a)};