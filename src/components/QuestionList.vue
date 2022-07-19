<template>
    <div class="flex w-full h-screen justify-center items-top mt-5" id="app">
        <div v-if="obj.index < obj.count" class="w-full max-w-xs">
            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 25%"> 25%</div>
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
                <p v-html="replaceWithBr(obj.questions[obj.index].question)" class="text-xs font-bold"></p>
                <label
                    class="focus:border-blue-400 block mt-2 border border-gray-300 rounded-lg py-3 px-3 text-lg justify-center hover:bg-yellow-600 cursor-pointer"
                    @click="nextQuestion"
                >
                    <img :src="obj.questions[obj.index].answers.a"  />
                </label>
                <label
                    class="block mt-2 border border-gray-300 rounded-lg py-3 px-3 text-lg justify-center hover:bg-yellow-600 cursor-pointer"
                    @click="nextQuestion"
                >                    
                    <img :src="obj.questions[obj.index].answers.b"  />    
                </label>
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
        count: 5,
        questions: [
            {
                question: "1   추억을 사진으로 남기고 싶어\n &nbsp&nbsp사진기를 구매하려고 한다",
                answers: {a: 'assets/01-1.png', b: 'assets/01-2.png'},
            },
            {
                question: "2   직장을 옮기면서,\n &nbsp&nbsp서울에 집을 구하려고 한다",
                answers: {a:'assets/02-1.png', b: 'assets/02-2.png'},
            },
            {
                question: "3   회사에서 야근 후 집으로 가는 길은 두 가지이다",
                answers: {a:'assets/03-1.png', b: 'assets/03-2.png'},
            },
            {
                question: "4   애완동물을 입양해서 방안에 털이가득하다.\n &nbsp&nbsp청소기를 사야하는데...",
                answers: {a:'assets/04-1.png', b: 'assets/04-2.png'},
            },
            {
                question: "5   자취를 시작하면서 나만의 감성 원룸을 꾸미기 위해\n &nbsp&nbsp 커피테이블을 구매하려고 한다",
                answers: {a:'assets/05-1.png', b: 'assets/05-2.png'},
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