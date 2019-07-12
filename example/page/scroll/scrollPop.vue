<template>
    <e-layout shadow>
        <stu-header>
            <p class="font20">scrollPage</p>
        </stu-header>
        <e-content>
        <e-check-icon default-type="no-check" active-type="check" :icon-size="20" v-model="wheel" text="是否显示3d滚动"></e-check-icon>
        <e-separator></e-separator>
        <p class="lh3 font16 plr30">
            选择结果:{{list[select]}}
        </p>
        <e-separator></e-separator>
        <p class="lh3 font16 tr">
            <e-button @click="$refs.scrollPop.show();" inline :width="250" active-type="scale" :height="76" theme="primary">显示pop</e-button>
        </p>
        <e-scroll-pop ref="scrollPop" :list="list" title="请选择地区" label="选择之后要点击确定哦" v-model="select" :wheel="wheel" :indicator="false">
        </e-scroll-pop>
        <div class="font14 pt30">
            <param-table :list="scrollPopInfo">
                <template slot="title">组件html tag：e-scroll-pop</template>
            </param-table>
        </div>
        </e-content>
    </e-layout>
</template>
<script type="text/javascript">
import {eScrollPop} from '@/components';
import mergeProps from '@/../example/lib/mergeProps';
export default {
    name: 'scroll-pop',
    data() {
        return {
            wheel: true,
            select: 1,
            list: ['北京', '上海', '深圳', '天津', '广州', '合肥', '青岛'],
            scrollPopInfo:mergeProps(eScrollPop),
            scrollPopExt:[]
        }
    }
}

</script>
