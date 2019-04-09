<template>
    <e-layout head shadow title="actionsheet">
        <div class="lh2">
            <e-item b-border>
                <e-item-main justify-content="start">
                    <e-check-icon v-model="horizontal" text="horizontal"></e-check-icon>
                </e-item-main>
            </e-item>
            <e-item b-border>
                <e-item-main justify-content="start">
                    <e-check-icon v-model="showVerticalDividers" text="showVerticalDividers"></e-check-icon>
                </e-item-main>
            </e-item>
            <e-item b-border>
                <e-item-main justify-content="start">
                    <e-check-icon v-model="autoClose" text="autoClose"></e-check-icon>
                </e-item-main>
            </e-item>
            <e-item b-border>
                <e-item-main justify-content="start">
                    <e-check-icon v-model="maskClickDisabled" text="maskClickDisabled"></e-check-icon>
                </e-item-main>
            </e-item>
            <e-item b-border>
                <e-item-main justify-content="start">
                    <e-check-icon v-model="middle" text="middle"></e-check-icon>
                </e-item-main>
            </e-item>
            <e-item b-border>
                <e-item-main justify-content="start">
                    <e-check-icon v-model="noCancel" text="noCancel"></e-check-icon>
                </e-item-main>
            </e-item>
            <e-item b-border class="lh2">
                <e-item-main>
                    <!-- <p class="font16">show</p> -->
                </e-item-main>
                <e-item-side>
                    <a class="font14 text-g3" href="javascript:;" @click="$refs.actionsheet.show();">show</a>
                </e-item-side>
            </e-item>
        </div>
        <e-actionsheet ref="actionsheet" :horizontal="horizontal" :list="list" :show-vertical-dividers="showVerticalDividers" :no-cancel="noCancel" :mask-click-disabled="maskClickDisabled" :middle="middle" :auto-close="autoClose" :cols="cols"></e-actionsheet>
    </e-layout>
</template>
<script type="text/javascript">
export default {
    name: 'actionsheet',
    data() {
        return {
            list: [{
                title: 'QQ',
                img: 'http://res.ekwing.com/images/student/qq.png',
                color: 'blue',
            }, {
                title: '微信',
                img: 'http://res.ekwing.com/images/student/wechat.png',
                color: 'blue',
            }, {
                title: 'QQ朋友圈',
                img: 'http://res.ekwing.com/images/student/qzone.png',
                color: 'blue',
            }, {
                title: '微信朋友圈',
                img: 'http://res.ekwing.com/images/student/wx_zone68.png',
                color: 'blue',
            }],
            horizontal: false,
            cols: 2,
            showVerticalDividers: false,
            noCancel: false,
            autoClose: true,
            maskClickDisabled: false,
            middle: false
        }
    },
    methods: {}

}

</script>
