var AboutBox=function(){function b(){return 0>=UIVersion.V12.compareTo(UIVersion.getCurrentInstance())}return{open:function(a,d){if(AboutBox.contentHandler)juic.$(a).innerHTML=AboutBox.contentHandler();else if(AboutBox.systemInfoContentHandler){var c=juic.$(a).innerHTML,e=AboutBox.systemInfoContentHandler(),c=c.replace(/\x3c!-- BEGIN aboutBoxSystemInfo --\x3e([<>\s\S\d\D]*)\x3c!-- END aboutBoxSystemInfo --\x3e/m,e);juic.$(a).innerHTML=c}null==this.dialog&&(b()?this.dialog=new SFDialogBox({content:juic.$(a).innerHTML,
title:MSGS.COMMON_SF_ABOUT_BOX_TITLE,width:540,height:540,scrollable:!0,buttonDefinitions:[{label:MSGS.COMMON_Close,eventName:"hide"}]}):this.dialog=new BasicDialog(a,"540px","540px",!0,{xbutton:"closeAbout",enterkey:!0}));b()?this.dialog.showDialog(!0,d):this.dialog.show(d)},close:function(){b()?this.dialog.close():this.dialog.hide()}}}();