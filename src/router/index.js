import Vue from 'vue'
import Router from 'vue-router'

// components
import UserLogin from '../components/UserLogin'
import UserSignup from "../components/UserSignup"
import Save_calorie from "../components/Save_calorie";

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/login',
          name: 'login',
          component: UserLogin,
          meta: {
              isPublic: true
          }
      },
      {
          path: '/signup',
          name: 'signup',
          component: UserSignup,
          meta: {
              isPublic: true
          }
      },
      {
          path: '/Save_calorie',
          component: Save_calorie,
      }
  ]
})
