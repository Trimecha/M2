function SFFileUploadDialog(a,b,c,d,e,f,g,h,k,l,m,n){this._sfMsgs=MSGS;this.register();this._name=a;this._isTextFile=b;this._maxFiles=c;this._urlParams=d;this._titleText=e;this._width=f?f:550;this._height=g?g:300;h&&(this._instructions=h);this._isRevolutionDialog=k||!1;this._closeDialogOnEsc=l||!1;a={};a.inputAriaLabel=n;this._instructions?(a.fileSizeLimit=m,this._fileUpload=new SFFileUpload(this._name,this._maxFiles,this._isTextFile,this._urlParams,this._instructions,a)):this._fileUpload=new SFFileUpload(this._name,
this._maxFiles,this._isTextFile,this._urlParams,"",a);this._fileUpload.addEventListener("uploadProceed",this);this._fileUpload.addEventListener("uploadSucceeded",this);this._fileUpload.addEventListener("uploadFailed",this);this._fileUpload.addEventListener("wrongFile",this);this._init()}
(function(){juic.extend(SFFileUploadDialog,juic.Component,{_init:function(){this.dialog||(this._buttonDefinitions=[{label:MSGS.COMMON_Upload,eventName:"uploadBegin",active:!0},{label:MSGS.COMMON_Cancel,eventName:"hide",active:!1}],this.dialog=this._isRevolutionDialog?new SFDialogBox(this._titleText,this._fileUpload,this._buttonDefinitions.reverse(),this._width,this._height,!0):new SFDialog(this._titleText,this._fileUpload,this._buttonDefinitions,this._width,this._height,!1,0,!0),this.dialog.setCloseDialogOnEsc(this._closeDialogOnEsc),
this.dialog.addEventListener("action",this,"_handleDialogEvents"))},renderHtml:function(a){a.push('\x3cdiv id\x3d"',this.id,'"\x3e');a.push(this.dialog);a.push("\x3c/div\x3e")},showDialog:function(a,b){this._isRevolutionDialog?this.dialog.showDialog(a,b):this.dialog.showDialog(b)},updateUrlParamsObj:function(a){this._urlParams=a;this._fileUpload.updateUrlParamsObj(a)},cancel:function(){this._uploadInProgress||(this._fileUpload.releaseResources(),this.dispatch("hide"))},_handleDialogEvents:function(a){switch(a.type){case "action":switch(a.actionCommand){case "hide":if(a.data&&
a.data.closeIcon&&this._uploadInProgress)break;this._fileUpload.releaseResources();this.dispatch("hide");break;case "uploadBegin":this._fileUpload.checkFields()}}},handleEvent:function(a){switch(a.type){case "uploadProceed":this._uploadInProgress=!0;this.dialog.setPreventCloseState(!0);this.dialog.disableButtons();this._fileUpload.doUpload();break;case "uploadSucceeded":this._uploadInProgress=!1;this.dialog.setPreventCloseState(!1);this.dialog.enableButtons();this._fileUpload.releaseResources();this.dispatch("uploadSucceeded",
{response:a.response});break;case "uploadFailed":this._uploadInProgress=!1;this.dialog.setPreventCloseState(!1);this.dialog.enableButtons();this._fileUpload.releaseResources();this.dispatch("uploadFailed",{response:a.response});break;case "wrongFile":this._uploadInProgress=!1,this.dialog.setPreventCloseState(!1),this.dialog.enableButtons(),this._fileUpload.releaseResources()}},cleanup:function(){this._fileUpload.cleanup();this._isRevolutionDialog&&this._super()}})})();
function SFFileUpload(a,b,c,d,e,f){this._sfMsgs=MSGS;this.register();this._name=a;this._fieldCount=b;this._isTextFile=c;this._formLayout=new SFInputFormLayout;this._formFields=[];this._urlParamsObj=d;e&&(this._instructions=e);this.config=f||{};this.init()}
(function(){juic.extend(SFFileUpload,juic.Component,{init:function(){this._fileInputs=[];this.config&&this.config.allowParentFormSubmission&&(this._usingParentForm=!1,this._cacheParentFormProperties={});this._currentForm=null;for(var a=1;a<=this._fieldCount;++a){var b=1==this._fieldCount?MSGS.COMMON_Choose_File:MSGS.get("COMMON_Choose_File_With_Index",a),c=new SFFileInput(a,null,this.config&&void 0!=this.config.inputAriaLabel?this.config.inputAriaLabel:null,this.config&&this.config.required?this.config.required:
!1);this.config&&this.config.size&&c.setSize(this.config.size);var d=this.config&&this.config.required?{required:!0}:null;this._formFields.push(c);this._formLayout.addField(b,this._formFields[a-1],d)}this._isTextFile&&(this._formFields.push(new SFSingleSelect("",this._getEncodingOptions(),"encoding1")),this._formLayout.addField(MSGS.COMMON_File_Encoding,this._formFields[a-1]))},checkFields:function(){this._formLayout.fieldsOk()?this.dispatch("uploadProceed"):this.setErrorMessage(MSGS.COMMON_Choose_File_Error)},
_checkFileUploadStatus:function(){var a,b;if(a=juic.$("iframe_"+this.id))a=a.contentWindow||a.contentDocument,null!=a&&(null!=a.document&&null!=a.document.body)&&(b=a.document.body.innerHTML);b&&(a=b.indexOf("A file has triggered the anti-virus scanner."),b=b.indexOf("The file was not cleaned and has been removed."),-1!==a&&-1!==b&&(b={},b.message=MSGS.COMMON_Virus_Error,b.success=!1,b.result=b.message,this.handleResponse(b)))},_getEncodingOptions:function(){return[{key:MSGS.COMMON_UTF_8,value:"UTF-8"},
{key:MSGS.COMMON_ISO_8859_1,value:"ISO-8859-1"},{key:MSGS.COMMON_EUC_KR,value:"EUC-KR"},{key:MSGS.COMMON_GB2312,value:"GB2312"},{key:MSGS.COMMON_HZ,value:"HZ"},{key:MSGS.COMMON_Big5,value:"Big5"},{key:MSGS.COMMON_EUC_TW,value:"EUC-TW"},{key:MSGS.COMMON_EUC_JP,value:"EUC-JP"},{key:MSGS.COMMON_Shift_JIS,value:"Shift-JIS"}]},renderHtml:function(a){a.push('\x3cdiv id\x3d"msgDiv_'+this.id+'" \x3e');a.push('\x3c/div\x3e\x3cdiv id\x3d"'+this.id+'"\x3e');a.push('\x3cform id\x3d"form_'+this.id+'" role\x3d"form"');
this._instructions?(a.push(' aria-describedby\x3d"'+this.id+'_desc"\x3e'),a.push('\x3cdiv style\x3d"margin-bottom:10px;" id\x3d"'+this.id+'_desc"\x3e\x3cspan class\x3d"instructions"\x3e'+this._instructions+"\x3c/span\x3e\x3c/div\x3e")):a.push("\x3e");this._formLayout.renderHtml(a);this.config&&this.config.fileSizeLimit&&a.push('\x3cspan id\x3d"',this.id,'_desc_uploadSizeDesc"\x3e',MSGS.get("COMMON_ATTACHMENT_UPLOAD_SIZE_DESC",this.config.fileSizeLimit),"\x3c/span\x3e");a.push("\x3c/form\x3e\x3c/div\x3e")},
_createPostingFrame:function(){if(!juic.$("iframe"+this.id)){var a=document.createElement("iframe"),b="iframe_"+this.id;a.id=b;a.name=b;Util.browserInfo.ie&&(a.src=IMAGES["/ui/uicore/img/_.gif"]);juic.set(a.style,{display:"none",top:"0px",left:"0px"});this._getForm().appendChild(a);window.frames[b].name=b;Util.browserInfo.ie&&(window.frames[b].src=IMAGES["/ui/juic/img/_.gif"])}},updateUrlParamsObj:function(a){this._urlParamsObj=a},_getQueryString:function(a){var b="",c;for(c in a)b+=encodeURIComponent(c)+
"\x3d"+encodeURIComponent(a[c])+"\x26";return b.substring(0,b.length-1)},setMessage:function(a){var b=juic.$("msgDiv_"+this.id);b&&("object"==typeof a?(a.render(b.id),SFDom.setFocus(juic.$(a.id+"_sysMsg"))):b.innerHTML=juic.escapeHTML(a))},clearMessage:function(){this.setMessage("")},doUpload:function(){this._createPostingFrame();var a=this;this._setIntervalId=setInterval(function(){return a._checkFileUploadStatus.apply(a)},1E3);var b=this._getQueryString(this._urlParamsObj);this.setFormAttributes({action:"/upload?name\x3d"+
this._name+"\x26componentId\x3d"+this.id+"\x26responseHandler\x3dhandleResponse\x26\x26_s.crb\x3d"+ajaxSecKey+"\x26"+b,target:"iframe_"+this.id,method:"POST",enctype:"multipart/form-data",encoding:"multipart/form-data"});this._submitForm()},getFileName:function(a){return 0<=a&&a<this._formFields.length&&(a=this._formFields[a],null!=a)?a.getValue():null},_enableformItems:function(a){for(var b=0,c=this._formFields.length;b<c;b++)this._formFields[b].setEnabled(a)},_getForm:function(){if(!this._currentForm){var a=
juic.$("form_"+this.id);if(!a&&this.config&&this.config.allowParentFormSubmission){for(var b=document.forms,c=b.length,d=juic.$(this.id);c--&&!a;)a=SFDom.isAncestor(b[c],d)?b[c]:null;this._usingParentForm=this._usingParentForm||!!a}this._currentForm=a}return this._currentForm},setFormAttributes:function(a){var b=this._getForm(),c;for(c in a)this._usingParentForm&&(this.config&&this.config.allowParentFormSubmission)&&(this._cacheParentFormProperties[c]=b.getAttribute(c)),b.setAttribute(c,a[c])},_submitForm:function(){try{this._getForm().submit(),
this._enableformItems(!1),this.setLoadingMessage()}catch(a){this.dispatch("wrongFile"),this.setErrorMessage(MSGS.COMMON_Choose_File_Error)}},handleResponse:function(a){clearInterval(this._setIntervalId);this.clearMessage();var b=a.message,c;a.success?(c="uploadSucceeded",this.config&&(this.config.multiUploadMode&&!0==this.config.multiUploadMode)&&this._enableformItems(!0),this.setInfoMessage(b)):(c="uploadFailed",this._enableformItems(!0),this.setErrorMessage(b));this.releaseResources();this._cleanupCachedFormProperties();
this.dispatch(c,{response:a})},setUploadMsg:function(a){this._uploadMsg=a},setLoadingMessage:function(){this._uploadMsg||(this._uploadMsg=new SFSimpleLoading(MSGS.COMMON_Uploading_Text,"#333"));this.setMessage(this._uploadMsg)},setErrorMessage:function(a){this.setMessage(new SFSysMsg("error",a))},setInfoMessage:function(a){this.setMessage(new SFSysMsg("info",a))},_cleanupParentForm:function(){var a=this._getForm(),b=this._cacheParentFormProperties,c;for(c in b)a.setAttribute(c,b[c]),delete b[c]},
_cleanupCachedFormProperties:function(){this._usingParentForm&&(this.config&&this.config.allowParentFormSubmission)&&this._cleanupParentForm();this._currentForm=null},releaseResources:function(){var a=juic.$("iframe_"+this.id);a&&(a.src=IMAGES["/ui/juic/img/_.gif"],a.parentNode.removeChild(a))},cleanup:function(){this.releaseResources();this._formLayout.cleanup();this._super()}})})();