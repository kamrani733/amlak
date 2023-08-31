<!-- eslint-disable vue/html-indent -->
<template>
    <div dir="rtl" class="flex p-5 bg-gray-200 justify-evenly items-center" >
        <div class="w-1/3 flex justify-around mr-10">
            <img class="ml-3 " src="../assets/logo.svg">
        </div>
        <div class="flex justify-between w-1/3 text-secondry text-md">
            <a class="text-primary" href="#">
                صفحه اصلی
            </a>
            <a href="#">
                خدمات مشتریان
            </a>
            <a href="#">
                ارتباط با ما
            </a>
            <a href="#">
                درباره ما
            </a>
            <a href="#">
                درباره ما
            </a>
            <a href="#">
                درباره ما
            </a>
        </div>
        <div class="flex w-1/3 pr-7 items-center">
            <div class="text-primary">
                ورود به پنل کاربری
            </div>
            <div class="bg-primary text-white p-5 flex items-center mr-2 rounded-sm h-8">
                عضویت
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderSection'
}
</script>
