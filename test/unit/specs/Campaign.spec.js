import Vue from 'vue'
import Home from '@/components/home/Campaign'

describe('Campaign.vue', () => {
  it('should render the text "Featured Campaigns" in h1', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.container h1').textContent)
      .to.equal('Featured Campaigns')
  })
})
