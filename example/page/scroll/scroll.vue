<template>
    <e-layout>
        <stu-header slot="header" title="scroll"></stu-header>
        <e-scroll pull-up-active  @pullDownHandle="pullDown1" @pullUpHandle="push1" style="height:50%">
            <e-list touch-active border-type="whole">
                <e-item v-for="el in arr1">
                    <e-item-side>
                        <img class="my-head" border border-color="blue" src="https://cn.vuejs.org/images/logo.png"/>
                    </e-item-side>
                    <e-item-main>
                        <div>
                            <p class="font18 g3">李方方</p>
                            <p class="font12 g9">励志学校</p>
                        </div>
                    </e-item-main>
                    <e-item-side align-items="start">
                        <e-icon type="arrow-right" color="g9" class="font20"></e-icon>
                    </e-item-side>
                </e-item>
            </e-list>
        </e-scroll>
        <e-scroll class="mt20" horizontal style="height:2.667rem;" snap=".demo-1">
            <div class="demo-1 tc">
                <img class="mt20" src="http://res.ekwing.com/images/student/qq.png" alt="">
                <p class="font14 text-g6">QQ</p>
            </div>
            <div class="demo-1 tc">
                <img class="mt20" src="http://res.ekwing.com/images/student/qq.png" alt="">
                <p class="font14 text-g6">QQ</p>
            </div>
            <div class="demo-1 tc">
                <img class="mt20" src="http://res.ekwing.com/images/student/qq.png" alt="">
                <p class="font14 text-g6">QQ</p>
            </div>
            <div class="demo-1 tc">
                <img class="mt20" src="http://res.ekwing.com/images/student/qq.png" alt="">
                <p class="font14 text-g6">QQ</p>
            </div>
            <div class="demo-1 tc">
                <img class="mt20" src="http://res.ekwing.com/images/student/qq.png" alt="">
                <p class="font14 text-g6">QQ</p>
            </div>
            <div class="demo-1 tc">
                <img class="mt20" src="http://res.ekwing.com/images/student/qq.png" alt="">
                <p class="font14 text-g6">QQ</p>
            </div>
            <div class="demo-1 tc">s
                <img class="mt20" src="http://res.ekwing.com/images/student/qq.png" alt="">
                <p class="font14 text-g6">QQ</p>
            </div>
            <div class="demo-1 tc">
                <img class="mt20" src="http://res.ekwing.com/images/student/qq.png" alt="">
                <p class="font14 text-g6">QQ</p>
            </div>
            <div class="demo-1 tc">
                <img class="mt20" src="http://res.ekwing.com/images/student/qq.png" alt="">
                <p class="font14 text-g6">QQ</p>
            </div>
            <div class="demo-1 tc">
                <img class="mt20" src="http://res.ekwing.com/images/student/qq.png" alt="">
                <p class="font14 text-g6">QQ</p>
            </div>
        </e-scroll>
        <div class="font14 pt30">
            <param-table :list="scrollInfo">
                <template slot="title">组件html tag：e-scroll</template>
                <template slot="tip">大部分参数是iscroll参数</template>
            </param-table>
        </div>
        <div class="font14">
            <param-table :list="scrollExt">
                <template slot="title">额外</template>
            </param-table>
        </div>
    </e-layout>
</template>
<script type="text/javascript">
import {eScroll} from '@/components';
import mergeProps from '@/../example/lib/mergeProps';
export default {
    data() {
        return {
            touchResult: {},
            select: true,
            areaText: 'hello everybody,my name is lifangfang.',
            arr1: [1, 2, 2,1,1,1,1,1,1,1,1,1,1],
            arr2: [1, 2, 2, 2, 3],
            scrollInfo:mergeProps(eScroll),
            scrollExt:[{
                name:'pullDrefreshtxt',
                type:'slot',
                default:'下拉刷新~'
            },{
                name:'realtimetxt',
                type:'slot',
                default:'松手加载~'
            },{
                name:'loadertxt',
                type:'slot',
                default:'加载中~'
            },{
                name:'upLoadmoretxt',
                type:'slot',
                default:'上拉加载更多~'
            },{
                name:'loaderendtxt',
                type:'slot',
                default:'---我是最后的底线---'
            },{
                name:'scrollEndHandle',
                type:'v-on/@'
            }]
        }
    },
    methods: {
        push1(cb) {
            setTimeout(() => {
                this.arr1.push(1);
                this.arr1.push(1);
                this.arr1.push(1);
                this.arr1.push(1);
                this.arr1.push(1);
                this.arr1.push(1);
                this.arr1.push(1);
                if (this.arr1.length == 5) {
                    cb(true);
                } else {
                    cb(false);
                }
                console.log(11);
            }, 1000);
        },
        pullDown1(cb) {
            this.arr1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            cb();
        },
        push2(cb) {
            this.arr2.push(1);
            this.arr2.push(1);
            if (this.arr2.length == 5) {
                cb(true);
            } else {
                cb(false);
            }
        },
        pullDown2(cb) {
            this.arr2 = [1, 1, 1, 1, 1, 1];
            cb();
        },
        change(postion) {
            console.log(postion);
        },
        scroll() {
            this.$refs.scrollPage.gotoPage(5);
        }
    }
}

</script>
<style lang="scss">
.my-head {
    width: 1.333rem;
    height: 1.333rem;
    border-radius: 50%;
    border:0.013rem;
}

.demo-1 {
    width: 4.0rem;
    height: 2.567rem;
    // margin: 0 0.267rem;
    vertical-align: middle;
    display: inline-block;
    border: 0.013rem solid #999;
    padding: 0 0.267rem;
}

</style>
