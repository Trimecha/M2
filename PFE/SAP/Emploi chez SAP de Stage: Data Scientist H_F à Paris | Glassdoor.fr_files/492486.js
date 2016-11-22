var flxpxlObj = (function() {
	var obj = {};

	obj.version = '9';

	obj.execute = function() {

		var bodyHTML = '';
		var bodyText = '';
		var bodyNormalized = '';
		var currentQueryTemp = '';
		var currentFunction = function(){};

		// Page group: Glassdoor Landing Page Clicks Segment
		var conditions_671165 = {};
		setTimeout(function() {
		function pageGroup_671165() {
			obj.placeAppNexusSegmentScript('seg?add=2848357&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_671165[queryId]=true);if(checkConditions(conditions_671165)){pageGroup_671165();}});};
		if(
			(window.location.href.indexOf('http://www.glassdoor.com/post-job') != -1) ||
			(window.location.href.indexOf('http://www.glassdoor.com/post-job?src=b2b-veinter&utm_source=b2b-veinter&utm_medium=cpc-b2b&utm_campaign=b2b-veinter-hire-smart-from-the-start-jp&utm_content=160x600') != -1) ||
			(window.location.href.indexOf('http://www.glassdoor.com/post-job?src=b2b-veinter&utm_source=b2b-veinter&utm_medium=cpc-b2b&utm_campaign=b2b-veinter-hire-smart-from-the-start-jp&utm_content=300x250') != -1) ||
			(window.location.href.indexOf('http://www.glassdoor.com/post-job?src=b2b-veinter&utm_source=b2b-veinter&utm_medium=cpc-b2b&utm_campaign=b2b-veinter-hire-smart-from-the-start-jp&utm_content=728x90') != -1) ||
			(window.location.href.indexOf('http://www.glassdoor.com/post-job?src=b2b-veinter&utm_source=b2b-veinter&utm_medium=cpc-b2b&utm_campaign=b2b-veinter-fewer-bad-resumes-jp&utm_content=160x600') != -1) ||
			(window.location.href.indexOf('http://www.glassdoor.com/post-job?src=b2b-veinter&utm_source=b2b-veinter&utm_medium=cpc-b2b&utm_campaign=b2b-veinter-fewer-bad-resumes-jp&utm_content=300x250') != -1) ||
			(window.location.href.indexOf('http://www.glassdoor.com/post-job?src=b2b-veinter&utm_source=b2b-veinter&utm_medium=cpc-b2b&utm_campaign=b2b-veinter-fewer-bad-resumes-jp&utm_content=728x90') != -1) ||
			(window.location.href.indexOf('www.glassdoor.com/post-job') != -1)
		) {
			if(checkConditions(conditions_671165)){pageGroup_671165();}
		}
		}, 1);

		// Page group: Glassdoor Clicks and Landing Page Load
		var conditions_671166 = {};
		setTimeout(function() {
		function pageGroup_671166() {
			obj.placeAppNexusSegmentScript('seg?add=2848779&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_671166[queryId]=true);if(checkConditions(conditions_671166)){pageGroup_671166();}});};
		if(
			(window.location.href.indexOf('www.glassdoor.com/post-job') != -1) &&
			(document.cookie.indexOf('2733545') != -1)
		) {
			if(checkConditions(conditions_671166)){pageGroup_671166();}
		}
		}, 1);

		// Page group: Edit Job Posting
		var conditions_671167 = {};
		setTimeout(function() {
		function pageGroup_671167() {
			obj.placeAppNexusSegmentScript('seg?add=2910880&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_671167[queryId]=true);if(checkConditions(conditions_671167)){pageGroup_671167();}});};
		if(
			(window.location.href.indexOf('www.glassdoor.com/partners/post-a-job/create') != -1)
		) {
			if(checkConditions(conditions_671167)){pageGroup_671167();}
		}
		}, 1);

		// Page group: Checkout Page
		var conditions_671168 = {};
		setTimeout(function() {
		function pageGroup_671168() {
			obj.placeAppNexusSegmentScript('seg?add=2910940&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_671168[queryId]=true);if(checkConditions(conditions_671168)){pageGroup_671168();}});};
		if(
			(window.location.href.indexOf('www.glassdoor.com/partners/post-a-job/checkout') != -1)
		) {
			if(checkConditions(conditions_671168)){pageGroup_671168();}
		}
		}, 1);

		// Page group: A/B/C Landing Page
		var conditions_671169 = {};
		setTimeout(function() {
		function pageGroup_671169() {
			obj.placeAppNexusScript('px?id=556144&t=1', '556144');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_671169[queryId]=true);if(checkConditions(conditions_671169)){pageGroup_671169();}});};
		if(
			(window.location.href.indexOf('http://resources.glassdoor.com/how-to-recruit-sales-professionals-guide.html?channel=b2b-veinter&utm') != -1)
		) {
			if(checkConditions(conditions_671169)){pageGroup_671169();}
		}
		}, 1);



	}; // end execute

	obj.placePixel = function(url, tagId) {
		if(tagId && tagsPlaced[tagId]) {
			return;
		} else if(tagId) {
			tagsPlaced[tagId] = 1;
		}
		var i = document.createElement("img");
		i.onload = function(){};
		i.src = obj.fixUrl((url + '')).replace('{iatRandom}', obj.randomId());
	};

	obj.placeCode = function(code, tagId) {
		if(tagId && tagsPlaced[tagId]) {
			return;
		} else if(tagId) {
			tagsPlaced[tagId] = 1;
		}
		var scriptCode = [];
		code = "" + code;
		if(code.toLowerCase().indexOf("<scr"+"ipt") > -1) {
			var d = document.createElement("div");
			d.innerHTML = "_" + code;
			var scripts = d.getElementsByTagName("script");
			for(var i=0, len=scripts.length; i < len; i++) {
				if(scripts[i].src) {
					scriptCode.push({url: scripts[i].src});
				} else {
					scriptCode.push({evalSrc: scripts[i].innerHTML});
				}
			}
			for(var j=scripts.length-1; j >= 0; j--) {
				scripts[j].parentNode.removeChild(scripts[j]);
			}
			code = d.innerHTML.substring(1);
		}
		obj.placeHtml(code);
		if(scriptCode.length) {
			 scriptsToPlace = scriptsToPlace.concat(scriptCode);
		}
		return scriptCode;
	};

	obj.placeScript = function(url, tagId) {
		if(tagId && tagsPlaced[tagId]) {
			return;
		} else if(tagId) {
			tagsPlaced[tagId] = 1;
		}
		var script = document.createElement("script");
		script.async = true;
		script.type = "text/javascript";
		script.src = obj.fixUrl(url).replace('{iatRandom}', obj.randomId());
		document.getElementsByTagName('head')[0].appendChild(script);
	};

	obj.placeHtml = function(code, tagId) {
		if(tagId && tagsPlaced[tagId]) {
			return;
		} else if(tagId) {
			tagsPlaced[tagId] = 1;
		}
		df.innerHTML += code.replace('{iatRandom}', obj.randomId());
	};

	obj.placeAppNexusScript = function(code, tagId, purchaseIntegration, scVariable) {
		code = window.location.protocol == 'https:' ? 'https://secure.adnxs.com/' + code : 'http://ib.adnxs.com/' + code;
		if(purchaseIntegration && purchaseIntegration != 'None') {
			code = code + obj.getIntegrationData(purchaseIntegration, scVariable);
		}
		obj.placeScript(code, tagId);
	};

	obj.placeAppNexusSegmentScript = function(code, tagId, purchaseIntegration, scVariable, keywordType, queryParam) {
		if(keywordType && keywordType == 'Organic') {
			if(flxKeywordHash) {
				code += '&other=' + escape(flxKeywordHash);
			}
		} else if(keywordType && keywordType == 'Custom') {
			var customKeyword = flxGetKeyword(queryParam);
			var hash = '';
			if(customKeyword) {
				hash = flxSendKeyword(customKeyword);
			}
			if(hash) {
				code += '&other=' + escape(hash);
			}
		} else if(keywordType && keywordType == 'Both') {
			var customKeyword = flxGetKeyword(queryParam);
			var hash = '';
			if(customKeyword) {
				hash = flxSendKeyword(customKeyword);
			}

			if(hash) {
				code += '&other=' + escape(hash);
			} else {
				if(flxKeywordHash) {
					code += '&other=' + escape(flxKeywordHash);
				}
			}
		}
		obj.placeAppNexusScript(code, tagId, purchaseIntegration, scVariable);
	};

	obj.getIntegrationData = function(purchaseIntegration, scVariable) {
		var ret = '';
		var orderId = '';
		var revenue = 0;
		if(purchaseIntegration == 'Google Analytics') {
			var html = document.body.innerHTML;
			//async
			if(html.indexOf('_gaq.push') != -1) {
				try {
					orderId = html.split('_addTrans')[1].split('_trackTrans')[0].split(',')[1].match(/['"].*?['"]/g)[0].replace(/['"]/g, '');
				} catch(e){};
				try {
					revenue = parseFloat(html.split('_addTrans')[1].split('_trackTrans')[0].split(',')[3].match(/['"].*?['"]/g)[0].replace(/['"]/g, ''));
				} catch(e){};
				if(!revenue) {
					try {
						revenue = parseFloat(html.split('_addTrans')[1].split('_trackTrans')[0].split(/\,\s+.*/g)[2].match(/['"].*?['"]/g)[0].replace(/['"]/g, ''));
					} catch(e){}
				}
			}

			//sync
			if(!orderId && !revenue) {
				try {
					orderId = html.split('_addTrans')[1].split('_trackTrans')[0].split(',')[0].match(/['"].*?['"]/g)[0].replace(/['"]/g, '');
				} catch(e){};
				try {
					revenue = parseFloat(html.split('_addTrans')[1].split('_trackTrans')[0].split(',')[2].match(/['"].*?['"]/g)[0].replace(/['"]/g, ''));
				} catch(e){};
			}
		} else if(purchaseIntegration == 'Adobe SiteCatalyst') {
			try {
				if(!scVariable) {
					scVariable = 's';
				}
				if(window[scVariable]) {
					orderId = window[scVariable].purchaseID;
				}
			} catch(e){};
			try {
				if(window[scVariable]) {
					var productsVar = window[scVariable].products;
					if(productsVar) {
						var products = productsVar.split(',');
						for(var i=0; i<products.length; i++) {
							var items = products[i].split(';');
							if(items.length > 3 && items[3]) {
								revenue += parseFloat(items[3], 10);
							}
						}
					}
				}
			} catch(e){};
		} else if(purchaseIntegration == 'Qubit Universal Variable') {
			try {
				if(window.universal_variable && window.universal_variable.transaction) {
					orderId = window.universal_variable.transaction.order_id;
					revenue = window.universal_variable.transaction.total;
				}
			} catch(e){}
		}

		if(orderId) {
			ret += '&order_id=' + encodeURIComponent(orderId);
		}
		if(revenue) {
			ret += '&value=' + encodeURIComponent(revenue);
		}
		return ret;
	};

	obj.randomId = function() {
		return (new Date()).getTime() + '' + (Math.random() * 1e16);
	};

	obj.fixUrl = function(url) {
		if(url.substring(0, 5) === 'http:') {
			return url;
		}
		if(url.substring(0, 6) === 'https:') {
			return url;
		}
		return "//" + url;
	};

	obj.scriptEval = function(script) {
		if (window.execScript) {
			window.execScript(script);
		} else {
			var f = function () {
				eval.call(window, script);
			};
			f();
		}
	};

	obj.placeScripts = function(scripts) {
		for(var i=0, len=scripts.length; i<len; i++) {
			if(scripts[i].url) {
				obj.placeScript(scripts[i].url);
			} else if(scripts[i].evalSrc) {
				obj.scriptEval(scripts[i].evalSrc);
			}
		}
	};

	function getTextContentExceptScript(element) {
		var text = [];
		var self = arguments.callee;
		var el, els = element.childNodes;

		for (var i=0, iLen=els.length; i<iLen; i++) {
			el = els[i];
			if (el.nodeType == 1 && el.tagName && el.tagName.toLowerCase() != 'script' && el.tagName.toLowerCase() != 'noscript' && el.tagName.toLowerCase() != 'style') {
				text.push(self(el));
			} else if (el.nodeType == 3) {
				text.push(el.data);
			}
		}
		return text.join(' ').replace(/\s{2,}/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
	}

	function checkConditions(conditions) {
		for(var i in conditions) {
			if(conditions.hasOwnProperty(i)) {
				if(!conditions[i]) {
					return false;
				}
			}
		}
		return true;
	}
    
    var visibilityObj = null;
    var flxKeyword = '';
    var flxCustomKeyword = '';
    var flxKeywordHash = '';
    var flxCustomKeywordHash = '';
    var flxRewriteDocumentWrite = true;

	
	
	

	
	
	
	
	
    
    
    
    
    
    
    
    
    
    

    function timeout(numberOfSeconds, funcToExec) {
    	window.setTimeout(funcToExec, numberOfSeconds * 1000);
    	return false;
    }
	
	var tagsPlaced = {};
	var docFragment = document.createDocumentFragment();
	var df = document.createElement('div');
	df.style.display = 'none';
	df.id = 'iatDivInsert';
	docFragment.appendChild(df);
	var scriptsToPlace = [];
	
	var main = function() {
		obj.execute();

		if(document.body) {
			document.body.appendChild(docFragment);
		}

		var dwCodes = [];
		var dw = document.write;
		var dwl = document.writeln;
		document.write = document.writeln = function(html){dwCodes.push(html)};
		obj.placeScripts(scriptsToPlace);
		scriptsToPlace = [];
		obj.placeCode(dwCodes.join(''));
		obj.placeScripts(scriptsToPlace);

		if(flxRewriteDocumentWrite) {
			document.write = document.writeln = function(html){var scriptsToPlace = obj.placeCode(html); obj.placeScripts(scriptsToPlace);};
		}

		if(window.location.href.indexOf('iatDev=1') != -1) {
			document.cookie = "iatDev=1; path=/";
		} else if(window.location.href.indexOf('iatDev=0') != -1) {
			document.cookie = "iatDev=0; path=/";
		}
	};

	(function(i) {
	  var u = navigator.userAgent.toLowerCase();
	  var ie = !!window.ActiveXObject;
	  if (/webkit/.test(u) || (/mozilla/.test(u) && !/(compatible)/.test(u)) ||
				 (/opera/.test(u))) {
		// safari
		timeout = setTimeout(function(){
				if ( document.readyState == "loaded" || document.readyState == "interactive" || 
					document.readyState == "complete" ) {
					i();
				} else {
				  setTimeout(arguments.callee,10);
				}
			}, 10);
	  } else if (ie) {
		// IE
		(function (){ 
		  var tempNode = document.createElement('document:ready'); 
		  try {
			tempNode.doScroll('left'); 
			i(); 
			tempNode = null; 
		  } catch(e) { 
			setTimeout(arguments.callee, 0); 
		  } 
		})();
	  } else {
		window.onload = i;
	  }
	})(main);

	return obj;
})();