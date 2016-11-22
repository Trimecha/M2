function SFCascadingPicklist(b){this.register();this._config=b?b:!1;assert(this._config,"Error: config parameter required for SFCascadingPicklist.");this._picklistId=this._config.picklistId?this._config.picklistId:!1;this._fieldName=this._config.fieldName?this._config.fieldName:"";this._picklistMgr=this._config.picklistMgr;assert(this._picklistMgr,'Error: "picklistMgr" is required for SFCascadingPicklist.');this._childList=this._config.childPicklistIds;this._optionList=this._config.defaultOptionList?
this._config.defaultOptionList:!1;this._commentOnSkipList=this._config.commentOnSkipList?this._config.commentOnSkipList:!1;this._disQualficationList=this._config.disQualficationList?this._config.disQualficationList:!1;this.preSelectedList=0!=this._config.preSelectedList?this._config.preSelectedList:!1;this._label=this._config.label;this.isFromForwardSearch=this._config.isFromForwardSearch?this._config.isFromForwardSearch:!1;assert(this._picklistId||this._optionList,window.sfMessageFormat?sfMessageFormat.format(MSGS.RECRUITING_JOB_REQ_ERR_MSG,
this._fieldName):MSGS.RECRUITING_JOB_REQ_ERR_MSG+" ["+this._fieldName+"]");this._parentId=this._config.parentPicklistId?this._config.parentPicklistId:!1;this._validationMsg=this._config.validationMsg;this.intialValue=this._selectedValue=this._config.selectedValue?this._config.selectedValue:!1;this._unsavedClass=this._config.unsavedClass;this._toolTipText=this._config.toolTipText;this._multiselect=this._config.multiselect;this._hierarchicalMode=this._config&&this._config.hierarchicalMode?!0:!1;this._hasPrimary=
this._config&&this._config.hasPrimary?!0:!1;this._primaryValue=this._config&&this._config.primaryValue;this._multiSelectPicklistHierarchy=this._config&&this._config.picklistHierarchy;this.disableOptions=this._config.disableOptions;this.multiSelectOptions={};this.initValues={};this._skipEscaping=this._config._skipEscaping?this._config._skipEscaping:!1;this._currentState={selectedValue:this._selectedValue,primaryValue:this._primaryValue,optionList:this._config.defaultOptionList};this._previousState=
null;this._onParentChange=!1;this._init()}
SFCascadingPicklist.prototype=function(){var b=juic.Logger.getLogger("SFCascadingPicklist");return set(new Component,{_init:function(){this._model=new SFCascadingPicklistsModel({seamControllerName:"picklistController"});this._model.addEventListener("dataAvailable",this);this._model.addEventListener("treeAvailable",this);this._picklistMgr.add(this);this.setValue(this._selectedValue);if(this._multiselect){var a={enabled:this._enabled,fieldName:this._fieldName,label:this._label,toolTipText:this._toolTipText,
optionList:this._optionList,preSelectedList:this.preSelectedList,selectId:this.id+"_select",selectedValue:this._selectedValue,disableOptions:this.disableOptions,hierarchicalMode:this._hierarchicalMode,hasPrimaryValue:this._hasPrimary,primaryValue:this._primaryValue,_skipEscaping:this._skipEscaping,invalid:this._config.invalid};this.isFromForwardSearch?this._rcmMultiselect=new RCMMultiSelection(this.multiSelectOptions,!1,this.initValues,a):(this._rcmMultiselect=new RCMMultiSelect(a),this._selectedValue&&
0<this._selectedValue.length&&this._rcmMultiselect.setSelectedValues(this._selectedValue));this._rcmMultiselect.addEventListener("selectionchange",this)}if(this._parentId)var c=this._picklistMgr.getParentSelectedValue(this);this._hierarchicalMode&&!this._optionList?(this._rcmMultiselect.setEnabled(!1),this._rcmMultiselect.setLoadingIcon(!0),this._model.getPicklistTree(this._multiSelectPicklistHierarchy)):this.setEnabled(this._parentId?c?!0:!1:!0);this._model=new SFCascadingPicklistsModel({seamControllerName:"picklistController",
seedPicklistId:this._config.picklistId,seedPicklist:this._config.picklist});this._model.addEventListener("dataAvailable",this);a=[];a.push({value:"",label:window.MSGS?MSGS.COMMON_loading:""});if(!this._optionList&&!this._parentId||!this._optionList&&this._parentId&&!c||this._optionList&&0==this._optionList.length&&!this._parentId)this._hierarchicalMode||(this.setOptionList(a),this._model.getOptionList(this._picklistId));else if(!this._optionList&&this._parentId&&c||this._optionList&&this._parentId&&
c){if(!this._multiselect||this._multiselect&&2>c.length)this.setOptionList(a),this._model.getOptionListAsChild("{0:"+c+"}",this._picklistId)}else this.setOptionList(this._optionList)},getModel:function(){return this._model},setModel:function(a){(this._model=a)&&this._model.addEventListener("dataAvailable",this)},handleEvent:function(a){if("dataAvailable"==a.type){if(a.data){this.setOptionList(a.data.picklistObjects);var c=a.data.picklistObjects;if(a=a.data.obsoltedPicklistObjects)for(var b=0;b<a.length;b++)if(this._value==
a[b].value){c.push(a[b]);break}this.setOptionList(c);this._currentState.optionList=this._optionList}}else"picklistChanged"==a.type?this.dispatch("picklistChanged",this):"selectionchange"==a.type?this._selectionChange(a.values,a.seamControllerName):"treeAvailable"==a.type&&this._rcmMultiselect&&(this.setOptionList(JSON.parse(a.data)),this._currentState.optionList=this._optionList,"object"==typeof this._selectedValue&&this._rcmMultiselect.setSelectedValues(this._selectedValue),this._rcmMultiselect.setLoadingIcon(!1),
this._rcmMultiselect.setEnabled(!0))},renderHtml:function(a){a.push('\x3cspan id\x3d"'+this.id+'"\x3e');this._multiselect?this.renderMultiSelect(a):this.renderSingleSelect(a);a.push("\x3c/span\x3e")},renderMultiSelect:function(a){this.isFromForwardSearch?this._rcmMultiselect.setOptionsList(this._optionList):(this._rcmMultiselect.setEnabled(this._enabled),this._rcmMultiselect.setOptionsList(this._optionList),this._rcmMultiselect.renderHtml(a))},_renderAccessibilityAttributes:function(a){this._config.required&&
a.push(' aria-required\x3d"true"');this._config.label&&"string"===typeof this._config.label&&(a.push(' aria-label\x3d"',this._config.label),this._config.required&&a.push(" "+MSGS.RECRUITING_FIELD_REQUIRED),this._config.invalid&&a.push(". "+MSGS.RECRUITING_JOB_REQUISITION_INVALID_ENTRY),a.push('"'));this._config.invalid&&a.push(' class\x3d"invalidInput" aria-invalid\x3d"true"')},renderSingleSelect:function(a){this._enabled||(a.push('\x3cdiv tabindex\x3d"0" class\x3d"disabledInputWrapper" role\x3d"combobox" aria-disabled\x3d"true"'),
this._renderAccessibilityAttributes(a),a.push("\x3e"));a.push('\x3cselect id\x3d"'+this.id+'_select" onchange\x3d"'+this.fireCode("_onChange")+"\" onblur\x3d'",this.fireCode("_onBlur"),"'");this._enabled||a.push(' disabled\x3d"true"');this._fieldName&&a.push(" name\x3d'"+this._fieldName+"'");this._toolTipText&&a.push(" title\x3d'",this._toolTipText,this._config.invalid?" ("+MSGS.RECRUITING_JOB_REQUISITION_INVALID_ENTRY+")'":"'");this._enabled&&this._renderAccessibilityAttributes(a);a.push("\x3e");
if(this._optionList)for(var c=0,b=this._optionList.length;c<b;c++)a.push('\x3coption value\x3d"'+this._optionList[c].value+'"'),this._value==this._optionList[c].value&&a.push("selected"),a.push("\x3e"),a.push(this._optionList[c].label),a.push("\x3c/option\x3e");a.push("\x3c/select\x3e");this._enabled||a.push("\x3c/div\x3e");this._validationMsg&&a.push('\x3cspan class\x3d"red" style\x3d"margin-left: 5px;"\x3e',this._validationMsg,"\x3c/span\x3e")},_refresh:function(){var a=[];this._multiselect?this.renderMultiSelect(a):
this.renderSingleSelect(a);juic.$(this.id)&&(juic.$(this.id).innerHTML=a.join(""))},_selectionChange:function(a,c){var b=!1;if(""!=c&&void 0!=c&&(b=!0,void 0==this._model||null==this._model))this._model=new SFCascadingPicklistsModel({seamControllerName:"picklistController",seedPicklistId:this._config.picklistId,seedPicklist:this._config.picklist}),this.setModel(this._model),this._model.addEventListener("dataAvailable",this);this._updateState();if(1==a.length){var e=a[0];this._oldValue=this._value;
(juic.$(this.id+"_select")||b)&&(void 0!=e&&null!=e)&&this.setValue(e);juic.$(this.id+"_select")&&this._unsavedClass&&Util.addClass(juic.$(this.id+"_select"),"unsaved");if(null!=this._childList){var g="{0 : "+this.getValue()+"}";if(this._childs=this._picklistMgr.getChilds(this))for(var f=0,e=this._childs.length;f<e;f++)this.isFromForwardSearch&&this._childs[f].child._rcmMultiselect.clearSelection(b),this._childs[f].child.setEnabled(!0),this.setChildOptionList(f,g)}this.dispatch("picklistChanged",
{fieldName:this._fieldName,picklistId:this._picklistId,newValue:this.getValue(),newLabel:this.getLabelByValue(this.getValue()),oldValue:this.intialValue,commentOnSkipList:this._commentOnSkipList,disQualficationList:this._disQualficationList,optionList:this._optionList,onParentChange:this._onParentChange})}else{if(null!=this._childList&&(this._childs=this._picklistMgr.getChilds(this))){b=0;for(e=this._childs.length;b<e;b++)this._childs[b].child.setOnParentChange(!0),this._childs[b].child._rcmMultiselect.clearSelection(),
this._childs[b].child.setEnabled(!1)}b={fieldName:this._fieldName,picklistId:this._picklistId,newValue:a,oldValue:this.intialValue,commentOnSkipList:this._commentOnSkipList,disQualficationList:this._disQualficationList,optionList:this._optionList,allSelected:this.isAllSelected(),onParentChange:this._onParentChange};this._hierarchicalMode&&this._hasPrimary&&(b.primaryValue=this._rcmMultiselect&&this._rcmMultiselect.getPrimaryValue());this.dispatch("multiplePicklistsChanged",b)}this._onParentChange=
!1},_onBlur:function(a){this.dispatch("blur")},getComponentId:function(){return this.id+"_select"},_onChange:function(){this._oldValue=this._value;var a=juic.$(this.id+"_select");a&&(void 0!=typeof a.value&&null!=a.value)&&this.setValue(a.value);this._updateState();a&&this._unsavedClass&&Util.addClass(a,"unsaved");if(null!=this._childList){var b="{0 : "+this.getValue()+"}";if((this._childs=this._picklistMgr.getChilds(this))&&""==this.getValue()){b=0;for(a=this._childs.length;b<a;b++){var d=this._childs[b].child;
d.setOnParentChange(!0);d.setEnabled(!1);d.setSelectedIndex(0)}}else{d=0;for(a=this._childs.length;d<a;d++)this.setChildOptionList(d,b)}}this.dispatch("picklistChanged",{fieldName:this._fieldName,picklistId:this._picklistId,newValue:this.getValue(),newLabel:this.getLabelByValue(this.getValue()),oldValue:this.intialValue,commentOnSkipList:this._commentOnSkipList,disQualficationList:this._disQualficationList,optionList:this._optionList,onParentChange:this._onParentChange});this._onParentChange=!1},
setChildOptionList:function(a,b){var d,e;0<this._childs.length&&(d=this._childs[a].child.getPicklistId(),e=this._childs[a].child,this._model.getChildOptionList(b,d,e))},setEnabled:function(a){this._enabled=a;this._rcmMultiselect?this._rcmMultiselect.setEnabled(a):juic.$(this.id+"_select")&&(juic.$(this.id+"_select").disabled=!a);this._refresh()},getLabelByValue:function(a){for(var b=0,d=this._optionList.length;b<d;b++)if(this._optionList[b].value==a)return this._optionList[b].label},setSelectedIndex:function(a){assert(0<=
a&&a<this._optionList.length,"SFCascadingPicklist.setSelectedIndex(): Index out of bounds");var b=juic.$(this.id+"_select");b&&b.options&&(b.options[a].selected=!0,this._onChange())},setOptionList:function(a){this._optionList=a;this._refresh()},getValue:function(){return this._value?this._value:this._optionList?this._optionList[0].value:void 0},setValue:function(a){this._value=a},getPicklistId:function(){return this._picklistId},getParentId:function(){return this._parentId},getSelectedValue:function(){return this._selectedValue},
setSelectedValue:function(a){this._value=a;this._refresh();this._onChange()},refreshChilds:function(){this._multiselect||this._onChange()},getFieldName:function(){return this._fieldName},getChildFieldNames:function(){return this._childList},setMultipleSelectedValues:function(a){this._rcmMultiselect.setSelectedValues(a)},isAllSelected:function(){return this._rcmMultiselect&&!this.isFromForwardSearch?this._rcmMultiselect.isAllSelected()&&!this._rcmMultiselect.isOptionsDisabled():!1},getMultipleSelectedValues:function(){return this._rcmMultiselect.getSelectedValues()},
setAriaRequired:function(a){this.ariaRequired=a},_cloneObject:function(a){var b={},d;for(d in a){var e=a[d];b[d]=!e||"optionList"==d||"object"!=typeof e?e:this._cloneObject(e)}return b},_hasDifferentValue:function(a,c){b.info("start _hasDifferentValue");var d=JSON.stringify(a)!=JSON.stringify(c);b.info("end _hasDifferentValue");return d},_updateState:function(){b.info("start _updateState");if(null!=this._currentState){var a=this._cloneObject(this._currentState);this._currentState.optionList=this._optionList;
this._multiselect?(this._currentState.selectedValue=!this.isFromForwardSearch?this.getMultipleSelectedValues():null,this._currentState.primaryValue=this.getPrimaryValue()):this._currentState.selectedValue=this._value;if(null!=this._currentState.selectedValue&&null!=a.selectedValue){var c=this._currentState.primaryValue;if("undefined"!=typeof c&&c!=a.primaryValue||this._hasDifferentValue(this._currentState.selectedValue,a.selectedValue))this._previousState=a}}b.info("end _updateState")},restorePreviousState:function(){null!=
this._previousState&&(this._multiselect?(this._rcmMultiselect._selectedValue=null,this.setOptionList(this._previousState.optionList),this.setMultipleSelectedValues(this._previousState.selectedValue),this._rcmMultiselect.setPrimaryValue(this._previousState.primaryValue)):(this.setValue(this._previousState.selectedValue),this.setOptionList(this._previousState.optionList)),""!=this._previousState.selectedValue&&this.setEnabled(!0),this._currentState=JSON.parse(JSON.stringify(this._previousState)));if(this._childs=
this._picklistMgr.getChilds(this))for(var a=0,b=this._childs.length;a<b;a++)this._childs[a].child.restorePreviousState()},setOnParentChange:function(a){this._onParentChange=a},getPicklistMgr:function(){return this._picklistMgr},getPreviousSelectedValue:function(){return null!=this._previousState?this._previousState.selectedValue:null},getPrimaryValue:function(){if(this._hierarchicalMode&&this._hasPrimary&&this._rcmMultiselect)return this._rcmMultiselect.getPrimaryValue()}})}();
function SFCascadingPicklistsModel(b){b&&this._init(b)}
SFCascadingPicklistsModel.prototype=function(){return set(new EventTarget,{_init:function(b){this._seamControllerName=b.seamControllerName;this._seedPicklistId=b.seedPicklistId;this._seedPicklist=b.seedPicklist},_getAjaxController:function(){null==this._ajaxController&&(this._ajaxController=AjaxService.getMBeanInstance(this._seamControllerName));return this._ajaxController},getOptionList:function(b){var a=this;b==this._seedPicklistId&&this._seedPicklist?a.dispatch("dataAvailable",{data:this._seedPicklist}):
this._getAjaxController().getPickList(b,function(b){a.dispatch("dataAvailable",{data:b})})},getPicklistTree:function(b){var a=this;this._getAjaxController().getPickListTree(b,function(b){a.dispatch("treeAvailable",{data:b})})},getChildOptionList:function(b,a,c){this._getAjaxController().getChildPickLists(b,a,function(a){c.setOnParentChange(!0);c.setOptionList(a.picklistObjects);c.setEnabled(!0);c._config.required&&2==c._optionList.length?(c.setValue(c._optionList[1].value),c.setOnParentChange(!0),
c.setSelectedIndex(1)):c.refreshChilds()})},getOptionListAsChild:function(b,a){var c=this;this._getAjaxController().getChildPickLists(b,a,function(a){c.dispatch("dataAvailable",{data:a})})}})}();function SFCascadingPicklistsManager(){this.register();this._aList=[];this._picklistComponentMap={}}
SFCascadingPicklistsManager.prototype=function(){return set(new Component,{count:function(){return this._aList.length},add:function(b){var a=b.getPicklistId(),c=b.getParentId(),d=b.getSelectedValue();this._picklistComponentMap[a]=b;if(0!=this._aList.length){for(var e=!1,g=0,f=this._aList.length;g<f;g++)this._aList[g].parent==a&&(e=!0);e||this._aList.push({parent:a,selectedValue:d,childs:[]})}else this._aList.push({parent:a,selectedValue:d,childs:[]});if(c){a=0;for(f=this._aList.length;a<f;a++)if(this._aList[a].parent==
c){this._aList[a].childs.push({child:b});break}}},getChilds:function(b){for(var a=0;a<this._aList.length;a++)if(this._aList[a].parent==b.getPicklistId())return this._aList[a].childs;return!1},getParentSelectedValue:function(b){for(var a=0;a<this._aList.length;a++)if(this._aList[a].parent==b.getParentId())return this._aList[a].selectedValue},getPicklistComponent:function(b){return this._picklistComponentMap[b]},clear:function(){this.aList=[]}})}();
function SFCascadingPicklistsManagerByFieldName(){this.register();this._aList={};this._parentFieldName={};this._picklistObjectMap={}}
extend(SFCascadingPicklistsManagerByFieldName,SFCascadingPicklistsManager,{add:function(b){var a=b.getPicklistId(),c=b.getSelectedValue(),d=b.getFieldName(),e=b.getChildFieldNames(),e=e?e:[];if(null==this._aList[d]){this._aList[d]={parent:a,selectedValue:c,childs:e};for(a=0;a<e.length;++a)this._parentFieldName[e[a]]=d}this._picklistObjectMap[d]=b},getChilds:function(b){var a=[];b=this._aList[b.getFieldName()];if(0<b.childs.length){for(var c=0;c<b.childs.length;++c)this._picklistObjectMap[b.childs[c]]&&
a.push({child:this._picklistObjectMap[b.childs[c]]});if(0<a.length)return a}return!1},getParentSelectedValue:function(b){return(b=this._parentFieldName[b.getFieldName()])&&this._aList[b]?this._aList[b].selectedValue:!1},clear:function(){this.aList={};this._parentFieldName={};this._picklistObjectMap={}}});