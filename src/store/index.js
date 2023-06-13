import { createStore } from "vuex";
import AuthStore from "./modules/auth";
import VuexPersistence from "vuex-persist";
import Cookies from "js-cookie";

const vuexCookie = new VuexPersistence({
  restoreState: (key) => JSON.parse(Cookies.get(key) ?? null),
  saveState: (key, state) =>
    Cookies.set(key, JSON.stringify(state), {
      expires: 3,
    }),
  modules: ["AUTH"],
  filter: (mutation) =>
    mutation.type == "AUTH/loginSuccess" ||
    mutation.type == "AUTH/loginFailure",
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
