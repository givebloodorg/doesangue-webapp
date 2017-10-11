import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
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
    }
  ]
})
