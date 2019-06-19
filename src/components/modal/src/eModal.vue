<template>
    <div class="e-modal-outter">
        <transition name="custom-classes-transition" :enter-active-class="enterActiveClass" :leave-active-class="leaveActiveClass" @enter-cancelled="enterCancelled" @after-leave="afterLeave">
            <div ref="modalContent" class="e-modal" :class="[directionStyle]" v-if="active">
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
let defaultAnimate = {
    top: ['slideInDown', 'slideOutUp'],
    bottom: ['slideInUp', 'slideOutDown'],
    left: ['slideInLeft', 'slideOutLeft'],
    right: ['slideInRight', 'slideOutRight'],
    middle: ['fadeIn', 'fadeOut']
};
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
        enterClass: String,
        leaveClass: String,
        maskClickDisabled: Boolean,
    },
    data() {
        return {
            active: false,
        }
    },
    updated(){
        if(this.$refs.modalContent){
            this._setPos();    
        }
    },
    computed: {
        enterActiveClass() {
            if (this.enterClass) {
                return ['animated', this.enterClass].join(' ');
            }
            return ['animated', defaultAnimate[this.direction][0]].join(' ');
        },
        leaveActiveClass() {
            if (this.leaveClass) {
                return ['animated', this.leaveClass].join(' ');
            }
            return ['animated', defaultAnimate[this.direction][1]].join(' ');
        },
        directionStyle() {
            return `e-modal-${this.direction}`;
        },
    },
    methods: {
        show() {
            let _this = this;
            this.active = true;
            this.$nextTick().then(() => {
                _this._setPos();
            });
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
        maskClick() {
            if (this.maskClickDisabled) {
                return false;
            }
            this.$emit('maskClickHandle');
            this.hide();
        },
        _setPos() {
            if (['left', 'right', 'middle'].indexOf(this.direction) > -1) {
                this.$refs.modalContent.style.top = `calc(50% - ${this.$refs.modalContent.offsetHeight / 2}px)`;
                this.$refs.modalContent.style.top = `-webkit-calc(50% - ${this.$refs.modalContent.offsetHeight / 2}px)`;
            }
            if (this.direction === 'middle') {
                this.$refs.modalContent.style.left = `calc(50% - ${this.$refs.modalContent.offsetWidth / 2}px)`;
                this.$refs.modalContent.style.left = `-webkit-calc(50% - ${this.$refs.modalContent.offsetWidth / 2}px)`;
            }
        },
        refreshPos(){
            this._setPos();
        }
    },
    watch: {
        active(newVal) {
            if (newVal) {
                document.body.classList.add('e-responsive-modal');
                document.body.appendChild(this.$el);
            } else {
                document.body.classList.remove('e-responsive-modal');
            }
        }
    }
}

</script>
