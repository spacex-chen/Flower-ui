<template>
    <div class="common-layout" v-if="isShow">
        <el-container>
            <el-header>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: path }">列表页</el-breadcrumb-item>
                    <el-breadcrumb-item>详情页</el-breadcrumb-item>
                </el-breadcrumb>
            </el-header>
            <el-container>
                <el-aside width="500px">
                    <el-image class="bigImage" :src="info.bigImage"></el-image>
                </el-aside>
                <el-main>
                    <ul class="product-info">
                        <li>
                            <h3>{{ info.title }}</h3>
                        </li>
                        <li>
                            <span>{{ info.description }}</span>
                        </li>
                        <li>
                            <span class="left">售价</span>
                            <span class="right" style="color:red;font-size:25px;">￥{{ info.price }}</span>
                        </li>
                        <li>
                            <span class="left">花语</span>
                            <span class="right">{{ info.language }}</span>
                        </li>
                        <li>
                            <span class="left">材料</span>
                            <span class="right">{{ info.material }}</span>
                        </li>
                        <li style="border-bottom:1px solid #e7ebef;">
                            <span class="left">包装</span>
                            <span class="right">{{ info.packing }}</span>
                        </li>
                        <li>
                            <span class="left">配送说明</span>
                            <span class="right">{{ info.deliveryRemarks }}</span>
                        </li>
                    </ul>
                    <el-button type="warning" round @click="goToPay">立即购买</el-button>
                </el-main>
            </el-container>
        </el-container>
        <el-container>
            <el-aside width="240px">
                <h5 style="margin-top: 83px;">热销推荐</h5>
                <ul class="product-recommend">
                    <li>
                        <el-image src="/images/content/a1.jpg"></el-image>
                        <p>韩式系列/公主的假日</p>
                        <p>￥239</p>
                    </li>
                    <li>
                        <el-image src="/images/content/a2.jpg"></el-image>
                        <p>韩式系列/公主的假日</p>
                        <p>￥239</p>
                    </li>
                    <li>
                        <el-image src="/images/content/a3.jpg"></el-image>
                        <p>韩式系列/公主的假日</p>
                        <p>￥239</p>
                    </li>
                    <li>
                        <el-image src="/images/content/a4.jpg"></el-image>
                        <p>韩式系列/公主的假日</p>
                        <p>￥239</p>
                    </li>
                    <li>
                        <el-image src="/images/content/a5.jpg"></el-image>
                        <p>韩式系列/公主的假日</p>
                        <p>￥239</p>
                    </li>
                    <li>
                        <el-image src="/images/content/a6.jpg"></el-image>
                        <p>韩式系列/公主的假日</p>
                        <p>￥239</p>
                    </li>
                    <li>
                        <el-image src="/images/content/a7.jpg"></el-image>
                        <p>韩式系列/公主的假日</p>
                        <p>￥239</p>
                    </li>
                    <li>
                        <el-image src="/images/content/a8.jpg"></el-image>
                        <p>韩式系列/公主的假日</p>
                        <p>￥239</p>
                    </li>
                </ul>
            </el-aside>
            <el-main>
                <div class="product-content">
                    <h3>商品详情</h3>
                    <el-image src="/images/detail/content/by_1.jpg"></el-image>
                    <el-image src="/images/detail/content/by_2.jpg"></el-image>
                    <el-image src="/images/detail/content/by_3.jpg"></el-image>
                    <el-image src="/images/detail/content/by_4.jpg"></el-image>
                    <el-image src="/images/detail/content/by_5.jpg"></el-image>
                    <el-image src="/images/detail/content/by_6.jpg"></el-image>
                </div>
            </el-main>
        </el-container>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getFlowers } from '../http/index'
import { useRouter } from 'vue-router'
const path = ref('/loveflower');
//解析URL参数
let type = window.location.href.split('type=')[1];
switch (type) {
    case "1":
        path.value = '/loveflower'
        break;
    case "2":
        path.value = '/birthdayflower'
        break;
    case "3":
        path.value = '/friendflower'
        break;
    case "4":
        path.value = '/weddingflower'
        break;
}
const isShow = ref(false);
const info = ref()
let parms = {
    Id: 0,
    Type: type
}
onMounted(async () => {
    let urls = window.location.href.match(/id=(\S*)&type=/);
    if (urls != null) {
        parms.Id = parseInt(urls[1])
    }
    info.value = (await getFlowers(parms)).data.result[0]
    isShow.value = true;
})
const router = useRouter();
const goToPay = async () => {
    router.push({ path: '/pay', query: { id: parms.Id, type: parms.Type } });
}
</script>


<style lang="scss">
.bigImage {
    width: 458px;
    height: 500px;
}
.product-info {
    padding-left: 0;
    margin-top: -20px;
    text-align: initial;
    li {
        width: 100%;
        height: 30px;
        margin-bottom: 20px;
        .left {
            display: inline-block;
            width: 80px;
            padding-left: 12px;
            font-size: 13px;
            line-height: 18px;
            color: #71797f;
            vertical-align: top;
        }
        .right {
            display: inline-block;
            width: 580px;
            font-size: 13px;
            line-height: 18px;
            color: #232628;
            vertical-align: top;
            text-align: justify;
            padding-right: 36px;
        }
    }
}
.product-recommend {
    padding-left: initial;
}
.product-content {
    padding: 40px 115px 95px;
    text-align: center;
}
</style>