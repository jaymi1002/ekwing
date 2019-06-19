<template>
    <e-item class="e-progress" no-padding>
        <e-item-side justify-content="end" :width="13">
            <span class="current-number font20" :class="fontColorClasses">{{current}}</span>/<span class="text-g9 font14">{{total}}</span>
        </e-item-side>
        <e-item-main>
			<div class="bar-outter">
				<div class="bar-inner" :class="barClasses" :style="barStyles"></div>
			</div>
        </e-item-main>
    </e-item>
</template>
<script type="text/javascript">
export default {
    name: 'e-progress',
    props: {
        total: {
            type: Number,
            require: true,
        },
        current: {
            type: Number,
            require: true,
        },
        color: {
            type: String,
            default: 'blue',
        }
    },
    data() {
        return {

        }
    },
    computed: {
        progress() {
            return this.current / this.total * 100 + '%';
        },
        fontColorClasses(){
        	return `text-${this.color}`;
        },
        barStyles(){
        	return {
        		width:this.progress
        	}
        },
        barClasses(){
        	return `bg-${this.color}`;
        }
    }
}
</script>
<style lang="scss">
	@import "../style/progress.scss";
</style>