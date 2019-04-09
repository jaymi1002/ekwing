<template>
    <e-layout title="input">
        <e-list>
            <e-input bBorder ref="myInput" tip title="手机号码" validate required :disabled="false" type="tel" :value.sync="telNumber"></e-input>
            <e-input bBorder ref="myInput" tip title="数字" validate required :disabled="false" type="number" class="" :value.sync="number"></e-input>
            <e-input bBorder ref="myInput" tip title="邮箱地址" validate required :disabled="false" type="email" class="" :value.sync="email"></e-input>
        </e-list>
    </e-layout>
</template>
<script type="text/javascript">
export default {
    name: 'input',
    data() {
        return {
            telNumber: '',
            number: '',
            email: ''
        }
    }
}

</script>
