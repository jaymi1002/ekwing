<template>
    <div class="time_cir">
        <svg width="100" height="100" viewBox="0 0 100 100" style="width:100%;height:100%;">
            <defs>
                <linearGradient id="ringLinner" x1="0" y1="0" x2="100%" y2="0">
                  <stop offset="0" :class="stopClass.start" style="stop-opacity:1;"/>
                  <stop offset="100" :class="stopClass.end" style="stop-opacity:1;"/>
                </linearGradient>
            </defs>
            
            <circle class="outer" stroke-linecap="round" cx="50" cy="50" :r="radius" :stroke-width="strokeWidth" fill="none"  :class="outterClasses"></circle>
            <circle class="inner" stroke-linecap="round" cx="50" cy="50" :r="radius" :stroke-width="strokeWidth" fill="none" stroke="url(#ringLinner)" :class="innerClass" :stroke-dasharray="dasharray"></circle>
        </svg>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'e-ring',
    props: {
        startColor:String,
        endColor:String,
        outerColor: String,
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
        stopClass(){
            let startClass,
                endClass;
            if(!this.startColor){
                startClass = 'stop-start-default';
            }else{
                startClass = `stop-${this.startColor}`;
            }
            if(!this.endColor){
                endClass = 'stop-end-default';
            }else{
                endClass = `stop-${this.endColor}`;
            }
            return {
                start:startClass,
                end:endClass
            };
        },
        innerClass(){
            let classes = [];
            if(this.active){
                classes.push('active');
            }
            classes.push(this.direction);
            return classes;
        },
        outterClasses() {
            let classes = [];
            if(!this.outerColor){
                classes.push(`outer-default`);
            }
            return classes;
        }, 
        dasharray() {
            let girth = this.radius * 2 * Math.PI;
            return `${this.progress / 100 * girth} ${girth}`;
        },
        strokeWidth() {
            return 50 * this.ringWidth / 100;
        },
        radius() {
            return 50 - this.strokeWidth;
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