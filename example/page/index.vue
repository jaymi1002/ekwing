<template>
    <e-layout>
        <stu-header fixed title="ek 基础组件"></stu-header>
        <e-content>
        <p class="font18 lh3 tc bold">UI组件</p>
        <e-grid show-vertical-dividers :cols="3">
            <e-grid-item v-for="el in UI" @click="go(el);">
                <template>
                    <img slot="icon" src="https://cn.vuejs.org/images/logo.png" />
                </template>
                <template slot="label">{{el}}</template>
            </e-grid-item>
        </e-grid>
        <p class="font18 lh3 tc bold">表单</p>
        <e-grid show-vertical-dividers :cols="3">
            <e-grid-item v-for="el in form" @click="go(el);">
                <template>
                    <img slot="icon" src="https://cn.vuejs.org/images/logo.png" />
                </template>
                <template slot="label">{{el}}</template>
            </e-grid-item>
        </e-grid>
        <p class="font18 lh3 tc bold">选择</p>
        <e-grid show-vertical-dividers :cols="3">
            <e-grid-item v-for="el in check" @click="go(el);">
                <template>
                    <img slot="icon" src="https://cn.vuejs.org/images/logo.png" />
                </template>
                <template slot="label">{{el}}</template>
            </e-grid-item>
        </e-grid>
        <p class="font18 lh3 tc bold">弹出层</p>
        <e-grid show-vertical-dividers :cols="3">
            <e-grid-item v-for="el in popup" @click="go(el);">
                <template>
                    <img slot="icon" src="https://cn.vuejs.org/images/logo.png" />
                </template>
                <template slot="label">{{el}}</template>
            </e-grid-item>
        </e-grid>
        <p class="font18 lh3 tc bold">滚动</p>
        <e-grid show-vertical-dividers :cols="3">
            <e-grid-item v-for="el in scroll" @click="go(el);">
                <template>
                    <img slot="icon" src="https://cn.vuejs.org/images/logo.png" />
                </template>
                <template slot="label">{{el}}</template>
            </e-grid-item>
        </e-grid>
        <p class="font18 lh3 tc bold">手势自定义指令</p>
        <e-grid show-vertical-dividers :cols="3">
            <e-grid-item v-for="el in directives" @click="go(el);">
                <template>
                    <img slot="icon" src="https://cn.vuejs.org/images/logo.png" />
                </template>
                <template slot="label">{{el}}</template>
            </e-grid-item>
        </e-grid>
        </e-content>
    </e-layout>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            UI: ['accordion', 'ajaxbar', 'badge', 'buttonWrap', 'card', 'flex', 'grid', 'icon', 'img', 'layout', 'list', 'progress', 'separator'],
            popup: ['actionsheet', 'activePop', 'dialog', 'modal', 'toast'],
            form: ['button', 'calendar', 'counter', 'datetime', 'input', 'range', 'switch', 'textarea'],
            scroll: ['scroll', 'scrollPop', 'scrollPage'],
            check: ['checkIcon', 'checker', 'checkList', 'checkLevels'],
            // demoList:['accordion','actionsheet','ajaxbar','badge','button','buttonWrap','calendar','card','check','counter','datetime','grid','icon','img','input','layout','list','modal','progress','range','separator','scroll','scrollPop','scrollPage','switch','directives','textarea','test'],
            directives:['directives']
        }
    },
    methods: {
        go(str) {
            window.location.href = `/#/${str}`;
        }
    }
}

</script>
