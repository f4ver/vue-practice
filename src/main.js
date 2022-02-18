import { createApp, VueElement } from "vue";
import App from "./App.vue";
import App1 from "./App1.vue";






const app = createApp(App);
const app1 = createApp(App1);




//app1.mount("#app1");
app.mount("#app");

//при комментировании строки  16/17 можем получить погоду/галерею(по умолчанию закомментирована 16 строка)
//также отдельно прикреплю целый проект галереи 
//в нем поиск коллекций осуществляется через замену слова в поле(58 строка), поиск через инпут реализовать не смог