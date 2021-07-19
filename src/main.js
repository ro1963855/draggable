import { createApp } from 'vue'
import { library } from "@fortawesome/fontawesome-svg-core"
import { faGripVertical } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import App from './App.vue'

library.add(faGripVertical);

createApp(App)
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .mount('#app')
