/**
 * @description 判断数据类型
 * @functions [isString, isBoolean, isUndefined, isNumber,
 *            isObject, isArray, isNull, isRegex, isSysmbol]
 * @author cuizhongzhi@moyi365.com
 * @date 2018.12.04
 * @version 1.0
 */

let varType = {};

let types = ['String', 
    'Boolean', 'Undefined', 'Object',
    'Array', 'Null', 'RegExp', 'Symbol'];

function isType(_var, strType) {
    let _strType = getVarType(_var);
    if (_strType === strType) {
        return true;
    }

    return false;
}

varType.isNumber = function(_var) {
    if (isType(_var, 'number') && !isNaN(_var)) {
        return true;
    }

    return false;
};

for (let tp of types) {
    varType[`is${tp}`] = function(_var) {
        return isType(_var, tp.toLocaleLowerCase());
    };
}

function getVarType(n) {
    let strType = Object.prototype.toString.call(n);
    strType = strType.replace(/[\[\]]/g, '');
    strType = strType.split(' ')[1];

    return strType.toLocaleLowerCase();
}

export default varType;
