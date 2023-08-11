import { createApp, defineAsyncComponent } from 'vue'
import { Router, componentsView } from "./config/routes";

Router.build()
    .then(routes => {
        Router.routes = routes;
        componentsView();
        
        const App = defineAsyncComponent(() => import('./App.vue'));

        const app = createApp(App);

        app.mount('#app');
    })
    .catch(error => {
        console.log(error);
    });