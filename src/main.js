import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/main.scss";
import { registerGlobalComponent } from "./utils/import";
import "animate.css";
import store from "./store";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  FaFlag,
  RiZhihuFill,
  BiBatteryFull,
  CoSearch,
  CoLocationPin,
  IoSearchOutline,
  LaShippingFastSolid,
  LaUser,
  IoGitCompareOutline,
  CoHeart,
  HiSolidUsers,
  BiWifi,
  BiArrowRightCircleFill,
  BiChevronRight,
} from "oh-vue-icons/icons";

addIcons(
  FaFlag,
  RiZhihuFill,
  CoSearch,
  CoLocationPin,
  IoSearchOutline,
  BiBatteryFull,
  LaShippingFastSolid,
  LaUser,
  IoGitCompareOutline,
  CoHeart,
  HiSolidUsers,
  BiWifi,
  BiArrowRightCircleFill,
  BiChevronRight
);
const app = createApp(App);

registerGlobalComponent(app);
app.use(store);
app.component("v-icon", OhVueIcon);
app.use(router);
app.mount("#app");
