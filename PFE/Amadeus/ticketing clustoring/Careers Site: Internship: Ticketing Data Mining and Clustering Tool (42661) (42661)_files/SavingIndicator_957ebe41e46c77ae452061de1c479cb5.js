function SavingIndicator(){}SavingIndicator.SAVE_INDICATOR_STATUS_ID="save_indicator_status";SavingIndicator.SAVE_INDICATOR_PENDING_ID="save_indicator_pending";SavingIndicator.SAVE_INDICATOR_SUCCESSFUL_ID="save_indicator_successful";SavingIndicator.ERROR_INDICATOR_ID="error_indicator_status";SavingIndicator.LOADING_INDICATOR_ID="loading_indicator";SavingIndicator.ALERT_INDICATOR_ID="alert_indicator";SavingIndicator.DATE_PATTERN=MSGS.COMMON_DateTimeFormat;
SavingIndicator.SAVE_EVT=new YAHOO.util.CustomEvent("SavingIndicatorSaveEvt",window);SavingIndicator.POST_SAVE_EVT=new YAHOO.util.CustomEvent("SavingIndicatorPostSaveEvt",window);SavingIndicator.CHANGE_EVT=new YAHOO.util.CustomEvent("SavingIndicatorChangeEvt",window);SavingIndicator.CLEAR_EVT=new YAHOO.util.CustomEvent("SavingIndicatorClearEvt",window);SavingIndicator.ERROR_EVT=new YAHOO.util.CustomEvent("ErrorIndicatorEvt",window);
SavingIndicator.LOAD_EVT=new YAHOO.util.CustomEvent("LoadIndicatorEvt",window);SavingIndicator.DONE_LOAD_EVT=new YAHOO.util.CustomEvent("DoneLoadIndicatorEvt",window);SavingIndicator.CUSTOM_ERROR_EVT=new YAHOO.util.CustomEvent("CustomErrorIndicatorEvt",window);SavingIndicator.CUSTOM_ALERT_EVT=new YAHOO.util.CustomEvent("CustomAlertIndicatorEvt",window);SavingIndicator.CLEAR_ALL_HIGHLIGHTS_EVT=new YAHOO.util.CustomEvent("SavingIndicatorClearAllHighlightEvt",window);SavingIndicator.HAS_CHANGED=!1;
SavingIndicator.SHOW_SAVED_TIME=!0;
SavingIndicator.show=function(b,a,c){switch(b){case "SavingIndicatorChangeEvt":a[1]&&(Util.gebi(SavingIndicator.SAVE_INDICATOR_PENDING_ID+"_span_header").innerHTML=" "+a[1]);a[2]&&(Util.gebi(SavingIndicator.SAVE_INDICATOR_PENDING_ID+"_span_body").innerHTML=" "+a[2]);"hidden"==YAHOO.util.Dom.getStyle(SavingIndicator.SAVE_INDICATOR_PENDING_ID,"visibility")&&(SavingIndicator.clear(),SavingIndicator.fadeIn(SavingIndicator.SAVE_INDICATOR_PENDING_ID));SavingIndicator.highlightChanges(a[0]);SavingIndicator.HAS_CHANGED=
!0;break;case "SavingIndicatorSaveEvt":SavingIndicator.clear();Util.gebi(SavingIndicator.SAVE_INDICATOR_STATUS_ID).innerHTML=MSGS.COMMON_SAVING;YAHOO.util.Dom.setStyle(SavingIndicator.SAVE_INDICATOR_STATUS_ID,"visibility","visible");break;case "SavingIndicatorPostSaveEvt":SavingIndicator.clear();SavingIndicator.clearAllHighlights();a[0]&&(Util.gebi(SavingIndicator.SAVE_INDICATOR_SUCCESSFUL_ID+"_span_body").innerHTML=" "+a[0]);YAHOO.util.Dom.setStyle(SavingIndicator.SAVE_INDICATOR_SUCCESSFUL_ID,"visibility",
"visible");YAHOO.util.Dom.setStyle(SavingIndicator.SAVE_INDICATOR_SUCCESSFUL_ID,"display","block");setTimeout(function(){SavingIndicator.fadeOut(SavingIndicator.SAVE_INDICATOR_SUCCESSFUL_ID);if(SavingIndicator.SHOW_SAVED_TIME){var a=new DateFormat(SavingIndicator.DATE_PATTERN);Util.gebi(SavingIndicator.SAVE_INDICATOR_STATUS_ID).innerHTML=sfMessageFormat.format(MSGS.COMMON_LAST_SAVED,a.format(new Date));SavingIndicator.fadeIn(SavingIndicator.SAVE_INDICATOR_STATUS_ID)}SavingIndicator.HAS_CHANGED=!1},
3E3);break;case "SavingIndicatorClearEvt":SavingIndicator.clear();SavingIndicator.HAS_CHANGED=!1;break;case "ErrorIndicatorEvt":SavingIndicator.clear();b=MSGS.COMMON_Errors_occurred;b=b.replace(/\{0\}/,a[0]);Util.gebi(SavingIndicator.ERROR_INDICATOR_ID+"_span").innerHTML=" "+b;a=Util.gebi(SavingIndicator.ERROR_INDICATOR_ID);YAHOO.util.Dom.setX(a,YAHOO.util.Dom.getViewportWidth()-parseInt(YAHOO.util.Dom.getComputedStyle(YAHOO.util.Dom.getFirstChild(a),"width"))-100);b=YAHOO.util.Dom.getXY(a);YAHOO.util.Dom.setStyle(a,
"visibility","visible");(new YAHOO.util.Motion(a,{points:{to:[b[0],b[1]]}},0.25)).animate();break;case "CustomErrorIndicatorEvt":b=a[0];Util.gebi(SavingIndicator.ERROR_INDICATOR_ID+"_span").innerHTML=" "+b;a=Util.gebi(SavingIndicator.ERROR_INDICATOR_ID);YAHOO.util.Dom.setStyle(a,"visibility","visible");break;case "CustomAlertIndicatorEvt":b=a[0];Util.gebi(SavingIndicator.ALERT_INDICATOR_ID+"_span_body").innerHTML=" "+b;a=Util.gebi(SavingIndicator.ALERT_INDICATOR_ID);YAHOO.util.Dom.setStyle(a,"visibility",
"visible");break;case "LoadIndicatorEvt":SavingIndicator.clear();YAHOO.util.Dom.setStyle(SavingIndicator.LOADING_INDICATOR_ID,"visibility","visible");break;case "DoneLoadIndicatorEvt":SavingIndicator.clear(),YAHOO.util.Dom.setStyle(SavingIndicator.LOADING_INDICATOR_ID,"visibility","hidden")}};
SavingIndicator.highlightChanges=function(b){if(b&&(b=b.elemsToHighlight))for(var a=0;a<b.length;a++){var c=b[a];c&&(YAHOO.util.Dom.addClass(c,"unsaved"),SavingIndicator.CLEAR_ALL_HIGHLIGHTS_EVT.subscribe(function(a,b,c){YAHOO.util.Dom.removeClass(c,"unsaved")},c))}};SavingIndicator.clearAllHighlights=function(){SavingIndicator.CLEAR_ALL_HIGHLIGHTS_EVT.fire()};
SavingIndicator.clear=function(){Util.gebi(SavingIndicator.SAVE_INDICATOR_STATUS_ID).innerHTML="";YAHOO.util.Dom.setStyle(SavingIndicator.SAVE_INDICATOR_STATUS_ID,"visibility","hidden");YAHOO.util.Dom.setStyle(SavingIndicator.SAVE_INDICATOR_PENDING_ID,"visibility","hidden");YAHOO.util.Dom.setStyle(SavingIndicator.SAVE_INDICATOR_SUCCESSFUL_ID,"visibility","hidden");YAHOO.util.Dom.setStyle(SavingIndicator.ERROR_INDICATOR_ID,"visibility","hidden")};
SavingIndicator.SAVE_EVT.subscribe(SavingIndicator.show,this);SavingIndicator.POST_SAVE_EVT.subscribe(SavingIndicator.show,this);SavingIndicator.CHANGE_EVT.subscribe(SavingIndicator.show,this);SavingIndicator.CLEAR_EVT.subscribe(SavingIndicator.show,this);SavingIndicator.ERROR_EVT.subscribe(SavingIndicator.show,this);SavingIndicator.LOAD_EVT.subscribe(SavingIndicator.show,this);SavingIndicator.DONE_LOAD_EVT.subscribe(SavingIndicator.show,this);
SavingIndicator.CUSTOM_ERROR_EVT.subscribe(SavingIndicator.show,this);SavingIndicator.CUSTOM_ALERT_EVT.subscribe(SavingIndicator.show,this);SavingIndicator.fadeIn=function(b){(new YAHOO.widget.Overlay(b,{effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}})).show()};SavingIndicator.fadeOut=function(b){(new YAHOO.widget.Overlay(b,{effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}})).hide()};
SavingIndicator.topNavChanged=function(b,a){var c="hide"==b||pageHeaderJsonData&&"V12"==pageHeaderJsonData.uiVersion?0:95;YAHOO.util.Dom.setStyle(SavingIndicator.SAVE_INDICATOR_STATUS_ID,"top",c+"px");YAHOO.util.Dom.setStyle(SavingIndicator.SAVE_INDICATOR_PENDING_ID,"top",c+"px");YAHOO.util.Dom.setStyle(SavingIndicator.SAVE_INDICATOR_SUCCESSFUL_ID,"top",c+"px");YAHOO.util.Dom.setStyle(SavingIndicator.ERROR_INDICATOR_ID,"top",c+"px")};
SFDOMEvent.ready(function(){"undefined"!=typeof TopNavBar?(TopNavBar.hideEvent.subscribe(SavingIndicator.topNavChanged),TopNavBar.showEvent.subscribe(SavingIndicator.topNavChanged)):window.opener&&(YAHOO.util.Dom.setStyle(SavingIndicator.SAVE_INDICATOR_STATUS_ID,"margin-top","-90px"),YAHOO.util.Dom.setStyle(SavingIndicator.SAVE_INDICATOR_PENDING_ID,"margin-top","-90px"),YAHOO.util.Dom.setStyle(SavingIndicator.SAVE_INDICATOR_SUCCESSFUL_ID,"margin-top","-90px"),YAHOO.util.Dom.setStyle(SavingIndicator.SAVE_INDICATOR_STATUS_ID,
"z-index","1"),YAHOO.util.Dom.setStyle(SavingIndicator.SAVE_INDICATOR_PENDING_ID,"z-index","1"),YAHOO.util.Dom.setStyle(SavingIndicator.SAVE_INDICATOR_SUCCESSFUL_ID,"z-index","1"))});