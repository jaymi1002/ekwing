<template>
    <e-layout class="bg_purple">
    	<e-header slot="header" :shadow="false" :height-type="1" theme-color="white">
    		<div slot="titleSlot" class="tc bold">
            	<p class="font20 lh1 mt20">单词对对碰</p>
            	<p class="font16 mb10">{{book}}</p>
        	</div>
        	<div slot="rightSlot">
        		<e-icon type="face-smile" size="2em" color="white"></e-icon>
        	</div>
    	</e-header>
        <div class="chapter-wrap">
            <div class="chapter-card-list">
                <e-card v-for="(el,index) in list" :key="index" class="pass-item">
                    <e-card-main justify-content="center" flex-direction="column">
                        <p class="font18 text-g6 mt20">{{el.unit_name}}</p>
                        <e-button class="chapter-btn mt20" active size="mini" corner="cir" color="yellow">去闯关</e-button>
                    </e-card-main>
                    <e-card-label>
                        <e-item class="pct100 font14 text-g9" no-padding>
                            <e-item-side v-if="el.challenger">
                                <e-head-img class="challenger-logo" :src="el.challenger.logo"></e-head-img>
                            </e-item-side>
                            <e-item-side v-else>
                                <e-head-img class="challenger-logo" src="https://res.ekwing.com/images/student/no_challenger.png?v=1.228240152"></e-head-img>
                            </e-item-side>
                            <e-item-main>
                                <p class="font14">{{el.challenger ? el.challenger.name : '虚位以待'}}</p>
                            </e-item-main>
                            <e-item-side>
                                <span>排行榜</span>
                                <e-icon type="arrow-right" size="1.2em" color="g9"></e-icon>
                            </e-item-side>
                        </e-item>
                    </e-card-label>
                </e-card>
            </div>
        </div>
        <div class="advance bg-purple tc">
            <p class="font16">0/45</p>
            <p class="font12">进度</p>
        </div>
    </e-layout>
</template>
<script type="text/javascript">
let data = {
    "type": "1",
    "uid": "1329424",
    "book": "\u4eba\u6559\u65b0\u76ee\u6807 \u4e03\u5e74\u7ea7\u4e0a\u518c",
    "is_visitor": false,
    "list": [{
        "id": "53445",
        "key": "11",
        "unit_id": "1",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": {
            "name": "\u5f20\u4e09",
            "logo": "https:\/\/www.ekwing.com\/resource\/athena\/images\/userlogo\/student40.jpg"
        },
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Starter Unit 1 section A"
    }, {
        "id": "53448",
        "key": "12",
        "unit_id": "1",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": {
            "name": "\u5b66\u751f\u4e09",
            "logo": "https:\/\/ekwing-oss-new.oss-cn-shanghai.aliyuncs.com\/\/ekwing\/201903251604596071041367023444.jpg"
        },
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Starter Unit 1 section B"
    }, {
        "id": "53463",
        "key": "21",
        "unit_id": "2",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": {
            "name": "\u5b66\u751f\u4e09",
            "logo": "https:\/\/ekwing-oss-new.oss-cn-shanghai.aliyuncs.com\/\/ekwing\/201903251604596071041367023444.jpg"
        },
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Starter Unit 2 section A"
    }, {
        "id": "53466",
        "key": "22",
        "unit_id": "2",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": {
            "name": "\u5b66\u751f\u4e09",
            "logo": "https:\/\/ekwing-oss-new.oss-cn-shanghai.aliyuncs.com\/\/ekwing\/201903251604596071041367023444.jpg"
        },
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Starter Unit 2 section B"
    }, {
        "id": "53481",
        "key": "31",
        "unit_id": "3",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Starter Unit 3 section A"
    }, {
        "id": "53484",
        "key": "32",
        "unit_id": "3",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Starter Unit 3 section B"
    }, {
        "id": "53451",
        "key": "41",
        "unit_id": "4",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 1 section A"
    }, {
        "id": "53454",
        "key": "42",
        "unit_id": "4",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 1 section B"
    }, {
        "id": "53457",
        "key": "43",
        "unit_id": "4",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 1 section C"
    }, {
        "id": "53460",
        "key": "44",
        "unit_id": "4",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 1 section D"
    }, {
        "id": "53469",
        "key": "51",
        "unit_id": "5",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 2 section A"
    }, {
        "id": "53472",
        "key": "52",
        "unit_id": "5",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 2 section B"
    }, {
        "id": "53475",
        "key": "53",
        "unit_id": "5",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 2 section C"
    }, {
        "id": "53478",
        "key": "54",
        "unit_id": "5",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 2 section D"
    }, {
        "id": "53487",
        "key": "61",
        "unit_id": "6",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 3 section A"
    }, {
        "id": "53490",
        "key": "62",
        "unit_id": "6",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 3 section B"
    }, {
        "id": "53493",
        "key": "63",
        "unit_id": "6",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 3 section C"
    }, {
        "id": "53496",
        "key": "64",
        "unit_id": "6",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 3 section D"
    }, {
        "id": "53499",
        "key": "65",
        "unit_id": "6",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 3 section E"
    }, {
        "id": "53502",
        "key": "71",
        "unit_id": "7",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 4 section A"
    }, {
        "id": "53505",
        "key": "72",
        "unit_id": "7",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 4 section B"
    }, {
        "id": "53508",
        "key": "73",
        "unit_id": "7",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 4 section C"
    }, {
        "id": "53511",
        "key": "81",
        "unit_id": "8",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 5 section A"
    }, {
        "id": "53514",
        "key": "82",
        "unit_id": "8",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 5 section B"
    }, {
        "id": "53517",
        "key": "83",
        "unit_id": "8",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 5 section C"
    }, {
        "id": "53520",
        "key": "84",
        "unit_id": "8",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 5 section D"
    }, {
        "id": "53523",
        "key": "85",
        "unit_id": "8",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 5 section E"
    }, {
        "id": "53526",
        "key": "91",
        "unit_id": "9",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 6 section A"
    }, {
        "id": "53529",
        "key": "92",
        "unit_id": "9",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 6 section B"
    }, {
        "id": "53532",
        "key": "93",
        "unit_id": "9",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 6 section C"
    }, {
        "id": "53535",
        "key": "94",
        "unit_id": "9",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 6 section D"
    }, {
        "id": "53538",
        "key": "95",
        "unit_id": "9",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 6 section E"
    }, {
        "id": "53541",
        "key": "101",
        "unit_id": "10",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 7 section A"
    }, {
        "id": "53544",
        "key": "102",
        "unit_id": "10",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 7 section B"
    }, {
        "id": "53547",
        "key": "103",
        "unit_id": "10",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 7 section C"
    }, {
        "id": "53550",
        "key": "104",
        "unit_id": "10",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 7 section D"
    }, {
        "id": "53553",
        "key": "105",
        "unit_id": "10",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 7 section E"
    }, {
        "id": "53556",
        "key": "111",
        "unit_id": "11",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 8 section A"
    }, {
        "id": "53559",
        "key": "112",
        "unit_id": "11",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 8 section B"
    }, {
        "id": "53562",
        "key": "113",
        "unit_id": "11",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 8 section C"
    }, {
        "id": "53565",
        "key": "114",
        "unit_id": "11",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 8 section D"
    }, {
        "id": "53568",
        "key": "115",
        "unit_id": "11",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 8 section E"
    }, {
        "id": "53571",
        "key": "121",
        "unit_id": "12",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 9 section A"
    }, {
        "id": "53574",
        "key": "122",
        "unit_id": "12",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 9 section B"
    }, {
        "id": "53577",
        "key": "123",
        "unit_id": "12",
        "book_id": "1",
        "toll_time": "50",
        "type": "1",
        "challenger": "",
        "success_through": false,
        "is_deblocking": true,
        "unit_name": "Unit 9 section C"
    }]
};
export default {
    data() {
        return {
            list: data.list,
            book: data.book,
        }
    }
}

</script>
<style lang="scss" scoped>
.bg_purple {
    background-color: #211b4e;
}

.chapter-wrap {
    padding: .267rem .4rem;
    .chapter-card-list {
        padding: 0 .533rem;
    }
}

.pass-item {
    margin-top: 0.533rem;
    &:first-child {
        margin-top: 0;
    }
    .challenger-logo {
        width: 0.533rem;
        height: 0.533rem;
    }
    .chapter-btn {
        width: 3.2rem;
    }
}

.advance {
    left: .267rem;
    padding:0.133rem;
    line-height: 1;
    border-radius: 0.267rem;
    color: #fff;
    position: fixed;
    z-index: 2;
    bottom: .587rem;
}

</style>
