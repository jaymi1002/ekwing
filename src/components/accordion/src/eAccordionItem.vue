<template>
    <li class="bd-top-solid bdt1px bd-f6" :class="itemClasses">
        <div class="accordion-item-title" @click="toggle">
            <e-item>
                <e-item-main>
                    <slot name="title">
                        <p class="font16 text-g3 lh3">{{title}}</p>
                    </slot>
                </e-item-main>
                <e-item-side>
                    <e-icon v-if="!$parent.noArrow" :class="[selfInActive ? 'arrow-up' : 'arrow-down',$parent.animate ? 'arrow-animate' : '']" type="arrow-up" :size="20" color="g6"></e-icon>
                </e-item-side>
            </e-item>
        </div>
        <e-separator v-if="!selfInActive"></e-separator>
        <transition :name="transitionName" @enter="transitionEnter" @leave="transitionLeave">
            <div class="accordion-item-content" v-show="selfInActive">
                <div ref="content" class="font14">
                    <slot name="content"></slot>
                </div>
            </div>
        </transition>
    </li>
</template>
<script type="text/javascript">
import { getSelfIndex } from '../../../helpers/parent-children.js';
export default {
    name: 'e-accordion-item',
    props: {
        title: String
    },
    computed: {
        itemClasses() {
            if (this.$parent.radio) {
                if (this.index === this.$parent.currentIndex) {
                    return this.$parent.activeClass;
                }
            } else {
                if (this.$parent.currentIndex.indexOf(this.index) > -1) {
                    return this.$parent.activeClass;
                }
            }
            return;
        },
        selfInActive() {
            return this.$parent.radio ? this.$parent.currentIndex === this.index : this.$parent.currentIndex.indexOf(this.index) > -1;
        },
        transitionName() {
            if (this.$parent.animate) {
                return 'accordion-animate';
            } else {
                return 'accordion';
            }
        }
    },
    data() {
        return {
            index: 0,
        }
    },
    mounted() {
        this.index = getSelfIndex(this);
    },
    methods: {
        transitionEnter(el) {
            setTimeout(() => {
                el.style.height = this.$refs.content.offsetHeight + 'px';
            }, 0);
        },
        transitionLeave(el) {
            el.style.height = '0px';
        },
        toggle() {
            if (this.$parent.disabled) {
                return false;
            }
            if (this.$parent.radio) {
                this.$parent.currentIndex = this.index;
            } else {
                let indexOfCurrent = this.$parent.currentIndex.indexOf(this.index);
                if (indexOfCurrent === -1) {
                    this.$parent.currentIndex.push(this.index);
                } else {
                    this.$parent.currentIndex.splice(indexOfCurrent, 1);
                }
            }
        },
    }
}

</script>
