import Vue from 'vue'
import Home from '@/components/home/Home'

describe('Home.vue', () => {
  it('should render the text "Home" in h1', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.col-sm-6 h1').textContent)
      .to.equal('Home')
  })
})
