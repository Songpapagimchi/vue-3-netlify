<template>
    <div class="flex w-full h-screen justify-center items-top mt-5">
        <div class="flex-col ">
            <div class="w-full max-w-xs">
                <div class="flex items-center">
                    <button class="w-1/4 text-left text-3xl text-gray-700">
                        <router-link to="/">&lt;</router-link> 
                    </button>
                    <div class="flex justify-center font-bold text-xl text-gray-600 ml-5">
                        차량 검사 결과
                    </div>
                </div>
                <hr style="height:1px;color:grey" class="mt-1">
                <div>
                    <div class="font-bold text-s text-left text-gray-500 mt-3">
                        <p v-html="replaceWithBr(CarVar.Comment)"></p>
                    </div>
                </div>
                <div class="flex pt-3 items-baseline ml-3">
                    <div class="w-1/4 font-bold text-xl text-gray-700 underline hover:decoration-4">1순위</div>
                    <div class="w-1/4 font-bold text-xl text-gray-300 hover:text-gray-700 hover:underline decoration-4">2순위</div>
                    <div class="w-2/4 text-sm">자세히 알아보기  ></div>
                </div>
                <div class="flex items-center mt-3">
                    <div><img :src="CarVar.IconMedal" /></div>
                    <div class="font-bold text-xl text-gray-700 ml-2">기아 쏘렌토 하이브리드</div>
                </div>
                <div>
                    <img :src="CarVar.FirstPick" />
                </div>
                <div class="rounded-l-xl shadow-lg ml-3 pl-3 py-2">
                    <div class="font-bold text-sm text-gray-600">스노우 화이트 펄</div>
                    <div class="font-medium text-xs pt-1 ml-2 text-gray-500">{{CarVar.OptionComment}}</div>
                </div>
                <div class="flex ml-3 mt-7 items-baseline">
                    <div class="min-w-fit font-bold text-lg text-gray-500 ">옵션|</div>
                    <div class="min-w-fit font-bold text-lg text-purple-500 underline hover:decoration-4 ml-2">스노우 화이트 펄</div>
                    <div class="min-w-fit text-lg text-gray-500 ml-2">전자식 AWD</div>

                </div>
                <div class="flex ml-3 mt-3 items-baseline">
                    <div class="min-w-fit font-bold text-lg text-gray-500">가격|</div>
                    <div class="w-3/4 text-right font-bold text-xl text-gray-600 pl-2">{{CarVar.TotalPrice}}</div>
                </div>
                <div class="flex mt-10">
                    <div><img :src="CarVar.BulbFront" /></div>
                    <div class="flex-col ml-2">
                        <div class="font-bold text-s text-left text-gray-600">이 차량의 매력</div>
                        <div class="font-bold text-xs text-left text-gray-400">7가지 가치의 차량 정보를 알 수 있어요</div>
                    </div>
                </div>
                <div class="rounded-l-xl shadow-lg mt-5 ml-3 pl-3 py-3">
                    <div class="font-bold text-s text-left">가성비</div>
                    <div class="text-purple-700 font-bold mt-2">
                        연비 15.3km/l SUV 차량 기준 8등</div>
                    <div class="text-xs text-left text-gray-500 mt-2"> 
                        해외 자동차 전문매체 왓카(What Car)<br>
                        반복된 주행과 엄격하게 통제된 실험 조건속에<br>
                        실제 연비 측정 결과 SUV차량 기준 8등!
                    </div>
                </div>
                <div class="rounded-l-xl shadow-lg mt-5 ml-3 pl-3 py-3">
                    <div class="font-bold text-s text-left">신뢰성</div>
                    <div class="text-purple-700 font-bold mt-2">2022년 IQS 지수 SUV 전체 1등</div>
                </div>
                <div class="rounded-l-xl shadow-lg mt-5 ml-3 pl-3 py-3">
                    <div class="font-bold text-s text-left">성능</div>
                    <div class="text-purple-700 font-bold mt-2">성능 최고</div>
                </div>
            </div>
            <div class="mt-5 mb-5">
                <button class="ml-56 bg-blue-600 py-2 px-4 rounded-2xl drop-shadow-lg flex justify-center items-center text-white text-l hover:bg-blue-700 hover:drop-shadow-2xl ">
                    <router-link to="/">메인으로</router-link>
                </button>
            </div>
            <div class="my-10">
                
            </div>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue'
    import MainPage from "../views/MainPage.vue";
    
    const CarVar = reactive({
        Comment: '성능과 안전 두마리 토끼를\n 잡으려는 당신!',
        FirstPick: 'assets/image 77.png',
        OptionList: ['스노우 화이트 펄','전자식 AWD'],
        TotalPrice: '45,000,000원',
        IconMedal: 'assets/medal-front-color.png',
        BulbFront: 'assets/bulb-front-color.png',
        OptionComment: '8만원 추가 시, 기존 색상에 없는 스노우 화이트 컬러를 적용할 수 있습니다.',
        RecomData: [
            {
                id: 0,
                PictureURL: 'assets/image 77.png',
                ModelName: '기아 쏘렌토 하이브리드'
            },
            {
                id: 1,
                PictureURL: 'assets/image 77.png',
                ModelName: '현대 쏘렌토 하이브리드',
            },
        ],
        Image: null,
        index: 0
    })
    function replaceWithBr(String){
        return String.replace(/\n/g,"<br />")
    }
</script>

<style>

</style>