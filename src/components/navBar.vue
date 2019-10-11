<template>
  <v-app>
    <b-navbar toggLeable="lg" type="dark" id="mainNav" variant="dark">
      <b-container>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand class="js-scroll-trigger" href="#">Literario</b-navbar-brand>

        <div>
          <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
              <b-nav-item href="#services-section" exact>Eventos</b-nav-item>
              <b-nav-item href="#portafolio-section">Portafolio</b-nav-item>
              <b-nav-item href="#">Tiempo</b-nav-item>
              <b-nav-item href="#about-section">About</b-nav-item>
              <b-nav-item>Contact</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-container>
    </b-navbar>
    
    <b-container>
      <services id="services-section"/>
      <portafolio id="portafolio-section"/>
      <about id="about-section"/>
    </b-container>
  </v-app>
</template>

<script>
import portafolio from './portafolio';
import about from './about';
import services from './services';

export default {
  name: "NavBar",
  components: {
    portafolio,
    services,
    about,
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
