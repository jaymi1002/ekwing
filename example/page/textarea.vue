<template>
    <e-layout title="textarea">
        <div class="plr20">
            <e-textarea class="mt20 my-area font14" placeholder="请输入" :rows="20" v-model="areaText"></e-textarea>
            <e-textarea class="mt20 my-area" autosize counter v-model="areaText" autocomplete="off"></e-textarea>
        </div>
        <div class="picker-panel">
            <!--other box-->
            <!-- <div class="box-day">
                <div class="check-line"></div>
                <div class="day-checked">
                    <div class="day-list">
                        <div class="list-div" v-for="day in renderListDay">
                            {{day.value}}
                        </div>
                    </div>
                </div>
                <div class="day-wheel" style="transform: rotate3d(1, 0, 0, 0deg)">
                    <div class="wheel-div" style="transform: rotate3d(1, 0, 0, 0deg) translate3d(0px, 0px, 2.5rem)">
                        1
                    </div>
                    <div class="wheel-div" style="transform: rotate3d(1, 0, 0, 20deg) translate3d(0px, 0px, 2.5rem)">
                        2
                    </div>
                    <div class="wheel-div" style="transform: rotate3d(1, 0, 0, 40deg) translate3d(0px, 0px, 2.5rem)">
                        3
                    </div>
                    <div class="wheel-div" style="transform: rotate3d(1, 0, 0, 60deg) translate3d(0px, 0px, 2.5rem)">
                        4
                    </div> 
                    <div class="wheel-div" style="transform: rotate3d(1, 0, 0, 80deg) translate3d(0px, 0px, 2.5rem)">
                        5
                    </div>
                    <div class="wheel-div" style="transform: rotate3d(1, 0, 0, -20deg) translate3d(0px, 0px, 2.5rem)">
                        6
                    </div>
                    <div class="wheel-div" style="transform: rotate3d(1, 0, 0, -40deg) translate3d(0px, 0px, 2.5rem)">
                        7
                    </div>
                    <div class="wheel-div" style="transform: rotate3d(1, 0, 0, -60deg) translate3d(0px, 0px, 2.5rem)">
                        8
                    </div>
                    <div class="wheel-div" style="transform: rotate3d(1, 0, 0, -80deg) translate3d(0px, 0px, 2.5rem)">
                        9
                    </div><div class="wheel-div" style="transform: rotate3d(1, 0, 0, -100deg) translate3d(0px, 0px, 2.5rem)">
                        9
                    </div><div class="wheel-div" style="transform: rotate3d(1, 0, 0, -120deg) translate3d(0px, 0px, 2.5rem)">
                        9
                    </div><div class="wheel-div" style="transform: rotate3d(1, 0, 0, -140deg) translate3d(0px, 0px, 2.5rem)">
                        9
                    </div><div class="wheel-div" style="transform: rotate3d(1, 0, 0, -160deg) translate3d(0px, 0px, 2.5rem)">
                        9
                    </div><div class="wheel-div" style="transform: rotate3d(1, 0, 0, -180deg) translate3d(0px, 0px, 2.5rem)">
                        9
                    </div>
                </div>
            </div> -->
            <!--other box-->
        </div>
    </e-layout>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            areaText: '',
        }
    },
    computed: {
        renderListDay() {
            /* get currentMonthLenght */
            let days = [];
           	for (var i = 0; i < 10; i++) {
           		days.push({
           			value:i
           		});
           	}
           	return days;
        },
    },
    created() {
        window.myInput = this;
    },
    methods: {
        getError() {
            console.log(this.$refs.myInput.firstError);
        }
    }
}

</script>
<style lang="scss">
.my-area {
    border: 1px solid #6d6d6d;
    border-radius: 0.067rem;
}
.picker-panel{
	height: 4.0rem;
}
.box-day{
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
    right: 0;
    // color: $unchecked-date;
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
