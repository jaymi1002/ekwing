<template>
    <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div class="e-toast flex justify-center column" v-show="visibility">
            <div v-if="icon" class="tc mb10">
                <e-icon :type="icon" font-size="0.9rem" color="white"></e-icon>
            </div>
            <div class="text-white font16 tc" ref="content">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>
<script type="text/javascript">
export default {
    name: 'e-toast',
    components: {},
    props: {
        duration: {
            type: Number,
            default: 2000
        },
        icon: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            visibility: false,
        }
    },
    methods: {
        _work() {
            let _this = this;
            _this.$emit('started');
            setTimeout(() => {
                _this.hide();
                _this.$emit('ended');
            }, _this.duration);
        },
        show() {
            this.visibility = true;
        },
        hide() {
            this.visibility = false;
        }
    },
    watch: {
        visibility(newVal, oldVal) {
            if (newVal === true) {
                this._work();
            }
        }
    }
}
</script>
<style lang="scss">
.e-toast {
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    padding: 0.333rem 0.267rem;
    min-width: 4.533rem;
    min-height: 0.533rem;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, .6);
    border-radius: 0.133rem;
}
</style>