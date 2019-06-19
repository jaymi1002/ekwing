/*
* @Author: lifangfang
* @Date:   2019-05-29 16:25:42
* @Last Modified by:   lifangfang
* @Last Modified time: 2019-05-29 16:54:26
*/
export function offset(el) {
	if (!el || el === window) {
		return { top: 0, left: 0 }
	}
	let { top, left } = el.getBoundingClientRect()

	return { top, left }
}

export function style(el, property) {
	return window.getComputedStyle(el).getPropertyValue(property)
}

export function height(el) {
	if (el === window) {
		return window.innerHeight
	}
	return parseFloat(style(el, 'height'))
}

export function width(el) {
	if (el === window) {
		return window.innerWidth
	}
	return parseFloat(style(el, 'width'))
}

export function css(element, css) {
	let style = element.style

	Object.keys(css).forEach(prop => {
		style[prop] = css[prop]
	})
}

const tsnPrefix = ['webkit', 'moz', 'o'];
export function addTransitionEnd(el,val){
	el.addEventListener('transitionend', val);
	tsnPrefix.forEach( p => {
		let event = `${p}TransitionEnd`;
		el.addEventListener(event, val);
	});
}

export function removeTransitionEnd(el,val){
	el.removeEventListener('transitionend', val);
	tsnPrefix.forEach(p => {
		let event = `${p}TransitionEnd`;
		el.removeEventListener(event, val);
	});
}


const prefix = ['-webkit-', '-moz-', '-ms-', '-o-'];
export function cssTransform(val) {
	let o = { transform: val }
	prefix.forEach(p => {
		o[p + 'transform'] = val
	})
	return o
}

export function cssTransition(val,attr) {
	let o = {};
	let cssAttr = ['transition', attr].join('-');
	o[cssAttr] = val;
	prefix.forEach(p => {
		o[p + '' + cssAttr] = val;
	})
	return o
}

export default {
	cssTransform,
	cssTransition,
	addTransitionEnd,
	removeTransitionEnd,
	offset,
	style,
	height,
	width,
	css,

}