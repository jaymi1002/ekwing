<template>
    <div class="e-audio" @click="clickPlay">
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
    name: 'e-audio',
    mixins:[audio],
    props: {
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
        },
        disable:{
        	type:Boolean,
        	default:true,
        }
    },
    data() {
        return {
            iconTypeStatus: 3,
            fontSize:'0px',
        }
    },
    computed: {
        classes() {
            return [`bg-${this.color}`];
        },
        iconType() {
            let iconTypeStatus = this.iconTypeStatus % 3;
            return `horn-${iconTypeStatus}`;
        }
    },
    methods: {
        changeIconType() {
        	if(this.status === 'ended' || this.status === 'paused'){
        		this.iconTypeStatus = 3;
        		return false;
        	}
            this.iconTypeStatus++;
            let _this = this;
            setTimeout(function(){
            	_this.changeIconType();
            },300);
        },
    },
    watch:{
    	status(newVal,oldVal){
    		let _this = this;
    		if(newVal === 'played'){
    			this.changeIconType();
    		}
    		if(newVal === 'ended'){
    			setTimeout(function(){_this.progress = 0},300);
    		}
    	}
    },
    mounted(){
    	this.fontSize = this.$el.offsetHeight/2.3 + 'px';
    }
}
</script>
<style lang="scss">
@import './eAudio.scss';
</style>