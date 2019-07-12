<template>
    <div class="e-switch" :class="switchClass" @click="trigger">
        <a ref="switchBtn" class="e-switch-btn" @click.stop="trigger" href="javascript:;" v-touch-pan.stop.horizontal="pan"></a>
    </div>
</template>
<script type="text/javascript">
import { width, css, style } from '../../../helpers/dom.js';
export default {
    name: 'e-switch',
    model: {
        prop: 'value',
        event: 'change',
    },
    props: {
        value: Boolean,
        activeColor: String,
        defaultColor:String,
        disabled:Boolean
    },
    computed: {
        switchClass() {
            let classes = [];
            if (this.active) {
                classes.push('active');
                this.activeColor ? classes.push(`bg-${this.activeColor}`) : classes.push('switch-active');
            }else{
                this.defaultColor ? classes.push(`bg-${this.defaultColor}`) : classes.push('switch-default');
            }
            return classes;
        }
    },
    data() {
        return {
            active: this.value,
            // activeBgColor: null,
        }
    },
    created() {
        // let div = document.createElement('div');
        // div.classList.add(`bg-${this.color}`);
        // document.body.appendChild(div);
        // this.activeBgColor = style(div, 'background-color');
        // div.remove();
    },
    methods: {
        trigger() {
            if(this.disabled){
                return false;
            }
            this.active = !this.active;
        },
        pan(value) {
            if(this.disabled){
                return false;
            }
            let switchWidth = width(this.$el);
            let switchBtnWidth = width(this.$refs.switchBtn);
            if (!this.active && value.direction === 'right') {
                if (value.distance.x < switchWidth - switchBtnWidth) {
                    css(this.$refs.switchBtn, {
                        left: value.distance.x + 'px',
                    });
                    if (value.isFinal) {
                        if (value.distance.x > (switchWidth - switchBtnWidth) / 2) {
                            this.active = true;
                        } else {
                            this.switchFalse();
                        }
                    }
                } else {
                    this.active = true;
                }
            }

            if (this.active && value.direction === 'left') {
                if (value.distance.x < switchWidth - switchBtnWidth) {
                    css(this.$refs.switchBtn, {
                        left: (switchWidth - switchBtnWidth - value.distance.x) + 'px'
                    });
                    if (value.isFinal) {
                        if (value.distance.x > (switchWidth - switchBtnWidth) / 2) {
                            this.active = false;
                        } else {
                            this.switchTrue();
                        }
                    }
                } else {
                    this.active = false;
                }
            }
        },
        switchFalse() {
            css(this.$refs.switchBtn, {
                left: '0.03rem'
            });
        },
        switchTrue() {
            let switchWidth = width(this.$el);
            let switchBtnWidth = width(this.$refs.switchBtn);
            css(this.$refs.switchBtn, {
                left: switchWidth - switchBtnWidth - 3 + 'px'
            });
        }
    },
    watch: {
        value(newVal) {
            this.active = newVal;
        },
        active(newVal) {
            this.$emit('change', this.active);
            newVal ? this.switchTrue() : this.switchFalse();
        },
        // switchClass() {
            // if (this.active) {
            //     css(this.$el, {
            //         'box-shadow': `0 0 0.067rem ${this.activeBgColor}`
            //     });
            // } else {
            //     css(this.$el, {
            //         'box-shadow': `0 0 0.067rem rgba(0, 0, 0, 0.4)`
            //     });
            // }
        // }
    }
}

</script>
