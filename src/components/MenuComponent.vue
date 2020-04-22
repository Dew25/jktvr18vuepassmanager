<template>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>Менеджер паролей</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="d-flex  flex-row-reverse justify-end">
       <v-btn 
          v-for="link in links" 
          :key="link.id"
          :to="link.url" 
          text  
       >
          {{link.title}}
       </v-btn>
      </div>
    </v-app-bar>
</template>
<script>
export default {
  name: 'MenuComponent',
  data:()=>({
    links: [
      {id:'1',title:'Вход', url: '/login',icon: 'mdi-account'},
      {id:'2',title:'Регистрация', url: '/registration',icon: 'mdi-account'},
    ]
  })
}
</script>