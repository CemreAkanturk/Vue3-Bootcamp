import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.css";
import appHeader from "@/components/Shared/appHeader";
import appBookMarkList from "@/components/Shared/appBookMarkList";
import { appAxios } from "@/utils/appAxios";
import Store from "./store";

const app = createApp(App);

app.component("appHeader", appHeader);
app.component("appBookMarkList", appBookMarkList);

app.use(router);
app.use(Store)

app.config.globalProperties.$appAxios = appAxios;

app.mount("#app");