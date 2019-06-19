<template>
    <e-layout>
        <stu-header slot="header">
            <p class="font20">actionsheet</p>
        </stu-header>
        <p class="example-table-title font16">组件html tag：e-actionsheet</p>
        <table class="example-table">
            <thead>
                <tr>
                    <th>参数</th>
                    <th>类型</th>
                    <th>是否必须</th>
                    <th>默认值</th>
                    <th>备注</th>
                </tr>
            </thead>  
            <tbody>
                <tr>
                    <th>list</th>
                    <th>数组</th>
                    <th>是</th>
                    <th>[]</th>
                    <th>格式：
                    {title:'北京烤鸭',
                    disabled:false,img:''}</th>
                </tr>
                <tr>
                    <th>title</th>
                    <th>String</th>
                    <th>否</th>
                    <th>''</th>
                    <th>标题</th>
                </tr>
                <tr>
                    <th>explain</th>
                    <th>String</th>
                    <th>否</th>
                    <th>''</th>
                    <th>解释说明</th>
                </tr>
                <tr>
                    <th>horizontal</th>
                    <th>Boolean</th>
                    <th>否</th>
                    <th>false</th>
                    <th>是否水平显示</th>
                </tr>
                <tr>
                    <th>autoClose</th>
                    <th>Boolean</th>
                    <th>否</th>
                    <th>true</th>
                    <th>选择之后是否自动关闭</th>
                </tr>
                <tr>
                    <th>maskClickDisabled</th>
                    <th>Boolean</th>
                    <th>否</th>
                    <th>false</th>
                    <th>是否禁用点击蒙层关闭</th>
                </tr>
                <tr>
                    <th>noCancel</th>
                    <th>Boolean</th>
                    <th>否</th>
                    <th>false</th>
                    <th>是否隐藏关闭按钮</th>
                </tr>
            </tbody>
        </table>

        <p class="example-table-title font16">尝试一下</p>
        <e-separator></e-separator>
        <e-check-icon v-model="horizontal" text="horizontal" default-type="no-check" default-color="g6" active-type="check" active-color="blue" :icon-size="20"></e-check-icon>
        <e-separator></e-separator>
        <e-check-icon v-model="autoClose" text="autoClose" default-type="no-check" default-color="g6" active-type="check" active-color="blue" :icon-size="20"></e-check-icon>
        <e-separator></e-separator>
        <e-check-icon v-model="maskClickDisabled" text="maskClickDisabled" default-type="no-check" default-color="g6" active-type="check" active-color="blue" :icon-size="20"></e-check-icon>
        <e-separator></e-separator>
        <e-check-icon v-model="noCancel" text="noCancel" default-type="no-check" default-color="g6" active-type="check" active-color="blue" :icon-size="20"></e-check-icon>
        <e-separator></e-separator>
        <div class="input-wrap plr30">
            <e-input v-model="title" label="title"></e-input>
         </div>
        <e-separator></e-separator>
        <div class="input-wrap plr30">
            <e-input v-model="explain" label="explain"></e-input>
         </div>
        <e-button class="font14 text-g3" theme="primary" @click="$refs.actionsheet.show();">show</e-button>
        <e-actionsheet ref="actionsheet" :title="title" :explain="explain" :horizontal="horizontal" :list="list" :no-cancel="noCancel" :mask-click-disabled="maskClickDisabled" :auto-close="autoClose"></e-actionsheet>
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
                disabled: true,
            }],
            horizontal: false,
            noCancel: true,
            autoClose: true,
            maskClickDisabled: false,
            title: '选择分享方式',
            explain: '分享文案说明',
        }
    },
    methods: {}

}

</script>
<style lang="scss">
    .input-wrap{
        height: 1.333rem;
    }
</style>
