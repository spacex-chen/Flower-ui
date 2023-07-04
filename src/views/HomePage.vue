<template>
    <div>
        <el-carousel height="350px" v-if="isShow">
            <el-carousel-item v-for="item in images" :key="item">
                <el-link :href="item.courseUrl" target="_blank">
                    <el-image :src="item.imageUrl"></el-image>
                </el-link>
            </el-carousel-item>
        </el-carousel>
    </div>
    <HomeContent/>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getBannersImg } from '../http/index'
import HomeContent from "../components/HomeContent.vue"
const images = ref();
const isShow = ref(false);
onMounted(async() =>{
    console.log((await getBannersImg()).data);
    images.value = (await getBannersImg()).data;
    isShow.value = true;
})

</script>

<style lang="scss">
.el-carousel_container {
    height: 480px !important;
    margin-top: 10px;
}
</style>