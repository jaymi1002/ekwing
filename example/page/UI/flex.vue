<template>
    <e-layout>
        <stu-header>
            flex
        </stu-header>
        <e-content>
            <div class="font14">
                <p class="font16 tc lh2"> row > .col </p>
                <div class="flex-demo flex row">
                    <div class="col-1 blue">1</div>
                    <div class="col-1 red">1</div>
                    <div class="col-10 green">10</div>
                </div>
                <p class="font16 tc lh2"> row.reverse > .col </p>
                <div class="flex-demo flex row reverse">
                    <div class="col-2 blue">2</div>
                    <div class="col-2 red">2</div>
                    <div class="col-8 green">8</div>
                </div>
                <p class="font16 tc lh2">column</p>
                <div class="flex-demo flex column">
                    <div class="blue">blue</div>
                    <div class="red">red</div>
                    <div class="green">green</div>
                </div>
                <p class="font16 tc lh2">column.reverse</p>
                <div class="flex-demo flex column reverse">
                    <div class="blue">blue</div>
                    <div class="red">red</div>
                    <div class="green">green</div>
                </div>
                <p class="font16 tc lh2">flex-center</p>
                <div class="flex-demo-2 green flex flex-center">
                    <div class="content blue">
                        flex-center
                    </div>
                </div>
                <p class="font16 tc lh2">justify-(start、center、end、between、around)</p>
                <div class="flex-demo-2 green flex justify-center">
                    <div class="content blue">
                        justify-center
                    </div>
                </div>
                <p class="font16 tc lh2">items-(start、center、end、baseline、stretch)</p>
                <div class="flex-demo-2 green flex items-center">
                    <div class="content blue">
                        items-center
                    </div>
                </div>
                <p class="font16 tc lh2">self-(start、center、end、baseline、stretch)</p>
                <div class="flex-demo-3 green flex ">
                    <div class="content blue self-start">
                        start
                    </div>
                    <div class="content blue self-center">
                        center
                    </div>
                    <div class="content blue self-end">
                        end
                    </div>
                    <div class="content blue self-baseline">
                        baseline
                    </div>
                    <div class="content blue self-baseline" style="height:2.667rem;line-height:2.667rem">
                        baseline
                    </div>
                </div>
                <p class="font16 tc lh2">content-(start、center、end、between、around、stretch)</p>
                <div class="flex-demo-3 green flex content-center">
                    <div class="content blue">
                    </div>
                    <div class="content blue">
                    </div>
                    <div class="content blue">
                    </div>
                    <div class="content blue">
                    </div>
                    <div class="content blue">
                    </div>
                    <div class="content blue">
                    </div>
                    <div class="content blue">
                    </div>
                    <div class="content blue">
                    </div>
                </div>
                <p class="font16 tc lh2">no-wrap、wrap-reverse</p>
                <div class="flex-demo-3 green flex wrap-reverse">
                    <div class="content blue">
                        1
                    </div>
                    <div class="content blue">
                        2
                    </div>
                    <div class="content blue">
                        3
                    </div>
                    <div class="content blue">
                        4
                    </div>
                    <div class="content blue">
                        5
                    </div>
                    <div class="content blue">
                        6
                    </div>
                    <div class="content blue">
                        7
                    </div>
                    <div class="content blue">
                        8
                    </div>
                    <div class="content blue">
                        9
                    </div>
                </div>
            </div>
        </e-content>
    </e-layout>
</template>
<script type="text/javascript">
export default {
    name: 'flex',
}

</script>
<style lang="scss" scoped>
.flex-demo {
    div {
        height: 1.333rem;
        text-align: center;
        line-height: 1.333rem;
        color: #fff;
        border-radius: 0.133rem;
    }
}

.flex-demo-2 {
    height: 2.667rem;
    color: #fff;
    .content {
        height: 1.333rem;
        width: 2.667rem;
        text-align: center;
        line-height: 1.333rem;
    }
}

.flex-demo-3 {
    height: 6.667rem;
    color: #fff;
    .content {
        height: 1.333rem;
        width: 1.333rem;
        text-align: center;
        line-height: 1.333rem;
        margin-left: 0.067rem;
        margin-top: 0.067rem;
    }
}


.red {
    background-color: #FA5151;
}

.green {
    background-color: #40bb8a;
}

.blue {
    background-color: #46c3ff;
}

</style>
