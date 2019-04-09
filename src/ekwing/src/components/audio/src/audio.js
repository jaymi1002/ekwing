/*
 * @Author: lifangfang
 * @Date:   2019-01-09 10:19:28
 * @Last Modified by:   lifangfang
 * @Last Modified time: 2019-01-21 18:12:36
 */
import BaseAudio from '@/ekwing/src/libs/baseAudio.js';
export default {
    props: {
        src: {
            type: String
            // validator: function(value) {
            //     return /mp3$/.test(value);
            // }
        },
        startTime: {
            type: Number,
            default: 0
        },
        endTime: {
            type: Number,
            default: 0
        },
        disable: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            audioObj: null,
            status: 'paused',
            progress: 0
        };
    },
    created() {
        this.audioObj = new BaseAudio(this.src, {
        	startTime: parseFloat(this.startTime) / 1000,
        	endTime: parseFloat(this.endTime) / 1000
        });
        this._bindEvent();
    },
    methods: {
    	clickPlay() {
    		if (this.disable) {
    			this.$emit('disabled');
    			return false;
    		}
    		this.play();
    	},
        play() {
            this.audioObj.play();
        },
        clickPause() {
        	if (this.disable) {
        		return false;
        	}
        	this.pause();
        },
        pause() {
            this.audioObj.pause();
        },
        _bindEvent() {
            let _this = this;
            this.audioObj.setEndedCallback(function() {
                _this.$emit('ended');
                _this.status = 'ended';
            });
            this.audioObj.setPausedCallback(function() {
                _this.$emit('paused');
                _this.status = 'paused';
            });
            this.audioObj.setPlayedCallback(function() {
                _this.$emit('played');
                _this.status = 'played';
            });
            this.audioObj.setProgressCallback(function({ currentTime, duration }) {
            	if (currentTime && duration) {
            		_this.progress = parseFloat(currentTime) / duration * 100;
            	} else {
            		_this.progress = 0;
            	}
                if (_this.status === 'played') {
					_this.$emit('progress', parseFloat(currentTime), duration);
                }
            });
        }
    },
    watch: {
    	src(newVal) {
    		this.audioObj.setSrc(newVal);
    	}
    }
};
