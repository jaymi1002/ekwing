<template>
    <e-item class="accordion-item-title font16" @click="toggle">
        <e-item-main>
            <slot>
                <p class="lh24">{{title}}</p>
            </slot>
        </e-item-main>
        <e-item-side right>
            <e-icon v-if="!accordion.noArrow" 
            	:class="[accordionItem.actived ? 'icon-active' : 'icon-default',accordion.animate ? 'icon-animate' : '']" 
            	type="accordion-arrow" 
            	:size="accordion.iconSize" 
            	:color="accordion.iconColor">
            </e-icon>
        </e-item-side>
    </e-item>
</template>
<script type="text/javascript">
export default {
    name: 'e-accordion-header',
    inject: ['accordion', 'accordionItem'],
    props: {
        title: String,
    },
    methods: {
        toggle() {
            if (this.accordion.disabled) {
                return false;
            }
            if (this.accordion.radio) {
                this.accordion.currentIndex = this.accordionItem.index;
            } else {
                let indexOfCurrent = this.accordion.currentIndex.indexOf(this.accordionItem.index);
                if (indexOfCurrent === -1) {
                    this.accordion.currentIndex.push(this.accordionItem.index);
                } else {
                    this.accordion.currentIndex.splice(indexOfCurrent, 1);
                }
            }
        },
    }
}

</script>
