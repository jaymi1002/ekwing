<template>
    <e-layout title="layout">
        <e-progress :total="10" :current="current"></e-progress>
        <div class="font16 tc">
        	<a href="javascript:;" @click="current++">
        		plus
        	</a>
        	<a href="javascript:;" @click="current--">
        		sub
        	</a>
        </div>
    </e-layout>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            current: 0,
        }
    },
    methods: {
        plus() {
            this.current++;
        }
    }
}

</script>
