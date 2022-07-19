<template>
        <div class="flex w-full h-screen justify-center items-center">
            <div class="w-full max-w-xs rounded-lg shadow-lg bg-whites-300">
                    <div class="px-5 py-5">
                        <router-link to="/QuestionList">
                            <button class="flex h-24 w-full bg-blue-500 hover:bg-blue-700 text-white justify-center items-center font-bold rounded-l-lg">
                            A타입
                            </button>    
                        </router-link>
                    </div>
                    <div class="px-5 py-5">
                        <router-link to="/LikertQuestion">
                        <button class="flex h-24 w-full max-w-xs bg-yellow-500 hover:bg-yellow-700 justify-center items-center text-white font-bold rounded-l-lg">
                            B타입</button>
                        </router-link>
                    </div>
                    <div class="px-5 py-5">
                        <router-link to="/LikertQuestion">
                        <button class="flex h-24 w-full max-w-xs bg-gray-500 hover:bg-yellow-700 justify-center items-center text-white font-bold rounded-l-lg">
                            C타입</button>
                        </router-link>
                    </div>        
            </div>
                <!-- <h1 class="font-bold text-xl text-center text-gray-600"> -->
                <!-- <LikertQuestion /> -->
        </div>
</template>
<script setup>
    import QuestionList from '../components/QuestionList.vue'
    import LikertQuestion from '../components/LikertQuestion.vue'
    
</script>