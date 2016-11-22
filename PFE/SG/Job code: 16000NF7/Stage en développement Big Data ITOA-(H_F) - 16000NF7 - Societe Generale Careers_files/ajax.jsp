

(function(){
	var vgnScripts = [];
	
	// Only load vquery if it isn't already defined
	if ( typeof window.vQuery === 'undefined' ) {
		vgnScripts.push("/vgn-ext-templating/scripts/vquery/vquery.min.js");
	}
	vgnScripts.push("/vgn-ext-templating/scripts/async/ajaxlib.js");
	
	var vgnScriptBlock = "";
	for ( var i=0; i < vgnScripts.length; ++i ) {
		var vgnScript = vgnScripts[i];
		vgnScriptBlock += "<script type='text/javascript' src='" + vgnScript + "'></script>";	
	}
	
	document.write(vgnScriptBlock);
})();

