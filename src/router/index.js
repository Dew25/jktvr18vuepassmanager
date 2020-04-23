import Vue from 'vue'
import VueRouter from 'vue-router'
import   WelcomeComponent  from  "@/components/WelcomeComponent"
import   RegistrationComponent  from  "@/components/auth/RegistrationComponent"
import   LoginComponent  from  "@/components/auth/LoginComponent"
import   ProfileComponent  from  "@/components/ProfileComponent"
import   ResourceComponent  from  "@/components/ResourceComponent"
import   MypassComponent  from  "@/components/MypassComponent"

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
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileComponent
    },
    {
      path: '/listResources',
      name: 'listResources',
      component: ResourceComponent
    },
    {
      path: '/mypass',
      name: 'Mypass',
      component: MypassComponent
    },
    
]

const router = new VueRouter({
  routes
})

export default router
