/**
 * @description 云之声sdk封装
 *
 * @author cuizhongzhi@moyi365.com
 * @date 2018.12.05
 * @version 1.0
 */

import SpeechData from './speechdata.js';

let coreModelMaps = {
    word: 'A',
    para: 'A',
    sent: 'A',
};

let config = {
	userId: 'guest',
    model: 'A',
    autoStop: false,
    debug: true,
};

let deftConf = {
    host: 'edu.hivoice.cn',
    port: '443',
    useFlash: false,
    useSelfAudio: false,
    audioFormat: 'opus',
};

let timeId = null;

class YZS {
	constructor(conf, autoInit) {
		this._conf = {};
		this._events = {};
		this._ready = false;

		Object.assign(this._conf, config, conf, deftConf);

		if ('hookEvents' in conf) {
    		Object.assign(this._events, conf.hookEvents);
    		delete this._conf.hookEvents;
    	}

    	if ('data' in conf && 
    		conf.data instanceof SpeechData) {
    		this.dataReader = conf.data;
    		delete this._conf.data;
    	}

    	if ('coreType' in conf &&
    		conf.coreType in coreModelMaps) {
    		this._coreType = coreModelMaps[conf.coreType];
            Object.assign(this._conf, {model: this._coreType});
    		delete this._conf.coreType;
    	}

    	if ('rank' in conf) {
    		this._rank = conf.rank;
    		delete this._conf.rank;
    	}

    	if (autoInit !== false) {
    		this.init();
    	}
	}

	_bindEvents() {
		let recorder = this.recorder, self = this;

		recorder.onReady = function() {
			self._ready = true;
			self._events.onReady();
		};

		recorder.onStart = function() {
			self._events.onRecordStart();
		};

		recorder.onStop = function() {
			self._events.onRecordStop();
		};

        recorder.onResult = function(result) {
            // recorder.getSoundUrl()  recorder.getResultUrl() 
            self._events.onScore(result);
        };

        recorder.onError = function(err) {
            console.log('error: ', err);
            // self._events.onError();
        };

        recorder.onPlayLocal = function() {
            self._events.onRepStart();
        };

        recorder.onStopPlayLocal = function() {
            self._events.onRepStop();
        };
	}

    record() {
        let data = this.dataReader.current(), self = this;
        this.recorder.start(data.text, this._coreType, 'en');
        timeId = setTimeout(function() {
            self.stop();
        }, data.duration);
    }

    stop() {
        clearTimeout(timeId);
        let self = this;
        this.recorder.stop().then(self._events.stop);
    }

    playRecord() {
        this.recorder.playLocal();
    }

    stopRecord() {
        this.recorder.stopPlayLocal();
    }

	init() {
		this.recorder = new window.EvalSDK(this._conf);
		this._bindEvents();
	}
}

export default YZS;