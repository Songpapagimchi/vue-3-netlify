<template>
    <div class="wrap">
        <h1 class="likert-header">This is a Likert Scale survey</h1>
        <form class="bg-white p-12 rounded-lg shadow-lg w-full mt-8">

            <label class="statement">This HTML Likert scale is easy to use.
                <img :src="likObj.getImg[1]" width="560"/>
            </label>
            <ul class='likert'>
                <li>
                    <input type="radio" name="likert" value="strong_disagree">
                    <label>매우 아니다</label>
                </li>
                <li>
                    <input type="radio" name="likert" value="disagree">
                    <label>아니다</label>
                </li>
                <li>
                    <input type="radio" name="likert" value="neutral">
                    <label>보통이다</label>
                </li>
                <li>
                    <input type="radio" name="likert" value="agree">
                    <label>그렇다</label>
                </li>
                <li>
                    <input type="radio" name="likert" value="strong_agree">
                    <label>매우 그렇다</label>
                </li>
            </ul>
        </form> 
    </div>
</template>

<script setup>
import { reactive } from 'vue'

    const likObj = reactive({
        getImg:['public/assets/01-1.png','public/assets/01-2.png']
    });

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