import err from './error.js';

let errorMsg = err.msg;

function SpeechError(code, message) {
	this.name = 'SpeechError';
	this.code = code;
	if (message) {
		this.message = message;
	} else if (code in errorMsg) {
		this.message = err.msg[code];
	} else {
		this.message = 'unknow';
	}

	this.stack = (new Error()).stack;
}

SpeechError.prototype = Object.create(Error.prototype);
SpeechError.prototype.contructor = SpeechError;

export default SpeechError;
