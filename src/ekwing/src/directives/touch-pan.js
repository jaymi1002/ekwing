/*
 * @Author: lifangfang
 * @Date:   2019-02-22 18:24:22
 * @Last Modified by:   lifangfang
 * @Last Modified time: 2019-03-27 12:00:07
 */
import { position } from '../helpers/utils/event.js';

function getDirection(mod) {
    const none = mod.vertical !== true && mod.horizontal !== true;
    let direction = {};
    if (none || mod.vertical) {
        direction.vertical = true;
    }
    if (none || mod.horizontal) {
        direction.horizontal = true;
    }
    return direction;
}

function proccessChanges(e, ctx) {
    const pos = position(e),
        x = pos.left,
        y = pos.top,
        distX = x - ctx.event.x,
        distY = y - ctx.event.y,
        absX = Math.abs(distX),
        absY = Math.abs(distY);
    let direction, duration;

    if (!ctx.direction.vertical && ctx.direction.horizontal) {
        switch (distX < 0) {
            case true:
                direction = 'left';
                break;
            case false:
                direction = 'right';
                break;
        }
        
    } else if (!ctx.direction.horizontal && ctx.direction.vertical) {
        switch (distY < 0) {
            case true:
                direction = 'up';
                break;
            case false:
                direction = 'down';
                break;
        }
    } else {
        if (absX < absY) {
            switch (distY < 0) {
                case true:
                    direction = 'up';
                    break;
                case false:
                    direction = 'down';
                    break;
            }
        } else {
            switch (distX < 0) {
                case true:
                    direction = 'left';
                    break;
                case false:
                    direction = 'right';
                    break;
            }
        }
    }

    duration = parseInt(new Date().getTime()) - ctx.startTime;
    return {
        el: e,
        position: pos,
        direction: direction,
        duration: duration,
        isFirst:ctx.event.isFirst,
        isFinal:ctx.event.isFinal,
        distance: {
            x: absX,
            y: absY,
        },
        delta: {
            x: pos.left - ctx.event.lastX,
            y: pos.top - ctx.event.lastY
        },

    }
}
export default {
    name: 'touch-pan',
    bind(el, binding, vnode) {
        let stopPropagation = binding.modifiers.stop;
        let preventDefault = binding.modifiers.prevent;
        let ctx = {
            startTime: 0,
            direction: getDirection(binding.modifiers),
            handle: binding.value,
            start: function(e) {
                let pos = position(e);
                ctx.event = {
                    x: pos.left,
                    y: pos.top,
                    lastX: pos.left,
                    y: pos.top,
                    detected: ctx.direction.vertical && ctx.direction.horizontal,
                    abort: false,
                    isFirst: true,
            		isFinal: false,
                };
                ctx.startTime = parseInt(new Date().getTime());
                stopPropagation && e.stopPropagation();
                preventDefault && e.preventDefault();
            },
            move: function(e) {
                if (ctx.event.abort) {
                    return;
                }

                if (ctx.event.detected) {
                    let pos = position(e);
                    let changes = proccessChanges(e, ctx);
                    ctx.handle && ctx.handle(changes);
                    ctx.event.lastX = pos.left;
                    ctx.event.lastY = pos.top;
                    ctx.event.isFirst = false;
                    stopPropagation && e.stopPropagation();
                    preventDefault && e.preventDefault();

                    return;
                }

                let changes = proccessChanges(e, ctx);
                ctx.event.detected = true;
                ctx.event.abort = ctx.direction.vertical ?
                    changes.distance.x > changes.distance.y :
                    changes.distance.y > changes.distance.x;
                ctx.move(e);
            },
            end: function(e) {
                if (ctx.event.abort || !ctx.event.detected) {
                    return;
                }
                ctx.event.isFinal = true;
                let changes = proccessChanges(e, ctx);
                ctx.handle && ctx.handle(changes);

                stopPropagation && e.stopPropagation();
                preventDefault && e.preventDefault();
            }
        }
        el.__panctx = ctx;
        el.addEventListener('touchstart', ctx.start);
        el.addEventListener('touchmove', ctx.move);
        el.addEventListener('touchend', ctx.end);
    },
    update(el, binding) {
        if (binding.oldValue !== binding.value) {
            el.__panctx.handle = binding.value;
        }
    },
    unbind(el, binding) {
        const ctx = el.__panctx;
        if (!ctx) {
            return;
        }
        el.removeEventListener('touchstart', ctx.start);
        el.removeEventListener('touchmove', ctx.move);
        el.removeEventListener('touchend', ctx.end);
        delete el.__panctx;
    }
}
