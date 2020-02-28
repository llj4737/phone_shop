import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './less/reset.less'

import { Dialog, Picker, Tab, TabPanel, Row, Col, Button } from '@nutui/nutui';

Dialog.install(Vue);
Picker.install(Vue);
Tab.install(Vue);
TabPanel.install(Vue);
Row.install(Vue);
Col.install(Vue);
Button.install(Vue);


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')