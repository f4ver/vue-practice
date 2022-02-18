import App1 from "../App1.vue";
import App from "../App.vue";
import VueRouter from "vue-router";

export default new VueRouter  ({
    routes: [{
        path: '/gallery',
        component:App1
    }],
    routes: [{
        path: '/',
        component:App
    }]
})