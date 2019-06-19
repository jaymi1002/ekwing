<template>
    <e-layout>
        <stu-header slot="header" title="ek 基础组件"></stu-header>
        <e-grid show-vertical-dividers :cols="3">
        	<e-grid-item v-for="el in demoList" @click="go(el);">
                <template>
                    <img slot="icon" src="https://cn.vuejs.org/images/logo.png" />
                </template>
                <template slot="label">{{el}}</template>
            </e-grid-item>
        </e-grid>
        <e-grid class="mt20" show-vertical-dividers :cols="factList.length / 3">
        	<e-grid-item v-for="el in factList" @click="go(el);">
                <template>
                    <img slot="icon" src="https://cn.vuejs.org/images/logo.png" />
                </template>
                <template slot="label">{{el}}</template>
            </e-grid-item>
        </e-grid>
    </e-layout>
</template>
<script type="text/javascript">
export default {
	data(){
		return {
			demoList:['accordion','actionsheet','ajaxbar','badge','button','buttonTab','calendar','card','check','counter','datetime','grid','icon','img','input','layout','list','modal','progress','range','scroll','scroll-page','switch','directives','test'],
			factList:['fact/getwordtoll']
		}
	},
    methods: {
        go(str) {
            window.location.href = `/#/${str}`;
        }
    }
}

</script>
