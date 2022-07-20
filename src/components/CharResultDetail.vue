<template>
    <div class="flex-col">
        <div class="flex items-center">
            <button class="w-1/4 text-left text-3xl text-gray-700">
               <router-link to="/">&lt;</router-link> 
            </button>
            <div class="flex justify-center font-bold text-xl text-gray-600 ml-5">
                나의 취향 결과
            </div>
        </div>
        <hr style="height:1px;color:grey" class="mt-1">
        <div class="font-bold text-s text-left text-gray-600 mt-3">
            <p v-html="replaceWithBr(CharVar.Comment)"></p>
        </div>
        <div class="flex items-center pt-5">
            <div>
                <img :src="CharVar.Target">
            </div>
            <div class="px-2">
                <div class="font-bold text-base text-left text-gray-600">
                    나의 차량 스타일
                </div>
                <div class="font-bold text-xs text-left text-gray-400">   
                    나의 차량 스타일을 확인해요
                </div>
            </div>
        </div>
        <div class="bg-white rounded-l-2xl shadow-xl h-28 pt-3">
            <div class="flex items-center h-full">
                <div class="flex w-2/6 bg-slate-100 rounded-l-lg h-full items-center">
                    <img :src="CharVar.VehicleType">
                </div>
                <div class="w-4/6 pl-3">
                    <div class="flex">
                        <div class="font-midium text-xs text-left text-gray-400 w-4/6">
                            나의 최애 스타일은
                        </div>
                        <div class="font-midium text-xs text-left text-gray-400 w-2/6">
                            더보기>
                        </div>
                    </div>
                    <div class="font-bold text-s text-left text-gray-700 pt-3">
                        조약돌 같은 쿠페
                    </div>
                    <div>
                        <span class="font-midium text-xs text-left text-gray-400" v-for="item in CharVar.items">{{item}}&nbsp;</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex items-center pt-7">
            <div>
                <img :src="CharVar.MyChar">
            </div>
            <div class="px-2"> 
                <div class="font-bold text-base text-left text-gray-600"> 
                    내 성향
                </div>
                <div class="font-bold text-xs text-left text-gray-400"> 
                    나의 차량구매 성향을 볼 수 있어요
                </div>
            </div>
        </div>

        <div class="bg-white rounded-l-2xl shadow-xl h-full mt-1 flex-col px-5">
            <div class="py-1">
                <div class="flex items-center py-1">
                    <div class="w-2/6 items-center font-bold text-base text-right pr-3 text-gray-600">가성비</div>
                    <div class="w-4/6 h-3">
                        <div class="bg-blue-400 rounded-full h-3" style="width: 100%"></div>
                    </div>
                    <!-- <div class="w-4/6 bg-yellow-400 h-2.5 rounded-full" style="width: 100%"></div> -->
                </div>
                <div class="flex items-center py-1">
                    <div class="w-2/6 items-center font-bold text-base text-right pr-3 text-gray-600">신뢰성</div>
                    <div class="w-4/6 h-3">
                        <div class="bg-blue-400 rounded-full h-3" style="width: 70%"></div>
                    </div>
                </div>
                <div class="flex items-center py-1">
                    <div class="w-2/6 items-center font-normal text-base text-right pr-3 text-gray-600">성능</div>
                    <div class="w-4/6 h-2">
                        <div class="bg-blue-400 rounded-full h-2" style="width: 40%"></div>
                    </div>
                </div>
                <div class="flex items-center py-1">
                    <div class="w-2/6 items-center font-normal text-base text-right pr-3 text-gray-600">편의성</div>
                    <div class="w-4/6 h-2">
                        <div class="bg-blue-400 rounded-full h-2" style="width: 40%"></div>
                    </div>
                </div>
                <div class="flex items-center py-1">
                    <div class="w-2/6 items-center font-normal text-base text-right pr-3 text-gray-600">신기술</div>
                    <div class="w-4/6 h-2">
                        <div class="bg-blue-400 rounded-full h-2" style="width: 40%"></div>
                    </div>
                </div>
                <div class="flex items-center py-1">
                    <div class="w-2/6 items-center font-normal text-base text-right pr-3 text-gray-600">승차감</div>
                    <div class="w-4/6 h-2">
                        <div class="bg-blue-400 rounded-full h-2" style="width: 30%"></div>
                    </div>
                </div>
                <div class="flex items-center py-1">
                    <div class="w-2/6 items-center font-normal text-base text-right pr-3 text-gray-600">디자인</div>
                    <div class="w-4/6 h-2">
                        <div class="bg-blue-400 rounded-full h-2" style="width: 30%"></div>
                    </div>
                </div>
            </div>
        </div>
    <!-- <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5">
        <router-link to="/CarResultDetail">차량결과 보기</router-link>
    </button> -->
        <button class="fixed bottom-8 ml-52 bg-blue-600 py-2 px-2 rounded-full drop-shadow-lg flex justify-center items-center text-white text-l hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300">
            <router-link to="/CarResultDetail">차량결과 보기</router-link>
        </button>
    </div>
</template>

<script setup>
    import { reactive } from 'vue'
    import CarResultDetail from '../components/CarResultDetail.vue'
    
    const CharVar = reactive({
        index: 0,
        Target: 'assets/icon_Target.png',
        MyChar: 'assets/icon_MyChar.png',
        VehicleType: 'assets/Vehicles-Vector-Icons2 5.png',
        Comment: '성능과 안전 두마리 토끼를\n 잡으려는 당신!',
        Mystyle: '조약돌 같은 쿠페',
        hashTags: [{a:'#패들모양의',b:'#날렵한'}],
        items:['#패들모양의','#날렵한']
    })
    function replaceWithBr(String){
        return String.replace(/\n/g,"<br />")
    }
</script>
