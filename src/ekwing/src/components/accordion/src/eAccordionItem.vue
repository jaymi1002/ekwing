<template>
    <li class="bd-top-solid bdt1px bd-f6" :class="itemClasses">
        <div class="accordion-item-title" @click="toggle">
            <slot name="title"></slot>
        </div>
        <transition :name="transitionName" @enter="transitionEnter" @leave="transitionLeave">
            <div class="accordion-item-content" v-if="selfInActive">
                <div>
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
    computed: {
        itemClasses() {
            if (this.$parent.radio) {
                if (this.index === this.$parent.currentIndex) {
                    return this.$parent.activeClass;
                }
            }else{
            	if(this.$parent.currentIndex.indexOf(this.index) > -1){
            		return this.$parent.activeClass;
            	}
            }
            return;
        },
        selfInActive(){
        	return this.$parent.radio ? this.$parent.currentIndex === this.index : this.$parent.currentIndex.indexOf(this.index) > -1;
        },
        transitionName(){
        	if(this.$parent.animate){
        		return 'accordion-animate';
        	}else{
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
            el.style.height = el.children[0].offsetHeight + 'px';
        },
        transitionLeave(el) {
            el.style.height = '0px';
        },
        toggle() {
            if (this.$parent.disabled) {
                return false;
            }
            if(this.$parent.radio){
            	this.$parent.currentIndex = this.index;
            }else{
            	let indexOfCurrent = this.$parent.currentIndex.indexOf(this.index);
            	if(indexOfCurrent === -1){
            		this.$parent.currentIndex.push(this.index);
            	}else{
            		this.$parent.currentIndex.splice(indexOfCurrent,1);
            	}
            }
        },
    }
}

</script>
