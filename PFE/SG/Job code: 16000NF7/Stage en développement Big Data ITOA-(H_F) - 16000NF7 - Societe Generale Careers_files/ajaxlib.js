
vQuery(document).ready( function() {
	// Search for elements with an ajax URL and load asynchronously
	vQuery("div[vgnextasyncurl]").each( function() {
		var url = vQuery(this).attr("vgnextasyncurl");
		var item = vQuery(this);
		vQuery.get(url, function(data) {
			// remove the loading image placeholder
			item.children("img").remove();
			// add the fragment data
			item.append(data);
		});
	});
});
