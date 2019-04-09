/**
 * @description 声通sdk包装
 *
 * @author cuizhongzhi@moyi365.com
 * @date 2018.12.03
 * @version 1.0
 */

import SpeechError from './speecherror.js';
import error from './error.js';
import SpeechData from './speechdata.js';

let errCode = error.code;
let coreModelMaps = {
    word: 'word.eval',
    para: 'para.eval',
    sent: 'sent.eval',
};

const H5_MODE = 2;

let config = {
    debug: false,
    appKey: '17KouyuTestAppKey',
    secretKey: '17KouyuTestSecretKey',
    mode: H5_MODE,
};

let vars = {
    loaded: false, // 录音机是否加载成功
    recorder: null, // 录音机实例
    connected: false, // 连接
    micCanUse: false, // 麦克风是否可以使用
};

let events = {}; // 事件存储器

class st {
    constructor(conf, autoInit) {
    	this._coreType = coreModelMaps.word;
    	this._rank = 100;
        this._lastRecordId = null;
        let that = this;
    	Object.assign(config, conf, {
    		onFlashLoad: this._loaded,
    		onConnectorStatusChange: function(code, message) {
                that._onConnectorStatusChange(code, message);
            },
    		onMicStatusChange: function(code, message) {
                that._onMicStatusChange(code, message);
            },
    		onError: this._onError,
    	});

    	if ('hookEvents' in conf) {
    		Object.assign(events, conf.hookEvents);
    		delete config.hookEvents;
    	}

    	if ('data' in conf && conf.data instanceof SpeechData) {
    		this.dataReader = conf.data;
    		delete config.data;
    	}

    	if ('coreType' in conf &&
    		conf.coreType in coreModelMaps) {
    		this._coreType = coreModelMaps[conf.coreType];
    		delete config.coreType;
    	}

    	if ('rank' in conf) {
    		this._rank = conf.rank;
    		delete config.rank;
    	}

        if (autoInit !== false) {
            this.init();
        }
    }

    _loaded() {
    	vars.loaded = true;
    }

    _onReady() {
        if (this._isReady) {
            return;
        }

        if (vars.connected && vars.micCanUse) {
            this._isReady = true;
            events.onReady();
        }
    }

    _onConnectorStatusChange(code, message) {
    	if (code === '50100') {
            vars.connected = true;
    	} else if (code === '50103' || code === '50104') {
		   	events.onError(new SpeechError(errCode.CONNECT_FAIL));
    	} else if (code === '50109') {
		    events.onError(new SpeechError(errCode.CONNECT_FAIL));
	    }
        this._onReady();
    }

    _onMicStatusChange(code, message) {
    	if (code === '50001') {
            vars.micCanUse = true;
	    } else if (code === '50002') {
	    	events.onError(new SpeechError(code));
	    } else if (code === '50003') {
	    	events.onError(new SpeechError(code));
	    }
        this._onReady();
    }

    _onError(code, message) {
        events.onError(new SpeechError(code, message));
    }

    record() {
    	let data = this.dataReader.current();

    	vars.recorder.record({
    		duration: data.duration,
    		serverParams: {
    			coreType: this._coreType,
	            refText: data.text,
	            rank: this._rank,
	            userId: this._uid || 'guest',
                playNotifyAudio:false,
    		},
            onStart: events.onRecordStart,
            onStop: this._onStop,
            onRecordIdGenerated: this._onRecordIdGenerated,
        });
    }

    stop() {
        vars.recorder.stop({
            onStop: this._onStop,
        });
    }

    _onRecordIdGenerated(code, message) {
        console.log(message);
        if (message.recordId) {
            this._lastRecordId = message.recordId;
        }
    }

    _onStop() {
        events.onRecordStop();
        let lastRecordId = this._lastRecordId;
        vars.recorder.getScores({
            recordId: lastRecordId,
            success: function(data) {
                if (data[lastRecordId] &&  data[lastRecordId].result) {
                    let result = data[lastRecordId].result;
                    if (result.err || result.error) {
                        events.onError(new SpeechError(result.errID));
                    } else {
                        result._recordId = lastRecordId;
                        events.onScore(result);
                    }
                } else {
                    events.onError(new SpeechError(errCode.SCORING_TIMEOUT));
                }
            },
        });
    }

    playRecord(id) {
        let recordId = id || this._lastRecordId;
        vars.recorder.startReplay({
            recordId: recordId,
            onStart: events.onRepStart,
            onStop: events.onRepStop,
        });
    }

    stopRecord() {
        vars.recorder.stopReplay({
            onStop: events.onRepStop,
        });
    }

	// 初始化
    init() {
    	vars.recorder = new window._17kouyu.IRecorder(config);
    }
}

export default st;