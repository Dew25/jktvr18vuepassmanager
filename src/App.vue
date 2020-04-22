<template>
  <v-app>
    <MenuComponent/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import  MenuComponent from '@/components/MenuComponent';

export default {
  name: 'App',

  components: {
    MenuComponent,
  },

  data: () => ({
    //
  }),
};
</script>
