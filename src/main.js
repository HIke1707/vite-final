// import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Field, Form, ErrorMessage } from 'vee-validate';

import App from './App.vue';
import router from './router';
import './validation/index';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('v-form', Form);
app.component('v-field', Field);
app.component('error-message', ErrorMessage);

app.mount('#app');
