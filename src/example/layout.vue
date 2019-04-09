<template>
    <e-layout :head="head" head-color="f5" title="layout">
        <template slot="headerRightSlot" v-if="headerRightSlot">
            <e-icon type="arrow-right" color="g3" size="2em"></e-icon>
        </template>
        <template slot="headerLeftSlot" v-if="headerLeftSlot">
            <e-icon type="close" color="g3" size="2em"></e-icon>
        </template>
        <template slot="headerTitleSlot" v-if="headerTitleSlot">
        	<div class="tc">
				<p class="font18 text-g3">单词闯关</p>
				<p class="font16 text-g9">unit 3 section 4</p>
            </div>
        </template>
        <div class="lh2">
            <e-item b-border>
                <e-item-main>
                    <e-check-icon class="pct100" v-model="head" text="head"></e-check-icon>
                </e-item-main>
            </e-item>
            <e-item b-border>
                <e-item-main>
                    <e-check-icon class="pct100" v-model="headerRightSlot" text="headerRightSlot"></e-check-icon>
                </e-item-main>
            </e-item>
            <e-item b-border>
                <e-item-main>
                    <e-check-icon class="pct100" v-model="headerTitleSlot" text="headerTitleSlot"></e-check-icon>
                </e-item-main>
            </e-item>
            <e-item b-border>
                <e-item-main>
                    <e-check-icon class="pct100" v-model="headerLeftSlot" text="headerLeftSlot"></e-check-icon>
                </e-item-main>
            </e-item>
        </div>
    </e-layout>
</template>
<script type="text/javascript">
export default {
    name: 'layout',
    data() {
        return {
            head: true,
            headerRightSlot:true,
            headerTitleSlot:false,
            headerLeftSlot:false,
        }
    },
    methods: {}
}

</script>
