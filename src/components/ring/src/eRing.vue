<template>
    <div class="time_cir">
        <svg width="440" height="440" viewBox="0 0 440 440" style="width:100%;height:100%;">
            <circle class="inner" :class="innerClasses"  cx="220" cy="220" :r="radius" :stroke-width="strokeWidth" fill="none"></circle>
            <circle class="outer" :class="outterClasses" cx="220" cy="220" :r="radius" :stroke-width="strokeWidth" fill="none" :stroke-dasharray="dasharray"></circle>
        </svg>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'e-ring',
    props: {
        color: {
            type: String,
            default: 'primary'
        },
        direction: {
            type: String,
            default: 'forward', // 'forward  reverse',
            validator(value){
                return ['forward','reverse'].indexOf(value) !== -1;
            }
        },
        progress: {
            type: Number,
            default: 0
        },
        ringWidth: {
            type: Number, //百分比
            default: 10
        }
    },
    data() {
        return {
            active: true,
        }
    },
    computed: {
        outterClasses() {
            let classes = [];
            if(this.active){
                classes.push('active');
            }
            classes.push(`stroke-${this.color}`);
            classes.push(this.direction);
            return classes;
        },
        innerClasses(){
            return `stroke-${this.color}`;
        },  
        dasharray() {
            let girth = this.radius * 2 * Math.PI;
            return `${this.progress / 100 * girth} ${girth}`;
        },
        strokeWidth() {
            return 220 * this.ringWidth / 100;
        },
        radius() {
            return 220 - this.strokeWidth;
        }
    },
    methods: {
    },
    watch: {
        progress(newVal, oldVal) {
            if (newVal === 100) {
                this.$emit('ended');
            }
            if(newVal < oldVal){
                this.active = false;
            }else{
                this.active = true;
            }
        }
    }
}
</script>
<style lang="sass">
@import "./eRing.scss";
</style>