<template>
    <e-modal ref="modal" direction="bottom">
        <div class="e-scroll-pop">
            <div class="e-scroll-pop-top">
                <a href="javascript:;" class="text-g9 ml20 font14" @click="hide">取消</a>
                <a href="javascript:;" class="text-g3 mr20 font14" @click="sure">确定</a>
            </div>
            <div class="e-scroll-pop-content">
                <div class="scroller-wrap">
                    <e-scroller ref="year" :list="list" v-model="currentValue" :wheel="wheel">
                    </e-scroller>
                </div>
            </div>
        </div>
    </e-modal>
</template>
<script type="text/javascript">
    export default{
        name:'e-scroll-pop',
        model:{
            prop:'value',
            event:'change'
        },
        props:{
            list:{
                type:Array,
                required:true
            },
            value:{
                type:Number,
                required:true,
                default:0
            },
            wheel:{
                type:Boolean,
                default:true
            }
        },
        data(){
            return {
                currentValue:this.value
            }
        },
        methods:{
            show(){
                this.$refs.modal.show();
            },
            hide(){
                this.$refs.modal.hide();
            },
            sure() {
                this.$emit('change', this.currentValue);
                this.hide();
            }
        }
    }
</script>