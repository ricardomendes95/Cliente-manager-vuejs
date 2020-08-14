import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "./assets/app.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faSearch,
    faEllipsisV,
    faUserPlus,
    faClipboardList,
    faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSearch, faEllipsisV, faUserPlus, faClipboardList, faSignOutAlt);

Vue.component("fa-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");