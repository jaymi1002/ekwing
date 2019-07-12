<template>
    <e-layout>
        <stu-header title="activePop"></stu-header>
        <e-content>
        <e-active-pop ref="activePop" type="confirm" image="http://res.ekwing.com/images/student/background_wordmate.png" btn-theme="primary" @cancelHandle="cancelHandle" @confirmHandle="confirmHandle">
            <template slot="title">我的</template>
            <template slot="content">
                <ul class="tl">
                    <li>开启消息通知，更多资源上新早知道用于随堂作业，课后巩固</li>
                    <li>开启消息通知，更多资源上新早知道用于随堂作业，课后巩固</li>
                    <li>开启消息通知，更多资源上新早知道用于随堂作业，课后巩固</li>
                    <li>开启消息通知，更多资源上新早知道用于随堂作业，课后巩固</li>
                </ul>
            </template>
        </e-active-pop>
        <e-button theme="primary" class="mt20" @click="activePop">
            <span class="font18">active pop</span>
        </e-button>
        <div class="font14 pt30">
            <param-table :list="activePopInfo">
                <template slot="title">组件html tag：e-active-pop</template>
                <template slot="tip">btnTheme 即：button theme</template>
            </param-table>
        </div>
        <div class="font14">
            <param-table :list="activePopExt">
                <template slot="title">额外</template>
            </param-table>
        </div>
        </e-content>
    </e-layout>
</template>
<script type="text/javascript">
import {activePop} from '@/components';
import mergeProps from '../../lib/mergeProps';
export default {
	data(){
		return {
			activePopInfo:mergeProps(activePop),
			activePopExt:[{
                name:'title',
                type:'slot',
            },{
                name:'content',
                type:'slot',
            },{
                name:'default',
                type:'slot',
            },{
                name:'cancelHandle',
                type:'v-on/@',
                required:false,
            },{
                name:'confirmHandle',
                type:'v-on/@',
                required:false,
            }]
		}
	},
    methods: {
        activePop() {
            this.$refs.activePop.show();
        },
        cancelHandle() {
            alert('cancel');
        },
        confirmHandle() {
            alert('confirm');
        },
    }
}

</script>
