function BasicDialog(f,c,d,b,a){this.register();this._dialog=null;this._width=parseInt(c);this._height=parseInt(d);this._dlgElem=juic.$(f);this._animOrigin=this._animOut=this._animOpen=null;this._animDuration=0.25;this._focusControl=null;this._options=a;this.initDialog(f,c,d,b)}
BasicDialog.prototype=function(){function f(b,a,e){if("string"==typeof a){if("false"!=a){var k=juic.$(a);YAHOO.util.Event.addListener(e,"click",function(){k.click()},null,this);YAHOO.util.Event.addListener(b,"keydown",function(a){(27==a.which||27==a.keyCode)&&k.click()},null,this)}}else YAHOO.util.Event.addListener(e,"click",a,null,this)}function c(b){var a=YAHOO.util.Dom.getElementsBy(function(a){if("ft"==a.className)return a},"div",b)[0],a=Util.ce("A",a);a.setAttribute("id",b.id+"_lastAnchor");
a.setAttribute("href","javascript:void(0);");a.setAttribute("class","dlg-focus");var a=YAHOO.util.Dom.getElementsBy(function(a){if(-1!=a.className.indexOf("bd"))return a},"div",b)[0],e=Util.ce("A",a);e.setAttribute("id",b.id+"_firstAnchor");e.setAttribute("href","javascript:void(0);");e.setAttribute("class","dlg-focus");a.insertBefore(e,a.firstChild);YAHOO.util.Event.addListener(b.id+"_lastAnchor","focus",function(){juic.$(b.id+"_firstAnchor").focus()})}function d(b,a){var e=[];b[a](e);return e.join("")}
return set(new Component,{initDialog:function(b,a,e,k){var c=!1,h=!0,f=!0,g=!1;this._options&&this._options.fixedcenter&&(c=!0==this._options.fixedcenter?!0:!1);this._options&&"false"==this._options.xbutton&&(h=!1);this._options&&void 0!=this._options.autoscroll&&(f=!1==this._options.autoscroll?!1:!0);this._options&&this._options.useIconFonts&&(g=this._options.useIconFonts);null==this._dialog&&(this._dialog=new SFBasicDialogPanel(b,{width:a,height:e,zindex:1E4,fixedcenter:c,visible:!1,modal:k,close:h,
constraintoviewport:!1,strings:{close:"\x26#160;"},draggable:!1,useIconFonts:g}));if(f){var d=this;this._dialog.showEvent.subscribe(function(){var a=YAHOO.util.Dom.getElementsBy(function(a){if("ft"==a.className)return a},"div",d._dlgElem)[0],b=YAHOO.util.Dom.getElementsBy(function(a){if("hd"==a.className)return a},"div",d._dlgElem)[0],e=YAHOO.util.Dom.getElementsBy(function(a){if(-1!=a.className.indexOf("bd"))return a},"div",d._dlgElem)[0],a=a?a.offsetHeight:0,b=b?b.offsetHeight:0;YAHOO.util.Dom.setStyle(e,
"height",parseInt(d._height)-a-b+"px")})}},findFirstFocus:function(){this._focusControl=null;this._options&&this._options.focusId&&(this._focusControl=juic.$(this._options.focusId));this._focusControl||(this._focusControl=juic.$(this._dlgElem.id+"_firstAnchor"));try{this._focusControl.focus()}catch(b){}},renderHtml:function(b){this._dialog.render(document.body);b=YAHOO.util.Dom.getElementsBy(function(a){if(Util.visible(a))return a},"input",this._dlgElem);if(!juic.$("dlg-mask")){var a=document.getElementsByTagName("body")[0];
Util.ce("div",a).setAttribute("id","dlg-mask")}YAHOO.util.Dom.addClass(this._dlgElem,"modal_dlg");c(this._dlgElem);a=!1;this._options&&(a=null==this._options.enterkey?!1:this._options.enterkey);if(a&&(a=YAHOO.util.Dom.getElementsBy(function(a){if("aquabtn active"==a.className)return a},"span",this._dlgElem)[0]))(a=a.getElementsByTagName("button")[0])&&0<b.length&&YAHOO.util.Event.addListener(b,"keyup",function(a,b){(13==a.which||13==a.keyCode)&&b.click()},a,this);b=null;this._options&&(b=null==this._options.xbutton?
!1:this._options.xbutton);a=YAHOO.util.Dom.getElementsBy(function(a){if(" container-close"==a.className||"container-close"==a.className)return a},"",this._dlgElem)[0];YAHOO.util.Event.removeListener(a);juic.$(b)?f(this._dlgElem,b,a):(YAHOO.util.Event.addListener(this._dlgElem,"keydown",function(a){(27==a.which||27==a.keyCode)&&this.hide()},null,this),YAHOO.util.Event.addListener(a,"click",function(){this.hide()},null,this))},setDialogHeader:function(b){this._dialog.setHeader(b)},show:function(b){var a=
document.documentElement.scrollLeft+document.body.scrollLeft,e=document.documentElement.scrollTop+document.body.scrollTop,k=YAHOO.util.Dom.getClientWidth(),c=YAHOO.util.Dom.getClientHeight(),h=k/2+a,d=c/2+e,a=(k-this._width)/2+a,e=(c-this._height)/2+e,g=this;b&&(this._animOrigin=b,b=YAHOO.util.Dom.getXY(this._animOrigin),h=b[0]+juic.$(this._animOrigin).clientWidth/2,d=b[1]+juic.$(this._animOrigin).clientHeight/2);YAHOO.util.Dom.hasClass(this._dlgElem,"modal_dlg")||this.renderHtml("");var f=juic.$("dlg-mask"),
h={points:{from:[h,d],to:[a,e]},height:{to:this._height},width:{to:this._width}};this.dispatch("beforeshow",{});if(null==this._animOpen){var n=this._dlgElem;this._animOpen=new YAHOO.util.Motion(f,h);this._animOpen.duration=this._animDuration;var l=juic.$(this._dlgElem.id+"_mask"),p=juic.$(this._dlgElem.id+"_c");this._animOpen.onStart.subscribe(function(){YAHOO.util.Dom.setStyle(l,"height",YAHOO.util.Dom.getDocumentHeight()+"px");YAHOO.util.Dom.setStyle(l,"width",YAHOO.util.Dom.getDocumentWidth()+
"px");YAHOO.util.Dom.setStyle(l,"display","block");YAHOO.util.Dom.setStyle(p,"display","block")});this._animOpen.onStart.subscribe(function(){YAHOO.util.Dom.setStyle(f,"display","block")});h=!1;this._options&&this._options.fixedcenter&&(h=!0==this._options.fixedcenter?!0:!1);this._animOpen.onComplete.subscribe(function(){YAHOO.util.Dom.setStyle(f,"display","none")});this._animOpen.onComplete.subscribe(function(){YAHOO.util.Dom.setStyle(n,"display","block")});this._animOpen.onComplete.subscribe(this._dialog.show,
null,this._dialog);h||this._animOpen.onComplete.subscribe(function(){var a=YAHOO.util.Dom.getClientWidth(),b=YAHOO.util.Dom.getClientHeight(),a=(a-g._width)/2+(document.documentElement.scrollLeft+document.body.scrollLeft),b=(b-g._height)/2+(document.documentElement.scrollTop+document.body.scrollTop);0>a&&(a=0);0>b&&(b=0);g._dialog.moveTo(a,b);"undefined"!=typeof g._dialog.underlay&&(YAHOO.util.Dom.setStyle(g._dialog.underlay,"left","5px"),YAHOO.util.Dom.setStyle(g._dialog.underlay,"top","5px"))});
this._animOpen.onComplete.subscribe(function(){g.findFirstFocus()});this._animOpen.onComplete.subscribe(function(){g.dispatch("aftershow",{})})}else this._animOpen.attributes=h;this._animOpen.animate()},hide:function(b){var a=YAHOO.util.Dom.getClientWidth(),e=YAHOO.util.Dom.getClientHeight(),c=0,d=0;(b=b?b:this._animOrigin)?(d=juic.$(b),c=YAHOO.util.Dom.getXY(d),a=c[0]+d.clientWidth/2,e=c[1]+d.clientHeight/2,c=d.style.width,d=d.style.height):(a=a/2+document.documentElement.scrollLeft+document.body.scrollLeft,
e=e/2+document.documentElement.scrollTop+document.body.scrollTop);var f=juic.$("dlg-mask"),c={points:{to:[a,e]},height:{to:d},width:{to:c}},m=juic.$(this._dlgElem.id+"_c"),g=juic.$(this._dlgElem.id+"_mask");null==this._animOut?(this._animOut=new YAHOO.util.Motion(f,c),this._animOut.duration=this._animDuration,this._animOut.onStart.subscribe(function(){f.style.display="block"}),this._animOut.onComplete.subscribe(function(){m.style.display="none";f.style.display="none";g.style.display="none"})):this._animOut.attributes=
c;this.dispatch("beforehide",{});this._dialog.hide();this._animOut.animate()},renderJUICDialog:function(b){var a=juic.$(this.id+"body"),c=juic.$(this.id+"header"),f=juic.$(this.id+"footer");a&&c&&f?(a.innerHTML=d(b,"renderHtml"),b.renderHeader&&(c.innerHTML=d(b,"renderHeader")),b.renderFooter&&(f.innerHTML=d(b,"renderFooter"))):(a=[],a.push('\x3cdiv class\x3d"hd" id\x3d"',this.id,'header"\x3e'),b.renderHeader&&b.renderHeader(a),a.push("\x3c/div\x3e"),a.push('\x3cdiv class\x3d"bd"\x3e\x3cdiv class\x3d"innerbd" id\x3d"',
this.id,'body"\x3e'),b.renderHtml(a),a.push("\x3c/div\x3e\x3c/div\x3e"),a.push('\x3cdiv class\x3d"ft" id\x3d"',this.id,'footer"\x3e'),b.renderFooter&&b.renderFooter(a),a.push("\x3c/div\x3e"),this._dlgElem.innerHTML=a.join(""))},cleanup:function(){this._dialog.destroy();this.unregister()}})}();function SFBasicDialogPanel(f,c){SFBasicDialogPanel.superclass&&SFBasicDialogPanel.superclass.constructor.call(this,f,c);this._useIconFonts=c&&c.useIconFonts}YAHOO.extend(SFBasicDialogPanel,YAHOO.widget.Panel);
SFBasicDialogPanel.prototype.bringToTop=function(){};
SFBasicDialogPanel.prototype.configClose=function(f,c,d){f=c[0];c=this.cfg.getProperty("strings");d=function(b,a){a.hide()};f?this.close?this.close.style.display="block":(this.close=document.createElement("span"),YAHOO.util.Dom.addClass(this.close,"container-close"),YAHOO.util.Dom.setAttribute(this.close,"tabindex","0"),this._useIconFonts&&YAHOO.util.Dom.addClass(this.close,"sapIcon"),this.close.innerHTML=this._useIconFonts?"\x26#xe03e;":c&&c.close?c.close:"\x26#160;",this.innerElement.appendChild(this.close),
YAHOO.util.Event.addListener(this.close,"click",d,this,!0)):this.close&&(this.close.style.display="none")};