/**
 * File used in 360-admin-ui and in 360-search-ui projects
 */

if (!Date.prototype.toISO8601Date) {
	Date.prototype.toISO8601Date = function() {
		function zeropad(number) {
			return "" + (number < 10 ? "0" + number : number);
		}

		return [this.getUTCFullYear(), zeropad(this.getMonth() + 1), zeropad(this.getDate())].join('-');
	};
}

if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function(obj,start){
      for (var i=(start||0), j=this.length; i<j; i++){
          if (this[i]==obj){
          	return i;
          }
      }
      return -1;
	};
}

if (!Array.prototype.lastIndexOf) {
	Array.prototype.lastIndexOf = function(obj,start){
      for (var i=this.length-1; i>=(start||0); i--){
          if (this[i]==obj){
          	return i;
          }
      }
      return -1;
	};
}

if (!Array.prototype.map)
{
  Array.prototype.map = function(fun /*, thisp */)
  {
    "use strict";

    if (this === void 0 || this === null)
      throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function")
      throw new TypeError();

    var res = new Array(len);
    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in t)
        res[i] = fun.call(thisp, t[i], i, t);
    }

    return res;
  };
}

if (!Array.prototype.filter) {
  Array.prototype.filter = function(fun) {
    "use strict";

    if (this === void 0 || this === null)
      throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function")
      throw new TypeError();

    var res = [];
    var thisp = arguments[1];
    for (var i = 0; i < len; i++) {
      if (i in t) {
        var val = t[i]; // in case fun mutates this
        if (fun.call(thisp, val, i, t))
          res.push(val);
      }
    }

    return res;
  };
}

if (!Array.prototype.max) {
  Array.prototype.max = function() {
    return Math.max.apply(Math, this);
  };
}

if (!Array.prototype.min) {
  Array.prototype.min = function() {
    return Math.min.apply(Math, this);
  };
}

String.prototype.reverse = function(){
	return this.split("").reverse().join("");
};

String.prototype.escapeHTML = function ()  {
return(
	this.replace(/&/g,'&amp;').
			 replace(/>/g,'&gt;').
			 replace(/</g,'&lt;').
			 replace(/"/g,'&quot;')
	);
};

String.prototype.startsWith = function(prefix) {
	return this.indexOf(prefix) === 0;
};

String.prototype.endsWith = function(suffix) {
	return this.match(suffix+"$") == suffix;
};

$(document).ready(function() {
  if ($('body').hasClass('ie7') && document.documentMode == "7") {
	$('body').addClass('ie8_compat_ie7');
  }
});
