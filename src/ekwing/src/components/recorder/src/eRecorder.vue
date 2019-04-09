<template>
    <div class="e-recoder">
        <e-ring ref="ring" :progress="progress">
        </e-ring>
        <div class="e-recoder-btn" :class="classes" @click="toggle">
            <e-icon :type="iconType" color="white" :font-size="fontSize"></e-icon>
        </div>
    </div>
</template>
<script type="text/javascript">
import ring from '../../ring/src/eRing.vue';
import icon from '../../icon/src/eIcon.vue';
export default {
    name: 'e-recorder',
    props: {
        color: {
            type: String,
            default: 'blue',
        },
        duration: {
            type: Number,
            default: 3000
        },
        disable: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            passSeconds: 0,
            status: '',
            fontSize:'0px',
        }
    },
    computed: {
        classes() {
            return [`bg-${this.color}`];
        },
        iconType() {
            if (this.status === 'started') {
                return 'record-stop';
            } else {
                return 'record'
            }

        },
        progress(){
            return this.passSeconds / this.duration * 100;
        }
    },
    methods: {
        start() {
            let _this = this;
            this.status = 'started';
            this._work();
        },
        stop() {
            let _this = this;
            this.status = 'stoped';
            this.passSeconds = 0;
        },
        _work() {
            let _this = this;
            if (this.status === 'ended' || this.status === 'stoped') {
                return false;
            }
            this.passSeconds += 100;
            if (this.progress >= 100) {
                this.$emit('ended');
                this.status = 'ended';
                setTimeout(function() {
                    _this.passSeconds = 0;
                }, 300);
            }
            setTimeout(function() {
                _this._work();
            }, 100);
        },
        toggle() {
            if (this.disable) {
                return false;
            }
            if (this.status === 'started') {
                this.stop();
            } else {
                this.start();
            }
        }
    },
    watch: {
        status(newVal, oldVal) {
            if (newVal) { //newVal started stoped ended
                this.$emit(newVal);
            }
        }
    },
    mounted() {
        this.fontSize = this.$el.offsetHeight / 3 + 'px';
    }
}
</script>
<style lang="scss">
@import './eRecorder.scss';
</style>