<template>
  <v-app id="app">
      <navBar/>
  </v-app>
</template>


<script>
import navBar from './components/navBar';

export default {
  name: "App",
  components: {
    navBar,
  },
  data: () => ({
    flat: false,
    media: true,
    loading: false,
    actions: true,
    outlined: false,
    elevation: undefined,
    raised: false,
    width: 344,
    height: undefined
  })
};
</script>
