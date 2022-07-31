import "./bootstrap";
import { createApp } from "vue";

import App from "./components/App.vue";
import router from "./router";
// import VueAxios from "vue-axios";
// import axios from "axios";

// import * as VueRouter from "vue-router";

// const app = createApp({});

createApp(App).use(router).mount("#app");
// app.component(AboutComponent);
// app.component(ContactComponent);

// app.use(VueAxios, axios);
// app.use(router);
// app.mount("#app");

// createApp(app).use(VueAxios, axios).use(router).mount("#app");
