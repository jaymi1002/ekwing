<template>
    <e-layout head shadow title="ajaxbar">
        <p class="font18 tc lh3 bold fa">diretion</p>
        <e-check-list type="radio" :list="checkList" label-right v-model="value">
            <div class="flex justify-center items-center" style="line-height:50px" slot-scope="{item,index}">
                <span>{{item.text}}</span>
            </div>
        </e-check-list>
        <p class="font18 tc lh3 bold fa">reverse</p>
        <e-item t-border b-border>
            <e-item-main justify-content="start">
                <e-check-icon v-model="reverse" text="reverse"></e-check-icon>
            </e-item-main>
        </e-item>
        <div class="fix p20 font16 text-g3">
            <!-- <e-ajax-bar ref="bar" :position="direction" @started="started" @stopped="stopped"></e-ajax-bar> -->
            <a class="left" href="javascript:;" @click="start">开始</a>
            <a class="right" href="javascript:;" @click="stop">停止</a>
        </div>
    </e-layout>
</template>
<script>
export default {
    name: 'bar',
    data() {
        return {
            checkList: [{
                value: 'top',
                text: 'direction top'
            }, {
                value: 'left',
                text: 'direction left'
            }, {
                value: 'right',
                text: 'direction right'
            }, {
                value: 'bottom',
                text: 'direction bottom'
            }],
            value: 0,
            reverse: false,
        }
    },
    computed: {
        direction() {
            return this.checkList[this.value].value;
        }
    },
    methods: {
        start() {
            this.$ajaxBar({ event: 'start', position: this.direction ,reverse:this.reverse});
        },
        stop() {
            this.$ajaxBar({ event: 'stop' });
        },
        stopped() {
            // console.log('stopped');
        },
        started() {
            // console.log('started');
        }
    },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
