<template>
    <e-layout>
        <stu-header slot="header" title="dialog"></stu-header>
        <div class="plr30">
            <e-input label="Title:" class="demo-input" type="text" v-model="title">
            </e-input>
            <e-separator></e-separator>
            <e-input label="Content:" class="demo-input" type="text" v-model="content">
            </e-input>
        </div>
        <e-button theme="primary" class="mt20" @click="alert">
            <span class="font18">alert</span>
        </e-button>
        <e-button theme="primary" class="mt20" @click="confirm">
            <span class="font18">confirm</span>
        </e-button>
        <e-button theme="primary" class="mt20" @click="alertSimple">
            <span class="font18">alert simple</span>
        </e-button>
        <e-button theme="primary" class="mt20" @click="confirmSimple">
            <span class="font18">confirm simple</span>
        </e-button>
        <div class="font14 pt30">
            <param-table :list="dialogInfo">
                <template slot="title">组件html tag：e-dialog</template>
                <template slot="tip">btnTheme 即：button theme</template>
            </param-table>
        </div>
        <div class="font14">
            <param-table :list="dialogExt">
                <template slot="title">额外</template>
            </param-table>
        </div>
        <div class="font14 pt30">
            <param-table :list="dialogSimpleInfo">
                <template slot="title">组件html tag：e-dialog-simple</template>
                <template slot="tip">btnColor 即：text-color</template>
            </param-table>
        </div>
        <div class="font14">
            <param-table :list="dialogExt">
                <template slot="title">额外</template>
            </param-table>
        </div>
    </e-layout>
</template>

<script type="text/javascript">
import {dialog,dialogSimple} from '@/components';
import mergeProps from '../../lib/mergeProps';
export default {
    data(){
        return {
            title:'即将挑战',
            content:'开启消息通知，更多资源上新早知道用于随堂作业，课后巩固',
            btnTheme:'primary',
            dialogInfo:Object.assign(mergeProps(dialog)),
            dialogExt:[{
                name:'default',
                type:'slot'
            },{
                name:'cancelHandle',
                type:'v-on/@',
                required:false,
            },{
                name:'confirmHandle',
                type:'v-on/@',
                required:false,
            }],
            dialogSimpleInfo:mergeProps(dialogSimple)
        }
    },
    methods: {
        alert() {
            this.$alert({
                title: this.title,
                content: this.content,
                btnTheme: this.btnTheme,
                image: 'http://res.ekwing.com/images/student/bell.png',
                confirmHandle() {
                    alert('confirm');
                },
                cancelHandle() {
                    alert('cancel');
                },
                enterClass: 'zoomIn',
                leaveClass: 'zoomOut',
                maskClickDisabled: true,
            });
        },
        confirm() {
            this.$confirm({
                title: this.title,
                content: this.content,
                btnTheme: this.btnTheme,
                image: 'http://res.ekwing.com/images/student/bell.png',
                confirmHandle() {
                    alert('confirm');
                },
                cancelHandle() {
                    alert('cancel');
                },
            });
        },
        alertSimple() {
            this.$alertSimple({
                title: this.title,
                content: this.content,
                btnColor: this.btnTheme,
                confirmHandle() {
                    alert('confirm');
                },
                maskClickDisabled: true,
            });
        },
        confirmSimple() {
            this.$confirmSimple({
                title:this.title,
                content: this.content,
                btnColor: this.btnTheme,
                confirmHandle() {
                    alert('confirm');
                },
                cancelHandle() {
                    alert('cancel');
                }
            });
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
