<template>
    <e-layout title="grid">
        <stu-header slot="header" title="grid">
        </stu-header>
        <e-check-icon v-model="hideLrBorder" text="hideLrBorder" default-type="no-check" default-color="g6" active-type="check" active-color="blue" :icon-size="20"></e-check-icon>
        <e-check-icon v-model="hideVerticalDividers" text="hideVerticalDividers" default-type="no-check" default-color="g6" active-type="check" active-color="blue" :icon-size="20"></e-check-icon>
        <e-check-icon v-model="hideTbBorder" text="hideTbBorder" default-type="no-check" default-color="g6" active-type="check" active-color="blue" :icon-size="20"></e-check-icon>
        <e-separator></e-separator>
        <div class="input-wrap plr30">
            <e-input style="height:1.333rem;" v-model="cols" label="cols:" type="number"></e-input>
        </div>
        <div class="plr10">
            <e-grid class="mt20" :cols="parseInt(cols)" :hide-vertical-dividers="hideVerticalDividers" :hide-lr-border="hideLrBorder" :hide-tb-border="hideTbBorder">
                <e-grid-item @click="go" v-for="(el,index) in list" :key="index">
                    <template>
                        <img slot="icon" :src="el.img" />
                    </template>
                    <template slot="label"> hello</template>
                </e-grid-item>
            </e-grid>
        </div>
    </e-layout>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            cols: 4,
            hideLrBorder: false,
            hideTbBorder: false,
            hideVerticalDividers: false,
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
                disabled: true,
            }, {
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
                disabled: true,
            }, {
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
                disabled: true,
            }]
        }
    },
    methods: {
        go() {
            alert('go');
        }
    }
}

</script>
