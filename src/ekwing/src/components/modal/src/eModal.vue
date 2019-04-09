<template>
    <div class="e-modal-outter">
        <transition name="e-modal" @enter-cancelled="enterCancelled" @after-leave="afterLeave">
            <div class="e-modal" :style="modalStyles" :class="[directionStyle]" v-if="active">
                <slot></slot>
            </div>
        </transition>
        <template v-if="mask">
            <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                <div class="e-modal-mask" v-show="active" @click="maskClick">
                </div>
            </transition>
        </template>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'e-modal',
    props: {
        direction: {
            type: String,
            default: 'middle',
            validator(val) {
                return ['top', 'bottom', 'left', 'right', 'middle'].includes(val)
            }
        },
        mask: {
            type: Boolean,
            default: true,
        },
        maskClickDisabled:Boolean,
    },
    data() {
        return {
            active: false,
        }
    },
    computed: {
        modalStyles() {
            return {

            }
        },
        directionStyle() {
            return `e-modal-${this.direction}`;
        },
    },
    methods: {
        show() {
            this.active = true;
        },
        hide() {
            this.active = false;
        },
        enterCancelled() {
            this.$el.remove();
            this.active = false;
        },
        afterLeave() {
            this.$el.remove();
            this.active = false;
        },
        maskClick(){
            if(this.maskClickDisabled){
                return false;
            }
            this.hide();
        }
    },
    watch: {
        active(newVal) {
            if (newVal) {
                document.body.classList.add('e-responsive-modal');
                document.body.appendChild(this.$el);
                this.$emit('showed');
            } else {
                document.body.classList.remove('e-responsive-modal');
                this.$emit('hided');
            }
        }
    }
}
</script>
<style lang="scss">
    @import '../style/modal.scss';
</style>