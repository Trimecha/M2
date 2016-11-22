/**
 * 
 * Provides JS API to the vPlayer
 * 
 */
 
var VVPlayerAdReplayPolicy = {
	PLAYAD: 'PLAYAD',
	NOPLAYAD: 'NOPLAYAD'
}; 


/**
 * 
 * Defines the valid states of the playback
 * The playerInstance.model.playState will have one of this states
 * 
 */ 
 
var VVPlayerPlaybackState = {
	PLAYBACK_PLAYING:	'playing',
	PLAYBACK_PAUSED:	'paused'
};

/**
 * 
 * Defines the valid states of the stream
 * The playerInstance.model.streamState will have one of this states
 * 
 */

var VVPlayerStreamState = {
	STREAM_CONNECTING:	'connecting',
	STREAM_READY:		'ready',
	STREAM_CLOSING:		'closing',
	STREAM_CLOSED:		'closed',
	STREAM_ERROR:		'error'
};

/**
 * 
 * Defines the valid states of the Flash video buffer
 * The playerInstance.model.bufferState will have one of this states 
 * 
 */

var VVPlayerBufferState	= {
	BUFFER_OK:		'bufferOk',
	BUFFER_EMPTY:	'bufferEmpty'
}; 
 
/**
 * 
 * Defines events dispatched by VPlayer
 * Any observer object can register itself to the player's 
 * event dispatcher and listen for these events.
 * Events dispatched from the playerProxy instance have the following fields:
 * 	type:		a VVPlayerEvent representing the type of event dispatched
 * 	target:		the playerProxy instance that originated the event
 * 	data: 		an generic object containing the changed data for current event  
 * 
 */ 
 
var VVPlayerEvent = {
	
	/*
	 * Dispatched when timehead of the media changes
	 * Updates playerInstance.model.timeHead with the new value
	 * of the time in sec.msec format 
	 * 
	 */
	 
	EVENT_TIMEHEAD: 	'VVPlayer_timeHead',
	
	/*
	 * Dispatched when volume of the media changes 
	 * Updates playerInstance.model.volume with the new value
	 * of the volume (0-100) 
	 * 
	 */
	 
	EVENT_VOLUME: 		'VVPlayer_volume',
	
	/*
	 * Dispatched when sound is muted/unmuted in the player
	 * Updates the playerInstance.model.mute with a 
	 * boolean value representing the mute state
	 * 
	 */
	
	EVENT_MUTE: 		'VVPlayer_mute',
	
	/*
	 * 
	 * Dispatched when playstate changes in the player
	 * Updates the playerInstance.model.playState with a
	 * value defined in VVPlayerPlaybackState
	 * 
	 */
	
	EVENT_PLAYSTATE: 	'VVPlayer_playState',
	
	
	/*
	 * Dispatched when master stream state changes in the player
	 * Updates the playerInstance.model.streamState with a 
	 * value defined in VVPlayerStreamState
	 * 
	 */
	 
	EVENT_STREAMSTATE:	'VVPlayer_streamState',
	
	/*
	 * Dispatched when buffer zone changes in the player
	 * Updates the playerInstance.model.buffer with a new
	 * value of type VVPlayerBufferValue
	 * 
	 */
	
	EVENT_BUFFER: 		'VVPlayer_buffer',
	
	/*
	 * Dispatched when buffer state changes in the player
	 * Updates the playerInstance.model.bufferState with
	 * a value defined in VVPlayerBufferState
	 * 
	 */
	
	EVENT_BUFFERSTATE: 'VVPlayer_bufferState',
	
	/*
	 * Dispatched when a Vtag url is parsed in the player
	 * Updates the playerInstance.model.vtag with a new 
	 * value of type VVPlayerVtagValue
	 * 
	 */
	
	EVENT_VTAG: 		'VVPlayer_vtag',
	
	/*
	 * Dispatched when a new media represented by an XML 
	 * file is loaded and parsed in the player
	 * Updates the playerInstance.model.media with a new 
	 * value of type VVPlayerMediaValue
	 * 
	 */
	
	EVENT_MEDIA: 		'VVPlayer_media',
	
	/*
	 * Dispatched when an effect is started in the player
	 * Updates the playerInstance.model.effectStart with
	 * the ID of the currently started effect.   
	 * 
	 */
	
	EVENT_EFFECT_START: 'VVPlayer_effectStart',

	/*
	 * Dispatched when an effect is finished in the player
	 * Updates the playerInstance.model.effectEnd with
	 * the ID of the currently finished effect.   
	 * 
	 */	
	
	EVENT_EFFECT_END: 	'VVPlayer_effectEnd'
	
};

/*
 * 
 * The values of the events corresponding to tha VPlayer internal implementation
 * VPlayer event values should be syncronized with JavaScript event values one day
 * and this object removed. 
 * 
 */

var VVPlayerFlashEvent = {
	
	EVENT_TIMEHEAD: 	'timehead', 		// OK
	EVENT_VOLUME: 		'volumeChange',		// OK
	EVENT_MUTE: 		'volumeMute',		// OK		
	EVENT_PLAYSTATE: 	'play',				// OK
	EVENT_STREAMSTATE: 	'streamState',		// OK
	EVENT_BUFFER: 		'streamDownload',	// OK 
	EVENT_BUFFERSTATE:	'bufferState',		// OK
	EVENT_VTAG:			'vtagChange',		// OK
	EVENT_MEDIA:		'mediaChange',		// OK
	EVENT_EFFECT_START:	'effectStart',		// TODO
	EVENT_EFFECT_END:	'effectEnd'			// TODO
	
};

/*
 * 
 * Returns the corresponding VVPlayerEvent for a given VVPlayerFlashEvent event
 * 
 */

VVPlayerFlashEvent.toJavaScriptEvent = function(evt) {

	for (var evtName in this) {
		if (this[evtName] == evt) {
			return VVPlayerEvent[evtName];
		}
	}
	
	return null;
	
}




/**
 * 
 * Value object representing the buffered zone in the player
 * Contains the following fields:
 * 	from: 	is the beginning of the buffered zone (0 <= from < length)  
 * 	to: 	is the end of the buffered zone (from < to <= length)
 *  
 */

function VVPlayerBufferValue(from, to) {

	this.from = from || 0;
	this.to = to || 0;	

}

/**
 * 
 * Value object representing the VTag selection in the player
 * as parsed from the url
 * Contains the following fields:
 * 	start:	is the start of the VTag selection (0 <= start < length)
 * 	end:		is the end of the VTag selection (start < end <= length)
 * 	docKey:	is the docKey of the master stream for wich the VTag refers to
 * 
 */

function VVPlayerVtagValue(start, end, docKey) {
	
	this.start = start != undefined ? start : null;
	this.end = end != undefined ? end : null;
	this.docKey = docKey || null;
	
}

/**
 * 
 * Value object representing the full texturestripe 
 * Contains the following fields:
 * 	skip:
 * 	height:
 * 	width:
 * 	url:	a string representing the url of the image 
 * 
 */

function VVPlayerTsFullValue(skip, height, width, url) {
	
	this.skip =	skip || 0; 
	this.height = height || 0;
	this.width = width || 0;
	this.url = url || null;
		
}

/**
 * 
 * Value object representing the full ORIGINAL texturestripe 
 * Contains the following fields:
 * 	skip:
 * 	height:
 * 	width:
 * 	url:	a string representing the url of the image 
 * 
 */

function VVPlayerTsOriginalValue(url) {
	
//	this.skip =	skip || 0; 
//	this.height = height || 0;
//	this.width = width || 0;
	this.url = url || null;
		
}

/**
 * 
 * Value object representing the sliced texturestripe 
 * Contains the following fields:
 * 	skip:
 * 	height:
 * 	width:
 * 	url:	an array representing the urls of the sliced images 
 * 
 */

function VVPlayerTsSlicedValue(skip, height, width, url) {
	
	this.skip =	skip || 0; 
	this.height = height || 0;
	this.width = width || 0;
	this.url = url || new Array();
	
}

/**
 * 
 * Value object representing an effect applied from the XML
 * 
 */

function VVPlayerEffectValue() {
	// TODO
}

/**
 * 
 * Value object representing the currently loaded media in the player (XML file)
 * Contains the following fields:
 * 	xmlUrl:			the url of the media file (XML file)
 * 	duration:		the duration of the master stream from the media
 * 	frameRate:		the framerate of the master stream from the media
 * 	snapshotUrl:	the url of the snapshot image for the media
 * 	tsFull:			an object of type VVPlayerTsFullValue representing the value of the full texturestripe 
 * 	tsSliced:		an object of type VVPlayerTsSlicedValue representing the value of the sliced texturestripe
 * 	effects:		an array of VVPlayerEffectValue objects representing effects applied in the media
 * 
 */	

function VVPlayerMediaValue(xmlUrl, docKey, duration, frameRate, snapshotUrl, tsFull, tsOriginal, tsSliced, effects) {
	
	this.xmlUrl = xmlUrl || null;
	this.docKey = docKey || null;		
	this.duration = duration || 0;
	this.frameRate = frameRate || 0;
	this.snapshotUrl = snapshotUrl || null;
	this.tsFull = tsFull || new VVPlayerTsFullValue();
	this.tsOriginal = tsOriginal || new VVPlayerTsOriginalValue();
	this.tsSliced = tsSliced ||  new VVPlayerTsSlicedValue(); 
	this.effects = effects || new Array();
	
}

/**
 * 
 * Value object representing the model of the VPlayer
 * Contains the following fields:
 * 	timeHead:		the timehead of the master stream
 * 	volume:			the volume of the media
 * 	mute:			the mute state of the media (true|false)
 * 	playState:		the playstate of the master stream having a value from VVPlayerPlaybackState
 * 	streamState:	the state of the master stream having a value from  VVPlayerStreamState
 * 	buffer:			the buffer value of the master stream (type VVPlayerBufferValue)
 * 	bufferState:	the buffer state of the master stream having a value from VVPlayerBufferState
 * 	vtag:			the VTag value parsed from the URL (type VVPlayerVtagValue)
 * 	media:			the media value (type VVPlayerMediaValue)
 * 	effectStart:	the ID of the last applied effect
 * 	effectEnd:		the ID of the last finished effect
 * 
 */

function VVPlayerModel() {
	
	this.timeHead = 0;	
	this.volume = 0;
	this.mute = false;
	this.playState = VVPlayerPlaybackState.PLAYBACK_PAUSED;
	this.streamState = VVPlayerStreamState.STREAM_CLOSED;
	this.buffer = new VVPlayerBufferValue();
	this.bufferState = VVPlayerBufferState.BUFFER_EMPTY;
	this.vtag = new VVPlayerVtagValue();
	this.media = new VVPlayerMediaValue();
	this.effectStart = null;
	this.effectEnd = null;

};

function playerProxy() {
	
	if (typeof(__vvplayer_idmap) == 'undefined') {
		__vvplayer_idmap = new Object();
	}	
	
	/*
	 * the object/embed object in the html dom 
	 */
	 
	this.playerObj = null;
	
	/*
	 * initialization options for the player
	 */
	
	this.options = new Object();
	
	/*
	 * state of the player
	 */
	
	this.model = new VVPlayerModel();	
		
}

playerProxy.prototype.setOptions = function(options) {

		var timestamp = new Date().getTime();

		this.options = {
			/**
			 * id of any element in the html page where the player will be inserted
			 * if null player is instantaded with document.write
			 */			
			showInElement: 		null,
			
			/**
			 * instance of type genericObserver which receives all state change notifications from the vPlayer
			 */
			observer:			null,

			/**
			 * the id of the flash object in the html dom
			 */
			flashObjID: 		'vvplayer' + timestamp,

			/**
			 * decides if playback is started automatically after loading the stream
			 */
			autoStart:			'on',

			/**
			 * decides if player module is compact or normal
			 */
			ui: 		'normal',
			
			/**
			 * mp4 url for HTML5 fallback embed code
			 */
			mp4Url: 		null,
			/**
			 * thumbnail url for HTML5 fallback embed code
			 */
			thumbnail: 		null,
			
			/**
			 * start-up volume of the media
			 */
			volume:				50,
			
			/**
			 * decides if volume can be changed from control
			 */
			volumeLock:			'off',
			
			/**
			 * width and height if the vPlayer
			 */
			width:				400,
			height:				300,
			
			/**
			 * if off then player does not talk to the outside world (neither api or update events) 
			 */
			callBackEnabled: 	'on',

			/**
			 * the url of the player (no url encode)
			 */
			remotePath: 		'${remotePath}',
			
			/**
			 * decides if stream should be loaded if playback doesn't start automaticaly, if not snapshot is displayed
			 */
			loadStream: 		'on',
			
			/**
			 * an array containing coma separated values of skin files to be used by the player
			 */
			skins:				'',

			/**
			 * the url for costum skin location (skins that are not included beetven the vPlayers default skins)
			 */
			skinUrlBase:		'',
			
			/**
			 * parameters to be passed to the skin
			 */
			skinParams:			'',
			
			/**
			 * if true uses player compiled with debug component included
			 */
			useDebug:			0,

			/**
			* url of the xml file that describes the media to be played			
			*/			
			xmlUrl:			'',
			
			/**
			* wmode (opaque, transparent, window)			
			*/						
			wmode:			'transparent',
			
			/**
			* url of the xml file that describes the Bumpers (Solidworks)			
			*/						
			bumpersUrl:			'',
			
			/**
			* url of the xml file that describes the SiteCatalyst Config (Solidworks)			
			*/						
			siteCatalystConfigUrl:			'',

			/**
			* SocGen Player parameters
			*/
			infoButton:			'',
			saveButton:			'',
			socialButton:		'',
			hideEmbedCode:		'',
			wemdata:			'',
			accessibility:		'',
			
			/**
			* New Core Player parameter to switch locale
			*/
			locale:				'',
			
			/**
			*url of the VAnalytics server
			*/
			analyticsUrl: null,
			analitycsUrl: null,
			
			
			/**
			*the page that receives data posted by share form
			*/
			
			sharePageUrl: '',

			/**
			* Related Videos parameter
			*/
			
			relatedVideoDockeys: 		null,
						
			/**
			* DART integration parameters
			*/
			
			adUrl: 		'',
			adType:		'',
			repeatMode:	'off',
			autoJump: 	'on',
			vTagOnly:	'off',
			backLink:	'',
			fsUrl:		'',
			fsMode:		'no',
			adPolicy:	VVPlayerAdReplayPolicy.PLAYAD
		
		}

		for (property in options) {
   			this.options[property] = options[property];
  		}


}

playerProxy.prototype.init = function(options) {

		this.setOptions(options);
		this.options.analitycsUrl = this.options.analyticsUrl;
		this.options.observer = (this.options.observer != null) ? this.options.observer : new genericObserver();
		this.options.volume = Math.min(100, Math.max(this.options.volume, 0));
		this.model.playState 	= this.options.autoStart == 'on' ? VVPlayerPlaybackState.PLAYBACK_PLAYING : VVPlayerPlaybackState.PLAYBACK_PAUSED;
		this.model.volume		= this.options.volume ? this.options.volume : this.model.volume;
		
		__vvplayer_idmap[this.options.flashObjID] = this;

		var player = this.getPlayer(this.options, this.getParamsUrl);

		if (this.options.showInElement == null) {
			player.write(document);
		} else {
			document.getElementById(this.options.showInElement).innerHTML = player.toString();
		}

		this.playerObj = (navigator.appName.indexOf("Microsoft") != -1) ? window[this.options.flashObjID] : document[this.options.flashObjID];
		if(typeof(this.playerObj) == 'undefined') {
			this.playerObj = document.getElementById(this.options.flashObjID);
		}
		
}

	/**
	 * returns the FlashTag object that should be inserted in dom
	 */
	 
playerProxy.prototype.getPlayer = function(options, urlMap) {
		var mp4Url = null;
		var thumbnail = null;
		var relatedVideoDockeys = null;
		var xmlUrl = options.xmlUrl;
		var origXmlUrl = options.xmlUrl;
		
		//eg:
		//http://tribeca.vidavee.com/publish/vClientXML.view?d='+dockey
		//http://tribeca.vidavee.com/publish/meta/E74A9803708C41B04FFB4745DCBE3A80.xml
		var metaUrl = unescape(this.options.xmlUrl);
		metaUrl = metaUrl.replace("vClientXML.view", "meta/");
		metaUrl = metaUrl.replace("?d=", "");
		metaUrl = metaUrl.replace("?dockey=", "");
		metaUrl += ".xml";
		
		xmlUrl = metaUrl;
		options.xmlUrl = metaUrl;
		
		if(options.mp4Url != null) {
			mp4Url = options.mp4Url;
		}
		if(options.thumbnail != null) {
			thumbnail = options.thumbnail;
		}
		
		if(options.relatedVideoDockeys != null) {
			relatedVideoDockeys = options.relatedVideoDockeys;
			origXmlUrl = escape(unescape(origXmlUrl) + '&relatedVideoDockeys=' + relatedVideoDockeys);
			options.xmlUrl = origXmlUrl;
			xmlUrl = origXmlUrl;
		}
		
		var player = new FlashTag(options.remotePath + "vFlasher"+ ((options.useDebug) ? '_debug' : '') +".swf?" + urlMap(options) , options.width, options.height, '8,0,0,0', xmlUrl , mp4Url, thumbnail);

		player.setAllowScriptAccess('always');
		player.setSwliveconnect('true');
		player.setAllowFullScreen('true');
		//player.setWmode('opaque');

		player.setId(options.flashObjID);		
		
		return player;
}
	
	/**
	 * private function returns list of url params out of current options
	 */
	
playerProxy.prototype.getParamsUrl = function(options) {
		
		var result = '';
		var paramsMap = [
			['autoStart',		'autoplay'],
			['ui',			'ui'],
			['wmode',			'wmode'],
			['volume',			'p4'],
			['volumeLock',		'p5'],
			['callBackEnabled',	'p7'],
			['loadStream',		'loadStream'],
			['xmlUrl',			'p15'],
			['skins',			'p16'],
			['skinUrlBase',		'p17'],
			['skinParams',		'p18'],
			['flashObjID',		'p19'],
			['analyticsUrl',	'p22'],
			['sharePageUrl',	'p25'],
			['relatedVideoDockeys',			'relatedVideoDockeys'],
			['bumpersUrl',		'bumpersUrl'],
			['siteCatalystConfigUrl',		'siteCatalystConfigUrl'],
			['infoButton',		'infoButton'],
			['saveButton',		'saveButton'],
			['socialButton',		'socialButton'],
			['hideEmbedCode',		'hideEmbedCode'],
			['accessibility',		'accessibility'],
			['locale',		'locale'],
			['wemdata',		'wemdata'],
			['adUrl',			'p26'],
			['adType',			'p27'],
			['repeatMode',		'p28'],
			['autoJump', 		'p29'],
			['vTagOnly',		'p31'],
			['backLink',		'p32'],
			['fsUrl',			'p33'],
			['fsMode',			'p34'],
			['adPolicy',		'p35']
		];

		for (var param in options) {
			var index = -1;
			for (i = 0; i < paramsMap.length; i++) {
				if (param == paramsMap[i][0]) {
					index = i
					break;
				}
			}
			if (index >= 0 && options[param]) {
				result += paramsMap[index][1] + '=' + options[param] + '&';
			}
		}
		
		return result.substr(0, result.length-1);
		
}

	/**
	 * function called from the player when it's state is changed
	 * infoObj parameter is an object which contains the various state values
	 * infoObj.type defins the type of the change
	 */
playerProxy.prototype.update = function(infoObj) {
	
		infoObj.target = this;
		var evtObj = {
			type: 	VVPlayerFlashEvent.toJavaScriptEvent(infoObj.type),
			target: this		
		}
		
		try {
			switch (infoObj.type) {
				
				// only for compatibility, avoid listening to this event, use VVPlayerEvent.EVENT_STREAMSTATE instead				
				case 'mediaLoad':
					this.options.observer.notify('onFlashMediaLoad', null, infoObj, true);
				break;				
				// only for compatibility, avoid listening to this event, use VVPlayerEvent.EVENT_STREAMSTATE instead				
				case 'mediaUnload':
					this.options.observer.notify('onFlashMediaUnload', null, infoObj);
				break;				
				// TODO
				case 'seek':
					this.options.observer.notify('onFlashSeek', null, infoObj);
				break;								
				// compatibility end				
				
				// only for compatibility, avoid listening to this event, use VVPlayerEvent.EVENT_TIMEHEAD instead
				case 'timehead': 
					this.options.observer.notify('onFlashUpdateTimeHead', null, infoObj);					
				// compatibility end					
				case VVPlayerFlashEvent.EVENT_TIMEHEAD:
					evtObj.data = this.model.timeHead = infoObj.value;
					this.options.observer.notify(VVPlayerEvent.EVENT_TIMEHEAD, null, evtObj);
				break;				

				// only for compatibility, avoid listening to this event, use VVPlayerEvent.EVENT_VOLUME instead
				case 'volumeChange': 
					this.options.observer.notify('onFlashVolumeChange', null, infoObj);
				// compatibility end
				case VVPlayerFlashEvent.EVENT_VOLUME:
					evtObj.data = this.model.volume = infoObj.value;
					this.options.observer.notify(VVPlayerEvent.EVENT_VOLUME, null, evtObj);
				break;
				
				case VVPlayerFlashEvent.EVENT_MUTE:
					evtObj.data = this.model.mute = infoObj.value;
					this.options.observer.notify(VVPlayerEvent.EVENT_MUTE, null, evtObj);					
				break;	

				// only for compatibility, avoid listening to this event, use VVPlayerEvent.EVENT_PLAYSTATE instead
				case 'play': 
					this.options.observer.notify('onFlashPlay', null, infoObj, true);
				// compatibility end					
				case VVPlayerFlashEvent.EVENT_PLAYSTATE:
					evtObj.data = this.model.playState = infoObj.value ? VVPlayerPlaybackState.PLAYBACK_PLAYING : VVPlayerPlaybackState.PLAYBACK_PAUSED;
					this.options.observer.notify(VVPlayerEvent.EVENT_PLAYSTATE, null, evtObj);					
				break;
				
				case VVPlayerFlashEvent.EVENT_STREAMSTATE:
					evtObj.data = this.model.streamState = infoObj.value;
					this.options.observer.notify(VVPlayerEvent.EVENT_STREAMSTATE, null, evtObj);						
				break;				
				
				case VVPlayerFlashEvent.EVENT_BUFFER:
					evtObj.data = this.model.buffer = new VVPlayerBufferValue(infoObj.value.from, infoObj.value.to);
					this.options.observer.notify(VVPlayerEvent.EVENT_BUFFER, null, evtObj);					
				break;
				
				case VVPlayerFlashEvent.EVENT_BUFFERSTATE:
					evtObj.data = this.model.bufferState = infoObj.value;
					this.options.observer.notify(VVPlayerEvent.EVENT_BUFFERSTATE, null, evtObj);
				break;
				
				case VVPlayerFlashEvent.EVENT_VTAG:
					evtObj.data = this.model.vtag = new VVPlayerVtagValue(infoObj.start, infoObj.end, infoObj.docKey);
					this.options.observer.notify(VVPlayerEvent.EVENT_VTAG, null, evtObj);
				break;						
				
				case VVPlayerFlashEvent.EVENT_MEDIA:
					evtObj.data = this.model.media = new VVPlayerMediaValue(infoObj.xmlUrl, infoObj.docKey, infoObj.duration, 
															infoObj.frameRate, infoObj.snapshotUrl, 
															new VVPlayerTsFullValue(infoObj.tsFull.skip, infoObj.tsFull.height,
															infoObj.tsFull.width, infoObj.tsFull.url),
															new VVPlayerTsOriginalValue(infoObj.tsOriginal.url),
															new VVPlayerTsSlicedValue(infoObj.tsSliced.skip, infoObj.tsSliced.height,
															infoObj.tsSliced.width, infoObj.tsSliced.url), infoObj.effects);
					this.options.observer.notify(VVPlayerEvent.EVENT_MEDIA, null, evtObj);															
				break;
				
				case VVPlayerFlashEvent.EVENT_EFFECT_START:
					evtObj.data = this.model.effectStart = infoObj.value;
					this.options.observer.notify(VVPlayerEvent.EVENT_EFFECT_START, null, evtObj);
				break;	

				case VVPlayerFlashEvent.EVENT_EFFECT_END:
					evtObj.data = this.model.effectEnd = infoObj.value;
					this.options.observer.notify(VVPlayerEvent.EVENT_EFFECT_END, null, evtObj);
				break;
				
			}
		} catch(error) {
			// probably no observer
		}
}

	/*
	 *
	 * vFlasher API functions begin --------------------------------
	 *
	 */

	/**
	 * pause movie
	 */

playerProxy.prototype.pause = function() {
	
	this.playerObj.pauseMovie();
	
}

	/**
	 * plays the currently active interval, if time parameter is missing, plays from the current
	 * position of, otherwise playback starts from given value. time must be beetween limits of
	 * the currently playing interval
	 */

playerProxy.prototype.play = function(time) {

	this.playerObj.playResume(time);

}

	/**
	 * mute sound
	 */

playerProxy.prototype.muteSound = function() {
	
	this.playerObj.muteSound(true);

}

	/**
	 * locks the volume to the current value (mute is still available)
	 */

playerProxy.prototype.lockVolume = function(lock) {
	
	this.playerObj.lockVolume(lock);

}

	/**
	 * unmutes the sound
	 */

playerProxy.prototype.unMuteSound = function() {

	this.playerObj.muteSound(false);

},
	
	/**
	 * sets volume to given value
	 */
	
playerProxy.prototype.setVolume = function(vol) {

	this.playerObj.setVolume(vol);

}

	/**
	 * moves timehead to given time, but only beetween the limits of playing interval
	 */

playerProxy.prototype.seekToTime = function(time){

	this.playerObj.seekToTime(time);

}

	/**
	 * sets/unsets the looping of the currently active playinterval
	 */

playerProxy.prototype.setLooping = function(yes) {

	this.playerObj.setLooping(yes);

}

	/**
	 * sets the interval to be played
	 */

playerProxy.prototype.setPlayingInterval = function(begin, end) {
	
	this.playerObj.setPlayingInterval(begin, end);

}

	/**
	 * sets the playing interval
	 */

playerProxy.prototype.clearPlayingInterval = function() {

	this.playerObj.setPlayingInterval(undefined, undefined, true);
	
}
	
	/**
	 * changes the skin of the player to a given skin idetified with index 
	 */
playerProxy.prototype.setSkin = function(index) {

	this.playerObj.setSkin(index);

}

playerProxy.prototype.loadMedia = function(resource) {

	this.playerObj.loadMedia(resource);

}

playerProxy.prototype.unloadMedia = function() {

	this.playerObj.unloadMedia();

}

// OBSOLETE, DON'T USE

playerProxy.prototype.loadXML = function(resource) {

	this.loadMedia(resource);

}


// OBSOLETE, DON'T USE

playerProxy.prototype.unloadXML = function() {

	this.unloadMedia();

}


	/*
	 *
	 * API end ------------------------------------------------------
	 *
	 */
	 