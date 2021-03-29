import { createApp } from 'vue';
import App from './App.vue';
// 如果要使用.scss样式文件，则需要引入base.scss文件
import 'element-plus/packages/theme-chalk/src/base.scss'
import { ElButton, ElSelect } from 'element-plus';

const app = createApp(App);
app.use(ElButton);
app.use(ElSelect);
app.mount('#app');