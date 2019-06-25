<template>
    <e-layout shadow>
        <stu-header slot="header" title="button"></stu-header>
        <p class="tc lh3 font16">尝试一下</p>
        <e-separator></e-separator>
        <p class="tc lh2 font16">type:</p>
         <e-check-list type="radio" label-right v-model="type" default-type="no-check" active-type="check" :icon-size="20" reverse>
            <e-check-item v-for="item in typeList" :value="item">
                <span>{{item}}</span>
            </e-check-item>
        </e-check-list>
        <p class="tc lh2 font16">active-type:</p>
        <e-check-list type="radio" label-right v-model="activeType" default-type="no-check" active-type="check" :icon-size="20" reverse>
            <e-check-item v-for="item in activeTypeList" :value="item">
                <span>{{item}}</span>
            </e-check-item>
        </e-check-list>
        <p class="tc lh2 font16">status:</p>
        <e-check-list type="radio" label-right v-model="status" default-type="no-check" active-type="check" :icon-size="20" reverse>
            <e-check-item v-for="item in statusList" :value="item">
                <span>{{item}}</span>
            </e-check-item>
        </e-check-list>
        <p class="tc lh2 font16">其他:</p>
        <e-check-icon v-model="inline" text="inline" default-type="no-check" active-type="check"  :icon-size="20"></e-check-icon>
        <e-separator></e-separator>
        <e-check-icon v-model="plain" text="plain" default-type="no-check" active-type="check"  :icon-size="20"></e-check-icon>
        <div class="input-wrap plr30">
            <e-input type="number" v-model="width" label="宽度:" placeholder="请输入"></e-input>
        </div>
        <e-separator></e-separator>
        <div class="input-wrap plr30">
            <e-input type="number" v-model="height" label="高度:" placeholder="请输入"></e-input>
        </div>
        <e-separator></e-separator>
        <div class="pt20">
            <e-button class="mt20" theme="primary" :width="parseInt(width)" :height="parseInt(height)" :type="type" :active-type="activeType" :inline="inline" :loading="status ==='loading'" :disabled="status === 'disabled'" :plain="plain">
                完成
            </e-button>
            <e-button class="mt20" theme="primary" :width="parseInt(width)" :height="parseInt(height)" :type="type" :active-type="activeType" :inline="inline" :loading="status ==='loading'" :disabled="status === 'disabled'" :plain="plain">
                完成
            </e-button>
        </div>
        <div class="font14 ptb30">
            <param-table :list="buttonInfo">
                <template slot="title">组件html tag：e-button</template>
                <template slot="tip">
                    使用theme 需要在业务中配置
                </template>
            </param-table>
            <param-table :list="buttonExt">
            </param-table>
        </div>

        <div>
            <div class="mt20">
                <p class="tc lh2 font18">---文字按钮---</p>
                <e-button-text>
                    <span class="font14 text-primary">
                        文案
                    </span>
                </e-button-text>
                <e-button-text>
                    <span class="font16 text-g3">
                        文案
                    </span>
                </e-button-text>
                <e-button-text>
                    <span class="font18 text-primary">
                        文案
                    </span>
                </e-button-text>
            </div>
        </div>
        <div class="font14 ptb30">
            <param-table :list="buttonTextInfo">
                <template slot="title">组件html tag：e-button-text</template>
                <template slot="tip">只规定了点击效果为透明色</template>
            </param-table>
        </div>
    </e-layout>
</template>
<script>
import { eButton,eButtonText } from '@/components';
import mergeProps from '@/../example/lib/mergeProps';
export default {
    data() {
        return {
            width:750,
            height:96,
            typeList:['rect','cir','default'],
            activeTypeList:['scale','opacity'],
            inline:false,
            plain:false,
            statusList:['loading','default','disabled'],
            type:'cir',
            activeType:'scale',
            status:'default',
            buttonInfo:mergeProps(eButton),
            buttonExt:[{
                name:'default',
                type:'slot',
            }],
            buttonTextInfo:[{
                name:'default',
                type:'slot',
            }]
        }
    }
}

</script>
