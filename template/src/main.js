import Vue from 'vue'
import store from '@/store'
import App from '@/App'
import MpvueRouterPatch from 'mpvue-router-patch'
Vue.config.productionTip = false
Vue.use(MpvueRouterPatch)

// import VueLazyLoad from 'vue-lazyload'
// Vue.use(VueLazyLoad)

const app = new Vue({
    store,
    ...App
})
app.$mount()
export default {
    // 这个字段走 app.json
    config: {
        // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
        // pages: ['pages/home/home', 'pages/im/im','/pages/ysq_court/notices/index'],
        window: {
            backgroundTextStyle: 'black',
            backgroundColor: '#fff',
            backgroundColorTop: '#ffffff',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: '长垣县法院执行平台',
            navigationBarBackgroundColor: '#fff',
            navigationBarTextStyle:'black'
        },
        tabBar: {
            color: '#999',
            selectedColor: '#d22222',
            backgroundColor: '#fff',
            borderStyle: 'black',
            list: [
                {
                    pagePath: '/pages/index',
                    text: '首页',
                    iconPath: 'static/assets/shouye_unselected.png',
                    selectedIconPath: 'static/assets/shouye_selected.png'
                },
                {
                    pagePath: '/pages/index',
                    text: '我的',
                    iconPath: 'static/assets/my_unselected.png',
                    selectedIconPath: 'static/assets/my_selected.png'
                }
            ]
        }
    }
}
