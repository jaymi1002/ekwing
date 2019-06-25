<template>
    <e-layout title="input">
        <stu-header slot="header">
            <p class="font20">input</p>
        </stu-header>
        <div class="login-input-wrap">
            <e-input class="login-input" ref="myInput" validate tip required type="number" v-model="text" placeholder="请输入验证码" :minlength="4" :maxlength="4">
                <div class="yzm text-blue font14 ml20">
                    获取验证码
                </div>
            </e-input>
        </div>
        <div class="bdb1px bd-solid bd-e0"></div>
        <div class="plr20">
            <div class="form-input-wrap">
                <e-input class="form-input" ref="myInput" placeholder="请输入验证码" validate required :disabled="false" type="text" v-model="text" :minlength="4" :maxlength="4">
                    <e-button class="yzm" :height="60" :width="200" plain type="cir" theme="primary">
                        获取验证码
                    </e-button>
                </e-input>
            </div>
        </div>
        <div class="bdb1px bd-solid bd-e0"></div>
        <div class="plr20">
            <e-input style="height:1.333rem;" ref="myInput" label="联系方式" validate tip required :disabled="false" type="tel" placeholder="请输入手机号" v-model="telNumber" @blurHandle="blur"></e-input>
        </div>
        <div class="bdb1px bd-solid bd-e0"></div>
        <div class="plr20">
            <e-input style="height:1.333rem;" ref="myInput" label="密码" validate tip required :disabled="false" type="password" placeholder="请输入密码" v-model="password"></e-input>
        </div>
        <div class="bdb1px bd-solid bd-e0"></div>
        <div class="plr20">
            <e-input style="height:1.333rem;" ref="myInput" autocomplete="off" spellcheck validate required :disabled="false" v-model="text" clear-hide>
                <p slot="label">
                    <e-icon type="face-smile" :size="24" color="blue"></e-icon>
                </p>
                位
            </e-input>
        </div>
        <div class="plr20">
            <e-input style="height:1.0rem;" align="right" label="选择多少" ref="myInput" autocomplete="off" spellcheck validate required hide-clear :disabled="false" v-model="text" clear-hide>
                位
            </e-input>
        </div>
        <e-separator></e-separator>
        <div class="font14 ptb30">
            <param-table :list="inputInfo">
                <template slot="title">组件html tag：e-input</template>
            </param-table>
        </div>
    </e-layout>
</template>
<script type="text/javascript">
import { eInput } from '@/components';
import mergeProps from '@/../example/lib/mergeProps';
export default {
    data() {
        return {
            telNumber: '1392',
            number: '',
            email: '1234',
            text: '',
            password:'',
            inputInfo:mergeProps(eInput)
        }
    },
    methods: {
        blur(errors, firstError) {
            console.log(firstError);
        }
    }
}

</script>
<style lang="scss">
.login-input-wrap {
    border-radius: 999px;
    background-color: #e5f7ff;
    height: 1.333rem;
    width: 8.667rem;
    padding: 0.133rem 0.533rem;
    box-sizing: border-box;
    display: flex;
    margin: 0.267rem auto;
    .login-input {
        flex: 1;
    }
    .yzm {
        line-height: 1.067rem;
    }
}

.form-input-wrap {
    display: flex;
    height: 1.333rem;
    align-items: center;
    .form-input {
        flex: 1;
    }
    .yzm {}
}

</style>
