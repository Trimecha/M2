/**
 * Mashup Ajax Client
 * @param _this is the DOM element where the event occured
 * @param options {
 * 		spinner: true/false
 * }
 * @returns {MashupAjaxClient}
 */
function MashupAjaxClient(_this, options) {
	this.options = $.extend({
		spinner: true
	}, options);

	this.$currentWidget = $(_this);
	if (this.$currentWidget.hasClass('wuid') == false) {
		this.$currentWidget = this._getParentWidget(this.$currentWidget);
	}
	if (this.$currentWidget.length == 0) {
		this.$currentWidget = $('body');
	}
	this.ajaxRequest = null;
	this.$widgets = [];
	this.url = new BuildUrl(window.location.search); // ?q=exalead
}

MashupAjaxClient.prototype.addWidget = function(wuid) {
	var $widgets = this._findWidget(wuid, this.$currentWidget);
	for (var i = 0; i < $widgets.length; i++) {
		if (this.$widgets.indexOf($widgets.get(i)) == -1) {
			this.$widgets.push($widgets.get(i));
		}
	}
	return this;
};

/**
 * Existing key will be replaced
 * @param key
 * @param values
 * @returns {MashupAjaxClient}
 */
MashupAjaxClient.prototype.addParameters = function(key, values) {
	this.url.addParameters(key, values, true);
	return this;
};

/**
 * Existing key will be replaced
 * @param key
 * @param value
 * @returns {MashupAjaxClient}
 */
MashupAjaxClient.prototype.addParameter = function(key, value) {
	this.url.addParameter(key, value, true);
	return this;
};

MashupAjaxClient.prototype.setQueryString = function(queryString) {
	this.url.setQueryString(queryString, true);
	return this;
};

MashupAjaxClient.prototype.update = function() {
	this.url.setUrl(window.location.pathname.replace(/page/, 'ajax') + "/" + this._getAllPath().join(','));

	var _this = this;
	this.ajaxRequest = $.ajax({
		type: 'GET',
		url: this.url.toString(),
		dataType: 'json',
		cache: false,
		success: function(data, textStatus) {
			if (data != null) { // request was aborted
				for (var i = 0; i < data.length - 1; i++) {
					if (data[i].html && data[i].cssId) {
						$('.' + data[i].cssId).replaceWith(data[i].html);
					}
				}
	//			$('#mainWrapper').append(data[data.length - 1].executeLater);
				$('#mainWrapper').append(data[data.length - 1].appendScript);
				if (_this.options.success && typeof(_this.options.success) == "function") {
					_this.options.success.call(this, data, textStatus);
				}
			}
			_this.remove();
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			if (_this.options.error && typeof(_this.options.error) == "function") {
				_this.options.error.call(this, textStatus, errorThrown);
			}
			_this.remove();
		}
	});
};

/**
 *
 */
MashupAjaxClient.prototype.remove = function() {
	this.ajaxRequest.abort();
	for (var i = 0; i < this.$widgets.length; i++) {
		var $widget = $(this.$widgets[i]);
		if (this.options.spinner === true) {
			$widget.hideSpinner();
		}
	}
};

/**
 * Returns a clean path that remove useless pathes
 * @returns
 */
MashupAjaxClient.prototype._getAllPath = function() {
	var paths = [];
	for (var i = 0; i < this.$widgets.length; i++) {
		var $widget = $(this.$widgets[i]);
		var path = this._findPath($widget);
		paths.push(path);

		if (this.options.spinner === true) {
			$widget.showSpinner({overlay: true});
		}
	}
	return paths;
};

/**
 * Returns the parent widget
 * @param $node
 * @returns
 */
MashupAjaxClient.prototype._getParentWidget = function($node) {
	if ($node.hasClass('wuid') == true) {
		return $node.parent().closest('.wuid');
	} else {
		return $node.closest('.wuid');
	}
}

/**
 * Returns the unique css id
 * @param cssClass
 * @returns
 */
MashupAjaxClient.prototype._getUCssId = function(cssClass) {
	var classes = cssClass.split(' ');
	for (var i = 0; i < classes.length; i++) {
		// dependency with UCssId.java
		var match = /[^_\ ]{8}_[0-9]+(?:_[0-9]+_[^\ ]+)?/gi.exec(classes[i]);
		if (match != null) {
			return match[0];
		}
	}
	return null;
};

/**
 * Recursive function
 * @param wuid
 * @param $node
 * @returns
 */
MashupAjaxClient.prototype._findWidget = function(wuid, $node) {
	var $widgets = $node.find('.wuid.' + wuid);
	if ($widgets.length > 0) {
		// wuid found in this node
		return $widgets;
	}

	var $parentNode = $node.parent();
	if ($parentNode.length == 0) {
		// no more nodes
		return $parentNode;
	}
	// not found in this node, trying from upper one
	return this._findWidget(wuid, $parentNode);
};

/**
 * Recursive function
 * @param $widget
 * @returns
 */
MashupAjaxClient.prototype._findPath = function($widget) {
	var $upperWidget = this._getParentWidget($widget);
	if ($upperWidget.length > 0) {
		var p = this._findPath($upperWidget);
		p += ':' + this._getUCssId($widget.attr('class'));
		return p;
	} else {
		return this._getUCssId($widget.attr('class'));
	}
};