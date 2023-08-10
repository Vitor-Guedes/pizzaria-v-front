import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import { componentsView } from './config/routes.js';

const app = createApp(App);

componentsView().forEach(component => {
    app.component(component.name, defineAsyncComponent(() => {
        return import('@/' + component.path);
    }));
});

app.mount('#app')