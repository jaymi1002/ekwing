<template>
    <e-layout head title="button" shadow>
        <stu-header slot="header" title="button"></stu-header>
        <div style="padding-bottom:2.667rem;">
            <p class="tc font18">w:750 h:96 rect opacity</p>
            <e-button class="mt20" theme="primary" type="rect">
                完成
            </e-button>
            <e-button theme="primary" loading class="mt20" type="rect">
                <span class="font14">完成</span>
            </e-button>
            <e-button theme="primary" disabled class="mt20" type="rect">
                <span class="font14">完成</span>
            </e-button>
            <div class="tc mt20">
                <p class="tc font18">w:690 h:96 cir opacity</p>
                <e-button theme="primary" :width="690" inline class="mt20" type="cir">
                    <span class="font16">完成</span>
                </e-button>
                <e-button theme="primary" loading :width="690" inline class="mt20" type="cir">
                    <span class="font16">完成</span>
                </e-button>
                <e-button theme="primary" disabled :width="690" inline class="mt20" type="cir">
                    <span class="font16">完成</span>
                </e-button>
            </div>
            <div class="tc mt20">
                <p class="tc font18">w:590 h:96 default opacity</p>
                <e-button theme="primary" :width="590" inline class="mt20">
                    <span class="font16">完成</span>
                </e-button>
                <e-button theme="primary" loading :width="590" inline class="mt20">
                    <span class="font16">完成</span>
                </e-button>
                <e-button theme="primary" disabled :width="590" inline class="mt20">
                    <span class="font16">完成</span>
                </e-button>
            </div>
            <div class="tc mt20">
                <p class="tc font18">w:300 h:76 cir scale</p>
                <e-button theme="primary" inline :width="300" :height="76" active-type="scale" class="mt20" type="cir">
                    <span class="font16">完成</span>
                </e-button>
                <br>
                <e-button theme="primary" loading :width="300" inline :height="76" class="mt20" type="cir" active-type="scale">
                    <span class="font16">完成</span>
                </e-button>
                <br>
                <e-button theme="primary" disabled class="mt20" :width="300" :height="76" inline type="cir">
                    <span class="font16">完成</span>
                </e-button>
            </div>
            <div class="tc mt20">
                <p class="tc font18">w:300 h:76 default scale</p>
                <e-button theme="primary" inline :width="300" :height="76" active-type="scale" class="mt20" type="default">
                    <span class="font16">完成</span>
                </e-button>
                <br>
                <e-button theme="primary" loading :width="300" inline :height="76" class="mt20" type="default" active-type="scale">
                    <span class="font16">完成</span>
                </e-button>
                <br>
                <e-button theme="primary" disabled class="mt20" :width="300" :height="76" inline type="default">
                    <span class="font16">完成</span>
                </e-button>
            </div>
            <div class="tc mt20">
                <p class="tc font18">w:300 h:76 cir scale plain</p>
                <e-button theme="primary" plain inline :width="300" :height="76" active-type="scale" class="mt20" type="cir">
                    <span class="font16">完成</span>
                </e-button>
                <br>
                <e-button theme="primary" plain loading :width="300" inline :height="76" class="mt20" type="cir" active-type="scale">
                    <span class="font16">完成</span>
                </e-button>
                <br>
                <e-button theme="primary" plain disabled class="mt20" :width="300" :height="76" inline type="cir">
                    <span class="font16">完成</span>
                </e-button>
            </div>
            <p class="tc font18">w:300 h:76 inline</p>
            <e-button theme="primary" inline class="mt20 ml20" :width="300" :height="76" active-type="scale" type="default">
                <span class="font16">完成</span>
            </e-button>
            <e-button theme="primary" inline class="mt20 ml20" :width="300" :height="76" active-type="scale" type="default">
                <span class="font16">完成</span>
            </e-button>
            <e-button theme="primary" inline class="mt20 ml20" :width="300" :height="76" active-type="scale" type="cir">
                <span class="font16">完成</span>
            </e-button>
            <e-button theme="primary" inline class="mt20 ml20" :width="300" :height="76" active-type="scale" type="cir">
                <span class="font16">完成</span>
            </e-button>
            <e-button theme="primary" inline disabled class="mt20" :width="300" :height="76" type="rect">
                <span class="font16">完成</span>
            </e-button>
            <div class="mt20">
                <p class="tc font18">文字按钮</p>
                <e-button-text>
                    <span class="font14 text-blue">
                        文案
                    </span>
                </e-button-text>
                <e-button-text>
                    <span class="font16 text-blue">
                        文案
                    </span>
                </e-button-text>
                <e-button-text>
                    <span class="font18 text-blue">
                        文案
                    </span>
                </e-button-text>
            </div>
            <stu-button theme="primary" inline class="mt20" :width="300" :height="76">
                <span class="font16">完成</span>
            </stu-button>
            <!-- <div style="height:1.733rem;width:100%;bottom:0;" class="flex justify-center items-center bg-df abs">
                <e-button theme="stu-primry-1" inline class="mr20" :width="300" :height="76" active-type="scale" type="default">
                    <span class="font16">完成</span>
                </e-button>
            </div> -->
        </div>
       <!--  <div style="height:1.733rem;width:100%;bottom:0;" class="bdt1px bdt-solid bd-ec bg-white flex justify-end items-center abs">
            <e-button theme="stu-primry-2" inline class="mr30" :width="210" :height="76" active-type="scale" type="cir">
                <span class="font16">完成</span>
            </e-button>
        </div> -->
        <e-button-wrap type="rect" theme="primary" style="position:absolute;bottom:0;">
            <e-button-item plain>取消</e-button-item>
            <e-button-item>确定</e-button-item>
        </e-button-wrap>
        <e-button-wrap type="cir" theme="primary" class="bg-ddd" style="position:absolute;bottom:0;">
            <e-button-item plain>取消</e-button-item>
            <e-button-item>确定</e-button-item>
        </e-button-wrap>
        
    </e-layout>
</template>
<script>
import stuButton from '@example/components/comm/button.vue';
export default {
    data() {
        return {}
    },
    methods: {},
    components: {
        stuButton
    },
    created() {},
    methods: {
        alert(str) {
            this.$alert({
                title:'即将挑战',
                content:'开启消息通知，更多资源上新早知道用于随堂作业，课后巩固',
                btnTheme:'primary',
                image:'https://cn.vuejs.org/images/logo.png',
                confirmHandle(){
                    alert('closed');
                },
                enterClass:'zoomIn'
            });
        },
        confirm(){
            this.$confirmSimple({
                title:'短短的小标题',
                content:'有小标题的弹窗就这样排列显示超过就折行吧~',
                btnColor:'g3',
                cancelHandle(){
                    alert('cancel');
                },
                confirmHandle(){
                    alert('confirm');
                }
            });
        }
    }
}

</script>
<style lang="scss">

</style>
