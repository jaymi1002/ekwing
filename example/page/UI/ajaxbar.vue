<template>
    <e-layout>
        <stu-header slot="header" title="ajaxbar"></stu-header>
        <p class="example-table-title font16">尝试一下</p>
        <p class="font18 tc lh3 bold fa">diretion</p>
        <e-check-list type="radio" label-right v-model="value" default-type="no-check" active-type="check" :icon-size="20" reverse>
            <template v-for="item in checkList">
                <e-check-item :value="item.value">
                    <span>{{item.text}}</span>
                </e-check-item>
                <e-separator></e-separator>
            </template>
        </e-check-list>
        <p class="font18 tc lh3 bold fa">reverse</p>
        <e-check-icon default-type="no-check" active-type="check" :icon-size="20" v-model="reverse" text="reverse"></e-check-icon>
        <div class="fix p20 font16 text-g3">
            <a class="left" href="javascript:;" @click="start">开始</a>
            <a class="right" href="javascript:;" @click="stop">停止</a>
        </div>
        <div class="font14 ptb30">
            <param-table :list="ajaxBarInfo">
                <template slot="title">组件html tag：e-actionsheet</template>
                <template slot="tip">
                    使用color 需要在业务中配置 bg-color
                </template>
            </param-table>
        </div>
        <pre class="font14">
        开始：
            this.$ajaxBar({ 
                event: 'start', 
                position: this.direction, 
                reverse: this.reverse 
            });
        停止:
            this.$ajaxBar({ event: 'stop' });
        </pre>
    </e-layout>
</template>
<script>
import {eAjaxBar} from '@/components';
import mergeProps from '@/../example/lib/mergeProps';
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
            ajaxBarInfo:mergeProps(eAjaxBar)
        }
    },
    computed: {
        direction() {
            return this.value;
        }
    },
    methods: {
        start() {
            this.$ajaxBar({ event: 'start', position: this.direction, reverse: this.reverse });
        },
        stop() {
            this.$ajaxBar({ event: 'stop' });
        },
    },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.input-wrap {
    height: 1.333rem;
}

</style>
