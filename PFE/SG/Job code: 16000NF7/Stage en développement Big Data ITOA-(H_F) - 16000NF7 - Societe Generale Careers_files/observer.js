//var genericObserver = Class.create();
function genericObserver() {
		this.listeners 	= new Object();
		this.timeouts	= new Object();
		this.stack 		= new Object();	
}
genericObserver.prototype = {

	initialize: function() {
		this.listeners 	= new Object();
		this.timeouts	= new Object();
		this.stack 		= new Object();
	},

	setEventsTimeout: function(timeout) {
		this.timeout = timeout;
	},

	addListener: function(ev, callback) {
		if (!this.listeners[ev]) {
			this.listeners[ev] = new Array();
		}

		if (callback.length == 0) {
			this.listeners[ev].push(callback);
		} else {
			for (var f = 0; f < callback.length; f ++) {
				this.listeners[ev].push(callback[f]);
			}
		}


		if (this.stack[ev] && (this.stack[ev].length > 0)) {
			// send stacked messages
			for (var f = 0; f < this.stack[ev].length; f++) {
				this.notify(ev, this.stack[ev][f].callback, this.stack[ev][f].evObj);
			}
			this.flushStacked(ev);
		}
	},

	flushStacked: function(ev) {
		if (this.stack[ev]) {
			while (this.stack[ev].pop()) {}
		}
	},

	addListenerTimeout: function(ev, callback) {
		if (!this.listeners[ev + '_timeout']) {
			this.listeners[ev + '_timeout'] = new Array();
		}
		this.listeners[ev+ '_timeout'].push(callback);
	},

	removeListener: function(ev, callback) {
		this.listeners[ev] = this.listeners[ev].without(callback);
	},

	notify: function(ev, callback, evObj, stack) {
		if (this.listeners[ev] && (this.listeners[ev].length > 0)) {
			for (var i = 0; i < this.listeners[ev].length; i++) {
				if (this.listeners[ev][i] != callback) {
					this.listeners[ev][i].call(this, ev, evObj || {});
				}
			}
		} else if (stack) {
			// events are stacked if there's no listener
			if (!this.stack[ev]) this.stack[ev] = new Array();
			var tmp = {
				ev: ev,
				callback: callback,
				evObj: evObj
			};
			this.stack[ev].push(tmp);

		}
		/*if (this.listeners[ev + '_timeout']) {
			window.clearTimeout(this.timeouts[ev]);
			this.timeouts[ev] = window.setTimeout(function(){this.notifyTimeouts(ev)}.bindAsEventListener(this), this.timeout);
		}*/
	},

	notifyTimeouts: function(ev) {
		for (var i = 0; i < this.listeners[ev + '_timeout'].length; i++) {
			this.listeners[ev + '_timeout'][i].call(this);
		}
	}
}