<template>
    <div class="e-audio" @click="trigger">
        <e-ring ref="ring" :progress="progress">
        </e-ring>
        <div class="e-audio-btn tc" :class="classes">
            <e-icon :type="iconType" color="white" :font-size="fontSize"></e-icon>
        </div>
    </div>
</template>
<script type="text/javascript">
import ring from '../../ring/src/eRing.vue';
import icon from '../../icon/src/eIcon.vue';
import audio from './audio.js';
export default {
    name: 'e-audio-cp',
    mixins:[audio],
    props: {
        size: {
            type: String,
            default: '100%',
        },
        color: {
            type: String,
            default: 'blue',
        },
        startTime: {
            type: Number,
            default: 0,
        },
        endTime: {
            type: Number,
            default: 0,
        }
    },
    data() {
        return {
            fontSize:'0px',
        }
    },
    computed: {
        classes() {
            return [`bg-${this.color}`];
        },
        iconType() {
            if(this.status === 'played'){
                return 'pause';
            }else{
                return 'play';
            }
        }
    },
    methods: {
        trigger(){
            if(this.status === 'played'){
                this.clickPause();
            }else{
                this.clickPlay();
            }
        }
    },
    watch:{
    	status(newVal,oldVal){
            let _this = this;
            if(newVal === 'ended'){
                setTimeout(function(){_this.progress = 0},300);
            }
        }
    },
    mounted(){
        this.fontSize = this.$el.offsetHeight/3 + 'px';
    }
}
</script>
<style lang="scss">
@import './eAudio.scss';
</style>