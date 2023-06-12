import AuthSerivices from "@/services/auth";

const user = JSON.parse(localStorage.getItem("user"));
const accessToken = JSON.parse(localStorage.getItem("accessToken"));
const refeshToken = JSON.parse(localStorage.getItem("refeshToken"));
const expired = JSON.parse(localStorage.getItem("expired"));

const initialState =
  user && accessToken && refeshToken && expired
    ? { accessToken, refeshToken, expired, user }
    : { accessToken: null, refeshToken: null, expired: null, user: null };

const state = {
  auth: initialState,
};

const mutations = {
  loginSuccess(state, data) {
    state.auth.accessToken = data[0].access_token;
    state.auth.refeshToken = data[0].refresh_token;
    state.auth.expired = data[0].expires_in;
    state.auth.user = data.user;
  },
  loginFailure(state) {
    state.auth.accessToken = null;
    state.auth.refeshToken = null;
    state.auth.expired = null;
    state.auth.user = null;
  },
};
const actions = {
  async login({ commit }, credentials) {
    const response = await AuthSerivices.login(credentials);
    if (response.success) {
      commit("loginSuccess", response.data);
      return true;
    } else {
      commit("loginFailure");
      return false;
    }
  },
};
const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
