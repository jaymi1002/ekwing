<template>
    <e-layout>
        <stu-header title="list" slot="header">
        </stu-header>
        <p class="font18 bold tc mt20">e-list,e-item配合使用</p>
        <e-list class="mt20">
            <e-separator></e-separator>
            <template v-for="(el,index) in list" v-key="index">
                <e-item class="font18 border-pct60">
                    <!-- <e-item-side :width="50">
                        {{el.rank}}
                    </e-item-side> -->
                    <e-item-main>
                        {{el.name}}
                    </e-item-main>
                    <e-item-side>
                        <e-icon type="arrow-right" color="g9" :size="20"></e-icon>
                    </e-item-side>
                </e-item>
                <e-separator></e-separator>
            </template>
        </e-list>
        <e-list touch-active class="mt20">
            <e-separator></e-separator>
            <template v-for="(el,index) in list" v-key="index">
                <e-item class="font18 border-pct60">
                    <e-item-side>
                        <div class="flex flex-center">
                            <p class="mr20 rank text-blue">{{el.rank}}</p>
                            <e-head-img :src="el.logo" class="head-img"></e-head-img>
                        </div>
                    </e-item-side>
                    <e-item-main>
                        <div>
                            <p class="font16 text-g3">{{el.name}}</p>
                            <p class="font12 text-g6">{{el.grade}}</p>
                        </div>
                        
                    </e-item-main>
                    <e-item-side class="text-green">
                        {{el.score}}
                    </e-item-side>
                </e-item>
                <e-separator :width="590"></e-separator>
            </template>
        </e-list>
        <e-list touch-active active-class="rank-item-active" class="mt20">
            <e-separator></e-separator>
            <template v-for="(el,index) in list" v-key="index">
                <e-item class="font18 border-pct60">
                    <e-item-side>
                        <div class="flex flex-center">
                            <e-head-img :src="el.logo" class="head-img"></e-head-img>
                        </div>
                    </e-item-side>
                    <e-item-main>
                        <div>
                            <p class="font16 text-g3">{{el.name}}</p>
                            <p class="font12 text-g6 mt5">{{el.grade}}</p>
                        </div>
                        
                    </e-item-main>
                    <e-item-side class="text-green">
                        {{el.score}}
                    </e-item-side>
                </e-item>
                <e-separator :width="590"></e-separator>
            </template>
        </e-list>
        <e-list touch-active active-class="rank-item-active" class="mt20">
            <e-separator></e-separator>
            <template v-for="(el,index) in list" v-key="index">
                <e-item class="font18 border-pct60">
                    <e-item-side>
                        <div class="flex flex-center">
                            <p class="mr20 rank text-blue">{{el.rank}}</p>
                            <e-head-img :src="el.logo" class="head-img"></e-head-img>
                        </div>
                    </e-item-side>
                    <e-item-main>
                        <div>
                            <p class="font16 text-g3">{{el.name}}</p>
                            <p class="font12 text-g6">{{el.grade}}</p>
                        </div>
                        
                    </e-item-main>
                    <!-- <e-item-side class="text-green">
                        {{el.score}}
                    </e-item-side> -->
                </e-item>
                <e-separator :width="590"></e-separator>
            </template>
        </e-list>
    </e-layout>
</template>
<script type="text/javascript">
export default {
    name: 'list',
    data() {
        return {
            touchResult: {},
            select: true,
            areaText: 'hello everybody,my name is lifangfang.',
            arr: [1, 2, 2],
            list: [{
                rank: 0,
                name: '李方方',
                logo:'https://ekwing-oss-new.oss-cn-shanghai.aliyuncs.com/data/personal/51/1556526/logo/130/1553495010.jpg',
                grade:11,
                score:100,
            }, {
                rank: 1,
                name: '李方方',
                logo: "http://ekwing-oss-new.oss-cn-shanghai.aliyuncs.com/ekwing/201806041513341210691152503653.jpg",
                grade:12,
                score:99,
            }, {
                rank: 2,
                name: '李方方',
                logo:'https://ekwing-oss-new.oss-cn-shanghai.aliyuncs.com/data/personal/51/1556526/logo/130/1553495010.jpg',
                grade:10,
                score:89
            }]
        }
    },
    methods: {
        print(pramas) {
            this.touchResult = pramas;
        },
        alert() {
            alert(11);
        },
        push(cb) {
            this.arr.push(1);
            if (this.arr.length == 5) {
                cb(true);
            } else {
                cb(false);
            }
        },
        pullDown(cb) {
            cb();
        },
        change(postion) {
            console.log(postion);
        },
        scroll() {
            this.$refs.scrollPage.gotoPage(5);
        },
        goback(){
            window.history.go(-1);
        }
    },
    created() {
        // console.log(this.id);
    }
}

</script>
<style lang="scss">
.my-img {
    width: 5.0rem;
    height: 5.0rem;
}

.my-head {
    width: 1.333rem;
    height: 1.333rem;
}

.demo-1 {
    width: 10.0rem;
    height: 2.667rem; // margin-left:0.013rem;
    display: inline-block;
    background: green;
}

.my-item {
    &:after {
        left: 20% !important;
        right: 0 !important;
    }
}
.head-img{
    width: 1.067rem;
    height: 1.067rem;
}
.rank{
    width: 0.267rem;
}
.rank-item-active:active{
    background-color: blue;
}
.fix-header{
    // position: absolute;
    width: 100%;
    z-index:1;
    // height: 200px !important;
}

</style>
