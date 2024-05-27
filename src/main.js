import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// пагинация во всем проекте
import Paginate from "vuejs-paginate-next"

// createApp(App).use(store).use(router).component('Paginate', Paginate).mount('#app')

// переписали createApp - аналогичен createApp(App).use(store).use(router).mount('#app')
const app = createApp(App)

app
    .component('Paginate', Paginate)

app
    .use(store)
    .use(router)
    .mount('#app')
