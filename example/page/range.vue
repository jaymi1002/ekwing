<template>
    <e-layout head title="range" shadow>
        <div class="range flex justify-center items-center">
            <div class="pct100">
                <e-range color="blue" v-model="progress"></e-range>
                <br>
                <e-range color="green" v-model="progressArr" side-show></e-range>
                <br>
            </div>
        </div>
    </e-layout>
</template>
<script type="text/javascript">
export default {
    name: 'range',
    data() {
        return {
            progress: 0,
            progressArr: [0, 20]
        }
    },
    methods: {

    }
}

</script>
<style type="text/css">
.range {
    margin-top: 0.667rem;
}

</style>
