/*
* @Author: lifangfang
* @Date:   2019-02-22 17:02:53
* @Last Modified by:   lifangfang
* @Last Modified time: 2019-03-18 15:51:06
*/
import { position } from '../helpers/utils/event.js';

export default {
    name: 'touch-hold',
    bind(el, binding, vnode) {
    	let timer = null;
        let ctx = {
            handle: binding.value,
            duration: parseInt(binding.arg,10) || 600,
            start: function(e) {
                let pos = position(e);
                timer = setTimeout(function(){
                	ctx.handle({
                		position:position(e),
                		duration:ctx.duration,
                	});
                },ctx.duration);
            },	

            abort:function(e){
            	clearTimeout(timer); 
            	timer = null;
            }
        }
        el.__holdctx = ctx;
        el.addEventListener('touchstart', ctx.start);
        el.addEventListener('touchmove', ctx.abort);
        el.addEventListener('touchend', ctx.abort);
    },
    update(el, binding) {
    	el.__holdctx.duration = parseInt(binding.arg,10) || 600;
        if (binding.oldValue !== binding.value) {
            el.__holdctx.handle = binding.value;
        }
    },
    unbind(el,binding) {
    	const ctx = el.__holdctx;
        if (!ctx) {
            return;
        }
        el.removeEventListener('touchstart', ctx.start);
        el.removeEventListener('touchmove', ctx.abort);
        el.removeEventListener('touchend', ctx.abort);
        delete el.__holdctx;
    }
}
