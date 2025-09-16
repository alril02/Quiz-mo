const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: 'game', component: () => import('pages/GamePage.vue') },
      { path: 'end', component: () => import('pages/EndPage.vue') },
      { path: 'highscores', component: () => import('pages/HighScoresPage.vue') },
    ],
  },
]

export default routes
