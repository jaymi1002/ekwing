/*
 * @Author: lifangfang
 * @Date:   2019-02-27 10:46:55
 * @Last Modified by:   lifangfang
 * @Last Modified time: 2019-02-27 11:54:08
 */
import { position } from '../helpers/utils/event';
// function getPramas(binding){
// 	let pramas = Object.assgin({},binding.value);
// 	delete pramas.handle;
// 	return pramas;
// }
export default {
    name: 'tap',
    acceptStatement: true,
    isFn: true,
    bind(el, binding, vnode) {
        let value = binding.value,
            handle = value[0];
        value.shift();
        // let stopPropagation = binding.modifiers.stop;
        // let preventDefault = binding.modifiers.prevent;
        let ctx = {
            handle: handle,
            arguments: value,
            duration: parseInt(binding.arg, 10) || 300,
            start(e) {
                let pos = position(e);
                ctx.startTime = parseInt(new Date().getTime(), 10);
                ctx.event = {
                    x: pos.left,
                    y: pos.top,
                }
            },
            end(e) {
                let pos = position(e),
                    absX = pos.left - ctx.event.x,
                    absY = pos.top - ctx.event.y,
                    duration = parseInt(new Date().getTime(), 10) - ctx.startTime;
                if (absX <= 1 && absY <= 1 && duration <= ctx.duration) {
                    ctx.handle && ctx.handle.apply(this, ctx.arguments);
                }
            }
        }
        el.__touchtap = ctx;
        el.addEventListener('touchstart', ctx.start);
        el.addEventListener('touchend', ctx.end);
    },
    update(el, binding) {
        let ctx = el.__touchtap,
            value = binding.value,
		handle = value[0];
        value.shift();
        if (binding.oldValue !== binding.value) {
            ctx.handle = handle;
            ctx.arguments = value;
        }
    },
    unbind(el, binding) {
        let ctx = el.__touchtap;
        el.removeEventListener('touchstart', ctx.start);
        el.removeEventListener('touchend', ctx.end);
    }
}
