/*
 * @Author: lifangfang
 * @Date:   2019-02-22 15:14:10
 * @Last Modified by:   lifangfang
 * @Last Modified time: 2019-03-27 15:37:28
 */
import { position } from '../helpers/utils/event.js';

function getDirection(mod) {
    let dir = {};
    ['left', 'right', 'up', 'down', 'horizontal', 'vertical'].forEach(direction => {
        if (mod[direction]) {
            dir[direction] = true
        }
    })

    if (Object.keys(dir).length === 0) {
        return {
            left: true,
            right: true,
            up: true,
            down: true,
            horizontal: true,
            vertical: true
        }
    }

    if (dir.horizontal) {
        dir.left = dir.right = true
    }
    if (dir.vertical) {
        dir.up = dir.down = true
    }
    if (dir.left && dir.right) {
        dir.horizontal = true
    }
    if (dir.up && dir.down) {
        dir.vertical = true
    }

    return dir
}
export default {
    name: 'touch-swipe',
    bind(el, binding, vnode) {
        let ctx = {
            handle: binding.value,
            threshold: parseInt(binding.arg, 10) || 300,
            direction: getDirection(binding.modifiers),

            start: function(e) {
                let pos = position(e);
                ctx.event = {
                    x: pos.left,
                    y: pos.top,
                    time: parseInt(new Date().getTime(), 10),
                    abort: false,
                    prevent: false,
                    detected: false,
                }
            },

            move: function(e) {
                let pos = position(e);
                if (ctx.event.abort) {
                    return;
                }

                if (parseInt(new Date().getTime(), 10) - ctx.event.time > ctx.threshold) {
                    ctx.event.abort = true;
                    return;
                }

                if (ctx.event.detected) {
                    e.stopPropagation()
                    e.preventDefault()
                    return
                }
                const distX = pos.left - ctx.event.x,
                    absX = Math.abs(distX),
                    distY = pos.top - ctx.event.y,
                    absY = Math.abs(distY);

                if (absX === absY) {
                    return;
                }

                ctx.event.detected = true;
                ctx.event.abort = !(
                    (ctx.direction.vertical && absX < absY) ||
                    (ctx.direction.horizontal && absX > absY) ||
                    (ctx.direction.up && absX < absY && distY < 0) ||
                    (ctx.direction.down && absX < absY && distY > 0) ||
                    (ctx.direction.left && absX > absY && distX < 0) ||
                    (ctx.direction.right && absX > absY && distX > 0)
                )
                ctx.move(e);
            },

            end: function(e) {
                if (!ctx.event.detected || ctx.event.abort) {
                    return;
                }
                let duration = parseInt(new Date().getTime(), 10) - ctx.event.time;
                if (duration > ctx.threshold) {
                    return;
                }
                const pos = position(e);
                const distX = pos.left - ctx.event.x,
                    absX = Math.abs(distX),
                    distY = pos.top - ctx.event.y,
                    absY = Math.abs(distY);
                let direction = '';
                if (absX > absY) {
                    if (absX < 50) {
                        return;
                    }
                    direction = distX > 0 ? 'right' : 'left';
                }
                if (absY > absX) {
                    if (absY < 50) {
                        return;
                    }
                    direction = distY < 0 ? 'up' : 'down';
                }
                if (ctx.handle) {
                    ctx.handle({
                        el: e,
                        direction: direction,
                        duration: duration,
                        distance: {
                            x: absX,
                            y: absY
                        }
                    });
                }
            }
        }
        el.__swipectx = ctx;
        el.addEventListener('touchstart', ctx.start);
        el.addEventListener('touchmove', ctx.move);
        el.addEventListener('touchend', ctx.end);
    },
    update(el, binding) {
        if (binding.oldValue !== binding.value) {
            el.__swipectx.handle = binding.value;
        }
    },
    unbind(el, binding) {
    	const ctx = el.__holdctx;
        if (!ctx) {
            return;
        }
        el.removeEventListener('touchstart', ctx.start);
        el.removeEventListener('touchmove', ctx.move);
        el.removeEventListener('touchend', ctx.end);
        delete el.__swipectx;
    }
}
