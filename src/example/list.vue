<template>
    <e-layout head title="list" shadow>
        <p class="font18 bold tc mt20">e-list,e-item配合使用</p>
        <e-list touch-active border-type="whole" class="mt20">
            <e-item class="font18">
                hello everyone,
            </e-item>
            <e-item class="font18">
                hello everyone,
            </e-item>
        </e-list>
        <p class="font18 bold tc mt20">e-list,e-item,e-item-main,e-item-side 配合使用</p>
        <e-list touch-active border-type="whole" class="mt20">
            <e-item class="font18">
                <e-item-side>
                    <e-icon type="face-smile" size="2em"></e-icon>
                </e-item-side>
                <e-item-main>
                    hello everyone,
                </e-item-main>
            </e-item>
            <e-item class="font18">
                <e-item-main justify-content="end">
                    hello everyone,
                </e-item-main>
                <e-item-side>
                    <e-icon type="arrow-right" color="g9" size="1.2em"></e-icon>
                </e-item-side>
            </e-item>
            <e-item class="font18">
                <e-item-main>
                    hello everyone,
                </e-item-main>
                <e-item-side>
                    <e-icon type="arrow-right" color="g9" size="1.2em"></e-icon>
                </e-item-side>
            </e-item>
            <e-item class="font18">
                <e-item-side>
                    <e-icon type="face-smile" size="2em"></e-icon>
                </e-item-side>
                <e-item-main>
                    hello everyone,
                </e-item-main>
                <e-item-side justify-content="end">
                    <e-icon type="arrow-right" color="g9" size="1.2em"></e-icon>
                </e-item-side>
            </e-item>
        </e-list>
        <p class="font18 bold tc mt20">e-item单独使用</p>
        <e-item b-border class="font18">
            <e-item-side>
                <e-icon type="face-smile" class="font36"></e-icon>
            </e-item-side>
            <e-item-main class="font16" algin-items="center" justify-content="start">
                北京，简称“京”，是中华人民共和国首都、直辖市、国家中心城市、超大城市.
            </e-item-main>
        </e-item>
        <e-item b-border class="font18">
            <e-item-side>
                <e-icon type="face-smile" class="font36"></e-icon>
            </e-item-side>
            <e-item-main class="font16" algin-items="center" justify-content="start">
                北京，简称“京”，是中华人民共和国首都、直辖市、国家中心城市、超大城市.
            </e-item-main>
            <e-item-side justify-content="end">
                <e-icon type="arrow-right" color="g9" size="1.2em"></e-icon>
            </e-item-side>
        </e-item>
        <e-item b-border class="font18">
            <e-item-side>
                0
            </e-item-side>
            <e-item-main class="font16" algin-items="center" justify-content="start">
                北京，简称“京”，是中华人民共和国首都、直辖市、国家中心城市、超大城市.
            </e-item-main>
            <e-item-side justify-content="end">
                100
            </e-item-side>
        </e-item>

        <p class="font18 bold tc mt20">列表示例</p>
        <e-list class="mt20" touch-active border-type="incomplete" v-touch-swipe.vertical.stop.prevent="change">
            <e-item>
                <e-item-side>
                    <e-head-img class="my-head" border border-color="blue" src="https://cn.vuejs.org/images/logo.png"></e-head-img>
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
            <e-item>
                <e-item-side>
                    <e-head-img class="my-head" border border-color="blue" src="https://cn.vuejs.org/images/logo.png"></e-head-img>
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
        <p class="plr20 font18 tl mt20 text-g9">注：以上组件除e-list，布局都是flex，都支持属性justify-content align-items flex-direction</p>
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

</style>
