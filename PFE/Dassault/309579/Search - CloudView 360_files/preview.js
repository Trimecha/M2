var preview = {
	$background: null,
	$IFrameWrapper: null,
	$IFrame: null,

	initBackground: function() {
		this.$background = $('<div id="preview_background"></div>');
		this.$background.appendTo($('body'));
		this.$background.bind('click', {_this: this}, this.close);
	},

	initIFrameWrapper: function(baseUrl) {
		this.$IFrameWrapper = $('<div id="preview_iframewrapper"></div>');
		this.$IFrameWrapper.appendTo($('body'));

		var $img = $('<img class="close" src="' + baseUrl + 'resources/fetch/images/closebox.png"></img>');
		$img.appendTo(this.$IFrameWrapper);
		$img.bind('click', {_this: this}, this.close);
	},

	initIFrame: function() {
		this.$IFrame = $('<iframe src=""></iframe>');
		this.$IFrame.appendTo(this.$IFrameWrapper);
	},

	refreshPosition: function(e) {
		var windowHeight = $(window).height();
		var windowWidth = $(window).width();

		var iframeHeight = windowHeight - 50;
		var iframeWidth = windowWidth - 50;

		if (iframeWidth > 1300) {
			iframeWidth = 1300;
		}

		var top = parseInt((windowHeight - iframeHeight) / 2);
		var left = parseInt((windowWidth - iframeWidth) / 2);

		e.data._this.$IFrameWrapper.css('top', top);
		e.data._this.$IFrameWrapper.css('left', left);
		e.data._this.$IFrameWrapper.css('width', iframeWidth);

		e.data._this.$IFrame.css('height', iframeHeight);
		e.data._this.$IFrame.css('width', iframeWidth);
	},

	open: function(_this, baseUrl) {
		if ($('body').hasClass('ie6')) {
			// Popup preview doesn't work with IE6
			return true;
		}
		$this = $(_this);

		if (this.$background == null) {
			this.initBackground();
		}

		if (this.$IFrameWrapper == null) {
			this.initIFrameWrapper(baseUrl);
		}

		if (this.$IFrame == null) {
			this.initIFrame();
		}

		// bind resize event
		$(window).bind('resize', {_this: this}, this.refreshPosition);
		$(window).trigger('resize');

		$('body').addClass('hideOverflow');
		this.$IFrame.attr('src', $this.attr('href'));

		// show lightbox
		this.$background.show();
		this.$IFrameWrapper.show();
		return false;
	},

	close: function(e) {
		// unbind resize event
		$(window).unbind('resize', e.data._this.refreshPosition);

		$('body').removeClass('hideOverflow');

		// hide lightbox
		e.data._this.$background.hide();
		e.data._this.$IFrameWrapper.hide();

		// reset parameters
		e.data._this.$IFrame.remove();
		e.data._this.$IFrame = null;
	}
}