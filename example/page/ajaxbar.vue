<template>
    <e-layout>
        <stu-header slot="header" title="ajaxbar"></stu-header>
        <p class="font18 tc lh3 bold fa">diretion</p>
        <e-check-list type="radio" label-right v-model="value" default-type="no-check" default-color="g6" active-type="check" active-color="blue" :icon-size="20">
            <e-check-item v-for="item in checkList" :value="item.value">
                <span>{{item.text}}</span>
            </e-check-item>
        </e-check-list>
        <p class="font18 tc lh3 bold fa">reverse</p>
        <e-check-icon default-type="no-check" default-color="g6" active-type="check" active-color="blue" :icon-size="20" v-model="reverse" text="reverse"></e-check-icon>
        <div class="fix p20 font16 text-g3">
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
            value: 'top',
            reverse: false,
        }
    },
    computed: {
        direction() {
            return this.value;
        }
    },
    methods: {
        start() {
            this.$ajaxBar({ event: 'start', position: this.direction, reverse: this.reverse, color: 'blue' });
        },
        stop() {
            this.$ajaxBar({ event: 'stop' });
        },
    },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
