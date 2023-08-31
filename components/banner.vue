<script>
import '@vuepic/vue-datepicker/dist/main.css'
import console from 'console';

export default {
  components: {
  },
  name: "banner",
  data() {
    return {
    };
  },
  compunent() {
  },
  methods: {
  },
  computed: {
  },
}
</script>
<template>
  <div class="flex justify-center items-center mt-5 ">
    <div class="relative ">
      <img src="../assets/image/bgmain.jpg" alt="My Image" class="bg-cover w-full h-full object-cover" />
      <div dir="rtl" class="  mx-auto relative w-3/4 align-middle mt-[-30rem] ">
        <div class="bg-gray-100/60 w-fit px-2 rounded-3xl h-fit text-md">
          بهترین سایت املاک در سطح کشور
        </div>
        <div>
          <div class="text-[60px] font-bold text-gray-800">بهترین موقعیت را</div>
          <div class="text-[60px] font-bold text-primary"> پیدا کن ! </div>
        </div>
        <div class="w-[25rem]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
          روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
        </div>
        <div class="flex mt-6 mr-5">
          <div class="bg-primary text-white ml-3 px-4 py-2 cursor-pointer  rounded-md">خرید</div>
          <div class="bg-white text-primary  px-4 py-2 cursor-pointer ml-3  rounded-md">فروش</div>
          <div class="bg-white text-primary px-4 py-2 cursor-pointer ml-3 rounded-md">اجاره</div>
        </div>
        <div class="backdrop-blur-lg pl-2 py-2 mt-[-10px]  w-fit">
          <div class="flex ">
            <div class="bg-white flex w-[10rem] rounded-md mr-3 p-3 justify-between cursor-pointer">
              <img src="../assets/icons/location.svg" alt="My Image" class="w-5 h-5" />
              <div>موقعیت مکانی</div>
              <img src="../assets/icons/chevron-down.svg" alt="My Image" class="w-5 h-5" />
            </div>
            <div class="bg-white flex  w-[10rem] rounded-md mr-3 p-3 justify-between cursor-pointer">
              <img src="../assets/icons/home.svg" alt="My Image" class="w-5 h-5" />
              <div> نوع ملک</div>
              <img src="../assets/icons/chevron-down.svg" alt="My Image" class="w-5 h-5" />
            </div>
            <div class="bg-white flex  w-[10rem] rounded-md mr-3 p-3 justify-between cursor-pointer">
              <img src="../assets/icons/price.svg" alt="My Image" class="w-5 h-5" />
              <div> قیمت </div>
              <img src="../assets/icons/chevron-down.svg" alt="My Image" class="w-5 h-5" />
            </div>
            <div class="bg-primary flex items-center  text-white mr-3 w-[7rem] rounded-md p-3 ml-5 justify-around cursor-pointer">
              <img src="../assets/icons/searchWhite.svg" alt="My Image" class="w-4 h-4 ml-1" />
              <div class="ml-3"> جستجو </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
