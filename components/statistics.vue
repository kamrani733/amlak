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
    <div class="bg-third flex justify-center mb-10">
        <div class="bg-third text-center mb-10 w-[80%]">
            <div class="flex items-center mt-5 justify-center">
                <div class=" flex-col flex items-center  m-5 py-10 w-1/5 p-5">
                    <img src="../assets/icons/map.svg" alt="My Image" class=" w-20  " />
                    <div class="text-[30px] my-3" > +100 </div>
                    <div class="text-secondry  text-[13px]">
                        تعداد ملک های ثبت شده
                    </div>
                </div>
                <div class=" flex-col flex items-center  m-5 py-10 w-1/5 p-5">
                    <img src="../assets/icons/office.svg" alt="My Image" class=" w-20  " />
                    <div class="text-[30px] my-3" > +250 </div>
                    <div class="text-secondry  text-[13px]">تعداد آپارتمان ها</div>
                </div>
                <div class=" flex-col flex items-center  m-5 py-10 w-1/5 p-5">
                    <img src="../assets/icons/interior-design.svg" alt="My Image" class=" w-20  " />
                    <div class="text-[30px] my-3 ">+233 </div>
                    <div class="text-secondry  text-[13px]">
                        تعداد ملک های استجاری
                    </div>
                
                </div>
                <div class=" flex-col flex items-center  m-5 py-10 w-1/5 p-5">
                    <img src="../assets/icons/excavator.svg" alt="My Image" class=" w-20  " />
                    <div class="text-[30px] my-3">+900</div>
                    <div class="text-secondry  text-[13px]">میزان فروش</div>
                </div>
            </div>
        </div>
    </div>
</template>
