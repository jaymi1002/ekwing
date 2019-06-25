<template>
    <e-layout>
        <stu-header slot="header" title="textarea">
        </stu-header>
        <div class="plr20">
            <e-textarea class="mt20 my-area font14" placeholder="请输入" :rows="20" v-model="areaText"></e-textarea>
            <e-textarea class="mt20 my-area" autosize counter v-model="areaText" autocomplete="off"></e-textarea>
        </div>
        <div class="font14 pt30">
            <param-table :list="textareaInfo">
                <template slot="title">组件html tag：e-textarea</template>
            </param-table>
        </div>
        <div class="font14">
            <param-table :list="textareaExt">
                <template slot="title">额外</template>
            </param-table>
        </div>
    </e-layout>
</template>
<script type="text/javascript">
import { eTextarea } from '@/components';
import mergeProps from '@/../example/lib/mergeProps';
export default {
    data() {
        return {
            areaText: '',
            textareaInfo: mergeProps(eTextarea),
            textareaExt: [{
                    name: 'focusHandle',
                    type: 'v-on/@'
                }, {
                    name: 'clickHandle',
                    type: 'v-on/@'
                },
                {
                    name: 'blurHandle',
                    type: 'v-on/@'
                },
                {
                    name: 'inputHandle',
                    type: 'v-on/@'
                },
                {
                    name: 'changeHandle',
                    type: 'v-on/@'
                }]
            }
        },
        computed: {},
            created() {},
            methods: {}
    }

</script>
<style lang="scss">
.my-area {
    border: 1px solid #6d6d6d;
    border-radius: 0.067rem;
}

.picker-panel {
    height: 4.0rem;
}

.box-day {
    height: 100%;
    position: relative;
}

.day-wheel {
    position: absolute;
    overflow: visible;
    height: 0.907rem;
    font-size: 0.48rem;
    top: 2.4rem;
    left: 0;
    right: 0; // color: $unchecked-date;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    .wheel-div {
        height: 0.907rem;
        line-height: 0.907rem;
        position: absolute;
        top: 0;
        width: 100%;
        text-align: center;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}

</style>
