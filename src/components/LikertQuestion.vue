<template>
    <div class="flex w-full h-screen justify-center items-top mt-5">
        <div class="flex-col">
            <div class="w-full max-w-xs">
                <div v-if="likObj.index < likObj.count">
                    <form class="bg-white rounded-lg shadow-lg w-full mt-8">
                        <label class="statement">This HTML Likert scale is easy to use.
                            <img :src="likObj.getImg[likObj.index]" width="560"/>
                        </label>
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
                    <button class="fixed bottom-30 ml-52 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5"
                            @click="nextQuestion">
                            다음 >
                    </button>
                </div>
                <div v-else class="w-full max-w-xs">
                    <CharResultDetail />
                </div>
            </div>
        </div>        
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import CharResultDetail from '../components/CharResultDetail.vue'

    const likObj = reactive({
        getImg:['public/assets/01-1.png','public/assets/01-2.png'],
        ChoiceItem:['매우\n아니다','아니다','보통이다','그렇다','매우\n그렇다'],
        index: 0,
        count: 3
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