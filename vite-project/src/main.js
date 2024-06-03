import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'

import pt from './locales/pt.json'
import en from './locales/en.json'


const languages = {
    pt,
    en,
    
}

const i18n = createI18n({
    locale: navigator.language,
    fallbackLocale: 'en',
    messages: languages,
  
})

createApp(App)
.use(router)
.use(i18n)
.mount('#app')