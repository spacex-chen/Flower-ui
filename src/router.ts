import {createRouter,createWebHistory} from 'vue-router'
import HomePage from "./views/HomePage.vue"
import LoveFlower from "./views/LoveFlower.vue" 
import BirthdayFlower from "./views/BirthdayFlower.vue" 
import FriendFlower from "./views/FriendFlower.vue" 
import WeddingFlower from "./views/WeddingFlower.vue" 
import FlowerDetail from "./views/FlowerDetail.vue"  
import FlowerPay from "./views/FlowerPay.vue"  
import Personcenter from "./views/PersonCenter.vue"  
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/loveflower', component: LoveFlower }, 
    { path: '/birthdayflower', component: BirthdayFlower }, 
    { path: '/friendflower', component: FriendFlower }, 
    { path: '/weddingflower', component: WeddingFlower }, 
    { path: '/detail', component: FlowerDetail } ,
    { path: '/pay', component: FlowerPay },
    { path: '/personcenter', component: Personcenter },
  ],
})
export default router