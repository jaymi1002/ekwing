<template>
    <div class="e-ajax-bar" :class="classes" :style="style">
    </div>
</template>
<script type="text/javascript">
function getTranslateStyle({ horizontal, per, reverse }) {
    if (horizontal) {
        let x = -(100 - per)
        if (reverse) {
            x = -x;
        }
        return { transform: `translate3d(${x}%,0,0)` };
    } else {
        let y = -(100 - per);
        if (reverse) {
            y = -y;
        }
        return { transform: `translate3d(0,${y}%,0` };
    }
}
export default {
    name: 'e-ajax-bar',
    props: {
        color: {
            type: String,
            default: 'blue',
        },
        barWidth: {
            type: String,
            default: '0.1rem'
        },
        position: {
            type: String,
            default: 'top',
            validator: val => { return ['top', 'bottom', 'left', 'right'].indexOf(val) > -1 }
        },
        reverse: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            animate: true,
            progress: 0,
            show: false,
            calls: 0,
        }
    },
    computed: {
        style() {
            let style = {};
            if (this.horizontal) {
                style.height = this.barWidth;
            } else {
                style.width = this.barWidth;
            }
            style.opacity = this.show ? '1' : '0';
            style = Object.assign(style, getTranslateStyle({
                horizontal: this.horizontal,
                per: this.progress,
                reverse: this.reverse
            }));
            return style;
        },
        classes() {
            return [this.animate ? '' : 'no-transiton',
                `e-ajax-bar-${this.position}`,
                `bg-${this.color}`
            ];
        },
        horizontal() {
            return (this.position === 'top' || this.position === 'bottom');
        }
    },
    methods: {
        start() {
            this.progress = 0;
            this.calls++;
            if (this.calls > 1) {
                return;
            }
            this.$emit('started');
            clearTimeout(this.timer);
            this.show = true;
            this.animate = true;
            let _this = this;
            this.timer = setTimeout(function() {
                _this._work();
            }, 100);
        },
        stop() {
            let _this = this;
            this.calls = Math.max(0, this.calls - 1);
            if (this.calls > 0) {
                return;
            }
            this.$emit('stopped');
            clearTimeout(this.timer);
            let end = () => {
                _this.show = false;
                _this.animate = false;
                _this.progress = 0;
            }
            if (this.progress === 0) {
                this.timer = setTimeout(end, 1);
            } else {
                this.progress = 100;
                this.timer = setTimeout(end, 1000);
            }
        },
        _work() {
            let _this = this;
            if (this.progress < 100) {
                this.timer = setTimeout(function() {
                    _this.progress = _this._inc(_this.progress);
                    _this._work();
                }, 100);
            }
        },
        _inc(p, amount) {
            if (typeof amount !== 'number') {
                if (p < 25) {
                    amount = Math.random() * 3 + 3
                } else if (p < 65) {
                    amount = Math.random() * 3
                } else if (p < 85) {
                    amount = Math.random() * 2
                } else if (p < 99) {
                    amount = 0.6
                } else {
                    amount = 0
                }
            }
            return p + amount;
        }
    },
    mounted() {}
}

</script>
<style lang="scss">
    @import '../style/ajaxBar.scss';
</style>
