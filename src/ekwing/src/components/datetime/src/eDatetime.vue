<template>
    <e-modal ref="modal" direction="bottom">
        <div class="e-datetime">
            <div class="e-datetime-top">
                <a href="javascript:;" class="text-g9 ml20 font14" @click="hide">取消</a>
                <a href="javascript:;" class="text-g3 mr20 font14" @click="sure">确定</a>
            </div>
            <div class="e-datetime-content">
                <div class="scroller-wrap" v-if="type != 2">
                    <scroller @change="yearChange" :num-in-view="numInView" ref="year" :value="scrollYearValue">
                        <div class="placeholder"></div>
                        <div class="time-item font14" v-for="y in year">
                            {{startYear+y}}
                        </div>
                        <div class="placeholder"></div>
                    </scroller>
                </div>
                <div class="scroller-wrap" v-if="type != 2">
                    <scroller @change="monthChange" :num-in-view="numInView" ref="month" :value="scrollMonthValue">
                        <div class="placeholder"></div>
                        <div class="time-item font14" v-for="m in month">
                            {{coverZore(startMonth + m)}}
                        </div>
                        <div class="placeholder"></div>
                    </scroller>
                </div>
                <div class="scroller-wrap" v-if="type != 2">
                    <scroller @change="dateChange" :num-in-view="numInView" ref="date" :value="scrollDateValue">
                        <div class="placeholder"></div>
                        <div class="time-item font14" v-for="d in date">
                            {{coverZore(startMonthDate + d)}}
                        </div>
                        <div class="placeholder"></div>
                    </scroller>
                </div>
                <div class="scroller-wrap" v-if="type != 0">
                    <scroller @change="hourChange" :num-in-view="numInView" ref="hour" :value="scrollHourValue">
                        <div class="placeholder"></div>
                        <div class="time-item font14" v-for="h in hour">
                            {{coverZore(startHour + h - 1)}}
                        </div>
                        <div class="placeholder"></div>
                    </scroller>
                </div>
                <div class="scroller-wrap" v-if="type != 0">
                    <scroller @change="minChange" :num-in-view="numInView" ref="min" :value="scrollMinValue">
                        <div class="placeholder"></div>
                        <div class="time-item font14" v-for="m in min">
                            {{coverZore((startMin + m - 1) * minSlot)}}
                        </div>
                        <div class="placeholder"></div>
                    </scroller>
                </div>
            </div>
        </div>
    </e-modal>
</template>
<script type="text/javascript">
import scroller from './scroller.vue';
export default {
    name: 'e-datetime',
    model:{
    	prop:'value',
    	event:'change'
    },
    props: {
        format: {
            type: String,
            default: 'YYYY-MM-DD HH:MM',
            validator(value) {
                return ['YYYY-MM-DD', 'YYYY-MM-DD HH:MM', 'HH:MM'].indexOf(value) > -1;
            }
        },
        startDate: {
            type: String,
            default: '1994-01-01 00:00'
        },
        endDate: {
            type: String,
            default: '2024-01-01 00:00'
        },
        value: String,
        minSlot: {
            type: Number,
            default: 1
        }
    },
    components: {
        scroller,
    },
    data() {
        return {
            currentDate: '',
            numInView: 7,
            type: 0,

            startYear: 0,
            startMonth: 0,
            startMonthDate: 0,
            startHour: 0,
            startMin: 0,

            selectYear: 1991,
            selectMonth: 1,
            selectDate: 1,
            selectHour: 0,
            selectMin: 0,
        }
    },
    mounted() {
        this.type = ['YYYY-MM-DD', 'YYYY-MM-DD HH:MM', 'HH:MM'].indexOf(this.format);
        if (this.startDate && !dateRegex(this.type, this.startDate)) {
            throw new Error('startDate\' format is illegal ');
        }
        if (this.endDate && !dateRegex(this.type, this.endDate)) {
            throw new Error('endDate\' format is illegal ');
        }
        if (this.value && !dateRegex(this.type, this.value)) {
            throw new Error('value\' format is illegal ');
        }
        if (this.startDate > this.endDate) {
            throw new Error('startDate shoud not larger than endDate');
        }
        if (this.startDate) {
            this.currentDate = this.startDate;
        }
        if (this.value) {
            this.currentDate = this.value;
        }
        this.splitDate();
    },
    computed: {
        myId() {
            return `datetime-${this._uid}`;
        },
        year() {
            this.startYear = this.startDateParse.year - 1;
            return this.endDateParse.year - this.startYear;
        },
        month() {
            let year;
            if (this.selectYear !== this.startDateParse.year &&
                this.selectYear !== this.endDateParse.year) {
                this.startMonth = 0;
                year = 12;
            } else if (this.selectYear === this.startDateParse.year) {
                this.startMonth = this.startDateParse.month - 1;
                year = 12 - this.startMonth;
            } else if (this.selectYear === this.endDateParse.year) {
                this.startMonth = 0;
                year = this.endDateParse.month;
            }
            if (this.$refs.year) {
                this.selectMonth = this.$refs.month.current + this.startMonth + 1;
            }
            return year;

        },
        date() {
            let notStartYM = `${this.selectYear}-${this.selectMonth}` !== `${this.startDateParse.year}-${this.startDateParse.month}`;
            let notEndYM = `${this.selectYear}-${this.selectMonth}` !== `${this.endDateParse.year}-${this.endDateParse.month}`;
            let date;
            if (notStartYM && notEndYM) {
                this.startMonthDate = 0;
                date = getMonthDays(this.selectYear, this.selectMonth);
            } else if (!notStartYM) {
                this.startMonthDate = this.startDateParse.date - 1;
                date = getMonthDays(this.selectYear, this.selectMonth) - this.startDateParse.date;
            } else if (!notEndYM) {
                this.startMonthDate = 0;
                date = this.endDateParse.date;
            }
            if (this.$refs.date) {
                this.selectDate = this.$refs.date.current + this.startMonthDate + 1;
            }
            return date;

        },
        hour() {
            let notStartYMD = `${this.selectYear}-${this.selectMonth} ${this.selectDate}` !== `${this.startDateParse.year}-${this.startDateParse.month} ${this.startDateParse.date}`;
            let notEndYMD = `${this.selectYear}-${this.selectMonth} ${this.selectDate}` !== `${this.endDateParse.year}-${this.endDateParse.month} ${this.endDateParse.date}`;
            let hour;
            if (notStartYMD && notEndYMD) {
                this.startHour = 0;
                hour = 24;
            } else if (!notStartYMD) {
                this.startHour = this.startDateParse.hour;
                hour = 24 - this.startHour;
            } else if (!notEndYMD) {
                this.startHour = 0;
                hour = this.endDateParse.hour + 1;
            }
            if (this.$refs.hour) {
                this.selectHour = this.$refs.hour.current + this.startHour;
            }
            return hour;
        },
        min() {
            let notStartYMDH = `${this.selectYear}-${this.selectMonth} ${this.selectDate}:${this.selectHour}` !== `${this.startDateParse.year}-${this.startDateParse.month} ${this.startDateParse.date}:${this.startDateParse.hour}`;
            let notEndYMDH = `${this.selectYear}-${this.selectMonth} ${this.selectDate}:${this.selectHour}` !== `${this.endDateParse.year}-${this.endDateParse.month} ${this.endDateParse.date}:${this.endDateParse.hour}`;
            let min;
            if (notStartYMDH && notEndYMDH) {
                this.startMin = 0;
                min = 60 / this.minSlot;
            } else if (!notStartYMDH) {
                this.startMin = Math.floor(this.startDateParse.min / this.minSlot);
                min = (60 / this.minSlot - this.startMin);
            } else if (!notEndYMDH) {
                this.startMin = 0;
                min = Math.floor((this.endDateParse.min + 1) / this.minSlot);
            }
            if (this.$refs.min) {
                this.selectMin = this.$refs.min.current + this.startMin;
            }
            return min;
        },
        dateFormat() {
            let YMD = [this.selectYear, coverZore(this.selectMonth), coverZore(this.selectDate)].join('-'),
                HM = [coverZore(this.selectHour), coverZore(this.selectMin * this.minSlot)].join(':');
            if (this.type === 0) {
                return YMD;
            } else if (this.type === 1) {
                return [YMD, HM].join(' ');
            } else {
                return HM;
            }
        },
        startDateParse() {
            return parseDate(this.startDate);
        },
        endDateParse() {
            return parseDate(this.endDate);
        },
        scrollYearValue() {
            return this.selectYear - this.startYear - 1;
        },
        scrollMonthValue() {
            return this.selectMonth - this.startMonth - 1;
        },
        scrollDateValue() {
            return this.selectDate - this.startMonthDate - 1;
        },
        scrollHourValue() {
            return this.selectHour - this.startHour;
        },
        scrollMinValue() {
            return this.selectMin - this.startMin;
        },
    },
    destoryed() {

    },
    methods: {
        splitDate() {
            if (this.currentDate) {
                let [fullDate, time] = this.currentDate.split(' ');
                if (fullDate) {
                    let [year, month, date] = fullDate.split('-');
                    this.selectYear = parseInt(year);
                    this.selectMonth = parseInt(month);
                    this.selectDate = parseInt(date);
                }
                if (time) {
                    let [hour, min] = time.split(':');
                    this.selectHour = parseInt(hour);
                    this.selectMin = Math.floor(parseInt(min) / this.minSlot);
                }
            }
        },
        coverZore(number) {
            return coverZore(number);
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
        yearChange(yearIndex) {
            this.selectYear = yearIndex + this.startYear + 1;
        },
        monthChange(monthIndex) {
            this.selectMonth = monthIndex + this.startMonth + 1;
        },
        dateChange(dateIndex) {
            this.selectDate = dateIndex + this.startMonthDate + 1;
        },
        hourChange(hourIndex) {
            this.selectHour = hourIndex + this.startHour;
        },
        minChange(minIndex) {
            this.selectMin = minIndex + this.startMin;
        }
    },
    watch: {
        // value(newVal) {
        // 	this.currentDate = newVal;
        // 	this.splitDate();
        // }
    }
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

function dateRegex(formatType, dateString) {
    switch (formatType) {
        case 0:
            return (/[0-9]{4}-[0-9]{2}-[0-9]{2}/).test(dateString);
            break;
        case 1:
            return (/[0-9]{4}-[0-9]{2}-[0-9]{2}\s[0-9]{2}:[0-9]{2}/).test(dateString);
            break;
        case 2:
            return (/[0-9]{2}:[0-9]{2}/).test(dateString);
            break;
    }
}

function coverZore(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}

function getMonthDays(year, month) {
    let maxMonth = [1, 3, 5, 7, 8, 10, 12];
    let minMonth = [2];
    let middleMonth = [4, 6, 9, 11];
    if (maxMonth.indexOf(month) > -1) {
        return 31;
    }
    if (middleMonth.indexOf(month) > -1) {
        return 30;
    }
    if (minMonth.indexOf(month) > -1) {
        return judgeLeap(year) ? 29 : 28;
    }

}

function judgeLeap(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    return false;
}

</script>
<style lang="scss">
@import '../style/datetime.scss';

</style>
