<template>
        <div class="flex w-full h-3/4 justify-center items-top mt-10">
            <div class="w-full max-w-xs rounded-lg shadow-lg bg-whites-300">
                    <div class="px-5 py-5">
                        <router-link to="/QuestionList">
                            <button class="flex h-24 w-full bg-blue-500 hover:bg-blue-700 text-white justify-center items-center font-bold rounded-xl">
                            A타입(소비성향)
                            </button>    
                        </router-link>

                    </div>
                    <div class="px-5 py-5">
                        <router-link to="/LikertQuestion">
                        <button class="flex h-24 w-full max-w-xs bg-yellow-500 hover:bg-yellow-700 justify-center items-center text-white font-bold rounded-xl">
                            B타입(일반성향)</button>
                        </router-link>
                    </div>
                    <div class="px-5 py-5">
                        <router-link to="/VehicleQuestion">
                        <button class="flex h-24 w-full max-w-xs bg-gray-500 hover:bg-gray-700 justify-center items-center text-white font-bold rounded-xl">
                            C타입(차량성향)</button>
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
    import VehicleQuestion from '../components/VehicleQuestion.vue'
    
</script>