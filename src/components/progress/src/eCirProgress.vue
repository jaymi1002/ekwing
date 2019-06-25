<template>
    <div class="e-cir-progress">
        <svg viewBox="0 0 100 100" style="width:100%;height:100%;">
            <path class="realtive-path" :class="relativeClass" :d="relativePath" fill="transparent" :stroke-width="strokeWidth"/>
            <path ref="currentRing" class="current-ring" :class="currentClass" :d="currentPath" fill="transparent" :stroke-width="strokeWidth" :stroke-dasharray="strokeDasharray" />
            <circle v-show="!noCirCleBar" ref="circle" class="cir-progress-circle" :class="circleClass" :cx="startX" :cy="startY" r="4"/>
        </svg>
        <div class="cir-progress-content">
            <slot></slot>
        </div>
    </div>
</template>
<script type="text/javascript">
let PI = Math.PI;
import {cssTransform,css,cssTransition} from '../../../helpers/dom';
export default {
    name: 'e-cir-progress',
    props: {
        progress: {
            type: Number,
            default: 0,
            validator(value) {
                return value >= 0 && value <= 100;
            }
        },
        color: {
            type: String,
            default: 'primary'
        },
        btnColor:{
            type:String,
            default: 'primary'
        },
        initDeg: {
            type: Number,
            default: 45,
        },
        noCirCleBar: Boolean,
        strokeWidth:{
            type: Number,
            default: 3
        }
    },
    mounted() {
        setTimeout(() => {
            this.currentProgress = this.progress;
        }, 100);
    },
    data() {
        return {
            r: 45,
            currentProgress: 0,
            degree: 0
        }
    },
    computed: {
        relativeClass(){
            return [`stroke-${this.color}`];
        },
        currentClass(){
            return [`stroke-${this.color}`];
        },
        circleClass(){
            return [`fill-${this.btnColor}`];
        },
        startX() {
            return 50 - Math.floor(Math.sin(this.initDeg * PI / 180) * 1000) / 1000 * this.r;
        },
        startY() {
            return 50 + Math.floor(Math.cos(this.initDeg * PI / 180) * 1000) / 1000 * this.r;
        },
        relEndX() {
            return 50 - Math.floor(Math.sin((360 - this.initDeg) * PI / 180) * 1000) / 1000 * this.r;
        },
        relEndY() {
            return 50 + Math.floor(Math.cos((360 - this.initDeg) * PI / 180) * 1000) / 1000 * this.r;
        },
        relLargeArcFlag() {
            return this.initDeg > 90 ? 0 : 1;
        },
        relativePath() {
            return `M ${this.startX} ${this.startY} A ${this.r} ${this.r} 0 ${this.relLargeArcFlag} 1 ${this.relEndX} ${this.relEndY}`;
        },
        strokeDasharray() {
            return `0,${2 * PI * this.r}`
        },
        currentPath() {
            let largeArcFlag = 0,
                endX = 0,
                endY = 0,
                degree = this.initDeg + (this.currentProgress / 100 * (360 - 2 * this.initDeg));
            this.degree = degree;
            if (this.degree - this.initDeg > 180) {
                largeArcFlag = 1;
            } else {
                largeArcFlag = 0;
            }
            endX = 50 - Math.floor(Math.sin(degree * PI / 180) * 1000) / 1000 * this.r;
            endY = 50 + Math.floor(Math.cos(degree * PI / 180) * 1000) / 1000 * this.r;
            return `M ${this.startX} ${this.startY} A ${this.r} ${this.r} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
        }
    },
    methods: {
        disableAnimate() {
            css(this.$refs.currentRing,cssTransition('unset'));
        },
        activeAnimate() {
            css(this.$refs.currentRing,cssTransition('stroke-dasharray 1s ease-in-out'));
        }
    },
    watch: {
        progress(newVal) {
            let _this = this;
            this.currentProgress = newVal;
        },
        currentProgress(newVal) {
            this.$nextTick(() => {
                css(this.$refs.currentRing,{
                    'stroke-dasharray' : `${2 * Math.PI * this.r * (this.degree - this.initDeg) / 360} ${2 * PI * this.r}`
                });
                css(this.$refs.circle,cssTransform(`rotate(${this.degree - this.initDeg}deg)`));
            });
        }
    }
}

</script>
<style lang="scss">
@import '../style/progress.scss';

</style>
