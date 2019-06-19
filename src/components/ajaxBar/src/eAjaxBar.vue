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
        color: String,
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
                `${this.position}`,
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
            document.body.appendChild(this.$el);
            clearTimeout(this.timer);
            this.show = true;
            this.animate = true;
            this.timer = setTimeout(() => {
                this._work();
            }, 100);
        },
        stop() {
            this.calls = Math.max(0, this.calls - 1);
            if (this.calls > 0) {
                return;
            }
            clearTimeout(this.timer);
            let end = () => {
                this.show = false;
                this.animate = false;
                this.progress = 0;
                this.$el.remove();
            }
            if (this.progress === 0) {
                this.timer = setTimeout(end, 1);
            } else {
                this.progress = 100;
                this.timer = setTimeout(end, 1000);
            }
        },
        _work() {
            if (this.progress < 100) {
                this.timer = setTimeout(() => {
                    this.progress = this._inc(this.progress);
                    this._work();
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
