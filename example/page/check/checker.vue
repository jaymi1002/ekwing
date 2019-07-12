<template>
    <e-layout>
        <stu-header title="checker"></stu-header>
        <e-content>
        <p class="tc font16 lh3 text-g3">e-checker</p>
        <e-check-icon v-model="radio" text="radio" default-type="no-check" active-type="check" :icon-size="16"></e-check-icon>
        <e-separator></e-separator>
        <e-checker v-model="selectData" class="flex row" :type="radio ? 'radio' : 'checkbox'" default-item-class="demo-default bd-g9" selected-item-class="demo-selected" :max="3" tip disabled-item-class="demo-disabled">
            <div class="col-4 flex flex-center" v-for="el in freedomList">
                <e-checker-item :value="el">
                    <span class="font14">{{el.text}}</span>
                </e-checker-item>
            </div>
        </e-checker>
        <div class="font14 ptb30">
            <param-table :list="checkerInfo">
                <template slot="title">组件html tag：e-checker</template>
            </param-table>
        </div>
        <div class="font14 ptb30">
            <param-table :list="checkerItemInfo">
                <template slot="title">组件html tag：e-checker-item</template>
            </param-table>
        </div>
        </e-content>
    </e-layout>
</template>
<script type="text/javascript">
import {eChecker,eCheckerItem} from '@/components';
import mergeProps from '@/../example/lib/mergeProps';
export default {
    data() {
        return {
            freedomList: [{
                text: '不设定',
            }, {
                text: '总分的50%',
            }, {
                text: '总分的60%',
            }, {
                text: '总分的70%',
            }, {
                text: '总分的80%',
            }],
            selectData: [],
            radio: false,
            checkerInfo: mergeProps(eChecker),
            checkerItemInfo: mergeProps(eCheckerItem)
        }
    },
    watch: {
        radio(newVal) {
            if (newVal) {
                this.selectData = '';
            } else {
                this.selectData = [];
            }
        }
    }
}

</script>
<style lang="scss">
.demo-item {
    border-width: 0.013rem;
    border-style: solid;
    padding: 0.267rem 0.267rem;
    border-radius: 0.067rem;
    width: 2.4rem;
    height: 0.4rem;
    margin-top: 0.267rem;
    text-align: center;
}

.demo-selected {
    @extend .demo-item;
    border-color:#40bb8a;
    color:#40bb8a;
    position: relative;
}

.demo-default {
    @extend .demo-item;
    background-color: #f0f2f5;
    border-color:#f0f2f5;
}

.demo-disabled {
    @extend .demo-item;
    border-color: #eee;
}

.accordion-active {
    .accordion-item-content {
        background-color: #f8f8f8;
    }
}
</style>
