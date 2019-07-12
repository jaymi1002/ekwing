<template>
    <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div class="e-toast-wrap flex flex-center" v-show="visibility">
            <div :class="toastClass">
                <div v-if="icon" class="toast-icon-wrap">
                    <e-icon :type="icon" :size="42" color="white"></e-icon>
                </div>
                <div v-if="type === 'loading'" class="loading">
                </div>
                <div class="content font16" ref="content">
                    <slot>
                        <p v-html="content"></p>
                    </slot>
                </div>
            </div>
        </div>
    </transition>
</template>
<script type="text/javascript">
let instance = null;
export default {
    name: 'e-toast',
    components: {},
    props: {
        duration: {
            type: Number,
            default: 2000
        },
        type: {
            type: String,
            default: 'default',
            validator(value) {
                return ['success', 'error', 'warning', 'loading', 'default'].indexOf(value) > -1;
            }
        },
        content: String
    },
    data() {
        return {
            visibility: false,
        }
    },
    computed: {
        icon() {
            switch (this.type) {
                case 'success':
                    return 'tip-success';
                    break;
                case 'error':
                    return 'tip-error';
                    break;
                case 'warning':
                    return 'tip-warning';
                    break;
                case 'default':
                case 'loading':
                    return false;
            }
        },
        toastClass() {
            if (this.type === 'default') {
                return 'e-toast-default'
            } else {
                return 'e-toast';
            }
        }
    },
    methods: {
        _work() {
            let _this = this;
            if (this.type == "loading") {
                return;
            }
            setTimeout(() => {
                _this.hide();
                _this.$emit('closeHandle');
            }, _this.duration);
        },
        show() {
            if (instance && instance.visibility) {
                instance.hide();
            }
            instance = this;
            this.visibility = true;
        },
        hide() {
            this.visibility = false;
        }
    },
    watch: {
        visibility(newVal, oldVal) {
            if (newVal === true) {
                this._work();
                document.body.appendChild(this.$el);
            } else {
                setTimeout(() => {
                    document.body.removeChild(this.$el);
                }, 300);
            }
        }
    }
}

</script>
<style lang="scss">
.e-toast-wrap {
    position: absolute;
    top: 45%;
    left: 0%;
    right: 0;
    z-index: 4;
}

.e-toast,
.e-toast-default {
    transform: translateY(-50%);
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, .7);
    border-radius: 0.133rem;
    text-align: center;
}

.e-toast {
    padding: 0.4rem 0.64rem;
    min-width: 3.733rem;
    max-width: 5.333rem;
    .toast-icon-wrap {
        text-align: center;
        line-height: 1;
        margin-top: 0.067rem;
    }
    .content {
        color: #fff;
        margin-top: 0.133rem;
        margin-bottom: 0.067rem;
    }
    .loading {
        width: 3.7em;
        height: 3.7em;
        display: inline-block;
        vertical-align: middle;
        animation: eLoading 1s steps(12, end) infinite;
        background: transparent url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=") no-repeat;
        background-size: 100%;
    }
}

.e-toast-default {
    min-height: 1.28rem;
    padding: 0.32rem 0.96rem;
    min-width: 4.907rem;
    max-width: 7.2rem;
    line-height: 0.64rem;
    .content {
        color: #fff;
        margin: 0;
    }
}

</style>
