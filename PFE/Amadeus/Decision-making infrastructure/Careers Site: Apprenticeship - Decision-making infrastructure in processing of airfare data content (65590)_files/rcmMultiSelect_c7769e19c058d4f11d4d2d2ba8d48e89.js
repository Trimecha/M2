function RCMMultiSelect(c){this.register();this.init(c)}
RCMMultiSelect.prototype=function(){var c=juic.Logger.getLogger("RCMMultiSelect");return set(new Component,{init:function(a){this._enabled=a.enabled;this._hasPrimaryValue=(this._hierarchicalMode=a.hierarchicalMode)&&a.hasPrimaryValue?!0:!1;this._primaryValue=a.primaryValue;this._fieldName=a.fieldName;this._toolTipText=a.toolTipText;this._label=a.label;this._selectId=a.selectId?a.selectId:this.id+"_select";this._isOptionsVisible=!1;this._selectedValue=a.selectedValue;this._disableOptions=a.disableOptions;
this._optionList=a.optionList?a.optionList:[];this._isInvalid=!!a.invalid;this._model=this._optionList.constructor==Array?this._createModel(this._optionList):this._optionList;this._newConfig=a._skipEscaping?{_skipEscaping:a._skipEscaping}:!1;this._multiSelectOptions=this._hierarchicalMode?new RCMHeirarchicalMultiSelect(this._model,a):new SFCheckboxMultiSelect(this._model,this._newConfig);this._multiSelectOptions.setToggleClass("itemselected");this._model.addEventListener("selectionChanged",this);
this._multiSelectOptions.addEventListener("selectionChanged",this);this._allSelectedLabel=a.allSelectedLabel||MSGS.RECRUITING_COMMON_ANY;this._inputValue=this._noneSelectedLabel=a.noneSelectedLabel||MSGS.RECRUITING_COMMON_ANY;this._showLoadingIcon=a&&a.showLoadingIcon?!0:!1;this._multiSelectOptions.addEventListener("focusSelectAll",this)},_createModel:function(a){a=this._convertToSelectItemList(a);return this._hierarchicalMode?new RCMDefaultHierarchicalModel(a):new SFDefaultMultiSelectModel(a)},isHierarchicalMode:function(){return this._hierarchicalMode},
getPrimaryValue:function(){return this._hierarchicalMode&&this._hasPrimaryValue&&this._selectionsComponent&&this._selectionsComponent.getPrimaryValue()},setPrimaryValue:function(a){this._hierarchicalMode&&this._selectionsComponent&&(this._primaryValue=a,this._selectionsComponent.initPrimaryValue(a))},setEnabled:function(a){this._enabled=a;juic.$(this.id+"_selectInput")&&(juic.$(this.id+"_selectInput").disabled=!a);juic.$(this.id+"_selectButton")&&(juic.$(this.id+"_selectButton").disabled=!a)},setLoadingIcon:function(a){this._showLoadingIcon=
a;var b=juic.$(this.id+"_loadingIcon");b&&(b.className=a?"multiSelectInProgress":"")},setFocus:function(){var a=juic.$(this.id+"_selectInput");a.disabled||a.focus()},getMultiSelectOptions:function(){return this._multiSelectOptions},getSelectedValues:function(){return this.getMultiSelectOptions().getSelectedValues()},clearSelection:function(){this._model.setSelectedIndices(0);this._selectionChanged=!0;this._dispatchSelectionChange()},_convertToSelectItemList:function(a){var b=[];if(a&&a.length)for(var d=
0;d<a.length;d++)""!=a[d].value&&(this._hierarchicalMode?b.push(new RCMDefaultNodeElement(a[d])):b.push(new SFSimpleSelectItem(a[d].value,a[d].label)));return b},setOptionsList:function(a){if(a&&(this._model=a.constructor==Array?this._createModel(a):a,this._multiSelectOptions.setModel(this._model),this._model.addEventListener("selectionChanged",this),this._selectedValue)){!this._hierarchicalMode&&this._selectedValue.constructor!=Array&&(this._selectedValue=JSON.parse(this._selectedValue));a=this._selectedValue&&
this._selectedValue.length;var b=this._model.size();if(a<=b&&(this.setSelectedValues(this._selectedValue),this._selectionChanged=!0,this._dispatchSelectionChange(),this._disableOptions&&a==b))for(a=0;a<this._model.size();a++)this._multiSelectOptions.setIndexEnabled(a,!1)}},setSelectedValues:function(a){if(this._hierarchicalMode)this._setSelectedHierarchicalValues(a);else{for(var b=[],d=0,e=this._model.size();d<e;d++){var c=this._model.get(d).getValue();Util.arrayContains(a,c)&&b.push(d)}this._multiSelectOptions.setSelectedIndices(b)}},
_setSelectedHierarchicalValues:function(a){this._model.setSelectedValues(a)},isAllSelected:function(){var a=this.getSelectedValues().length,b=this._model.size();return 0<b&&a==b},isOptionsDisabled:function(){return this._selectAll?!this._selectAll.isEnabled():!1},showOptions:function(){if(this._isOptionsVisible)YAHOO.util.Event.removeListener(window.document,"keypress",this._keyPressHandler),YAHOO.util.Event.removeListener(window.document,"keydown",this._keyPressHandler),this._optionsDialog.hideOptionsDialog(),
this.setFocus();else{if(!this._optionsDialog){var a=this.getSelectedValues().length,b=this._model.size();this._selectAll=new SFCheckBox(0<b&&a==b,MSGS.RECRUITING_Select_all,MSGS.RECRUITING_Select_all);this._disableOptions&&a==b&&this._selectAll.setEnabled(!1);this._selectAll.addEventListener("change",this);this._selectAll.addEventListener("focusNextListItem",this);this._selectAll.setChangeCommand("_selectAllChange");if(this._hierarchicalMode){this._selectionsComponent||(this._selectionsComponent=
new RCMHeirarchicalMultiSelectSelections({hasPrimary:this._hasPrimaryValue,primaryValue:this._primaryValue}),this._selectionsComponent.addEventListener("primaryValueChanged",this));for(var b=[],d=(a=this._model.getSelectionsTextAndValue())&&a.length,c=0;c<d;c++)b.push(a[c]);this._selectionsComponent.setSelections(b);this._compositeViewComp=new RCMMultiSelectView(this._multiSelectOptions,this._selectionsComponent,{selectAll:this._selectAll,itemCount:this._model.getItemCount()});this._optionsDialog=
new RCMSelectOptionsDialog(this._selectId,this._compositeViewComp)}else this._optionsDialog=new RCMSelectOptionsDialog(this._selectId,this._multiSelectOptions,this._selectAll);this._optionsDialog.addEventListener("hide",this)}YAHOO.util.Event.addListener(window.document,"keypress",this._keyPressHandler,this);YAHOO.util.Event.addListener(window.document,"keydown",this._keyPressHandler,this);this._optionsDialog.showOptionsDialog();if(this._hierarchicalMode&&(a=juic.$(this._selectAll.id)))this._model.isAllSelected()?
(a.indeterminate=!1,a.checked=!0):this._model.isPartiallySelected()?(a.checked=!1,a.indeterminate=!0):(a.checked=!1,a.indeterminate=!1);this._isOptionsVisible=!0}},handleEvent:function(a){if(!Util.browserInfo.ie||9<=Util.ieVersion())this.handleEventFinal(a);else if(null!=this._eventTimeout){for(var b=!1,d=0;d<this._waiting.length;d++)if(this._waiting[d].type==a.type&&this._waiting[d].target===a.target){b=!0;this._waiting.splice(d,1);this._waiting.push(a);break}!b&&this._waiting.push(a)}else{var e=
this,f=function(){var a=e._waiting.splice(0,1)[0];c.info("Before Event: "+a.type);e.handleEventFinal(a);c.info("After Event: "+a.type);e._eventTimeout=e._waiting.length?setTimeout(f,10):null};this._waiting=[a];this._eventTimeout=setTimeout(f,10)}},handleEventFinal:function(a){var b=this;switch(a.type){case "hide":b=this;YAHOO.util.Event.removeListener(window.document,"keypress",b._keyPressHandler);YAHOO.util.Event.removeListener(window.document,"keydown",b._keyPressHandler);this.setFocus();this._dispatchSelectionChange();
this._isOptionsVisible=!1;break;case "primaryValueChanged":case "selectionChanged":this._selectionChanged=!0;var d=this.getSelectedValues().length;a=this._model.size();var c=[];if(this._hierarchicalMode){for(var f=(d=this._model.getSelectionsTextAndValue())&&d.length,b=0;b<f;b++)c.push(d[b]);this._selectionsComponent&&this._selectionsComponent.setSelections(c);d=c&&c.length?c.length:0}this._hierarchicalMode&&this._compositeViewComp&&this._compositeViewComp.setTotalSelectedItems(d);b=juic.$(this.id+
"_srText");0==d?(this._inputValue=this._noneSelectedLabel,juic.$(this.id+"_selectInput")&&(juic.$(this.id+"_selectInput").value=this._inputValue),juic.$(this.id+"_selectButton")&&(juic.$(this.id+"_selectButton").title=this._label?sfMessageFormat.format(MSGS.RECRUITING_Select_options_for,this._label):MSGS.RECRUITING_Select_options),b&&(b.innerHTML=MSGS.RECRUITING_ACCESSIBLE_MFIELD_NO_SELECTION)):1==d?(this._hierarchicalMode?this._inputValue=c&&c[0]?c[0].text:"":(c=this._model.getItems(),f=this.getMultiSelectOptions().getSelectedIndices()[0],
this._inputValue=c[f].toString()),juic.$(this.id+"_selectInput")&&(juic.$(this.id+"_selectInput").value=this._inputValue),juic.$(this.id+"_selectButton")&&(juic.$(this.id+"_selectButton").title=MSGS.RECRUITING_Edit_View_options),b&&(b.innerHTML=MSGS.RECRUITING_ACCESSIBLE_MFIELD_SELECTED_VALUE+" "+this._inputValue)):(this._hierarchicalMode&&(a=this._model.isAllSelected()?d:d+1),this._inputValue=d!=a?MSGS.RECRUITING_Multiple_selections+"("+d+")":this._hierarchicalMode?MSGS.COMMON_All+"("+d+")":this._allSelectedLabel,
juic.$(this.id+"_selectInput")&&(juic.$(this.id+"_selectInput").value=this._inputValue),juic.$(this.id+"_selectButton")&&(juic.$(this.id+"_selectButton").title=MSGS.RECRUITING_Edit_View_options),b&&(b.innerHTML=MSGS.RECRUITING_ACCESSIBLE_MFIELD_SELECTED_VALUES+" "+this.getSelectedValues().toString()));if(this._selectAll&&juic.$(this._selectAll.id))if(this._hierarchicalMode){if(a=juic.$(this._selectAll.id))this._model.isAllSelected()?(a.indeterminate=!1,a.checked=!0):this._model.isPartiallySelected()?
(a.checked=!1,a.indeterminate=!0):(a.checked=!1,a.indeterminate=!1)}else a=d==a,this._selectAll.setChecked(a),juic.$(this._selectAll.id).title=a?MSGS.RECRUITING_Clear_all:MSGS.RECRUITING_Select_all,b&&a&&(b.innerHTML=MSGS.RECRUITING_ACCESSIBLE_MFIELD_ALL_SELECTED);break;case "change":if("_selectAllChange"==a.changeCommand){b=a.checked;this._selectAll.setChecked(b);if(b){juic.$(this._selectAll.id).title=MSGS.RECRUITING_Clear_all;c=[];for(b=0;b<this._model.getlength();b++)c.push(b);if(this._hierarchicalMode){d=
{};for(b=0;b<c.length;b++)d[c[b]]=!0;this._model.setSelectedIndices(d)}else this._model.setSelectedIndices(c)}else juic.$(this._selectAll.id).title=MSGS.RECRUITING_Select_all,this._model.setSelectedIndices(0);this.dispatch("selectallchange",a)}break;case "focusNextListItem":(a=juic.$(this._multiSelectOptions.id+"0"))&&SFDom.setFocus(a);break;case "focusSelectAll":(a=juic.$(this._selectAll.id))&&SFDom.setFocus(a)}},renderHtml:function(a){var b=this._label?sfMessageFormat.format(MSGS.RECRUITING_ACCESSIBLE_MULTISELECT_TITLE_FOR_TEXT,
this._label):MSGS.RECRUITING_ACCESSIBLE_MULTISELECT_TITLE_TEXT;a.push("\x3cspan role\x3d\"application\" tabindex\x3d'0' class\x3d'rcmmultiselect rcmmultiselect_accessible' ",'id\x3d"'+this._selectId+"\" onkeyup\x3d'",this.fireCode("_keyPressHandler"),"' aria-describedby\x3d'",this.id,"_srText'");var c="";this._enabled||(c=' disabled\x3d"true"');this._toolTipText?a.push(" title\x3d'"+this._toolTipText+"'"):a.push(" title\x3d'"+b+"'");a.push("\x3e");var b=this._label?sfMessageFormat.format(MSGS.RECRUITING_Select_options_for,
this._label):MSGS.RECRUITING_Select_options,e=this.getSelectedValues(),f=this._model.size(),g;g=0==e.length?MSGS.RECRUITING_ACCESSIBLE_MFIELD_NO_SELECTION:1==e.length?MSGS.RECRUITING_ACCESSIBLE_MFIELD_SELECTED_VALUE+" "+e.toString():e.length!=f?MSGS.RECRUITING_ACCESSIBLE_MFIELD_SELECTED_VALUES+" "+e.toString():MSGS.RECRUITING_ACCESSIBLE_MFIELD_ALL_SELECTED;f=0<f&&e.length==f;0<e.length&&(e=JSON.stringify(e));a.push("\x3cinput tabindex\x3d'-1' class\x3d'rcmmultiselectinput rcmmultiselectitem' readOnly\x3d'true' type\x3d'text'",
'id\x3d"'+this.id+'_selectInput"','value \x3d "',this._inputValue,'"',c," title \x3d '",b,"' onclick\x3d'",this.fireCode("showOptions"),"' onkeyup\x3d'",this.fireCode("_keyPressHandler"),";'","/\x3e");a.push("\x3cbutton tabindex\x3d'-1' class\x3d'rcmmultiselectbutton ui5 rcmmultiselectbutton_accessible rcmmultiselectitem' type\x3d'button'",'id\x3d"'+this.id+'_selectButton"',c," title \x3d '",b,"' onclick\x3d'",this.fireCode("showOptions"),"'\x3e\x3cspan class\x3d'ui5'\x3e\x26#xe1e2;\x3c/span\x3e\x3c/button\x3e");
a.push("\x3cspan id\x3d'"+this.id+"_loadingIcon' class\x3d'"+(this._showLoadingIcon?"multiSelectInProgress":"")+"'\x3e\x3c/span\x3e");a.push("\x3cinput name\x3d'",this._fieldName,"' class\x3d'multiselecthidden' type\x3d'hidden'","id\x3d'"+this.id+"_hidden' value\x3d'",e,"' /\x3e");a.push("\x3cinput name\x3d'",this._fieldName,"SelectAll' class\x3d'multiselecthidden' type\x3d'hidden'","id\x3d'"+this.id+"_hiddenSelectAll' value\x3d'",f&&!0!==this._disableOptions?"true":"false","' /\x3e");a.push("\x3cspan id\x3d'"+
this.id+'_srText\' class\x3d"sr-only"\x3e',g,"\x3c/span\x3e");a.push("\x3c/span\x3e")},_dispatchSelectionChange:function(){if(this._selectionChanged){this._selectionChanged=!1;var a=this.getSelectedValues(),b=this._model.size(),b=0<b&&a.length==b;juic.$(this.id+"_hidden")&&(juic.$(this.id+"_hidden").value=0<a.length?JSON.stringify(a):"");juic.$(this.id+"_hiddenSelectAll")&&(juic.$(this.id+"_hiddenSelectAll").value=b&&!this.isOptionsDisabled()?"true":"false");this.dispatch("selectionchange",{values:a})}},
_keyPressHandler:function(a,b){b=b||this;switch(a.keyCode||a.charCode){case 13:b.showOptions();a.cancelBubble=!0;a.returnValue=!1;a.preventDefault&&(a.preventDefault(),a.stopPropagation());break;case 27:b._optionsDialog&&b._optionsDialog.hideOptionsDialog();a.cancelBubble=!0;a.returnValue=!1;a.preventDefault&&(a.preventDefault(),a.stopPropagation());break;case 38:case 40:a.altKey&&(b.showOptions(),a.cancelBubble=!0,a.returnValue=!1,a.preventDefault&&(a.preventDefault(),a.stopPropagation()))}}})}();
function RCMSelectOptionsDialog(c,a,b){this.register();this.init(c,a,b)}
RCMSelectOptionsDialog.prototype=function(){return set(new Component,{init:function(c,a,b){this._selectId=c;this._multiSelectOptions=a;this._selectAll=b;this._isFixedHeight=!1;this._focusLoop=new SFFocusLoop(this.id);this._focusMarkers=this._focusLoop.getMarkers()},handleEvent:function(c){switch(c.type){case "positionFixed":var a=Util.getAbsPos(this._selectId).y,b=document.body.clientHeight;c=c.positionInfo.overlay;var d=c.height,e=c.width,f=document.body.scrollTop,g=d-35;142>e&&(e=142);Util.quirksMode()&&
200<g&&(juic.$(this.id+"_multiSelectOptions").style.height="200px");g=c.top>f?c.top:f;g+=2;!isNaN(g)&&!isNaN(c.left)&&SFOverlayMgr.css(this,{top:g+"px",left:c.left+"px"});juic.$(this.id+"_multiSelectOptions").style.width=e+"px";f=g<a?Math.abs(b-a+f+10):g-f;f=d+f;if(f>b&&(b=Math.abs(d-(f-b)-35),d=17,g<a&&Util.ieVersion(!0)&&(d=15),b+=d,juic.$(this.id+"_multiSelectOptions").style.height=b+"px",juic.$(this.id+"_multiSelectOptions").style.width=e+"px",a=juic.$(c.overlayId).getElementsByTagName("iframe")[0]))a.style.height=
b+"px"}},showOptionsDialog:function(){YAHOO.util.Event.addListener(window.document,"mousedown",this._outsideClickHandler,this);YAHOO.util.Event.addListener(window.document,"wheel",this._outsideClickHandler,this);SFPositionManager.addEventListener("positionFixed",this);SFPositionManager.show(this,this._selectId);Util.quirksMode()&&SFPositionManager.moveTo(this,null,this._selectId);if(this._selectAll){var c=juic.$(this._selectAll.id);if(!c.disabled)try{c.focus()}catch(a){}}else this.setFocus(!1)},hideOptionsDialog:function(){YAHOO.util.Event.removeListener(window.document,
"mousedown",this._outsideClickHandler);YAHOO.util.Event.removeListener(window.document,"wheel",this._outsideClickHandler);SFPositionManager.removeEventListener("positionFixed",this);this.dispatch("hide")},_outsideClickHandler:function(c,a){for(var b=c.target||c.srcElement,d=!1;b&&b!=document.body;){if(b.id==a.id||b.id==a._selectId){d=!0;break}b=b.parentNode}d||a.hideOptionsDialog()},setFocus:function(c){this._focusLoop.setFocus(c)},renderHtml:function(c){c.push("\x3cdiv class\x3d'rcmmultiselectdialog sfDialogInline' ",
"id\x3d'"+this.id+"'\x3e");this._focusMarkers[0].renderHtml(c);this._selectAll&&(c.push("\x3cdiv class\x3d'rcmmultiselectdialogheader' ",'id\x3d"'+this.id+'_dialogHeader"\x3e'),this._selectAll.renderHtml(c),c.push("\x3c/div\x3e"));c.push("\x3cdiv ",'id\x3d"'+this.id+'_multiSelectOptions"');this._selectAll&&c.push(" class\x3d'rcmmultiselectoptions' ");c.push("\x3e");this._multiSelectOptions.renderHtml(c);c.push("\x3c/div\x3e");this._focusMarkers[1].renderHtml(c);c.push("\x3c/div\x3e")}})}();