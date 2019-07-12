<template>
    <div class="e-cir-progress">
        <svg viewBox="0 0 100 100" style="width:100%;height:100%;" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <linearGradient id="progressLinner" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0" :class="stopClass.start" />
                    <stop offset="100" :class="stopClass.end" />
                </linearGradient>
            </defs>
            <path class="realtive-path" :class="relativeClass" stroke-linecap="round" :d="relativePath" fill="transparent" :stroke-width="strokeWidth" />
            <path ref="currentRing" class="current-ring" :d="currentPath" fill="transparent" :stroke-width="strokeWidth" stroke-linecap="round" :stroke-dasharray="strokeDasharray" stroke="url(#progressLinner)" />
            <circle v-show="!noCirCleBar" ref="circle" class="cir-progress-circle" :class="circleClass" :cx="startX" :cy="startY" :r="circleSize"/>
        </svg>
        <div class="cir-progress-content">
            <slot></slot>
        </div>
    </div>
</template>
<script type="text/javascript">
let PI = Math.PI;
import { cssTransform, css, cssTransition } from '../../../helpers/dom';
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
        startColor: String,
        endColor: String,
        outerColor: String,
        btnColor: String,
        initDeg: {
            type: Number,
            default: 45,
        },
        noCirCleBar: Boolean,
        strokeWidth: {
            type: Number,
            default: 3
        },
        circleSize:{
            type:Number,
            default:4
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
            degree: 0,
        }
    },
    computed: {
        stopClass() {
            let startClass,
                endClass;
            if (!this.startColor) {
                startClass = 'stop-start-default';
            } else {
                startClass = `stop-${this.startColor}`;
            }
            if (!this.endColor) {
                endClass = 'stop-end-default';
            } else {
                endClass = `stop-${this.endColor}`;
            }

            return {
                start: startClass,
                end: endClass
            };
        },
        relativeClass() {
            if (this.outerColor) {
                return [`stroke-${this.outerColor}`];
            }
            return 'relative-default';
        },
        currentClass() {
            return [`stroke-${this.color}`];
        },
        circleClass() {
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
            return this.initDeg > 180 ? 0 : 1;
        },
        relativePath() {
            return `M ${this.startX} ${this.startY} A ${this.r} ${this.r} 0 ${this.relLargeArcFlag} 1 ${this.relEndX} ${this.relEndY}`;
        },
        strokeDasharray() {
            return `0,${2 * PI * this.r}`
        },
        currentPath() {
            let largeArcFlag,
                endX,
                endY,
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
            css(this.$refs.currentRing, cssTransition('unset'));
        },
        activeAnimate() {
            css(this.$refs.currentRing, cssTransition('stroke-dasharray 1s ease-in-out'));
        }
    },
    watch: {
        progress(newVal) {
            let _this = this;
            this.currentProgress = newVal;
        },
        currentProgress(newVal) {
            this.$nextTick(() => {
                css(this.$refs.currentRing, {
                    'stroke-dasharray': `${2 * Math.PI * this.r * (this.degree - this.initDeg) / 360} ${2 * PI * this.r}`
                });
                css(this.$refs.circle, cssTransform(`rotate(${this.degree - this.initDeg}deg)`));
            });
        }
    }
}

</script>
