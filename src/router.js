import Vue from 'vue'
import Router from 'vue-router'

const Dashboard = () => import('@/views/Dashboard')
const CompanyData = () => import('@/views/CompanyData')
const CompanyPage = () => import('@/views/CompanyPage')
const CompanyTable = () => import('@/views/CompanyTable')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'dashboard/company/data'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: 'company/data',
          component: CompanyData
        },
        {
          path: 'company/page',
          component: CompanyPage
        },
        {
          path: 'company/table',
          component: CompanyTable
        }
      ]
    }
  ]
})
