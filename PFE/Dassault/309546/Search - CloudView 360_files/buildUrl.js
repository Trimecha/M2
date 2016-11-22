/*
 * The BuildUrl class is also present in the MashupBuilder.
 */


/**
 *
 * @param url
 * @param override {boolean} True if parameters in the queryString are not multi evaluated
 * @returns {BuildUrl}
 */
function BuildUrl(url) {
	this.params = {};
	this.setUrl(url, false);
}

/**
 *
 */
BuildUrl.prototype.getParameter = function(key) {
	return this.params[key];
};

/**
 *
 * @param key
 * @param values
 * @param override {boolean} True if values are not multi evaluated. Default is true
 * @returns {BuildUrl}
 */
BuildUrl.prototype.addParameters = function(key, values, override) {
	if (this.params[key] == null || override == true) {
		this.params[key] = values;
	} else {
		for (var i = 0; i < values.length; i++) {
			this.addParameter(key, value, override);
		}
	}
	return this;
};

/**
 *
 * @param key
 * @param value
 * @param override {boolean} True if values are not multi evaluated. Default is true
 * @returns {BuildUrl}
 */
BuildUrl.prototype.addParameter = function(key, value, override) {
	if (this.params[key] == null || override == true) {
		this.params[key] = [value];
	} else {
		if (this.params[key].indexOf(value) == -1) {
			this.params[key].push(value);
		} else {
			// value already in the array
		}
	}
	return this;
};

/**
 *
 * @param queryString
 * @param override {boolean} True if values are not multi evaluated. Default is true
 * @returns {BuildUrl}
 */
BuildUrl.prototype.setQueryString = function(queryString, override) {
	this._parseParams(queryString, override);
	return this;
};

/**
 *
 * @param url
 * @param override {boolean} True if values are not multi evaluated. Default is true
 * @returns {BuildUrl}
 */
BuildUrl.prototype.setUrl = function(url, override) {
	if (url != null && url != '') {
		var sp = url.split('?');
		this.path = sp[0];
		this._parseParams(sp[1], override);
	}
	return this;
};

/**
 * Returns the url with all its parameters
 */
BuildUrl.prototype.toString = function() {
	var url = (this.path || '') + '?';
	for (var key in this.params) {
		if (this.params.hasOwnProperty(key)) {
			for (var i = 0; i < this.params[key].length; i++) {
				url += key + '=' + encodeURIComponent(this.params[key][i]) + '&';
			}
		}
	}
	return url;
};

BuildUrl.prototype._parseParams = function(qstr, override) {
	if (qstr != null && qstr != '') {
		// make sure we only have the query string as IE6/IE7 sometimes
		// automatically transform relative path to absolute URL
		if (qstr.indexOf('?') != -1) {
			qstr = qstr.substr(qstr.indexOf('?') + 1);
		}
		var paramRegexp = new RegExp(/([^=&?]+)+=([^=&]+)?/g);
		var match = paramRegexp.exec(qstr);
		while (match != null) {
			this.addParameter(match[1], (match[2] == null ? '' : decodeURIComponent(match[2].replace(/\+/g, '%20'))), override);
			match = paramRegexp.exec(qstr);
		}
	}
};
