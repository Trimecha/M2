function RCMDpcsKickOffBox(a,b){this._config=b;var c=b.country;this._type=a;this._isV12Responsive=b.isV12||!1;this._refocusId=b.refocusId||"";this._model=new RCMDpcs2Model(this._config);DPCSKickOffBoxController.call(this,a,c)}
extend(RCMDpcsKickOffBox,DPCSKickOffBoxController,{accept:function(){this._model.acceptDPCS2(this._dpcsId,this._type);this.hideDlg()},handleOtherEvents:function(a){switch(a.type){case "close":this.close();break;case "action":"removeConfirmOverlay"==a.actionCommand?this._isV12Responsive?this._confirmDialog.close():SFOverlayMgr.removeOverlay(this._confirmDialog.id):"declineEvent"==a.actionCommand&&this._model.declineDPCS2(this._dpcsId,this._type)}},decline:function(){this._profileDeleteMsg=(this._isInternal=
this._type==dpcsUtil.RECRUITING_INTERNAL?!0:!1)?MSGS.RECRUITING_Candidate_Profile_Delete_Profile:MSGS.RECRUITING_DELETE_ALL_DATA;this.buttonDefs=[{label:MSGS.COMMON_Cancel,eventName:"removeConfirmOverlay",btnType:"normal",active:!0},{label:this._profileDeleteMsg,eventName:"declineEvent",btnType:"normal",active:!0}];this._isV12Responsive?(this._confirmDialog=new RCMResponsiveDialog({dialogTitle:this._profileDeleteMsg,contentComponent:new RevokeWarningMessage(this._isInternal),buttonDefs:this.buttonDefs,
innerWidth:480,innerHeight:100}),this._confirmDialog.addEventListener("action",this),this._confirmDialog.showDialog()):(this._confirmDialog=new SFDialog(this._profileDeleteMsg,new RevokeWarningMessage(this._isInternal),this.buttonDefs,500,100,!1,0,!0),this._confirmDialog.addEventListener("action",this),SFOverlayMgr.showOverlay(this._confirmDialog,!0))},close:function(){this._model.closeDialog()},getEndpointName:function(){return"rcmDpcsController"},getDialogObject:function(a,b){var c=new RCMDpcsKickOffBoxDialog(a,
b,{isV12:this._isV12Responsive,refocusId:this._refocusId});c.addEventListener("close",this);return c}});function RevokeWarningMessage(a){this.register();this._isInternal=a}
RevokeWarningMessage.prototype=function(){return set(new Component,{renderHtml:function(a){a.push('\x3cp\x3e\x3cdiv tabindex\x3d"0"\x3e',this._isInternal?MSGS.RECRUITING_REVOKE_WARNING_INTERNAL:MSGS.RECRUITING_REVOKE_WARNING_EXTERNAL,"\x3c/div\x3e\x3c/p\x3e");a.push('\x3cp\x3e\x3cdiv tabindex\x3d"0"\x3e',this._isInternal?MSGS.RECRUITING_REVOKE_MSG_INTERNAL:MSGS.RECRUITING_REVOKE_MSG_EXTERNAL,"\x3c/div\x3e\x3c/p\x3e")}})}();
function RCMDpcsKickOffBoxDialog(a,b,c){this._isV12Responsive=c?c.isV12:!1;var d="aquabtn active activeAccessible ",e="aquabtn inactiveAccessible ";this._isV12Responsive&&(d="aquabtn active ",e="aquabtn ");this._acceptBtn=new SFCommandButton(MSGS.COMMON_DPCS2_ACCEPT,!0,!0,!1,{baseButtonWrapperClass:d});this._acceptBtn.setActionCommand("accept");this._acceptBtn.addEventListener("action",this);this._declineBtn=new SFCommandButton(MSGS.COMMON_DPCS2_Decline,!1,!0,!1,{baseButtonWrapperClass:e});this._declineBtn.setActionCommand("decline");
this._declineBtn.addEventListener("action",this);this._refocusId=c?c.refocusId:"";DPCSKickOffBoxDialog.call(this,a,b);this._isV12Responsive&&(this._dialog=new RCMResponsiveDialog({dialogTitle:MSGS.FB_DP_CONSENT_STATEMENT_TITLE,contentComponent:this,buttonDefs:[{label:MSGS.COMMON_DPCS2_ACCEPT,eventName:"accept",active:!0},{label:MSGS.COMMON_DPCS2_Decline,eventName:"decline",active:!1}],innerWidth:500,innerHeight:300}),this._dialog.setShowCloseIcon(this.getShowCloseIcon()),this._dialog.addEventListener("action",
this));a="aquabtn hidden-xs hidden-sm ";Util.browserInfo.ios&&(a+=" hidden-md");this._isV12Responsive?this._dialog.setNewButtons([{label:MSGS.COMMON_Print,eventName:"print",active:!0,baseButtonWrapperClass:a}]):this._dialog.setNewButtons([{label:MSGS.COMMON_Print,eventName:"print",active:!1,baseButtonWrapperClass:a},{label:MSGS.COMMON_DPCS2_Decline,eventName:"decline",active:!1,baseButtonWrapperClass:a},{label:MSGS.COMMON_DPCS2_ACCEPT,eventName:"accept",active:!0,baseButtonWrapperClass:a}]);this._dialog.setCloseDialogOnEsc(!0)}
extend(RCMDpcsKickOffBoxDialog,DPCSKickOffBoxDialog,{getShowCloseIcon:function(){return!0},handleEvent:function(a){"action"==a.type&&("accept"==a.actionCommand?this.dispatch("accept"):"decline"==a.actionCommand?this.dispatch("decline"):"print"==a.actionCommand?this._printDialog():this.dispatch("close"))},_printDialog:function(){var a=[];a.push('\x3cdiv class\x3d"hd" id\x3d"',this.id,'header"\x3e');a.push('\x3cb style\x3d"text-align:center"\x3e',escapeHTML(this._title),"\x3c/b\x3e");a.push("\x3cbr/\x3e\x3cbr/\x3e\x3c/div\x3e");
a.push('\x3cdiv class\x3d"bd"\x3e\x3cdiv class\x3d"innerbd" id\x3d"',this.id,'body"\x3e');a.push("\x3cdiv\x3e\x3cp\x3e",this._content,"\x3c/p\x3e\x3c/div\x3e");a.push("\x3c/div\x3e\x3c/div\x3e");var b=window.open("","PrintWindow","width\x3d750,height\x3d650,top\x3d50,left\x3d50,toolbars\x3dno,scrollbars\x3dyes,status\x3dno,resizable\x3dyes,location\x3d0,menubar\x3dno,statusbar\x3dno");b.document.writeln(a.join(""));b.document.close();b.focus();b.print();b.close()},renderHtml:function(a){this._isV12Responsive?
(a.push("\x3ch3 style\x3d'text-align:center'\x3e\x3cspan tabindex\x3d'0'\x3e",escapeHTML(this._title),"\x3c/span\x3e\x3c/h3\x3e"),a.push("\x3cdiv class\x3d'dpcs2DialogContent' tabindex\x3d'0'\x3e",this._content,"\x3c/div\x3e"),a.push("\x3cdiv style\x3d'text-align:right'\x3e"),a.push("\x3cspan style\x3d'display:inline-block;'\x3e"),this._acceptBtn.renderHtml(a),a.push("\x3c/span\x3e\x26nbsp;\x26nbsp;\x3cspan style\x3d'display:inline-block;'\x3e"),this._declineBtn.renderHtml(a),a.push("\x3c/span\x3e\x26nbsp;\x26nbsp;\x3c/div\x3e\x3cbr /\x3e\x3cbr /\x3e")):
(a.push("\x3cdiv class\x3d'dpcs2Body'\x3e"),a.push("\x3ch3 style\x3d'text-align:center'\x3e\x3cspan class\x3d'dpcs2BodyHeader' tabindex\x3d'0'\x3e",escapeHTML(this._title),"\x3c/span\x3e\x3c/h3\x3e"),a.push("\x3cdiv class\x3d'dpcs2DialogContent' tabindex\x3d'0'\x3e",this._content,"\x3c/div\x3e"),a.push("\x3c/div\x3e"))},show:function(){this._isV12Responsive||this.scrollToTop();this._dialog._useIconFonts=!0;""!=this._refocusId?this._dialog.showDialog(this._refocusId):this._dialog.showDialog()},_focusToCloseIcon:function(){this.isV12()?
SFDom.setFocus(this._dialog.id+"dialogCloseIcon"):SFDom.setFocus(this._dialog.id+"dlg_close_x")},hide:function(){this._isV12Responsive?this._dialog.close():this._super()}});function RCMDpcs2Model(a){this._config=a}
extend(RCMDpcs2Model,EventTarget,{acceptDPCS2:function(a,b){var c=this;this._dpcsAccepted=!0;AjaxService.getMBeanInstance("rcmDpcsController").acceptDPCS(a,b,{callback:function(a){c._config.dpcs2Handler.accept({data:a,config:c._config})}})},declineDPCS2:function(a,b){var c=this;AjaxService.getMBeanInstance("rcmDpcsController").declineDPCS(a,b,{callback:function(a){a.redirectNeeded?logoutFromRMK(a.redirectURL,a.rmkProfileLogoutUrl):c._config.dpcs2Handler.decline({data:a,config:c._config})}})},closeDialog:function(){this._config.dpcs2Handler&&
!this._dpcsAccepted&&this._config.dpcs2Handler.close()}});function RCMDpcs2Handler(a){this._config=a;this._isV12Responsive=a.isV12||!1}
extend(RCMDpcs2Handler,Component,{accept:function(){},decline:function(a){this.getDpcsType()==dpcsUtil.RECRUITING_INTERNAL?window.location.replace(this.getDeclineUrl()):this.handleDecline(a)},handleDecline:function(a){return null!=a.data.redirectURL?(window.location.replace(a.data.redirectURL),!0):!1},close:function(){},showDpcs2Dialog:function(){var a=this.getConfig().params?this.getConfig().params:{};a.dpcs2Handler=this;a.isV12=this._isV12Responsive;new RCMDpcsKickOffBox(this.getDpcsType(),a)},
proceed:function(){this.accept()},shallProceed:function(){return!this.getDpcs2AcceptanceServerResponse().yetToAcceptDpcs2ByProxiedUser},handleCouldNotProceed:function(){var a=new SFLabel(MSGS.RECRUITING_DPCS_WARNING_PROXIED_USER),b=MSGS.RECRUITING_DPCS_WARNING_MSG_CANNOT_PROCEED,c=[{label:MSGS.COMMON_Close,eventName:"close",btnType:"normal",active:!0}];this._isV12Responsive?(this._msgDlg=new RCMResponsiveDialog({dialogTitle:b,contentComponent:a,buttonDefs:c,innerWidth:480,innerHeight:100}),this._msgDlg.addEventListener("action",
this),this._msgDlg.showDialog()):(this._msgDlg=new SFDialog(b,a,c,500,100,!1,0,!0),this._msgDlg.addEventListener("action",this),SFOverlayMgr.showOverlay(this._msgDlg,!0))},handleEvent:function(a){switch(a.type){case "action":"close"==a.actionCommand&&(this._isV12Responsive?this._msgDlg.close():SFOverlayMgr.removeOverlay(this._msgDlg.id),this.handlePostClose())}},handlePostClose:function(){},getDeclineUrl:function(){return this.getDpcs2AcceptanceServerResponse().declineUrl},getDpcs2AcceptanceServerResponse:function(){return this._config.dpcs2AcceptedOrDeclinedStatusFromServer},
getConfig:function(){return this._config},getDpcsType:function(){return this.getDpcs2AcceptanceServerResponse().dpcsType}});function checkDpcs2AcceptanceBeforeProceeding(a,b,c){AjaxService.getMBeanInstance("rcmDpcsController").getDpcs2Config(b?b:!1,c,{callback:function(b){var c=a.createDpcs2Handler(b);c.shallProceed()?b.dpcsNeeded?c.showDpcs2Dialog():c.proceed():c.handleCouldNotProceed()}})}var logoutRedirectUrl="";
function logoutFromRMK(a,b){logoutRedirectUrl=a;head=document.getElementsByTagName("head")[0];script=document.createElement("script");script.type="text/javascript";script.src=b;head.appendChild(script)}function redirectToRMK(a){window.location.href=logoutRedirectUrl};