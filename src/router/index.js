import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Login from '@/components/auth/Login'
import Registration from '@/components/auth/Registration'
import Campaign from '@/components/home/Campaign'
import CampaignDetail from '@/components/home/CampaignDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/campaigns',
      name: 'campaigns',
      component: Campaign
    },
    {
      path: '/campaigns/:id',
      component: CampaignDetail
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    }
  ]
})
