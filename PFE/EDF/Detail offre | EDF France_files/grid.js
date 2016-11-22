/*jshint bitwise:true, browser:true*/
/*global console:false */
(function(W, D) {
    'use strict';

    var sVersion = '1.2',
        aNu = W[W.Z.O].q,

        utils = {
            debug: function(data) {
                if ('undefined' != typeof(console) && 'undefined' != typeof(W.l10n) && W.l10n.jsDebug ? W.l10n.jsDebug : false) {
                    console.log(data);
                }
            },
            append: function(elt, sContent) {
                if ('string' == typeof(elt)) {
                    elt = D.getElementById(elt);
                    if (null !== elt) {
                        elt.innerHTML = sContent;
                    } else {
                        this.debug('element id ' + elt + ' not found');
                    }
                }
            }
        },
        call = {
            callbacks: {},
            aParams: {},
            init: function() {
                if ('undefined' == typeof(W.Z.A)) {
                    W.Z.A   = 'www.edf.fr';
                }
                this.run_setParam('a', W.location.href);
                this.run_setProfile('particulier');
                this.run_setKeywords({});
                this.run_setLgg('fr');



                var l = D.createElement('link');
                l.href = '//' + W.Z.A + '/ad/'+sVersion+'/grid.css';
                if (typeof(tc_vars) != 'undefined' && typeof(tc_vars.theme) != 'undefined' && tc_vars.theme == 'v2') {
                    l.href = '//' + W.Z.A + '/ad/'+sVersion+'/grid-v2.css';
                }
                l.type = 'text/css';
                l.rel = 'stylesheet';
                l.media = 'all';

                var s = D.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(l, s);

                if (W.addEventListener) {
                    W.addEventListener('message', this.receive, false);
                }
                else {
                    W.attachEvent("onmessage", this.receive);
                }

                this.run();
            },

            run: function() {
                while (aNu.length > 0) {
                    var aParams, sFunction;
                    try {
                        aParams = Array.prototype.slice.call(aNu.shift());
                        sFunction = 'run_' + aParams.shift();

                        if ('function' !== typeof(call[sFunction])) {
                            throw Error(sFunction + ' not implemented');
                        }
                    } catch (error) {
                        utils.debug(error);
                    }
                    call[sFunction].apply(this, aParams);
                }
            },

            run_setParam: function(name, value) {
                this.aParams[name] = value;
            },

            run_setProfile: function(value) {
                this.run_setParam('f', value);
            },

            run_setLgg: function(value) {
                this.run_setParam('lgg', value);
            },

            run_setGrid: function(value) {
                this.run_setParam('g', value);
            },

            run_setTracking: function(value) {
                this.run_setParam('c', value);
            },

            run_setKeywords: function(value) {
                if ('object' != typeof value) {
                    value = [value];
                }
                this.run_setParam('k', value);
            },

            run_setKey: function(key) {
                this.run_setParam('y', key);
            },

            run_hit: function(event, elt, callback) {
                utils.debug('hit');
                if (1 == this.aParams.c) {
                    if ('function' !== typeof(callback)) {
                        callback = function(data) {
                            utils.debug(data);
                            if ('string' === typeof(elt)) {
                                utils.append(
                                    elt,
                                    'profile de la page : ' + data.profile + ' IP du hit :' + data.ip + ' City:' + data.city
                                );
                            }
                        };
                    }

                    if ('undefined' === typeof event || null === event) {
                        event = 'load';
                    }
                    this.iframe('h', {
                        't': event
                    }, callback);
                } else {
                    utils.debug('skip by cookie preferences');
                }
            },

            run_get: function(elt, callback) {
                utils.debug('get');
                if ('function' !== typeof(callback)) {
                    callback = function(data) {
                        utils.debug(data);
                        utils.append(elt, data.html);
                    };
                }
                var _getPlace = function() {
                    /* returns 'tc_vars.S1/tc_vars.S2/tc_vars.S3' */
                    if (typeof(tc_vars) !== 'undefined' ) {
                        var a = [];
                        if (tc_vars.S1) { a.push(tc_vars.S1); }
                        if (tc_vars.S2) { a.push(tc_vars.S2); }
                        if (tc_vars.S3) { a.push(tc_vars.S3); }
                        return a.join('/');
                    } else {
                        return '';
                    }
                },
                _getCible = function() {
                    if (typeof(tc_vars) !== 'undefined' ) {
                        return tc_vars.cible;
                    } else {
                        return '';
                    }
                },
                _getKeywords = function() {
                    if (typeof(tc_vars) !== 'undefined' ) {
                        return tc_vars.cible;
                    } else {
                        return '';
                    }
                },
                _getEltData = function(el, sDataName) {
                    var reDataPairs = /([^=]+)=([^;]+);?/g,
                        sData = el.getAttribute(sDataName);
                    if (!sData) {
                        return null;
                    }

                    var oData = {},
                        aParts = reDataPairs.exec(sData);

                    while(aParts) {
                        oData[decodeURIComponent(aParts[1])] = decodeURIComponent(aParts[2]);
                        aParts = reDataPairs.exec(sData);
                    }

                    return oData;
                },
                overRideCallback = function(data) {
                    callback(data);
                    if ('undefined' != typeof(jQuery)) {
                        var $ = jQuery, $push_perso = $('#'+elt+' div.edf-custom-content-row .push a');
                        $push_perso.on('mouseenter focus', function(){
                            $(this).parents('.push').addClass('animateThis');
                        });
                        $push_perso.on('mouseleave blur', function(){
                            $(this).parents('.push').removeClass('animateThis');
                        });
                    }

                    var aPushLinks = document.querySelectorAll('.grid .push a'),
                       oTagClic = {
                            Event_Type      : 'action',
                            event_category  : 'contextual',
                            event_n1        : 'clic',
                            event_n2        : _getPlace(),
                            event_n3        : '',
                            event_n4        : _getCible(),                           
                            event_n5        : 'contextual',
                            event_n6        : _getKeywords(), 
                            event_n7        : '',
                            event_value     : data.value || '',
                            html_id         : 'personalization-wrapper',
                            Event           : 'clic',
                            cible_nav       : '',
                            keywords_nav    : _getKeywords()
                        }, aTagDisp = [];

                    for (var i = 0, len = aPushLinks.length; i < len; i++) {
                        var pushLink = aPushLinks[i];
                        /* Affichage */
                        var oDataDisp = _getEltData(pushLink, 'data-display-tag-perso'), 
                            sProp,
                            oTagDisp = {
                                Event_Type      : 'action',
                                event_category  : 'contextual',
                                event_n1        : 'clic',
                                event_n2        : _getPlace(),
                                event_n3        : '',
                                event_n4        : _getCible(),                           
                                event_n5        : 'contextual',
                                event_n6        : _getKeywords(), 
                                event_n7        : '',
                                event_value     : data.value || '',
                                html_id         : 'personalization-wrapper',
                                Event           : 'page',
                                cible_nav       : '',
                                keywords_nav    : _getKeywords()
                            };
                        aTagDisp[i] = oTagDisp;
                        for (sProp in oDataDisp) {
                            if (aTagDisp[i].hasOwnProperty(sProp)) {
                                aTagDisp[i][sProp] = oDataDisp[sProp];
                            }
                            if (aTagDisp[i].hasOwnProperty('event_' + sProp)) {
                                aTagDisp[i]['event_' + sProp] = oDataDisp[sProp];
                            }
                        }
                        
                        /* Click */
                        pushLink.addEventListener('click', function(oEvt) {
                            var oDataClic = _getEltData(this, 'data-tag-perso');
                            for (sProp in oDataClic) {
                                if (oTagClic.hasOwnProperty(sProp)) {
                                    oTagClic[sProp] = oDataClic[sProp];
                                }
                                if (oTagClic.hasOwnProperty('event_' + sProp)) {
                                    oTagClic['event_' + sProp] = oDataClic[sProp];
                                }
                            }
                            
                            if (typeof(tc_events_3) != 'undefined') {
                                window.tc_events_3(window, '3', oTagClic);
                            }
                        });
                    }

                    setTimeout(function() {
                        for (var i = 0, len = aTagDisp.length; i < len; i++) {
                            if (typeof(tc_events_3) != 'undefined') {
                                window.tc_events_3(window, '3', aTagDisp[i]);                                
                            }
                        }
                    }, 300);
                    
                };
                this.iframe('g', {}, overRideCallback);
            },

            iframe: function(action, params, callback) {
                var time = new Date().getTime(),
                    i = D.createElement('iframe');
                var that = this;

                params.cid = action + time;
                this.callbacks[params.cid] = callback;

                i.src = this.buildUrl(action, params);
                i.width = 1;
                i.height = 1;
                i.className = 'rzr';
                i.id = 'rzr' + params.cid;

                if (D.getElementsByTagName('body')[0]) {
                    D.getElementsByTagName('body')[0].appendChild(i);
                }
                window.setTimeout(function() {
                    if ('function' == typeof(that.closeCall)) {
                        that.closeCall(params.cid, true);
                    }
                }, 3000);
            },

            buildUrl: function(action, params) {
                for (var i in this.aParams) {
                    if (this.aParams.hasOwnProperty(i)) {
                        params[i] = this.aParams[i];
                    }
                }

                var sUrl = '//' + W.Z.D + '/' + action + '?',
                    aParamTmp = [];

                for (i in params) {
                    if (params.hasOwnProperty(i)) {
                        switch (typeof params[i]) {
                            case 'object':
                                for (var j in params[i]) {
                                    if (params[i].hasOwnProperty(j)) {
                                        aParamTmp.push(i + '[]=' + encodeURIComponent(params[i][j]));
                                    }
                                }
                                break;
                            case 'undefined':
                                break;
                            default:
                                aParamTmp.push(i + '=' + encodeURIComponent(params[i]));
                                break;
                        }
                    }
                }

                sUrl += aParamTmp.join('&');

                return sUrl;
            },

            receive: function(event) {
                try {
                    if ('undefined' == typeof(event.data.cid)) {
                        throw Error('UNDEFINED CID OF EVENT');
                    }
                    if ('g' != event.data.cid[0]) {
                        throw Error('NOT A GET REQUEST TO AD SERVEUR');
                    }
                    // --- check origin
                    var regex = new RegExp('https?://' + window.Z.D);
                    if (!event.origin.match(regex)) {
                        throw Error('Invalid origin');
                    }

                    if ('undefined' === typeof(call.callbacks[event.data.cid])) {
                        for (var i in call.callbacks) {
                            if (call.callbacks.hasOwnProperty(i)) {
                                if (i[0] == event.data.cid[0]) {
                                    event.data.cid = i;
                                }
                            }
                        }
                    }

                    if ('undefined' === typeof(call.callbacks[event.data.cid])) {
                        throw Error('cid not found');
                    }

                    var oCallback   = call.closeCall(event.data.cid);
                    // --- callback
                    if ("function" == typeof(oCallback)) {
                        oCallback(event.data.data);
                    }
                } catch (error) {
                    utils.debug(error);
                }
            },

            closeCall: function (cid, bTimeout) {
                var oCallback = "";
                if (call.callbacks.hasOwnProperty(cid)) {
                    if (bTimeout) {
                        utils.debug('Timeout ' + cid);
                    }
                    oCallback   = call.callbacks[cid];
                    delete call.callbacks[cid];

                    // --- remove iframe
                    var iframe = D.getElementById('rzr' + cid);
                    if (typeof(iframe) != 'undefined') {
                        D.getElementsByTagName('body')[0].removeChild(iframe);
                    }

                }
                return oCallback;
            }
        };

    aNu.push = function() {
        var args = Array.prototype.slice.call(arguments);
        this[this.length] = args[0];
        call.run();
    };

    call.init();
})(window, document);
