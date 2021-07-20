import { createApp } from 'vue'
import { library } from "@fortawesome/fontawesome-svg-core"
import { faGripVertical, faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import App from './App.vue'

library.add(faGripVertical, faCaretDown, faCaretRight);

createApp(App)
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .mount('#app')
