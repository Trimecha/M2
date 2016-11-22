function JobSearchResultsModel(a){assert(null!=a,"searchData is required in [JobSearchResultsModel]");this._searchResult=a;this._init()}
JobSearchResultsModel.prototype=function(){return set(new EventTarget,{_init:function(){},setSearchResult:function(a){this._searchResult=a},isInternal:function(){return this._searchResult.internalSearch},getisOwnershipConfigured:function(){return this._searchResult.ownershipConfigured},getCount:function(){return this._searchResult.postingCount},getIsApplyWithLinkedInEnabled:function(){return this._searchResult.applyWithLinkedInEnabled},disableEmailJobToFriendInternalEnabled:function(){return this._searchResult.disableEmailJobToFriendInternal},
disableEmailJobToFriendExternalEnabled:function(){return this._searchResult.disableEmailJobToFriendExternal},getPostings:function(){return this._searchResult.postings},getPosting:function(a){a=this._searchResult.postings[a];a.detailURL=this.getDetailURL(a.id,a.defaultLocale);a.radialDistance=this._searchResult&&this._searchResult.radialDistances&&this._searchResult.radialDistances[a.id];a.isLocaleDistanceUnitMiles=this._searchResult&&this._searchResult.localeDistanceUnitMiles;return a},getDetailURL:function(a,
b){return this._searchResult.detailURLPrefix+a+"\x26selected_lang\x3d"+b},getPostingTitle:function(a){return a.title},getPostingDate:function(a){return a.postingDate},getPostingID:function(a){return a.id},getPostingLines:function(a){return a.otherValues},clearFilters:function(){alert("clearFilters")},getOptions:function(){return this._searchResult.options},updateSortOptions:function(a){null==this._searchResult.options&&(this._searchResult.options={});this._searchResult.options.sortByColumn=a;this._searchResult.options.sortOrder=
"ASC";"JOB_RELEVANCE"==this._searchResult.options.sortByColumn&&(this._searchResult.options.sortOrder="DESC")},getSortColumn:function(){return null!=this._searchResult.options?this._searchResult.options.sortByColumn:""},getTotalCount:function(){return this._searchResult.options.pagination.totalCount},getStartRow:function(){return this._searchResult.options.pagination.startRow?this._searchResult.options.pagination.startRow:1},getPageSize:function(){return this._searchResult.options.pagination.pageSize},
updatePaginationOptions:function(a,b){a&&(this._searchResult.options.pagination.currentPage=a);b&&(this._searchResult.options.pagination.pageSize=b,this._searchResult.options.pagination.currentPage=1)},setFiltersList:function(a){this._filtersList=a},getFiltersList:function(){return this._filtersList},isUserLoggedIn:function(){return this._searchResult.userLoggedIn},updateSortOrder:function(){var a=this._searchResult.options.sortOrder;void 0!=a&&"ASC"==a?this._searchResult.options.sortOrder="DESC":
"DESC"==a&&(this._searchResult.options.sortOrder="ASC")},getSortOrder:function(){var a=this._searchResult.options.sortOrder;return void 0==a||"ASC"==a?"ASC":"DESC"},OptionList:[{key:MSGS.RECRUITING_JOB_SEARCH_JOB_DATE_POSTED,value:"JOB_START_DATE"},{key:MSGS.RECRUITING_JOB_SEARCH_JOB_RELEVANCE,value:"JOB_RELEVANCE"}],addSortColumns:function(){var a=this.getFiltersList();if(a)for(var b=0;b<a.length;b++){var c={};"postedindays"!=a[b].fieldName&&(c.key=a[b].label,"keyword"==a[b].fieldName?c.key=MSGS.RECRUITING_JOB_SEARCH_JOB_REQ_TITLE_SORT_COL:
"radialField"===a[b].fieldName&&(c.key=MSGS.RECRUITING_RADIAL_SEARCH_DISTANCE_COLUMN),c.value=a[b].fieldName,this.OptionList.push(c))}},getSortColumns:function(){return this.OptionList}})}();