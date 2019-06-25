<template>
    <e-modal ref="modal" direction="bottom">
        <div class="e-calendar">
            <div class="e-calendar-title fix font16" v-if="multiSelect">
                <a href="javascript:;" @click="hide" class="cancle left ml20 text-g9">
                    取消
                </a>
                <span>请选择日期</span>
                <a href="javascript:;" @click="confirm" class="sure right mr20" :class="`text-${theme}`">
                    确定
                </a>
            </div>
            <div class="e-calendar-top">
                <div class="e-calendar-top-item">
                    <e-icon type="arrow-left" color="g3" :size="20" @click="currentYear--"></e-icon>
                    <span class="font16 ml20 mr20">{{currentYear}}</span>
                    <e-icon type="arrow-right" color="g3" :size="20" @click="currentYear++"></e-icon>
                </div>
                <div class="e-calendar-top-item">
                    <e-icon type="arrow-left" color="g3" :size="20" @click="currentMonth--"></e-icon>
                    <span class="font16 ml20 mr20">{{currentMonth}}</span>
                    <e-icon type="arrow-right" color="g3" :size="20" @click="currentMonth++"></e-icon>
                </div>
            </div>
            <div class="e-calendar-content">
                <table>
                    <thead class="font16">
                        <tr>
                            <th>日</th>
                            <th>一</th>
                            <th>二</th>
                            <th>三</th>
                            <th>四</th>
                            <th>五</th>
                            <th>六</th>
                        </tr>
                    </thead>
                    <tbody class="font15">
                        <tr v-for="(tr,row) in dateTable">
                            <td v-for="(td,col) in tr" class="tc" @click="select(row,col)">
                                <span class="each-date" :class="judgeClass(row,col)">{{td.date}}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </e-modal>
</template>
<script type="text/javascript">
import Vue from 'vue';
import {
    getMonthInfo,
    getNowYMDHM,
    formatDate,
    isNowDate,
    coverZore
} from '../../../helpers/date.js';
import {deepCopy} from '../../../helpers/object-comm.js';
/*
 * prop date Object
 *
 *  2019-02-04
 *
 *  
 *
 **/
export default {
    name: 'e-calendar',
    model: {
        prop: 'value',
        event: 'change',
    },
    props: {
        multiSelect: Boolean,
        disabledPrev: Boolean,
        disabledNext: Boolean,
        minDate: [String],
        maxDate: [String],
        value: [String, Array],
        readonly: Boolean,

        theme:{
            type:String,
            default:'primary'
        },
    },
    data() {
        return {
            dateTable: null,
            current: '',
            currentYear: '',
            currentMonth: '',
        }
    },
    mounted() {
        let { year, month } = getNowYMDHM();
        this.currentYear = year;
        this.currentMonth = month;
        if (this.value) {
            this.current = this.value;
        } else if (this.multiSelect) {
            this.current = [];
        }
    },
    computed: {
        //初始化选择日期范围
        rangeMinDate() {
            if (this.disabledPrev && !this.minDate) {
                return formatDate(getNowYMDHM());
            }
            return this.minDate;
        },
        rangeMaxDate() {
            if (this.disabledNext && !this.maxDate) {
                return formatDate(getNowYMDHM());
            }
            return this.maxDate;
        }
    },
    methods: {
        show() {
            this.$refs.modal.show();
        },
        hide() {
            this.$refs.modal.hide();
        },
        select(row, col) {
            if (this.judgeDisabled(row, col) || this.readonly) {
                return false;
            }

            if (this.multiSelect) {
                let index = this.current.indexOf(formatDate(this.dateTable[row][col]));
                if (index > -1) {
                    this.current.splice(index, 1);
                } else {
                    this.current.push(formatDate(this.dateTable[row][col]));
                }
            } else {
                this.current = formatDate(this.dateTable[row][col]);
            }
            if (this.dateTable[row][col].month !== this.currentMonth) {
                this.currentMonth = this.dateTable[row][col].month;
                this.currentYear = this.dateTable[row][col].year;
            }

            if (!this.multiSelect) {
                this.hide();
                this.$emit('change', this.current);
            }
        },
        judgeSelected(row, col) {
            return this.multiSelect ? this.current.indexOf(formatDate(this.dateTable[row][col])) > -1 : this.current === formatDate(this.dateTable[row][col]);
        },
        judgeDisabled(row, col) {
            if (this.rangeMinDate) {
                if (formatDate(this.dateTable[row][col]) < this.rangeMinDate) {
                    return true;
                }
            }
            if (this.rangeMaxDate) {
                if (formatDate(this.dateTable[row][col]) > this.rangeMaxDate) {
                    return true;
                }
            }
            return false;
        },
        judgeIsNow(row, col) {
            return isNowDate(formatDate(this.dateTable[row][col]));
        },
        judgeIsNowMonth(row, col) {
            return this.currentMonth !== this.dateTable[row][col].month;
        },
        judgeClass(row, col) {
            let classes = [];
            if(this.judgeSelected(row, col)){
                classes.push(`bg-${this.theme}`);
                classes.push('selected');
            }
            this.judgeDisabled(row, col) && classes.push('disabled');
            this.judgeIsNow(row, col) && classes.push(`text-${this.theme}`);
            this.judgeIsNowMonth(row, col) && classes.push('not-in');
            return classes;
        },
        confirm() {
            this.hide();
            this.$emit('change', this.current);
        },
    },
    watch: {
        currentMonth(newVal) {
            let year = this.currentYear,
                month = this.currentMonth;
            if (newVal < 1) {
                year--;
                month = 12;
            } else if (newVal > 12) {
                year++;
                month = 1;
            }
            this.dateTable = getMonthInfo(year, month);
            this.currentYear = year;
            this.currentMonth = month;
        },
        currentYear(newVal) {
            this.dateTable = getMonthInfo(newVal, this.currentMonth);
        },
        value(newVal) {
            if(typeof newVal === typeof {}){
                this.current = deepCopy(newVal);
            }else{
                this.current = newVal;
            }
        },
        multiSelect(newVal) {
            if (newVal) {
                this.current = [];
            } else {
                this.current = '';
            }
        }
    }
}

</script>
<style lang="scss">
@import '../style/calendar.scss';

</style>
