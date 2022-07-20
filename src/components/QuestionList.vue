<template>
    <div class="flex w-full h-screen justify-center items-top mt-5" id="app">
        <div v-if="obj.index < obj.count" class="w-full max-w-xs">
            <div v-if="obj.index < 1">
                <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 1%"></div>
                </div>
            </div>
            <div v-else-if="obj.index < 3">
                <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 20%"></div>
                </div>
            </div>
            <div v-else-if="obj.index < 6">
                <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 40%"></div>
                </div>
            </div>
            <div v-else-if="obj.index < 9">
                <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 60%"></div>
                </div>
            </div>
            <div v-else-if="obj.index < 12">
                <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 80%"></div>
                </div>
            </div>
            <div v-else-if="obj.index < 15">
                <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 95%"></div>
                </div>
            </div>
            <table class="mt-5">
                <tr>
                    <td rowspan="2" >
                        <img :src="obj.link">
                    </td>
                    <td class="font-bold text-s text-left text-gray-600">
                        성향질문
                    </td>
                </tr>
                <tr>
                    <td class="font-bold text-xs text-left text-gray-400">
                        성향질문을 통해 나에게 맞는 차량을 알려드려요
                    </td>
                </tr>
            </table>
            <div class="bg-white p-3 rounded-lg shadow-lg w-full mt-3">
                <!-- <p class="text-xs font-bold">
                    {{ obj.questions[obj.index].question}}
                </p> -->
                <p v-html="replaceWithBr(obj.questions[obj.index].question)" class="text-lg font-bold"></p>
                <button
                    class="active:bg-yellow-600 block mt-2 border border-gray-300 rounded-lg py-3 px-3 text-lg justify-center "
                    @click="nextQuestion"
                >
                    <img :src="obj.questions[obj.index].answers.a"  />
                </button>
                <button
                    class="active:bg-yellow-600 block mt-2 border border-gray-300 rounded-lg py-3 px-3 text-lg justify-center "
                    @click="nextQuestion"
                >                    
                    <img :src="obj.questions[obj.index].answers.b"  />    
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

    const obj = reactive({
        index: 0,
        AselectedAnswer: '',
        BselectedAnswer: '',
        correctAnswer: 0,
        wrongAnswer: 0,
        count: 15,
        questions: [
            {
                question: "1   직장을 옮기면서,\n &nbsp&nbsp서울에 집을 구하려고 한다",
                answers: {a:'assets/02-1.png', b: 'assets/02-2.png'},
            },
            {
                question: "2   회사에서 야근 후\n &nbsp&nbsp 집으로 가는 길은 두 가지이다",
                answers: {a:'assets/03-1.png', b: 'assets/03-2.png'},
            },
            {
                question: "3   애완동물을 입양해서 방안에\n &nbsp&nbsp 털이가득하다.청소기를 산다면...",
                answers: {a:'assets/04-1.png', b: 'assets/04-2.png'},
            },
            {
                question: "4   요새 미세먼지와 마스크로 인해\n &nbsp&nbsp 피부관리가 시급하다",
                answers: {a:'assets/06-1.png', b: 'assets/06-2.png'},
            },
            {
                question: "5   연말 모임 참석을 위해 새 구두를\n &nbsp&nbsp 구입하려고 한다",
                answers: {a:'assets/08-1.png', b: 'assets/08-2.png'},
            },
            {
                question: "6   손목시계를 구매하려고 한다",
                answers: {a:'assets/09-1.png', b: 'assets/09-2.png'},
            },
            {
                question: "7   집에 습기가 많아\n &nbsp&nbsp 제습기를 구매할 예정이다.",
                answers: {a:'assets/10-1.png', b: 'assets/10-2.png'},
            },
            {
                question: "8   요즘 재택근무를 자주해서\n &nbsp&nbsp 공유기를 새로 설치해야 한다",
                answers: {a:'assets/11-1.png', b: 'assets/11-2.png'},
            },
            {
                question: "9   휴대폰이 고장나서\n &nbsp&nbsp 새 휴대폰을 장만하려고 한다",
                answers: {a:'assets/13-1.png', b: 'assets/13-2.png'},
            },
            {
                question: "10   부모님 생신 선물로\n &nbsp&nbsp 패딩을 사 드리려고 한다",
                answers: {a:'assets/14-1.png', b: 'assets/14-2.png'},
            },
            {
                question: "11   혼수 준비로 예산이 빠듯한데\n &nbsp&nbsp 아직 예식장을 고르지 못했다",
                answers: {a:'assets/15-1.png', b: 'assets/15-2.png'},
            },
            {
                question: "12   출근시간을 줄여야 하는데\n &nbsp&nbsp 매일 드라이 하기가 쉽지 않다",
                answers: {a:'assets/17-1.png', b: 'assets/17-2.png'},
            },
            {
                question: "13   가지고 있는 주식이 올라\n &nbsp&nbsp 노트북을 새 걸로 바꾸려 한다",
                answers: {a:'assets/19-1.png', b: 'assets/19-2.png'},
            },
            {
                question: "14   홈카페를 하고 싶어\n &nbsp&nbsp 스피커를 구매하려고 한다",
                answers: {a:'assets/20-1.png', b: 'assets/20-2.png'},
            },
            {
                question: "15   가스레인지/인덕션을\n &nbsp&nbsp  설치해야 하는데...",
                answers: {a:'assets/21-1.png', b: 'assets/21-2.png'},
            },
        ],
        link: 'assets/girl-front-icon.png'
    });
    function replaceWithBr(String){
        return String.replace(/\n/g,"<br />")
    };
    function nextQuestion() {
        console.log(obj.AselectedAnswer)
        obj.index++

    };
    function showResults() {
        obj.index++
    };

</script>