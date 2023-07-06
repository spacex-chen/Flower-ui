<template>
    <div class="common-layout">
      <el-container>
        <el-header>
          <p>请扫码支付</p>
        </el-header>
        <el-main>
          <el-image style="display: block;width: 300px;margin:0px auto" src="/images/pay/测试二维码.png" />
          <el-button type="warning" round @click="goToPay">模拟支付</el-button>
        </el-main>
      </el-container>
    </div>
  </template> 
  <script lang="ts" setup>
  import { CreateOrder } from '../http/index'
  import { ElMessage } from 'element-plus'
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  const store = useStore();
  const router = useRouter();
  let parms = {
    Id: 0,
    Type: window.location.href.split('type=')[1]
  }
  let urls = window.location.href.match(/id=(\S*)&type=/);
  if (urls != null) {
    parms.Id = parseInt(urls[1])
  }
  const goToPay = async () => {
    //验证登录信息
    if (localStorage["NickName"] == undefined) {
      ElMessage.warning("请登录后再点击购买！")
      return;
    }
    //根据当前的用户信息，产品信息生成一笔订单
    try {
      let res = (await CreateOrder({ FlowerId: parms.Id })).data
      console.log(res)
      if (res.isSuccess) {
        ElMessage({
          message: '创建订单成功！',
          type: 'success',
        })
        router.push({ path: '/personcenter' });
      } else {
        ElMessage.error("创建订单失败，请联系系统管理员！")
      }
    } catch (error) {
      localStorage.removeItem('NickName');
      localStorage.removeItem('token');
      store.commit('SettingNickName', undefined)
      ElMessage.warning("请登录后刷新列表")
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .common-layout {
    padding-left: 0;
  }
  </style>