let errCode = {
    CONNECT_FAIL: 10001,
    MIC_NOT_VISIT: 20001,
    MIC_NOT_EXISTS: 20002,
    SCORING_TIMEOUT: 30001,

};

let errMsg = {};

errMsg[errCode.CONNECT_FAIL] = '服务器连接失败';
errMsg[errCode.MIC_NOT_VISIT] = '麦克风不能访问';
errMsg[errCode.MIC_NOT_EXISTS] = '没有检测到麦克风';
errMsg[errCode.SCORING_TIMEOUT] = '评分超时';

let rtn = {
    code: errCode,
    msg: errMsg,
};

export default rtn;
