
const routes = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      { path: '/Registration', component: () => import('pages/Registration.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/Index.vue') },
      { path: '/Navigation', component: () => import('pages/Navigation.vue') },
      { path: '/Error404', component: () => import('pages/Error404.vue') },
      { path: '/Assign-Equipments', component: () => import('pages/Assign-Equipments.vue') },
      { path: '/Category-Delete', component: () => import('pages/Category-Delete.vue') },
      { path: '/Category-Mod', component: () => import('pages/Category-Mod.vue') },
      { path: '/Delete-Item', component: () => import('pages/Delete-Item.vue') },
      { path: '/Discard-Items', component: () => import('pages/Discard-Items.vue') },
      { path: '/Edit-Equipments', component: () => import('pages/Edit-Equipments.vue') },
      { path: '/Equipments-Category', component: () => import('pages/Equipments-Category.vue') },
      { path: '/User-Equipments/:id', component: () => import('src/pages/User-Equipments.vue') },
      { path: '/Mark-Defective', component: () => import('pages/Mark-Defective.vue') },
      { path: '/Show-Equipments', component: () => import('pages/Show-Equipments.vue') },
      { path: '/Users', component: () => import('pages/Users.vue') },
      { path: '/Mod-Users', component: () => import('pages/Mod-Users.vue') },
      { path: '/Equipments/:id', component: () => import('pages/Equipments.vue') },
      { path: '/Grid', component: () => import('pages/Grid.vue') },
      { path: '/Add-Equipments/', component: () => import('pages/Add-Equipments.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  }
]

export default routes
