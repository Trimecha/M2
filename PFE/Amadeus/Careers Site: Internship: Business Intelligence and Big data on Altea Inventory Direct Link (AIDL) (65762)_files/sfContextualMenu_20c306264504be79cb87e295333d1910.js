function SFContextualMenu(a,b,c,d,e,f,g){juic.assert(a||b,"Anchor Label or menu type should be declared.");this.register();this._label=a;this._anchorType=b;this._links=[];this._menu=new SFList("popMenu");this._autoHide=c?c:!1;this._clickShow=e?e:!1;this._style=f?f:!1;this._useIconFonts=!!g;d&&(this._focusId=d);this._isShown=!1;this._anchorTitle=null}
SFContextualMenu.prototype=function(){return juic.set(new juic.Component,{addMenuItem:function(a){this._autoHide&&(a.addEventListener("mouseout",this),a.addEventListener("mouseover",this),a.addEventListener("action",this));this._links.push(a);this._menu.add(a)},removeMenuItem:function(a){this._removeMenuListAndListeners(a);for(var b=0,c=this._links.length;b<c;b++)this._links[b]==a&&this._links.splice(b,1)},_removeMenuListAndListeners:function(a){this._menu.remove(a);this._autoHide&&(a.removeEventListener("mouseout",
this),a.removeEventListener("mouseover",this),a.removeEventListener("action",this))},setEnabled:function(a,b){juic.assert(a.setEnabled,"Function setEnable does not exist for the object "+a.id);a.setEnabled(b)},setLabel:function(a){this._label=a;juic.$("label_"+this.id)&&(juic.$("label_"+this.id).innerHTML=a)},setAnchorTitle:function(a){this._anchorTitle=a},setAnchorType:function(a){this._anchorType=a},setMenuFocusPoint:function(a){juic.assert("label"===a||"anchor"===a,"Only anchor and label are accepted");
this._focusId=a+"_"+this.id},_getAnchorType:function(){switch(this._anchorType){case "arrowDown":return"menu_arrow_blue_border";case "gear":return"menu_gear_arrow"}return this._anchorType},hide:function(){this._isShown=!1;this.selectedIndex=-1;SFDOMEvent.removeListener(window.document,"touchend",this._hideCallbackFn,this);SFDOMEvent.removeListener(window.document,"click",this._hideCallbackFn,this);SFDOMEvent.removeListener(window.document,"keydown",this._keyDownHandler,this);SFPositionManager.removeEventListener("positionFixed",
this);this._positionInfo=null;this._menu.dispatch("hide");clearTimeout(this.hideTimeout);delete this.hideTimeout},_hideCallbackFn:function(a){try{this._isClickOutsideOfMenu(a)&&(this._clearTimeOuts(),this.hide())}catch(b){}},_clearTimeOuts:function(){this.hideTimeout&&(clearTimeout(this.hideTimeout),delete this.hideTimeout);this._tid&&(clearTimeout(this._tid),delete this._tid)},_hideTimer:function(a){if(a){var b=this;this._clearTimeOuts();this.hideTimeout=setTimeout(function(){b._hideOptions()},1E3)}else clearTimeout(this.hideTimeout),
delete this.hideTimeout},_hideOptions:function(){this.hide();var a=juic.$(this._focusId?this._focusId:this._label?"label_"+this.id:"anchor_"+this.id);a&&SFDom.isDisplayed(a)&&a.focus()},_keyDownHandler:function(a){var b=SFDOMEvent.getKeyName(a);switch(b){case "ESCAPE":this._clearTimeOuts();this._hideOptions();break;case "ARROWDOWN":case "ARROWUP":this._menu._focusNext("ARROWUP"==b),SFDOMEvent.preventDefault(a)}},_openSelector:function(a){if(!this._isShown){this._isShown=!0;this._clearTimeOuts();var b=
this,c=200;a&&(c=0);this._tid=setTimeout(function(){SFPositionManager.addEventListener("positionFixed",b);SFPositionManager.show(b._menu,b._focusId?b._focusId:b._label?"label_"+b.id:"anchor_"+b.id)},c);return!1}},_stopShowingSelector:function(){this._hideTimer(!0)},_getIconEntity:function(){var a="\x26nbsp;";if(this._useIconFonts)switch(this._anchorType){case "gear":a="\x26#xe00c;";break;case "arrowDown":a="\x26#xe1ef;"}return a},renderHtml:function(a){a.push('\x3cspan id\x3d"',this.id,'" class\x3d"sfContextualMenu" style\x3d"white-space: nowrap;"\x3e');
this._label?(a.push('\x3ca class\x3d"SFContextualMenuLabel" id\x3d"label_',this.id,'" href\x3d"javascript:void(0);" role\x3d"button" aria-haspopup\x3d"true" aria-owns\x3d"'+this._menu.id+'" '),this._clickShow||a.push('onmouseover\x3d"'+this.fireCode("_openSelector")+'" '),this._autoHide&&a.push('onmouseout\x3d"'+this.fireCode("_stopShowingSelector")+'" '),a.push('onclick\x3d"'+this.fireCode("_openSelector",!0)+'return false;"\x3e'+Util.escapeHTML(this._label)),a.push('\x3cspan class\x3d"',this._getAnchorType(),
this._useIconFonts?" sfContextualMenuIcon sapIcon":""),a.push('"\x3e',this._getIconEntity(),"\x3c/span\x3e "),a.push("\x3c/a\x3e")):(a.push('\x3ca id\x3d"anchor_'+this.id+'" class\x3d"'+this._getAnchorType()+(this._useIconFonts?" sapIcon":"")+'" href\x3d"javascript:void(0);" role\x3d"button" aria-haspopup\x3d"true" aria-owns\x3d"'+this._menu.id+'" '),this._anchorTitle&&a.push('title\x3d"',this._anchorTitle,'" '),this._style&&a.push('style\x3d"',this._style,'" '),this._clickShow||a.push('onmouseover\x3d"'+
this.fireCode("_openSelector")+'" '),this._autoHide&&a.push('onmouseout\x3d"'+this.fireCode("_stopShowingSelector")+'" '),a.push('onclick\x3d"'+this.fireCode("_openSelector",!0)+'; return false;"\x3e\x26nbsp;\x3c/a\x3e'));a.push("\x3c/span\x3e")},handleEvent:function(a){switch(a.type){case "mouseout":this._hideTimer(!0);break;case "mouseover":this._hideTimer(!1);break;case "action":if("mouseout"==a.actionCommand)this._hideTimer(!0);else if("mouseover"==a.actionCommand)this._hideTimer(!1);else if("focus"==
a.actionCommand)this._menu.onItemFocus(a.actionData);break;case "positionFixed":if(this._isMatchingOverlay(a)){this._positionInfo=a.positionInfo;this._menu.setFocus(!1);var b=this;window.setTimeout(function(){SFDOMEvent.addListener(window.document,"click",b._hideCallbackFn,b);SFDOMEvent.addListener(window.document,"keydown",b._keyDownHandler,b);SFDOMEvent.addListener(window.document,"touchend",b._hideCallbackFn,b)},500);this.dispatchEvent(a)}}},cleanup:function(){for(var a=0,b=this._links.length;a<
b;a++)this._links[a].cleanup();this.unregister()},_isMatchingOverlay:function(a){if(a=juic.$(a.positionInfo.overlay.overlayId)){a=a.childNodes;for(var b=0;b<a.length;b++)if(a[b].id===this._menu.id)return!0}return!1},_isClickOutsideOfMenu:function(a,b){var c=SFDOMEvent.getTarget(a||window.event);return SFDom.isAncestor(this._menu.id,c)?!1:!0}})}();