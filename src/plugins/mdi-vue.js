import mdiVue from 'mdi-vue/v3'
import {
  mdiRoutes,
  mdiConnection,
  mdiImageArea,
  mdiTrophy,
  mdiSecurity,
  mdiDatabase,
  mdiTransitionMasked,
  mdiBug
} from '@mdi/js'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(mdiVue, {
    icons: {
      mdiRoutes,
      mdiConnection,
      mdiImageArea,
      mdiTrophy,
      mdiSecurity,
      mdiDatabase,
      mdiTransitionMasked,
      mdiBug
     }
  })
})
