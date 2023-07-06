import { createStore } from 'vuex'
const store = createStore({
  state() {
    return {
      IsShowLogin: false,
      IsShowRegister: false,
      NickName: localStorage["NickName"]//昵称，登录成功后赋值
    }
  },
  mutations: {
    OpenLogin(state) {
      state.IsShowLogin = true;
    },
    CloseLogin(state) {
      state.IsShowLogin = false;
    },
    OpenRegister(state) {
      state.IsShowRegister = true;
    },
    CloseRegister(state) {
      state.IsShowRegister = false;
    },
    SettingNickName(state, NickName) {
      state.NickName = NickName;
    }
  }
})
export default store;