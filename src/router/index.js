import Vue from 'vue'
import Router from 'vue-router'
import dashboardRoutes from './dashboard'
import profileDashboardRoute from './dashboard/profile'
import dashboardUserFollowing from './dashboard/follows'
import dashboardUserFollows from './dashboard/follows/followers'
import dashboardUserDonations from './dashboard/donations'
import dashboardUserDonated from './dashboard/donations/donated'
import dashboardSettingSecurity from './dashboard/settings/security'
import dashboardSettings from './dashboard/settings'
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
    profileDashboardRoute,
    dashboardUserFollowing,
    dashboardUserFollows,
    dashboardUserDonations,
    dashboardUserDonated,
    homeRoute,
    campaignRoute,
    campaignDetail,
    authDefault,
    loginRoute,
    registerRoute
  ]
})
