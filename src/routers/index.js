import Vue from 'vue'
import Router from 'vue-router'

import Hello from 'VIEW/hello/hello'
import Active from 'VIEW/active/active'
import voteline from 'VIEW/voteline/voteline'
import zhuanpan from 'VIEW/zhuanpan/zhuanpan'
import List from 'VIEW/list/list'
import Github from 'VIEW/github/github'
import proImg from 'VIEW/proimg/proimg'
import Button from 'VIEW/button/button'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Active',
      component: Active
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/voteline',
      name: 'voteline',
      component: voteline
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/Github',
      name: 'Github',
      component: Github
    },
    {
      path: '/proImg',
      name: 'proImg',
      component: proImg
    },
    {
      path: '/Button',
      name: 'Button',
      component: Button
    },
    {
      path: '/zhuanpan',
      name: 'zhuanpan',
      component: zhuanpan
    }
  ]
})
