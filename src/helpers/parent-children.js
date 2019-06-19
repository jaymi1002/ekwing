/*
 * @Author: lifangfang
 * @Date:   2019-03-22 18:08:12
 * @Last Modified by:   lifangfang
 * @Last Modified time: 2019-03-22 18:13:52
 */
function getSelfIndex(self) {
	let parent = self.$parent;
    for (let i = 0; parent.$children.length; i++) {
        if (parent.$children[i]._uid === self._uid) {
            return i;
        }
    }
}

function isLastChild(self) {
	let parent = self.$parent;
    return parent.$children[parent.$children.length - 1]._uid === self._uid;
}

function isFirstChild(self) {
	let parent = self.$parent;
	return parent.$children[0]._uid === self._uid;
}


export {
	getSelfIndex,
	isLastChild,
	isFirstChild
}