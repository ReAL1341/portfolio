import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);

/**
 * 外部ライブラリ
 */
import VueAnimXyz from '@animxyz/vue3';
import '@animxyz/core';
app.use(VueAnimXyz);

/**
 * parts
 */
import SelectItermPart from './parts/SelectItemPart.vue';
app.component('select-item-part', SelectItermPart);

app.mount('#app');
