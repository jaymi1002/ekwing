import ChiVoxSDK from 'chivox-jssdk';
import error from './error.js';
import SpeechData from './speechdata.js';
import SpeechError from './speecherror.js';

let coreModelMaps = {
	word: 'en.word.score',
    para: 'en.sent.score',
    sent: 'en.pred.exam',
};

let config = {
	appKey: '1543374715000045',
	mode: ChiVoxSDK.MODE.H5,
	sigurl: 'https://www.ekwing.com/login/test',
	userId: 'guest',
};

class CS {
	constructor(conf, autoInit) {
		this._conf = {};
		this._events = {};

		Object.assign(this._conf, config, conf);

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

	record() {
		let data = this.dataReader.current(), self = this;

		this.recorder.record({
			duration: data.duration,
			playDing: false,
			serverParams: {
				coreType: this._coreType,
				refText: data.text,
				rank: self._rank,
				userId: this._conf.userId || 'guest',
				client_params: {
					ext_subitem_rank4: 0,
					ext_word_details: 1,
					ext_phn_details: 1,
				},
			},
			onRecordIdGenerated: function(code, message) {
				self._lastRecordId = message.recordId;
				console.log('onRecordIdGenerated: ', code, message);
			},
			onStart: function() {
				self._events.onRecordStart();
			},
			onStop: function(code, message) {
				self._events.onRecordStop(code, message);
			},
			/*
			onInteralScore: function(e, t) {
				console.log('onInteralScore: ', arguments);
			},
			*/
			onScore: function(data) {
				self._events.onScore(data);
			},
			onScoreError: function() {
				console.log('onScoreError: ', arguments);
			},
			onError: function() {
				console.log('onError: ', arguments);
			},
		});
	}

	stop() {
		this.recorder.stopRecord();
	}

	playRecord(recordId) {
		let id = recordId || this._lastRecordId;

		this.recorder.startReplay({
			recordId: id,
			onStop: this._events.onRepStop,
		});
	}

	stopRecord() {
		this.recorder.stopReplay();
	}

	init() {
		let self = this;
		let sdk = new ChiVoxSDK(Object.assign(this._conf, {
			onInit: function(code, message) {
				if (code === 0 && message === 0) {
					self._events.onReady();
				}
			},
		}));

		this.recorder = sdk.recorder;
	}
}

export default CS;