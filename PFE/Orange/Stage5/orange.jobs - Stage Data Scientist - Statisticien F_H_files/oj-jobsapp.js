(function(){$(window).on('digital:contentReady',function(event,node){var $node=$(node);$node.find('.oj-jobsapp').each(function(i,node){new Digital_JobsApp(node);});$node.find('.oj-jobslist').each(function(i,node){new Digital_JobsList(node);});});var console={log:function(){},info:function(){},warn:function(){},error:function(){},debug:function(){}};function parseJobsJsonResponse(data,calledUrl){data.url=calledUrl;var index=data.url.match(/([\?\&])index=(\d+)/);data.index=index?parseInt(index[2]):1;data.nextPageUrl=null;if(data.index<data.pages){data.nextPageUrl=data.url.replace(/([\?\&])index=(\d+)/,'$1index='+(data.index+1));}}var Digital_JobsList=function(){this.initialize.apply(this,arguments);};$.extend(Digital_JobsList.prototype,{initialize:function(list){this.uid=_.uniqueId('digital-');this.$list=$(list);this.$page=this.$list.closest('.page,#head');this.$page.on('digital:dispose',$.proxy(this.dispose,this));this.$jobsapp=this.$page.prev('.page').find('.oj-jobsapp');if(!this.$jobsapp.length)return;this.jobsapp=this.$jobsapp.data('Digital_JobsApp');this.$jobsapp.on('jobsapp:data.'+this.uid,$.proxy(this.jobsapp_dataHandler,this));this.$jobsapp.on('filters:change.'+this.uid,$.proxy(this.jobsapp_filtersChangedHandler,this));this.params=this.$list.data('digital-list-params');if(!this.params)this.$list.data('digital-list-params',this.params={});this.$items=this.$list.find('.dgt-list-items');this.$items.on('click','.oj-joblist-more',$.proxy(this.more_clickHandler,this));this.$items.on('scroll',$.proxy(this.checkMorePosition,this));this.$tools=this.$list.find('.oj-jobslist-tools');this.$list.find('.oj-jobslist-tools').replaceWith(this.$tools);this.$tools.find('.do-alert').on('click',$.proxy(this.createAlert_clickHandler,this));this.$tools.find('.toggle, .filters').on('click',$.proxy(this.toolsToggle_clickHandler,this));this.$tools.find('.filters').on('mouseenter','.filter[data-tooltip]',$.proxy(this.toolsTooltip_enterHandler,this));this.$tools.find('.filters').on('mouseleave','.filter[data-tooltip]',$.proxy(this.toolsTooltip_leaveHandler,this));this.$tools.find('.do-clear .remove').on('click',$.proxy(this.filtersClear_clickHandler,this));this.$tools.find('.overlay').on('click','.btn-filter .remove',$.proxy(this.filterRemove_clickHandler,this));var tpl1='{{#each items}} <a class="filter type-{{type}}" href="#" {{#xif " this.tooltip "}}data-tooltip="{{tooltip}}"{{/xif}} data-id="{{id}}">{{value}}</a> {{/each}}';var tpl2='{{#each items}} <span class="btn btn-filter type-{{type}}" data-id="{{id}}">{{value}} <a class="remove" href="#"></a></span> {{/each}}';this.filtersBarTemplate=Handlebars.compile(tpl1);this.filtersListTemplate=Handlebars.compile(tpl2);this.jobsapp_filtersChangedHandler(null,this.jobsapp.getFilters());this.$items=this.$list.find('.dgt-list-items');this.$items.on('click','.oj-joblist-more',$.proxy(this.more_clickHandler,this));this.$items.on('scroll',$.proxy(this.checkMorePosition,this));this.itemTemplate=Handlebars.compile($('script#oj-joblist-item-template').html());this.moreTemplate=Handlebars.compile($('script#oj-joblist-more-template').html());if(this.jobsapp.lastResult){this.jobsapp_dataHandler(null,this.jobsapp.lastResult);}},dispose:function(){this.$jobsapp.off('.'+this.uid);},jobsapp_dataHandler:function(event,data){this.params.totalItems=data.total;this.$list.trigger('totalItemsChanged');this.$items.empty().scrollTop(0);this.addItemsFromData(data);},checkMorePosition:function(){if(!this.$more)return;var moreTop=this.$more.offset().top;var wrapTop=this.$items.offset().top;var wrapHeight=this.$items.outerHeight();var wrapScroll=this.$items.scrollTop();if(moreTop<wrapTop+wrapHeight+wrapHeight*0.5){this.more_clickHandler();}},addItemsFromData:function(data){if(this.$more){this.$more.remove();this.$more=null;}this.$items.append(this.itemTemplate(data));if(data.nextPageUrl){this.$more=$(this.moreTemplate(data));this.$items.append(this.$more);this.checkMorePosition();}this.$items.trigger('itemsChanged');},more_clickHandler:function(event){if(event){event.preventDefault();event.stopPropagation();}if(this.$more.is('.is-loading'))return;this.$more.addClass('is-loading');this.jqXHR=$.ajax({url:this.$more.find('a').attr('href'),type:'get',dataType:'json',context:this,beforeSend:function(jqXHR,settings){jqXHR.__settings=settings;}});this.jqXHR.$more=this.$more;this.jqXHR.done(this.loadMore_doneHandler);this.jqXHR.fail(this.loadMore_failHandler);this.jqXHR.always(this.loadMore_alwaysHandler);},loadMore_doneHandler:function(data,textStatus,jqXHR){parseJobsJsonResponse(data,jqXHR.__settings.url);this.addItemsFromData(data);},loadMore_failHandler:function(jqXHR,textStatus,errorThrown){jqXHR.$more.removeClass('is-loading');},toolsToggle_clickHandler:function(event){event.preventDefault();event.stopPropagation();this.$tools.toggleClass('is-opened');},toolsTooltip_enterHandler:function(event){var $filter=$(event.currentTarget);var filterOffset=$filter.offset();var filterWidth=$filter.outerWidth();var filterHeight=$filter.outerHeight();var $tooltip=$filter.data('tooltip-$el');if(!$tooltip){$tooltip=$('<span class="oj-jobsapp-filter-tooltip">'+$filter.data('tooltip')+'</span>');$tooltip.css('opacity',0);$filter.data('tooltip-$el',$tooltip);}$(document.body).append($tooltip);var tooltipWidth=$tooltip.stop(true).outerWidth();$tooltip.css({'top':filterOffset.top+filterHeight,'left':filterOffset.left+filterWidth/2-tooltipWidth/2}).animate({opacity:1},200);},toolsTooltip_leaveHandler:function(event){var $filter=$(event.currentTarget);var $tooltip=$filter.data('tooltip-$el');if($tooltip){$tooltip.stop(true).animate({opacity:0},200,function(){$tooltip.remove();});}},createAlert_clickHandler:function(event){event.preventDefault();event.stopPropagation();var data=this.jobsapp.getFormData();alert_create(jQuery.param(data));},filtersClear_clickHandler:function(event){event.preventDefault();event.stopPropagation();this.jobsapp.clearFilters();this.$tools.removeClass('is-opened');},filterRemove_clickHandler:function(event){event.preventDefault();event.stopPropagation();var $filter=$(event.currentTarget).closest('.btn-filter');this.jobsapp.removeFilter($filter.data('id'));},jobsapp_filtersChangedHandler:function(event,filters){this.$tools.toggleClass('has-filters',filters.length>0);var $filters=this.$tools.find('.filters');var $overlay=this.$tools.find('.overlay');$filters.find('.filter').remove();$overlay.find('.btn-filter').remove();if(filters.length<=0)return;$filters.prepend(this.filtersBarTemplate({items:filters}));$overlay.append(this.filtersListTemplate({items:filters}));}});var Digital_JobsApp=function(){this.initialize.apply(this,arguments);};$.extend(Digital_JobsApp.prototype,{initialize:function(view){this.uid=_.uniqueId('digital-');this.$view=$(view).data('Digital_JobsApp',this);this.$page=this.$view.closest('.page,#head');this.$page.on('digital:dispose',$.proxy(this.dispose,this));this.isMobileMap=(window.Microsoft&&window.Microsoft.Maps)?false:true;this.loadData=_.debounce(this.loadData,100);if(ieVersion===8||ieVersion===7){this.$page.addClass("ie8");this.$page.on('click','label',$.proxy(function(event){var id=$(event.currentTarget).attr('for');var $checkbox=this.$page.find(':checkbox#'+id+':eq(0)');if($checkbox.length&&!$checkbox.is(':visible')){$checkbox.trigger('click').trigger('change');}},this));}this.$form=this.$view.find('form');this.$form.on('submit',$.proxy(this.form_submitHandler,this));this.$form.on('change',':checkbox',$.proxy(this.checkbox_changeHandler,this));this.$form.on('change','input[type=text]',$.proxy(this.inputText_changeHandler,this));this.$menu=this.$view.find('.dgt-menu').addClass('oj-jobsmenu');this.menu=this.$menu.data('DigitalMenuController');this.$menu.on('submenuOpened',$.proxy(this.menu_submenuOpenedHandler,this));this.$menu.on('allSubmenuClosed',$.proxy(this.menu_allSubmenuClosedHandler,this));this.$menubar=this.$page.find('.oj-jobsmenu-bar').detach();this.$menubarCount=this.$menubar.find('.count');this.menubarCountText=this.$menubarCount.text();this.$menubarRoot=this.$menubar.find('.back-root');this.$menubarRoot.on('click',$.proxy(this.menubarRoot_clickHandler,this));this.$jobsmap=this.$view.find('.oj-jobsmap').detach();var layout=$(document.body).on('layout:change.'+this.uid,$.proxy(this.invalidateLayout,this)).data('layout');if(layout)this.invalidateLayout(null,layout);_.each(this.$form.find('input:checkbox:checked'),function(checkbox){$(checkbox).trigger('change');},this);_.each(this.$form.find('input:text[value!=""]'),function(input){$(input).trigger('change');},this);this.$form.trigger('submit');},dispose:function(){$(document.body).off('.'+this.uid);},invalidateLayout:function(event,layout){this.isMobile=layout==='MobileLayout';this.isHorizontal=layout==='HorizontalLayout';if(this.isHorizontal){this.$menu.hide();this.menu.closeAll();this.$jobsmap.appendTo(this.$view);if(!this.jobsmap){if(window.Microsoft&&window.Microsoft.Maps){this.jobsmap=new Digital_JobsBingMap(this.$jobsmap,this);}else{this.jobsmap=new Digital_JobsGoogleMap(this.$jobsmap,this);}}if(!this.$mapMenu){this.$mapMenu=this.$menu.clone().show();this.$mapMenu.removeClass();this.$mapMenu.addClass('oj-jobsmap-menu');var $fakeForm=$('<form></form>');var $keywords=this.$mapMenu.find('input#keyword');$fakeForm.on('submit',function(event){event.preventDefault();event.stopPropagation();$keywords.blur().focus();}).insertBefore($keywords);$keywords.appendTo($fakeForm);if($.simplePlaceholder!=undefined)$keywords.simplePlaceholder();this.$mapMenu.find('ul.menu').hide().removeClass('menu').find('input').remove();this.$mapSubmenu=$('<li class="submenu"></li>');var initSubmenu=_.bind(function(submenu,level,parent){var $submenu=$(submenu);if(level>=0){$submenu.data('submenu-level',level);$submenu.data('submenu-parent',parent);$submenu.appendTo(this.$mapSubmenu);}_.each($submenu.find('> li > ul').get(),function(child){initSubmenu(child,level+1,submenu);});},this);initSubmenu(this.$mapMenu.get(0),-1,null);this.$mapSubmenu.appendTo(this.$mapMenu);this.$mapSubmenus=this.$mapSubmenu.find('ul');this.$mapMenu.on('click',$.proxy(this.mapMenu_clickHandler,this));this.$mapMenu.on('click','a',$.proxy(this.mapMenuLink_clickHandler,this));this.$mapMenu.on('change','input[type=text]',$.proxy(this.mapMenu_inputText_changeHandler,this));}this.$mapMenu.prependTo(this.$view);}else{this.$menu.show();if(this.$jobsmap&&!this.isMobileMap){this.$jobsmap.detach();}if(this.$mapMenu){this.$mapMenu.detach();}if(this.isMobileMap){$map_mo=this.$view.find(".map_mo");$map_mo.height($(window).height()-$map_mo.position().top);this.$jobsmap.appendTo($map_mo);if(!this.jobsmap){if(window.Microsoft&&window.Microsoft.Maps){this.jobsmap=new Digital_JobsBingMap(this.$jobsmap,this);}else{this.jobsmap=new Digital_JobsGoogleMap(this.$jobsmap,this);}}}}if(this.isMobile){if(this.lastResult){this.$menubarCount.text(this.menubarCountText.replace('#',this.lastResult.total));}this.$menubar.prependTo(this.$page);}else{if(this.$menubar){this.$menubar.detach();}}},form_submitHandler:function(event){event.preventDefault();this.loadData();},getFormUrl:function(){return this.$form.attr('action');},getFormData:function(override){var data=this.$form.serializeArray();if(override)_.each(override,function(value,name){var param=_.findWhere(data,{name:name});if(!param)data.push(param={name:name});param.value=value;},this);if((this.isHorizontal||this.isMobileMap)&&!this.jobsmap.boundsFilter()){var mapParams=['latmin','latmax','lngmin','lngmax'];data=_.filter(data,function(param){return _.indexOf(mapParams,param.name)<0;});}return data;},updateNumChildrenChecked:function(){var $a,$ul,num;_.each(this.$menu.find('a[href^=#]'),function(a){$a=$(a);$ul=$a.next('ul');if(!$ul.length)return;num=$ul.find('input:checked').length||null;if(num==$a.attr('data-num-children-checked'))return;this.$page.find('a[href="'+$a.attr('href')+'"]').attr('data-num-children-checked',num);if(this.$mapMenu&&!this.$mapMenu.parent().length){this.$mapMenu.find('a[href="'+$a.attr('href')+'"]').attr('data-num-children-checked',num);}},this);},loadData:function(){this.updateNumChildrenChecked();if(this.jqXHR)this.jqXHR.abort();this.jqXHR=$.ajax({url:this.getFormUrl(),type:'get',dataType:'json',data:this.getFormData(),context:this,beforeSend:function(jqXHR,settings){jqXHR.__settings=settings;}});this.jqXHR.done(this.loadData_doneHandler);this.jqXHR.fail(this.loadData_failHandler);this.jqXHR.always(this.loadData_alwaysHandler);},loadData_doneHandler:function(data,textStatus,jqXHR){parseJobsJsonResponse(data,jqXHR.__settings.url);this.lastResult=data;this.$view.trigger('jobsapp:data',this.lastResult);if(this.isMobile){this.$menubarCount.text(this.menubarCountText.replace('#',this.lastResult.total));}if(this.isHorizontal||this.isMobileMap){this.jobsmap.loadMarkers();}},loadData_failHandler:function(jqXHR,textStatus,errorThrown){console.log(textStatus);},loadData_alwaysHandler:function(data){this.jqXHR=null;},getFilters:function(){return this.filters?this.filters.slice(0):[];},clearFilters:function(){_.each(this.filters,this.removeFilter,this);},removeFilter:function(filter){if(_.isString(filter)){filter=_.findWhere(this.filters,{id:filter});}if(!filter||!filter.id||!filter.type)return;if(filter.type==='checkbox'){var $checkbox=this.$form.find('input:checkbox#'+filter.id);if($checkbox.length&&$checkbox.is(':checked')){$checkbox.attr('checked',false).trigger('change');}}else if(filter.type==='text'){var $input=this.$form.find('input#'+filter.id);if($input.length&&$input.val()!==''){$input.val('').trigger('change');}}else if(filter.type==='map'){this.jobsmap.boundsFilter(false);this.jobsmap.zoomAll();this.loadData();}else{this.updateFilter(filter.id,false);}},updateFilter:function(id,isActive,value,type,tooltip){if(!this.filters)this.filters=[];if(type==='text'&&value!=='')value='"'+value+'"';var filter=_.findWhere(this.filters,{id:id});if(!!filter!==isActive){if(isActive){filter={id:id,value:value,type:type,tooltip:tooltip||''};this.filters.push(filter);this.$view.trigger('filters:add',[filter]);}else{this.filters=_.without(this.filters,filter);this.$view.trigger('filters:remove',[filter]);}}else if(filter&&filter.value!==value){this.$view.trigger('filters:update',[filter]);filter.value=value;}else{return;}this.$view.trigger('filters:change',[this.filters.slice(0)]);},checkbox_changeHandler:function(event,isBounce){var $checkbox=$(event.currentTarget);var $label=$checkbox.next('label');var id=$checkbox.attr('id');var label=$label.clone().find('> *').remove().end().text();var isChecked=$checkbox.is(':checked');var parentMenuId=$checkbox.closest('ul').attr('id');if(parentMenuId)this.toggleMapSubmenu('#'+parentMenuId,true,true);this.updateFilter(id,isChecked,label,'checkbox');this.$page.find('label[for="'+id+'"]').toggleClass('is-checked',isChecked);if(this.$mapMenu&&!this.$mapMenu.parent().length){this.$mapMenu.find('label[for="'+id+'"]').toggleClass('is-checked',isChecked);}if(!isBounce){var $others;if($checkbox.is('.forall')){$others=$checkbox.closest('ul').find('input:checkbox:checked:not(.forall)');}else{$others=$checkbox.closest('ul:not(.menu-more)').find('input:checkbox:checked.forall');}if($others.length){$others.prop('checked',false).trigger('change',[true]);}}this.$form.trigger('submit');},inputText_changeHandler:function(event){var $input=$(event.currentTarget);var id=$input.attr('id');var value=$input.val();this.$page.find('input#'+id).val(value);this.updateFilter(id,value!=='',value,'text');this.$form.trigger('submit');},menu_submenuOpenedHandler:function(event,submenu){$(submenu).addClass('oj-jobsmenu');this.$menubar.removeClass('is-at-root');},menu_allSubmenuClosedHandler:function(event){this.$menubar.addClass('is-at-root');},menubarRoot_clickHandler:function(event){event.preventDefault();event.stopPropagation();this.menu.closeAll();},mapMenu_label_clickHandler:function(event){event.stopPropagation();},mapMenu_inputText_changeHandler:function(event){var $input=$(event.currentTarget);var id=$input.attr('id');var value=$input.val();this.$form.find('input#'+id).val(value).trigger('change');},mapMenu_inputText_clickHandler:function(event){event.stopPropagation();},mapMenuLink_clickHandler:function(event){event.preventDefault();event.stopPropagation();var $link=$(event.currentTarget);var href=$link.attr('href');if(href.match(/^#[\w]+/)){this.toggleMapSubmenu(href);}},mapMenu_clickHandler:function(event){var $target=$(event.target);if($target.is('input,label,a,h4'))return;if($target.closest('input,label,a',this.$mapMenu).length)return;event.preventDefault();event.stopPropagation();this.closeAllMapSubmenus();},toggleMapSubmenu:function(id,isVisible,notIfHidden){if(!this.$mapSubmenus||!this.$mapSubmenus.length)return;if(!this._openedSubmenus)this._openedSubmenus=[];var $submenu=this.$mapSubmenus.filter(id);var submenu=$submenu.get(0);if(notIfHidden&&!$submenu.is(':visible'))return;isVisible=isVisible===undefined?!$submenu.is(':visible'):!!isVisible;var level=Math.min($submenu.data('submenu-level'),1);if(this._openedSubmenus.length>=level){var nestedMenus=_.rest(this._openedSubmenus,level);_.each(nestedMenus,function(submenu){var $submenu=$(submenu);$submenu.hide();},this);this._openedSubmenus=_.first(this._openedSubmenus,level);}if(isVisible){$submenu.show();this._openedSubmenus.push(submenu);}this.$mapMenu.find('a.is-opened').removeClass('is-opened');if(this._openedSubmenus.length>0){this.selectMapSubmenuLink(this._openedSubmenus.slice(-1)[0]);}this.$mapMenu.toggleClass('has-submenu-opened',!!this._openedSubmenus.length);},closeAllMapSubmenus:function(){if(!this._openedSubmenus)return;var submenu=_.first(this._openedSubmenus);if(submenu)this.toggleMapSubmenu('#'+$(submenu).attr('id'),false);},selectMapSubmenuLink:function(submenu){var $submenu=$(submenu);var id=$submenu.attr('id');this.$mapMenu.find('a[href="#'+id+'"]:not(.less)').addClass('is-opened');var parent=$submenu.data('submenu-parent');if(parent)this.selectMapSubmenuLink(parent);}});if(window.PinClusterer){PinClusterer.Cluster.prototype.zoom=function(){var bounds=Microsoft.Maps.LocationRect.fromLocations(this.locations);if(bounds.width>0&&bounds.height>0){this._pinClusterer.map.setView({bounds:bounds});}else{this._pinClusterer.map.setView({zoom:13,center:bounds.center});}};}function Digital_JobsBingMap(){this.initialize.apply(this,arguments);}$.extend(Digital_JobsBingMap.prototype,{initialize:function($view,jobsapp){this.uid=_.uniqueId('digital-');this.jobsapp=jobsapp;this.$view=$view;this.filterLabel=this.$view.data('filter-label')||'';this.filterTooltip=this.$view.data('filter-tooltip')||'';this.$page=this.$view.closest('.page,#head');this.$page.on('digital:dispose',$.proxy(this.dispose,this));this.$zoomButton=$('<a href="#" class="bing-zoom"></a>').appendTo(this.$view);this.$unzoomButton=$('<a href="#" class="bing-unzoom"></a>').appendTo(this.$view);this.$zoomButton.on('click',$.proxy(this.zoomButton_clickHandler,this));this.$unzoomButton.on('click',$.proxy(this.unzoomButton_clickHandler,this));this._updateMap=_.debounce(this._updateMap,20);this.loadMarkers=_.debounce(this.loadMarkers,20);this.selectedCountries=[];this.bestRectInProgress=false;this.ZOOM_CTNT=3;this.ZOOM_CTRY=5;this.ZOOM_TOWNCODE=8;this.ZOOMDIRECT=17;_.each(this.jobsapp.getFilters(),function(filter){this.jobsapp_filtersAddHandler(null,filter);},this);this.jobsapp.$view.on('filters:add',$.proxy(this.jobsapp_filtersAddHandler,this));this.jobsapp.$view.on('filters:remove',$.proxy(this.jobsapp_filtersRemoveHandler,this));this.mapOptions={zoom:1,center:new Microsoft.Maps.Location(0,0),credentials:window.BING_MAPS_KEY,showDashboard:false,showMapTypeSelector:false,enableSearchLogo:false,showScalebar:false,inertiaIntensity:0.8,backgroundColor:new Microsoft.Maps.Color(255,172,199,242),mapTypeId:Microsoft.Maps.MapTypeId.road}
this.map=new Microsoft.Maps.Map(this.$view.get(0),this.mapOptions);Microsoft.Maps.Events.addHandler(this.map,"viewchangeend",$.proxy(this.map_viewChangeEndHandler,this));this.clusters=new PinClusterer(this.map);this.clusters.setOptions({maxZoom:20,gridSize:80});this.clusters.cluster([]);this.areasCenters=jobsmapAreasCenters;},zoomButton_clickHandler:function(event){event.preventDefault();var zoom=this.map.getZoom();this.map.setView({zoom:zoom+1});},unzoomButton_clickHandler:function(event){event.preventDefault();var zoom=this.map.getZoom();this.map.setView({zoom:zoom-1});},boundsFilter:function(enabled){if(enabled!==undefined){enabled=!!enabled;if(this.__boundsFilter!==enabled){this.__boundsFilter=enabled;if(enabled){if(this.selectedCountries.length){_.each(this.selectedCountries,function(code){var type=code.length>2?'CTNT':'CTRY';this.jobsapp.removeFilter({type:'checkbox',id:type+'_'+code});},this);}}this.jobsapp.updateFilter('map',enabled,this.filterLabel,'map',this.filterTooltip);}}return!!this.__boundsFilter;},map_viewChangeEndHandler:function(){console.log('BingMap.map_viewChangeEndHandler()',arguments);var zoom=this.map.getZoom();var center=this.map.getCenter();var bounds=this.map.getBounds();var doRemoveFilters=false;if(this.selectedCountries.length!==1&&this.map.getZoom()>this.mapOptions.zoom){this.boundsFilter(true);}else if(this.selectedCountries.length===1){var code=this.selectedCountries[0];var areaZoom=code.length>2?this.ZOOM_CTNT:this.ZOOM_CTRY;if(areaZoom!==zoom){this.boundsFilter(true);}else{var mapCenter=this.map.getCenter();var areaCenter=this.getAreaCenter(code);mapCenter.latitude=Math.round(mapCenter.latitude*10000)/10000;mapCenter.longitude=Math.round(mapCenter.longitude*10000)/10000;if(!Microsoft.Maps.Location.areEqual(mapCenter,areaCenter)){this.boundsFilter(true);}}}this.jobsapp.$form.find('input[name=latmax]').val(bounds.getNorth());this.jobsapp.$form.find('input[name=lngmax]').val(bounds.getEast());this.jobsapp.$form.find('input[name=latmin]').val(bounds.getSouth());this.jobsapp.$form.find('input[name=lngmin]').val(bounds.getWest());if(this.boundsFilter()){if(this.bestRectInProgress===false)this.jobsapp.loadData();else
this.bestRectInProgress=false;}else{this.loadMarkers();}},dispose:function(){console.log('BingMap.dispose()',arguments);this.map.dispose();},getAreaCenter:function(code){var country=this.areasCenters[code];return country?new Microsoft.Maps.Location(country[1],country[0]):this.mapOptions.center;},zoomAll:function(){this.map.setView({zoom:this.mapOptions.zoom,center:this.mapOptions.center});},jobsapp_filtersAddHandler:function(event,filter){var type=filter.id.substr(0,4);var code=filter.id.substr(5);if(type==='CTRY'||type==='CTNT'){this.selectedCountries.push(code);this.boundsFilter(false);this._updateMap();}},jobsapp_filtersRemoveHandler:function(event,filter){var type=filter.id.substr(0,4);var code=filter.id.substr(5);if(type==='CTRY'||type==='CTNT'){this.selectedCountries=_.without(this.selectedCountries,code);this._updateMap();}},_updateMap:function(){this._updateBounds();},_updateBounds:function(){if(this.boundsFilter())return;if(this.selectedCountries.length===1){var code=this.selectedCountries[0];var zoom=code.length>2?this.ZOOM_CTNT:this.ZOOM_CTRY;var center=this.getAreaCenter(code);this.map.setView({zoom:zoom,center:center});}else{this.map.setView({zoom:this.mapOptions.zoom,center:this.mapOptions.center});}},loadMarkers:function(){console.log('BingMap.loadMarkers()',arguments);if(this._jqXHR)this._jqXHR.abort();var url=this.jobsapp.getFormUrl();var data=this.jobsapp.getFormData({nb:10000});this._jqXHR=$.ajax({url:url,type:'GET',dataType:'json',data:data,context:this});this._jqXHR.done(this.loadMarkers_doneHandler);this._jqXHR.always(this.loadMarkers_alwaysHandler);},loadMarkers_doneHandler:function(data,textStatus,jqXHR){console.log('BingMap.loadMarkers_doneHandler()',arguments);this.markers=[];var clusterData=[];var lat,lng,position;_.each(data.items,function(item){if(item.lat!=0&&item.lng!=0){this.addMarker(item.lat,item.lng,item.title,item.joid);}clusterData.push({latitude:item.lat,longitude:item.lng});},this);this.clusters.cluster(clusterData);if(this._firstLoadDone!==true){this._firstLoadDone=true;this.bestRectInProgress=true;var bounds=Microsoft.Maps.LocationRect.fromLocations(clusterData);this.map.setView({bounds:bounds});}},loadMarkers_alwaysHandler:function(){console.log('BingMap.loadMarkers_alwaysHandler()',arguments);this._jqXHR=null;},addMarker:function(lat,lng,position,title,joid){var position=new Microsoft.Maps.Location(lat,lng);var marker=new Microsoft.Maps.Pushpin(position);this.markers.push(marker);}});function Digital_JobsGoogleMap(){this.initialize.apply(this,arguments);};$.extend(Digital_JobsGoogleMap.prototype,{initialize:function($view,jobsapp){this.uid=_.uniqueId('digital-');this.jobsapp=jobsapp;this.$view=$view;this.filterLabel=this.$view.data('filter-label')||'';this.$page=this.$view.closest('.page,#head');this.$isHorizontal=$('body').hasClass("lyt-ho");this.$page.on('digital:dispose',$.proxy(this.dispose,this));this.isHorizontal=this._updateMap=_.debounce(this._updateMap,20);this.loadMarkers=_.debounce(this.loadMarkers,20);this.$usercountry=this.$view.data("country")||"";this.selectedCountries=[];this.ZOOM_CTNT=3;this.ZOOM_CTRY=5;this.ZOOM_TOWNCODE=8;this.ZOOMDIRECT=17;_.each(this.jobsapp.getFilters(),function(filter){this.jobsapp_filtersAddHandler(null,filter);},this);this.jobsapp.$view.on('filters:add',$.proxy(this.jobsapp_filtersAddHandler,this));this.jobsapp.$view.on('filters:remove',$.proxy(this.jobsapp_filtersRemoveHandler,this));if(this.$usercountry!=="MA"){this.mapOptions={zoom:1,minZoom:1,maxZoom:21,center:new google.maps.LatLng(0,0),mapTypeId:google.maps.MapTypeId.ROADMAP,disableDefaultUI:(this.$isHorizontal)?false:true,draggable:true,panControl:false,mapTypeControl:false,streetViewControl:false,backgroundColor:'#b3d1ff',styles:[{featureType:'poi',elementType:'labels',stylers:[{visibility:'off'}]}],zoomControlOptions:{style:google.maps.ZoomControlStyle.SMALL,position:google.maps.ControlPosition.LEFT_BOTTOM,}};}else{this.mapOptions={zoom:1,minZoom:1,maxZoom:21,center:new google.maps.LatLng(0,0),mapTypeId:google.maps.MapTypeId.ROADMAP,disableDefaultUI:(this.$isHorizontal)?false:true,draggable:true,panControl:false,mapTypeControl:false,streetViewControl:false,backgroundColor:'#b3d1ff',styles:[{featureType:'poi',elementType:'labels',stylers:[{visibility:'off'}]},{featureType:"administrative.country",elementType:"names",stylers:[{visibility:"off"}]},{featureType:"administrative.country",elementType:"geometry",stylers:[{visibility:"off"}]}],zoomControlOptions:{style:google.maps.ZoomControlStyle.SMALL,position:google.maps.ControlPosition.LEFT_BOTTOM,}};}this.map=new google.maps.Map(this.$view.get(0),this.mapOptions);this.clusters=new MarkerClusterer(this.map,null,{styles:[{textColor:'#FFFFFF',url:'../images2/map/cluster-simple.png',width:40,height:40},{textColor:'#FFFFFF',url:'../images2/map/cluster-simple.png',width:40,height:40},{textColor:'#FFFFFF',url:'../images2/map/cluster-simple.png',width:40,height:40}]});google.maps.event.addListener(this.clusters,'mouseover',_.bind(this.clusters_mouseoverHandler,this));this.infowindow=new google.maps.InfoWindow({maxWidth:200,pixelOffset:new google.maps.Size(0,-6)});this.areasCenters=jobsmapAreasCenters;google.maps.event.addListener(this.map,'idle',_.bind(this.map_idleHandler,this));this.initGeoloc();},boundsFilter:function(enabled){if(enabled!==undefined){enabled=!!enabled;if(this.__boundsFilter!==enabled){this.__boundsFilter=enabled;if(enabled){if(this.selectedCountries.length){_.each(this.selectedCountries,function(code){var type=code.length>2?'CTNT':'CTRY';this.jobsapp.removeFilter({type:'checkbox',id:type+'_'+code});},this);}}this.jobsapp.updateFilter('map',enabled,this.filterLabel,'map',this.filterTooltip);}}return!!this.__boundsFilter;},map_idleHandler:function(){var zoom=this.map.getZoom();var center=this.map.getCenter();var bounds=this.map.getBounds();if(!bounds)return;var doRemoveFilters=false;if(this.selectedCountries.length!==1&&this.map.getZoom()>this.mapOptions.zoom){this.boundsFilter(true);}else if(this.selectedCountries.length===1){var code=this.selectedCountries[0];var areaZoom=code.length>2?this.ZOOM_CTNT:this.ZOOM_CTRY;if(areaZoom!==zoom){this.boundsFilter(true);}else{var mapCenter=this.map.getCenter();var areaCenter=this.getAreaCenter(code);if(!mapCenter.equals(areaCenter)){this.boundsFilter(true);}}}var ne=bounds.getNorthEast();var sw=bounds.getSouthWest();this.jobsapp.$form.find('input[name=latmax]').val(ne.lat());this.jobsapp.$form.find('input[name=lngmax]').val(ne.lng());this.jobsapp.$form.find('input[name=latmin]').val(sw.lat());this.jobsapp.$form.find('input[name=lngmin]').val(sw.lng());if(this.boundsFilter()){this.jobsapp.loadData();}else{this.loadMarkers();}},dispose:function(){this.map&&google.maps.event.clearInstanceListeners(this.map);this.myloc&&google.maps.event.clearInstanceListeners(this.myloc);this.clusters&&google.maps.event.clearInstanceListeners(this.clusters);_.each(this.markers,function(marker){google.maps.event.clearInstanceListeners(marker);},this);},getAreaCenter:function(code){var country=this.areasCenters[code];return country?new google.maps.LatLng(country[1],country[0]):new google.maps.LatLng(0,0);},zoomAll:function(){this.map.setZoom(this.mapOptions.zoom);this.map.setCenter(this.mapOptions.center);},jobsapp_filtersAddHandler:function(event,filter){var type=filter.id.substr(0,4);var code=filter.id.substr(5);if(type==='CTRY'||type==='CTNT'){this.selectedCountries.push(code);this.boundsFilter(false);this._updateMap();}},jobsapp_filtersRemoveHandler:function(event,filter){var type=filter.id.substr(0,4);var code=filter.id.substr(5);if(type==='CTRY'||type==='CTNT'){this.selectedCountries=_.without(this.selectedCountries,code);this._updateMap();}},_updateMap:function(){this._updateBounds();},_updateBounds:function(){if(this.boundsFilter())return;if(this.selectedCountries.length===1){var code=this.selectedCountries[0];var zoom=code.length>2?this.ZOOM_CTNT:this.ZOOM_CTRY;var position=this.getAreaCenter(code);this.map.setZoom(zoom);this.map.setCenter(position);}else{this.map.setZoom(this.mapOptions.zoom);this.map.setCenter(this.mapOptions.center);}},_changeBounds:function(map,testisNewCenter){var zoom=this.map.getZoom();var center=this.map.getCenter();var bounds=this.map.getBounds();},loadMarkers:function(){if(this._jqXHR)this._jqXHR.abort();var url=this.jobsapp.getFormUrl();var data=this.jobsapp.getFormData({nb:10000});this._jqXHR=$.ajax({url:url,type:'GET',dataType:'json',data:data,context:this});this._jqXHR.done(this.loadMarkers_doneHandler);this._jqXHR.always(this.loadMarkers_alwaysHandler);},loadMarkers_doneHandler:function(data,textStatus,jqXHR){this.clusters.clearMarkers();this.markers&&_.each(this.markers,function(marker){marker.setMap(null);google.maps.event.clearInstanceListeners(marker);},this);this.markers=[];var bounds=this.map.getBounds();if(!bounds)return;var lat,lng,position;_.each(data.items,function(item){lat=item.lat;lng=item.lng;if(lat!=0&&lng!=0){position=new google.maps.LatLng(lat,lng);this.addMarker(lat,lng,position,item.title,1,item.joid);}},this);if(this.markers.length>0){this.clusters.addMarkers(this.markers);}},loadMarkers_alwaysHandler:function(){this._jqXHR=null;},clusters_mouseoverHandler:function(cluster){var tmpmarkers=cluster.getMarkers();var center=cluster.getCenter();var position=null;var title="";var nbmax=3;for(var l=0;l<tmpmarkers.length&&l<nbmax;l++){var tmp=tmpmarkers[l];title+=this.getMarkerLink(tmp.title,tmp.joid);}this.showInfoWindow(cluster,title,center,tmpmarkers.length>nbmax);},addMarker:function(lat,lng,position,title,tag,joid){var marker=new google.maps.Marker({position:position,icon:"../images2/map/marker.png",title:title,joid:joid});google.maps.event.addListener(marker,'click',_.bind(this.marker_clickHandler,this,marker));google.maps.event.addListener(marker,'mouseover',_.bind(this.marker_mouseoverHandler,this,marker));this.markers.push(marker);},getMarkerLink:function(title,joid){return'<a href="/jobs/offer.do?joid='+joid+'" data-jobid="'+joid+'" data-action="jobSelect">'+title+'</a>';},marker_mouseoverHandler:function(marker){this.showInfoWindow(marker,marker.title);},marker_clickHandler:function(marker){this.zoomMarker(marker);},zoomMarker:function(marker){this.map.setZoom(this.ZOOMDIRECT)
this.map.setCenter(marker.getPosition());},showInfoWindow:function(marker,title,center){if(!this.infowindow||this.clustertype!='')return;if(center){this.infowindow.setPosition(center);this.infowindow.open(this.map);}else{this.infowindow.open(this.map,marker);title=this.getMarkerLink(title,marker.joid);}this.infowindow.setContent("<div class='map_tooltip'>"+title+"</div>");},initGeoloc:function(event){if(!navigator.geolocation)return;this.myloc=new google.maps.Marker({icon:new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',new google.maps.Size(22,22),new google.maps.Point(0,18),new google.maps.Point(11,11)),shadow:null,map:null,zIndex:999});this.$geoloc=$('<div class="geoloc xl active"></div>').appendTo(this.$view);this.$geoloc.addClass('done');this.$geoloc.on('click',$.proxy(this.geoloc_clickHandler,this));},geoloc_clickHandler:function(event){event.preventDefault();event.stopPropagation();if(!this.myloc.getMap()){this.requestGeoloc();}else{this.zoomGeoloc();}},zoomGeoloc:function(){var zoom=10;this.map.setZoom(zoom);this.map.setCenter(this.myloc.getPosition());},requestGeoloc:function(){if(!navigator.geolocation||!this.myloc||this.myloc.getMap())return;this.$geoloc.addClass('loading');navigator.geolocation.getCurrentPosition(_.bind(this.requestGeoloc_doneHandler,this),_.bind(this.requestGeoloc_failHandler,this));},requestGeoloc_doneHandler:function(position){var lat=position.coords.latitude;var lng=position.coords.longitude;this.myloc.setPosition(new google.maps.LatLng(lat,lng));this.myloc.setMap(this.map);google.maps.event.addListener(this.myloc,'click',_.bind(this.zoomGeoloc,this));this.zoomGeoloc();this.$geoloc.removeClass('loading').addClass('active done');},requestGeoloc_failHandler:function(position){this.$geoloc.removeClass('loading').addClass('done');}});var jobsmapAreasCenters={'AMERICA':[-85.78125,12.897489],'AFRICA':[23.90625,0],'ASIA':[83.320313,55.578345],'1EUROPE':[8.789063,46.800059],'OCEANIA':[129.023438,14.264383],'AW':[-70.0167,12.5167],'AF':[69.1761,34.5228],'AO':[13.242,-8.81155],'AL':[19.8172,41.3317],'AD':[1.5218,42.5075],'AE':[54.3705,24.4764],'AR':[-58.4173,-34.6118],'AM':[44.509,40.1596],'AS':[-170.691,-14.2846],'AG':[-61.8456,17.1175],'AU':[149.129,-35.282],'AT':[16.3798,48.2201],'AZ':[49.8932,40.3834],'BI':[29.3639,-3.3784],'BE':[4.36761,50.8371],'BJ':[2.6323,6.4779],'BF':[-1.53395,12.3605],'BD':[90.4113,23.7055],'BG':[23.3238,42.7105],'BH':[50.5354,26.1921],'BS':[-77.339,25.0661],'BA':[18.4214,43.8607],'BY':[27.5766,53.9678],'BZ':[-88.7713,17.2534],'BM':[-64.706,32.3293],'BO':[-66.1936,-13.9908],'BR':[-47.9292,-15.7801],'BB':[-59.6105,13.0935],'BN':[114.946,4.94199],'BT':[89.6177,27.5768],'BW':[25.9201,-24.6544],'CF':[21.6407,5.63056],'CA':[-75.6919,45.4215],'CH':[7.44821,46.948],'CL':[-70.6475,-33.475],'CN':[116.286,40.0495],'CI':[-4.0305,5.332],'CM':[11.5174,3.8721],'CD':[15.3222,-4.325],'CG':[15.2662,-4.2767],'CO':[-74.082,4.60987],'KM':[43.2418,-11.6986],'CV':[-23.5087,14.9218],'CR':[-84.0089,9.63701],'CU':[-82.3667,23.1333],'KY':[-81.3857,19.3022],'CY':[33.3736,35.1676],'CZ':[14.4205,50.0878],'DE':[13.4115,52.5235],'DJ':[43.1425,11.5806],'DM':[-61.39,15.2976],'DK':[12.5681,55.6763],'DO':[-69.8908,18.479],'DZ':[3.05097,36.7397],'EC':[-78.5243,-0.229498],'EG':[31.2461,30.0982],'ER':[38.9183,15.3315],'ES':[-3.70327,40.4167],'EE':[24.7586,59.4392],'ET':[38.7468,9.02274],'FI':[24.9525,60.1608],'FJ':[178.399,-18.1149],'FR':[2.35097,48.8566],'FO':[-6.91181,61.8926],'FM':[158.185,6.91771],'GA':[9.45162,0.38832],'GB':[-0.126236,51.5002],'GE':[44.793,41.71],'GH':[-0.20795,5.57045],'GN':[-13.7,9.51667],'GM':[-16.5885,13.4495],'GW':[-15.1804,11.8037],'GQ':[8.7741,3.7523],'GR':[23.7166,37.9792],'GD':[-61.7449,12.0653],'GL':[-51.7214,64.1836],'GT':[-90.5328,14.6248],'GU':[144.794,13.4443],'GY':[-58.1548,6.80461],'HK':[114.109,22.3964],'HN':[-87.4667,15.1333],'HR':[15.9614,45.8069],'HT':[-72.3288,18.5392],'HU':[19.0408,47.4984],'ID':[106.83,-6.19752],'IM':[-4.47928,54.1509],'IN':[77.225,28.6353],'IE':[-6.26749,53.3441],'IR':[51.4447,35.6878],'IQ':[44.394,33.3302],'IS':[-21.8952,64.1353],'IL':[35.2035,31.7717],'IT':[12.4823,41.8955],'JM':[-76.792,17.9927],'JO':[35.9263,31.9497],'JP':[139.77,35.67],'KZ':[71.4382,51.1879],'KE':[36.8126,-1.27975],'KG':[74.6057,42.8851],'KH':[104.874,11.5556],'KI':[172.979,1.32905],'KN':[-62.7309,17.3],'KR':[126.957,37.5323],'KV':[20.926,42.565],'KW':[47.9824,29.3721],'LA':[102.177,18.5826],'LB':[35.5134,33.8872],'LR':[-10.7957,6.30039],'LY':[13.1072,32.8578],'LC':[-60.9832,14],'LI':[9.52148,47.1411],'LK':[79.8528,6.92148],'LS':[27.7167,-29.5208],'LT':[25.2799,54.6896],'LU':[6.1296,49.61],'LV':[24.1048,56.9465],'MO':[113.55,22.1667],'MA':[-6.8704,33.9905],'MC':[7.41891,43.7325],'MD':[28.8497,47.0167],'MG':[45.7167,-20.4667],'MV':[73.5109,4.1742],'MX':[-99.1276,19.427],'MH':[171.135,7.11046],'MK':[21.4361,42.0024],'ML':[-7.50034,13.5667],'MT':[14.5189,35.9042],'MM':[95.9562,21.914],'ME':[19.2595,42.4602],'MN':[106.937,47.9129],'MP':[145.765,15.1935],'MZ':[32.5713,-25.9664],'MR':[-15.9824,18.2367],'MU':[57.4977,-20.1605],'MW':[33.7703,-13.9899],'MY':[101.684,3.12433],'NA':[17.0931,-22.5648],'NC':[166.464,-22.2677],'NE':[2.1073,13.514],'NG':[7.48906,9.05804],'NI':[-86.2734,12.1475],'NL':[4.89095,52.3738],'NO':[10.7387,59.9138],'NP':[85.3157,27.6939],'NZ':[174.776,-41.2865],'OM':[-77.0465,-12.0931],'PH':[121.035,14.5515],'PW':[134.479,7.34194],'PG':[147.194,-9.47357],'PL':[21.02,52.26],'PR':[-66,18.23],'KP':[125.754,39.0319],'PT':[-9.13552,38.7072],'PY':[-57.6362,-25.3005],'PF':[-149.57,-17.535],'QA':[51.5082,25.2948],'RO':[26.0979,44.4479],'RU':[37.6176,55.7558],'RW':[30.0587,-1.95325],'SA':[46.6977,24.6748],'SD':[32.5363,15.5932],'SN':[-17.4734,14.7247],'SG':[103.85,1.28941],'SB':[159.949,-9.42676],'SL':[-13.2134,8.4821],'SV':[-89.2073,13.7034],'SM':[12.4486,43.9322],'SO':[45.3254,2.07515],'RS':[20.4656,44.8024],'SS':[31.6,4.85],'ST':[6.6071,0.20618],'SR':[-55.1679,5.8232],'SK':[17.1073,48.1484],'SI':[14.5044,46.0546],'SE':[18.0645,59.3327],'SZ':[31.4659,-26.5225],'SC':[55.4466,-4.6309],'SY':[36.3119,33.5146],'TC':[-71.141389,21.4602778],'TD':[15.0445,12.1048],'TG':[1.2255,6.1228],'TH':[100.521,13.7308],'TJ':[68.7864,38.5878],'TM':[58.3794,37.9509],'TL':[125.567,-8.56667],'TO':[-175.216,-21.136],'TT':[-61.4789,10.6596],'TN':[10.20,36.84],'TR':[32.3606,39.7153],'TV':[179.089567,-8.6314877],'TZ':[35.7382,-6.17486],'UG':[32.5729,0.314269],'UA':[30.5038,50.4536],'UY':[-56.0675,-34.8941],'US':[-77.032,38.8895],'UZ':[69.269,41.3052],'VC':[-61.2653,13.2035],'VE':[-69.8371,9.08165],'VI':[-64.8963,18.3358],'VN':[105.825,21.0069],'VU':[168.321,-17.7404],'WS':[-171.752,-13.8314],'YE':[44.2075,15.352],'ZA':[28.1871,-25.746],'ZM':[28.2937,-15.3982],'ZW':[31.0672,-17.8312]};})();