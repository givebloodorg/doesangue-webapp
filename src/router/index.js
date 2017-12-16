import Vue from 'vue'
import Router from 'vue-router'
import dashboardRoutes from './dashboard'
import homeRoute from './home'
import campaignRoute from './home/campaigns'
import campaignDetail from './home/campaigns/details'
import loginRoute from './auth/login'
import registerRoute from './auth/register'
import authDefault from './auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    dashboardRoutes,
    homeRoute,
    campaignRoute,
    campaignDetail,
    authDefault,
    loginRoute,
    registerRoute
  ]
})
