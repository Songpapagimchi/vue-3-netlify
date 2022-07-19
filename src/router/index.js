import { createRouter, createWebHistory } from "vue-router";

import MainPage from "../views/MainPage.vue";
import QuestionList from "../components/QuestionList.vue";
import LikertQuestion from "../components/LikertQuestion.vue";
import DynamicExample from "../components/DynamicExample.vue";
import CharResultDetail from "../components/CharResultDetail.vue";
import CarResultDetail from "../components/CarResultDetail.vue";

const routes = [
    {
        path: "/",
        name: "Home",       
        component: MainPage
    },
    {
        path: "/QuestionList",
        name: "QuestionList",       
        component: QuestionList
    },
    {
        path: "/LikertQuestion",
        name: "LikertQuestion",       
        component: LikertQuestion
    },
    {
        path: "/DynamicExample",
        name: "DynamicExample",       
        component: DynamicExample
    },
    {
        path: "/CharResultDetail",
        name: "CharResultDetail",       
        component: CharResultDetail
    },
    {
        path: "/CarResultDetail",
        name: "CarResultDetail",       
        component: CarResultDetail
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router