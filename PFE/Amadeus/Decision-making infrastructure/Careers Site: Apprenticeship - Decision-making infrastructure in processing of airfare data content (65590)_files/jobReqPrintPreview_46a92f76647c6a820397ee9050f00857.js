function RCMJobReqPrintPreview(){this.register();this._init()}
RCMJobReqPrintPreview.prototype=function(){function b(a){a=a.split(" || ");for(var b="",e="",c=0;c<a.length;c+=1)b+=e+a[c],e="\x3cbr /\x3e";return b}return set(new Component,{_init:function(){this._previewController=AjaxService.getMBeanInstance("jobDescPrintPreviewController")},loadJobReqContent:function(a,d,e,c,f){var g=this;this._previewController.getJobDescContent(a,d,e,f,{containerID:c,callback:function(a){juic.$("jobreq_print_title").innerHTML=null==a?"":a.jobTitle;var d=b(null==a?"":a.bodyContent);
juic.$(c).innerHTML=Util.unescapeHTML((null==a?"":a.headerContent)+d+(null==a?"":a.footerContent));g._removeLinks(c)}})},loadJobPostingContent:function(a,d,e,c,f){var g=this;this._previewController.resolveJobDescContent(a,d,c.jobTitle?c.jobTitle:"",c.headerContent?c.headerContent:"",c.bodyContent?c.bodyContent:"",c.footerContent?c.footerContent:"",c.selectedLocale?c.selectedLocale:"",f,{containerID:e,callback:function(a){juic.$("jobreq_print_title").innerHTML=a.jobTitle;var c=b(null==a?"":a.bodyContent),
d=null==a?"":a.headerContent,f=null==a?"":a.footerContent;null!=a&&a.useJobProfileRoleInReqEnabled&&(d="\x3cdiv id\x3d'headerContent' class\x3d'section_list'\x3e"+d+"\x3c/div\x3e",f="\x3cdiv id\x3d'footerContent' class\x3d'section_list'\x3e"+f+"\x3c/div\x3e");juic.$(e).innerHTML=Util.unescapeHTML(d+c+f);g._removeLinks(e)}})},_removeLinks:function(a){a=juic.$(a).getElementsByTagName("a");for(var b=0,e=a.length;b<e;b++)a[b].href="javascript:void(0);",a[b].style.cursor="default"}})}();
RCMJobReqPrintPreview.openPrintDialog=function(b,a,d,e,c){b="jobID\x3d"+a+"\x26isExternal\x3d"+d+"\x26jobReqPreviewSecKey\x3d"+b+"\x26isCareers\x3d"+e;c&&(b=b+"\x26jobTitle\x3d"+this.escapeHTML(c)+"\x26insertTitle\x3dtrue");d?PrintPreview.openPreviewWindowWithParamsNoFrames("/xi/ui/rcmcommon/pages/jobReqPrintPreview.xhtml",null,b,"true","ExternalPreview"+a):PrintPreview.openPreviewWindowWithParamsNoFrames("/xi/ui/rcmcommon/pages/jobReqPrintPreview.xhtml",null,b,"true","InternalPreview"+a)};
RCMJobReqPrintPreview.openPrintDialogWithReqSubTitle=function(b,a,d,e,c,f,g){b="jobID\x3d"+a+"\x26isExternal\x3d"+d+"\x26isCareers\x3d"+e+"\x26jobReqPreviewSecKey\x3d"+b+"\x26subHeading\x3d"+c+"\x26selectedLang\x3d"+f;g&&(b=b+"\x26jobTitle\x3d"+this.escapeHTML(g)+"\x26insertTitle\x3dtrue");d?PrintPreview.openPreviewWindowWithParamsNoFrames("/xi/ui/rcmcommon/pages/jobReqPrintPreview.xhtml",null,b,"true","ExternalPreview"+a):PrintPreview.openPreviewWindowWithParamsNoFrames("/xi/ui/rcmcommon/pages/jobReqPrintPreview.xhtml",
null,b,"true","InternalPreview"+a)};RCMJobReqPrintPreview.escapeHTML=function(b){b=(b||"").toString().replace(/\%/g,"%25;")||"";return b=Util.escapeHTML(b)};