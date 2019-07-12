<template>
    <transition :name="transitionName" @enter="transitionEnter" @leave="transitionLeave">
        <div class="accordion-item-content" v-show="accordionItem.actived">
            <div ref="content">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>
<script type="text/javascript">
import { css } from '../../../helpers/dom.js';
export default {
    name: 'e-accordion-content',
    inject: ['accordion', 'accordionItem'],
    computed: {
        transitionName() {
            if (this.accordion.animate) {
                return 'accordion-animate';
            } else {
                return 'accordion';
            }
        }
    },
    methods: {
        transitionEnter(el) {
            setTimeout(() => {
                css(el, {
                    height: this.$refs.content.offsetHeight + 'px',
                    'padding-bottom': (30 / 75) + 'rem'
                });
            }, 0);
        },
        transitionLeave(el) {
            css(el, {
                height: '0px',
                'padding-bottom': '0rem'
            });
        },
    }
}

</script>
