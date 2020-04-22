import Vue from 'vue'
import VueRouter from 'vue-router'
import   WelcomeComponent  from  "@/components/WelcomeComponent"
import   RegistrationComponent  from  "@/components/auth/RegistrationComponent"
import   LoginComponent  from  "@/components/auth/LoginComponent"

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Welcome',
      component: WelcomeComponent
    },
    {
      path: '/registration',
      name: 'Registration',
      component: RegistrationComponent
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginComponent
    },
  
]

const router = new VueRouter({
  routes
})

export default router
