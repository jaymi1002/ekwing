<template>
    <e-layout title="datetime">
        <!-- <e-date ref="myDatetime" v-model="date" start-date="2018-04-01" end-date="2018-04-20"> -->
        <!-- </e-date> -->
        <!-- <e-time ref="myDatetime" v-model="time"> -->
        <!-- </e-time> -->
        <e-datetime ref="myDatetime" v-model="datetime" format="YYYY-MM-DD HH" start="2011-03-22 07" end="2016-03-23 10">
        </e-datetime>
        <e-scroll-pop ref="scrollPop" :list="list" v-model="select" :wheel="true" :indicator="false">
        </e-scroll-pop>
        <p class="lh2">
            <a href="javascript:;" @click="$refs.myDatetime.show();">显示</a>
        </p>
        <br>
        <p class="lh2">
            <a href="javascript:;" @click="$refs.scrollPop.show();">显示pop</a>
        </p>
        <br> {{datetime}} {{list[select]}}
    </e-layout>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            date: '2018-04-04',
            time: '17:25',
            datetime: '2016-03-02 17',
            select: 2,
            list: ['北京', '上海', '深圳', '天津', '广州', '合肥', '青岛']
        }
    }
}

</script>
