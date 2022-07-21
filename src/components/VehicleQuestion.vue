<template>
    <div class="flex w-full h-screen justify-center items-top mt-5" id="app">
        <div v-if="obj.index < obj.count" class="w-full max-w-xs">
            <div v-if="obj.index < 1">
                <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 0%"></div>
                </div>
            </div>
            <div v-else-if="obj.index < 2">
                <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 30%"></div>
                </div>
            </div>
            <div v-else-if="obj.index < 4">
                <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 60%"></div>
                </div>
            </div>
            <div v-else-if="obj.index < 6">
                <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 80%"></div>
                </div>
            </div>
            <div v-else-if="obj.index < 8">
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
                        차량질문
                    </td>
                </tr>
                <tr>
                    <td class="font-bold text-xs text-left text-gray-400">
                        차를 고를때 내가 우선하는 차량특징을 확인해요
                    </td>
                </tr>
            </table>
            <div class="bg-white p-3 rounded-lg shadow-lg w-full mt-3">
                <!-- <p class="text-xs font-bold">
                    {{ obj.questions[obj.index].question}}
                </p> -->
                <p class="text-xl font-bold" v-html="replaceWithBr(obj.questions[obj.index].question)" ></p>
                <button
                    class="active:bg-yellow-600 block mt-2 border border-gray-300 rounded-lg py-3 px-3 text-lg justify-center"
                    @click="nextQuestion"
                >
                    <img :src="obj.questions[obj.index].answers.a"  />
                </button>
                <button
                    class="active:bg-yellow-600 block mt-2 border border-gray-300 rounded-lg py-3 px-3 text-lg justify-center"
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
        count: 8,
        questions: [
            {
                question: "토너먼트 방식으로\n &nbsp&nbsp 나의 차량성향을 알아봐요",
                answers: {a: 'assets/tournament.png'},
            },
            {
                question: "Q   신뢰도 vs. 동력성능",
                answers: {a: 'assets/C_1.png', b: 'assets/C_2.png'},
            },
            {
                question: "Q   안전도 vs. 하차감",
                answers: {a:'assets/C_3.png', b: 'assets/C_4.png'},
            },
            {
                question: "Q   경제성 vs. 신기술",
                answers: {a:'assets/C_5.png', b: 'assets/C_6.png'},
            },
            {
                question: "Q   신뢰도 vs. 안전도",
                answers: {a:'assets/C_1.png', b: 'assets/C_3.png'},
            },
            {
                question: "Q   안전도 vs. 경제성",
                answers: {a:'assets/C_3.png', b: 'assets/C_5.png'},
            },
            {
                question: "Q   경제성 vs. 하차감",
                answers: {a:'assets/C_5.png', b: 'assets/C_4.png'},
            },
            {
                question: "Q   신뢰도 vs. 신기술",
                answers: {a:'assets/C_1.png', b: 'assets/C_6.png'},
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