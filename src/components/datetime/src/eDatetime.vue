<template>
    <e-modal ref="modal" direction="bottom">
        <div class="e-datetime">
            <div class="e-datetime-top">
                <a href="javascript:;" class="text-g9 ml20 font14" @click="hide">取消</a>
                <a href="javascript:;" class="text-g3 mr20 font14" @click="sure">确定</a>
            </div>
            <div class="e-datetime-content">
                <div class="scroller-wrap" v-if="type.indexOf('YMD') > -1">
                    <e-scroller ref="year" :list="year" v-model="yearIndex" :indicator="false" :wheel="wheel">
                    </e-scroller>
                </div>
                <div class="scroller-wrap" v-if="type.indexOf('YMD') > -1">
                    <e-scroller ref="month" :list="month" v-model="monthIndex" :indicator="false" :wheel="wheel">
                    </e-scroller>
                </div>
                <div class="scroller-wrap" v-if="type.indexOf('YMD') > -1">
                    <e-scroller ref="date" :list="date" v-model="dateIndex" :indicator="false" :wheel="wheel"></e-scroller>
                </div>
                <div class="scroller-wrap" v-if="type.indexOf('H') > -1">
                    <e-scroller ref="hour" :list="hour" v-model="hourIndex" :indicator="false" :wheel="wheel"></e-scroller>
                </div>
                <div class="scroller-wrap" v-if="type.indexOf('HM') > -1">
                    <e-scroller ref="hour" :list="min" v-model="minIndex" :indicator="false" :wheel="wheel"></e-scroller>
                </div>
                <div class="scroller-indicator" ref="indicator"></div>
            </div>
        </div>
    </e-modal>
</template>
<script type="text/javascript">
import {
    coverZore,
    getMonthDays,
    getNowYMDHM,
} from '../../../helpers/date.js';
export default {
    name: 'e-datetime',
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        format: {
            type: String,
            default: 'YYYY-MM-DD HH:MM',
            validator(value) {
                return ['YYYY-MM-DD', 'YYYY-MM-DD HH:MM', 'HH:MM' , 'YYYY-MM-DD HH'].indexOf(value) > -1;
            }
        },
        start: String,
        end: String,
        value: String,
        wheel:{
            type:Boolean,
            default:true
        }
    },
    data() {
        return {
            currentDate: '',
            type: 'YMDHM',

            startYear: 0,
            endYear:0,
            startMonth: 0,
            endMonth:0,
            startMonthDate: 0,
            endMonthDate:0,
            startHour: 0,
            endHour:0,
            startMin: 0,
            endMin:0,

            yearIndex: 0,
            monthIndex: 0,
            dateIndex: 0,
            hourIndex: 0,
            minIndex: 0,

            startDate:'',
            endDate:'',
        }
    },
    created(){
        let index = ['YYYY-MM-DD', 'YYYY-MM-DD HH:MM', 'HH:MM' , 'YYYY-MM-DD HH'].indexOf(this.format);
        let types = ['YMD','YMDHM','HM','YMDH'];
        let date = getNowYMDHM();
        let dateStr = [date.year,date.month,date.date].join('-');
        let timeStr = [date.hour,date.min].join(':');
        this.type = types[index];
        switch(this.type) {
            case 'YMD':
                this.startDate = this.start ? this.start : '1994-01-01';
                this.endDate = this.end ? this.end : '2024-12-31';
                this.currentDate = dateStr;
                break;
            case 'YMDHM':
                this.startDate = this.start ? this.start : '1994-01-01 00:00';
                this.endDate = this.end ? this.end : '2024-12-31 23:59';
                this.currentDate = [dateStr,timeStr].join(' ');
                break;
            case 'HM':
                this.startDate = this.start ? this.start : '00:00';
                this.endDate = this.end ? this.end : '23:59';
                this.currentDate = timeStr;
                break;
            case 'YMDH':
                this.startDate = this.start ? this.start : '1994-01-01 00';
                this.endDate = this.end ? this.end : '2024-12-31 23';
                this.currentDate = [dateStr,date.hour];
                break;
        }
    },
    mounted() {
    },
    computed: {
        year() {
            this.startYear = this.startDateParse.year;
            this.endYear = this.endDateParse.year;
            return packageToArray(this.startYear, this.endYear,'年');
        },
        month() {
            if (this.selectYear != this.startYear &&
                this.selectYear != this.endYear) {
                this.startMonth = 1;
                this.endMonth = 12;
            } else if (this.selectYear == this.startYear && 
                this.selectYear != this.endYear) {
                this.startMonth = this.startDateParse.month;
                this.endMonth = 12;
            } else if (this.selectYear == this.endYear && 
                this.selectYear != this.startYear) {
                this.startMonth = 1;
                this.endMonth = this.endDateParse.month;
            } else {
                this.startMonth = this.startDateParse.month;
                this.endMonth = this.endDateParse.month;
            }
            return packageToArray(this.startMonth, this.endMonth,'月');
        },
        date() {
            let notStartYM = `${this.selectYear}-${this.selectMonth}` !== `${this.startYear}-${this.startMonth}`;
            let notEndYM = `${this.selectYear}-${this.selectMonth}` !== `${this.endYear}-${this.endMonth}`;
            if (notStartYM && notEndYM) {
                this.startMonthDate = 1;
                this.endMonthDate = getMonthDays(this.selectYear, this.selectMonth);
            } else if (!notStartYM && 
                notEndYM) {
                this.startMonthDate = this.startDateParse.date;
                this.endMonthDate = getMonthDays(this.selectYear, this.selectMonth);
            } else if (!notEndYM && 
                notStartYM) {
                this.startMonthDate = 1;
                this.endMonthDate = this.endDateParse.date;
            } else {
                this.startMonthDate = this.startDateParse.date;
                this.endMonthDate = this.endDateParse.date;
            }
            return packageToArray(this.startMonthDate, this.endMonthDate,'日');
        },
        hour() {
            let notStartYMD = `${this.selectYear}-${this.selectMonth} ${this.selectDate}` !== `${this.startDateParse.year}-${this.startDateParse.month} ${this.startDateParse.date}`;
            let notEndYMD = `${this.selectYear}-${this.selectMonth} ${this.selectDate}` !== `${this.endDateParse.year}-${this.endDateParse.month} ${this.endDateParse.date}`;
            if (notStartYMD && notEndYMD) {
                this.startHour = 0;
                this.endHour = 23;
            } else if (!notStartYMD && 
                notEndYMD) {
                this.startHour = this.startDateParse.hour;
                this.endHour = 23;
            } else if (!notEndYMD && 
                notStartYMD) {
                this.startHour = 0;
                this.endHour = this.endDateParse.hour;
            } else {
                this.startHour = this.startDateParse.hour;
                this.endHour = this.endDateParse.hour;
            }
            return packageToArray(this.startHour, this.endHour,'时');
        },
        min() {
            let notStartYMDH = `${this.selectYear}-${this.selectMonth} ${this.selectDate}:${this.selectHour}` !== `${this.startYear}-${this.startMonth} ${this.startMonthDate}:${this.startHour}`;
            let notEndYMDH = `${this.selectYear}-${this.selectMonth} ${this.selectDate}:${this.selectHour}` !== `${this.endYear}-${this.endMonth} ${this.endMonthDate}:${this.endHour}`;
            if (notStartYMDH && notEndYMDH) {
                this.startMin = 0;
                this.endMin = 59;
            } else if (!notStartYMDH && 
                notEndYMDH) {
                this.startMin = this.startDateParse.min;
                this.endMin = 59;
            } else if (!notEndYMDH && 
                notStartYMDH) {
                this.startMin = 0;
                this.endMin = this.endDateParse.min;
            } else {
                this.startMin = this.startDateParse.min;
                this.endMin = this.endDateParse.min;
            }
            return packageToArray(this.startMin, this.endMin,'分');
        },
        dateFormat() {
            let YMD = [this.selectYear, coverZore(this.selectMonth), coverZore(this.selectDate)].join('-'),
                HM = [coverZore(this.selectHour), coverZore(this.selectMin)].join(':');
            switch(this.type) {
                case 'YMD':
                    return YMD;
                    break;
                case 'YMDHM':
                    return [YMD,HM].join(' ');
                    break;
                case 'HM':
                    return HM;
                    break;
                case 'YMDH':
                    return [YMD,coverZore(this.selectHour)].join(' ');
            }
        },
        startDateParse() {
            return parseDate(this.startDate);
        },
        endDateParse() {
            return parseDate(this.endDate);
        },
        selectYear() {
            return parseInt(this.year[this.yearIndex]);
        },
        selectMonth() {
            return parseInt(this.month[this.monthIndex]);
        },
        selectDate() {
            return parseInt(this.date[this.dateIndex]);
        },
        selectHour() {
            return parseInt(this.hour[this.hourIndex]);
        },
        selectMin() {
            return parseInt(this.min[this.minIndex]);
        }
    },
    destoryed() {

    },
    methods: {
        splitDate() {
            if (this.currentDate) {
                let [fullDate, time] = this.currentDate.split(' ');
                if (fullDate) {
                    let [year, month, date] = fullDate.split('-');
                    this.yearIndex = this.year.indexOf(year);
                    this.monthIndex = this.month.indexOf(month);
                    this.dateIndex = this.date.indexOf(date);
                }
                if (time) {
                    let [hour, min] = time.split(':');
                    this.hourIndex = this.hour.indexOf(hour);
                    this.minIndex = this.min.indexOf(coverZore(parseInt(min)) + '');
                }
            }
        },
        show() {
            this.$refs.modal.show();
        },
        hide() {
            this.$refs.modal.hide();
        },
        sure() {
            this.$emit('change', this.dateFormat);
            this.hide();
        },
    },
    watch: {
    }
}

function packageToArray(start, end,label) {
    let newArr = [];
    while(start <= end){
        newArr.push(coverZore(start) + label);
        start++;
    }
    return newArr;
}

function parseDate(str) {
    let [fullDate, time] = str.split(' ');
    let parseResult = {};
    if (fullDate) {
        let [year, month, date] = fullDate.split('-');
        parseResult.year = parseInt(year);
        parseResult.month = parseInt(month);
        parseResult.date = parseInt(date);
    }
    if (time) {
        let [hour, min] = time.split(':');
        parseResult.hour = parseInt(hour);
        parseResult.min = parseInt(min);
    }
    return parseResult;
}

</script>
<style lang="scss">
@import '../style/datetime.scss';

</style>
