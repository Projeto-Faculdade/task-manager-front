import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'

import pt from './locales/pt-br.json'
import en from './locales/en.json'
import sp from './locales/sp.json'


const languages = {
    pt,
    en,
    sp
}

const i18n = createI18n({
    locale: navigator.language,
    fallbackLocale: 'en',
    messages: languages,
    missingWarn: false
  
})

createApp(App)
.use(router)
.use(i18n)
.mount('#app')