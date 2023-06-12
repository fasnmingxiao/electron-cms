import { createStore } from "vuex";
import AuthStore from "./modules/auth";
import VuexPersistence from "vuex-persist";
import Cookies from "js-cookie";

const vuexCookie = new VuexPersistence({
  restoreState: (key) => Cookies.get(key),
  saveState: (key, state) =>
    Cookies.set(key, state, {
      expires: 3,
    }),
  modules: ["AUTH"], //only save user module
  filter: (mutation) =>
    mutation.type == "loginSuccess" || mutation.type == "loginFailure",
});

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  modules: {
    AUTH: AuthStore,
  },
  plugins: [vuexCookie.plugin],
});
export default store;
