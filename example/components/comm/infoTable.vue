<template>
    <div class="font14 example-table">
        <p class="example-table-title font16">
            <slot name="title">{{title}}</slot>
        </p>
        <table class="example-table font12">
            <thead>
                <tr>
                    <th>参数</th>
                    <th>类型</th>
                    <th>是否必须</th>
                    <th>默认值</th>
                    <th>备注</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="el in list">
                    <th>{{el.param}}</th>
                    <th>{{el.type}}</th>
                    <th>{{el.require ? '是' : '否'}}</th>
                    <th>{{el.default !== undefined ? el.default : '无'}}</th>
                    <th>{{el.comment}}</th>
                </tr>
            </tbody>
        </table>
        <p class="plr30 text-error lh2 font14" v-if="$slots.tip">
            注意：
            <slot name="tip">{{tip}}</slot>
        </p>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'info-table',
    props: {
        title: String,
        list: Array,
        tip: String
    }
}

</script>
<style lang="scss">
.example-table {
    width: 100%;
    line-height: 2;
    font-size: 0.373rem;
    border-top: 0.013rem solid #ddd;
    thead {
        background-color: #ddd;
    }
    th {
        text-align: center;
        border: 0.013rem solid #ddd;
    }
}

.example-table-title {
    text-align: center;
    font-weight: 700;
    line-height: 3;
    color: #333;
}

</style>
