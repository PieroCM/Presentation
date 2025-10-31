const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/IndexPage.vue'),
        meta: { title: 'Home - Piero Calderón Portfolio' }
      },
      { 
        path: '/skills', 
        component: () => import('pages/SkillsPage.vue'),
        meta: { title: 'Skills - Piero Calderón Portfolio' }
      },
      { 
        path: '/projects', 
        component: () => import('pages/ProjectsPage.vue'),
        meta: { title: 'Projects - Piero Calderón Portfolio' }
      },
      { 
        path: '/contact', 
        component: () => import('pages/ContactPage.vue'),
        meta: { title: 'Contact - Piero Calderón Portfolio' }
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
