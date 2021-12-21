<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Asset Management App
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
    <q-scroll-area style="height: calc(100% - 150px); margin-top: 180px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item active clickable v-ripple to="/Users">
              <q-item-section >
                USERS 
              </q-item-section>
            </q-item>
             <q-separator />
            <q-item active clickable v-ripple to="/Equipments">
              <q-item-section>
                EQUIPMENTS
              </q-item-section>
            </q-item>
            <q-separator />
            <!-- Break -->
             <div class="flex-break q-py-md"></div>
             <div class="flex-break q-py-md"></div>
             <div class="flex-break q-py-md"></div>
             <div class="flex-break q-py-md"></div>
              <div class="flex-break q-py-md"></div>
             <div class="flex-break q-py-md"></div>
             <div class="flex-break q-py-md"></div>
             <div class="flex-break q-py-md"></div>
              <div class="flex-break q-py-md"></div>
             <div class="flex-break q-py-md"></div>
             <div class="flex-break q-py-md"></div>
             <div class="flex-break q-py-md"></div>


             <q-separator />
            <q-item active clickable v-ripple>
              <q-item-section>
                Settings
              </q-item-section>
            </q-item>
             
            <q-item active clickable v-ripple to="/">
              <q-item-section>
                Logout
              </q-item-section>
            </q-item>

            
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="~assets/hero19.png" style="height: 180px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="100px" class="q-mb-sm">
              <img src="~assets/pic_sid189-0-norm.png">
            </q-avatar>
            <div class="text-weight-bold">Daniel Field</div>
            <div>daniel@example.com</div>
          </div>
        </q-img>
      
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink.vue'

// const linksList = [
//   {
//     title: 'Docs',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: 'https://quasar.dev'
//   },
//   {
//     title: 'Github',
//     caption: 'github.com/quasarframework',
//     icon: 'code',
//     link: 'https://github.com/quasarframework'
//   },
//   {
//     title: 'Discord Chat Channel',
//     caption: 'chat.quasar.dev',
//     icon: 'chat',
//     link: 'https://chat.quasar.dev'
//   },
//   {
//     title: 'Forum',
//     caption: 'forum.quasar.dev',
//     icon: 'record_voice_over',
//     link: 'https://forum.quasar.dev'
//   },
//   {
//     title: 'Twitter',
//     caption: '@quasarframework',
//     icon: 'rss_feed',
//     link: 'https://twitter.quasar.dev'
//   },
//   {
//     title: 'Facebook',
//     caption: '@QuasarFramework',
//     icon: 'public',
//     link: 'https://facebook.quasar.dev'
//   },
//   {
//     title: 'Quasar Awesome',
//     caption: 'Community Quasar projects',
//     icon: 'favorite',
//     link: 'https://awesome.quasar.dev'
//   }
// ];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  // components: {
  //   EssentialLink
  // },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      // essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
