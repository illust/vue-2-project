const state = {
  count: 0,
  age: 12,
  token: "",
  userId: "123",
  userInfo: {}
};
const getters = {
  getUserId: function(state) {
    return state.userId;
  }
};
const mutations = {
  setAge: function(state, value) {
    state.age = value;
  },
  setToken(state, data) {
    state.token = data;
  },
  setUserId: function(state, value) {
    state.userId = value;
  },
  setUserInfo(state, value) {
    console.log("value", value);

    state.userInfo = value;
  }
};
const actions = {
  getUserInfo({ state, commit }) {
    // alert(state.age);
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};
