<template>
    <div class="flex w-full h-screen justify-center items-top mt-3">
        <div v-if="likObj.index < likObj.count" class="flex w-full h-screen justify-center items-top mt-5">
            <div class="flex-col w-full max-w-xs">
                <form class="bg-white rounded-lg shadow-lg w-full mt-3">
                    <label >
                        <div class="ml-3">
                            <p v-html="replaceWithBr(likObj.questions[likObj.index].word)" class="text-lg font-bold"></p>
                        </div>
                        <div class="mt-3 flex justify-center">
                            <img :src="likObj.questions[likObj.index].img" width="250"/>
                        </div>
                    </label>
                    <div class="mt-5"></div>
                    <ul class='likert'>
                        <li>
                            <input type="radio" name="likert" value="strong_disagree">
                            <p class="text-sm font-bold" v-html="replaceWithBr(likObj.ChoiceItem[0])"></p>
                        </li>
                        <li>
                            <input type="radio" name="likert" value="disagree">
                            <p class="text-sm font-bold" v-html="replaceWithBr(likObj.ChoiceItem[1])"></p>
                        </li>
                        <li>
                            <input type="radio" name="likert" value="neutral">
                            <p class="text-sm font-bold" v-html="replaceWithBr(likObj.ChoiceItem[2])"></p>
                        </li>
                        <li>
                            <input type="radio" name="likert" value="agree">
                            <p class="text-sm font-bold" v-html="replaceWithBr(likObj.ChoiceItem[3])"></p>
                        </li>
                        <li>
                            <input type="radio" name="likert" value="strong_agree">
                            <p class="text-sm font-bold" v-html="replaceWithBr(likObj.ChoiceItem[4])"></p>
                        </li>
                    </ul>
                </form> 
                <button class="fixed bottom-8 ml-52 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5"
                        @click="nextQuestion">
                        다음 >
                </button>
            </div>        
        </div>
        <div v-else class="w-full max-w-xs">
            <CharResultDetail />
        </div>
    </div>

</template>

<script setup>
import { reactive } from 'vue'
import CharResultDetail from '../components/CharResultDetail.vue'

    const likObj = reactive({
        count: 18,
        questions: [
            {
                word: "Q. 새로운것 보다 익숙한게 좋다",
                img: 'assets/B_1.png',
            },
            {
                word: "Q. 나는 물건을 구매하면\n &nbsp;&nbsp;&nbsp;&nbsp;보증서를 꼭 간직한다",
                img: 'assets/B_2.png',
            },
            {
                word: "Q. 나는 컴퓨터를 살 때\n &nbsp;&nbsp;&nbsp;&nbsp; 스펙을 꼼꼼하게 따져본다",
                img: 'assets/B_3.png',
            },    
            {
                word: "Q. 나는 월급이 들어왔을때,\n &nbsp;&nbsp;&nbsp;&nbsp; 비싸서 망설였던 물건을 구매한다",
                img: 'assets/B_4.png',
            },  
            {
                word: "Q. 안전은 옵션이 아니다, 권리이다",
                img: 'assets/B_5.png',
            }, 
            {
                word: "Q. 명품이 사람들 사이에서\n &nbsp;&nbsp;&nbsp;&nbsp;  나의 가치를 매겨준다고 생각한다",
                img: 'assets/B_6.png',
            }, 
            {
                word: "Q. 새로운 치킨이 나오면 꼭 맛본다",
                img: 'assets/B_7.png',
            },    
            {
                word: "Q. 집근처 A/S센터 위치를 알고 있다",
                img: 'assets/B_8.png',
            },   
            {
                word: "Q. 전자제품은 최신 제품이 최고다",
                img: 'assets/B_9.png',
            },
            {
                word: "Q. 나는 중고거래를 자주한다",
                img: 'assets/B_10.png',
            },  
            {
                word: "Q. 해외여행을 계획할때\n &nbsp;&nbsp;&nbsp;&nbsp;  치안이 좋은 여행지를 선호한다",
                img: 'assets/B_11.png',
            },
            {
                word: "Q. 나는 주변의 시선을 즐긴다",
                img: 'assets/B_12.png',
            },
            {
                word: "Q. 새로운 기능이 있으면 써보고 싶다",
                img: 'assets/B_13.png',
            }, 
            {
                word: "Q. 보증기간을 중요하게 생각한다",
                img: 'assets/B_14.png',
            },
            {
                word: "Q. 나는 스피드를 즐긴다",
                img: 'assets/B_15.png',
            },
            {
                word: "Q. 나는 유지비가 중요하다",
                img: 'assets/B_16.png',
            },
            {
                word: "Q. 새로운 곳에 가면\n &nbsp;&nbsp;&nbsp;&nbsp;  소화기 위치를 확인한다",
                img: 'assets/B_17.png',
            },
            {
                word: "Q. 다른 사람은\n &nbsp;&nbsp;&nbsp;&nbsp;  어떤 브랜드를 쓰는지 눈여겨본다",
                img: 'assets/B_18.png',
            },            
        ],
        ChoiceItem:['매우\n아니다','아니다','보통이다','그렇다','매우\n그렇다'],
        index: 0,
    });
    function replaceWithBr(String){
        return String.replace(/\n/g,"<br />")
    };
    function nextQuestion() {
        likObj.index++
    };
</script>

<style>
html,
body {
    padding: 0;
    margin: 0;
}

.wrap {
    font: 12px Arial, san-serif;
}

h1.likert-header {
    padding-left: 4.25%;
    margin: 20px 0 0;
}

form .statement {
    display: block;
    font-size: 14px;
    font-weight: bold;
    padding: 30px 0 0 4.25%;
    margin-bottom: 10px;
}

form .likert {
    list-style: none;
    width: 100%;
    margin: 0;
    padding: 0 0 35px;
    display: block;
    border-bottom: 2px solid #efefef;
}

form .likert:last-of-type {
    border-bottom: 0;
}

form .likert:before {
    content: '';
    position: relative;
    top: 11px;
    left: 9.5%;
    display: block;
    background-color: #efefef;
    height: 4px;
    width: 78%;
}

form .likert li {
    display: inline-block;
    width: 19%;
    text-align: center;
    vertical-align: top;
}

form .likert li input[type=radio] {
    display: block;
    position: relative;
    top: 0;
    left: 50%;
    margin-left: -6px;
}

form .likert li label {
    width: 100%;
}

form .buttons {
    margin: 30px 0;
    padding: 0 4.25%;
    text-align: right
}

form .buttons button {
    padding: 5px 10px;
    background-color: #67ab49;
    border: 0;
    border-radius: 3px;
}

form .buttons .clear {
    background-color: #e9e9e9;
}

form .buttons .submit {
    background-color: #67ab49;
}

form .buttons .clear:hover {
    background-color: #ccc;
}

form .buttons .submit:hover {
    background-color: #14892c;
}
</style>