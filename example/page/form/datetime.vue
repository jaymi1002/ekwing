<template>
    <e-layout>
        <stu-header slot="header">
            <p class="font20">datatime</p>
        </stu-header>
        <div class="plr30">
            <e-datetime ref="myDatetime" v-model="datetime" format="YYYY-MM-DD HH">
            </e-datetime>
            <div class="input-wrap plr30">
                <e-input type="text" v-model="datetime" label="datetime:" placeholder="请输入"></e-input>
            </div>
            <e-separator></e-separator>
            <p class="lh2 tr pt10">
                <e-button @click="$refs.myDatetime.show();" inline :width="250" active-type="scale" :height="76" param-table="primary">显示pop</e-button>
            </p>
        </div>
        <div class="font14 ptb30">
            <param-table :list="datetimeInfo">
                <template slot="title">组件html tag：e-datetime</template>
            </param-table>
        </div>
    </e-layout>
</template>
<script type="text/javascript">
import { eDateTime } from '@/components';
import mergeProps from '@/../example/lib/mergeProps';
export default {
    data() {
        return {
            start:'2011-03-22 07',
            end:'2016-03-23 10',
            date: '2018-04-04',
            time: '17:25',
            datetime: '2016-03-02 08',
            datetimeInfo:mergeProps(eDateTime)
        }
    },
    mounted(){
    }
}

</script>
