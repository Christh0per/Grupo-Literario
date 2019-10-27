<template>
  <v-app id="home">
    <!-- Header -->
    <header class="masthead">
      <div class="container">
        <div class="intro-text">
          <div class="intro-lead-in">Bienvenido a Literario Ñuble</div>
          <div class="intro-heading text-uppercase">Descubre el mundo de la literatura</div>
          <a
            class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
            href="#services"
          >Tell Me More</a>
        </div>
      </div>
    </header>

    <div class="container">
      <services id="services-section" />
      <portafolio id="portafolio-section" />
      <about id="about-section" />
      <team id="team-section" />
    </div>
    <clients />
    <contact id="contact-section" />
  </v-app>
</template>

<script>
import portafolio from "./portafolio";
import about from "./about";
import services from "./services";
import team from "./team";
import contact from "./contact";

export default {
  name: "Home",
  components: {
    portafolio,
    services,
    about,
    team,
    contact,
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

<!-- Bootstrap core JavaScript 
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Plugin JavaScript 
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Contact form JavaScript 
  <script src="/js/jqBootstrapValidation.js"></script>
  <script src="/js/contact_me.js"></script>

  <!-- Custom scripts for this template 
  <script src="./js/agency.min.js"></script>
  -->

<style>

body {
  overflow-x: hidden;
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

p {
  line-height: 1.75;
}

a {
  color: #fed136;
}

a:hover {
  color: #fec503;
}

.text-primary {
  color: #fed136 !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.page-section {
  padding: 100px 0;
}

.page-section h2.section-heading {
  font-size: 40px;
  margin-top: 0;
  margin-bottom: 15px;
}

.page-section h3.section-subheading {
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 75px;
  text-transform: none;
  font-family: "Droid Serif", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

@media (min-width: 768px) {
  section {
    padding: 150px 0;
  }
}

::-moz-selection {
  background: #fed136;
  text-shadow: none;
}

::selection {
  background: #fed136;
  text-shadow: none;
}

img::-moz-selection {
  background: transparent;
}

img::selection {
  background: transparent;
}

img::-moz-selection {
  background: transparent;
}

.btn {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
}

.btn-xl {
  font-size: 18px;
  padding: 20px 40px;
}

.btn-primary {
  background-color: #fed136;
  border-color: #fed136;
}

.btn-primary:active,
.btn-primary:focus,
.btn-primary:hover {
  background-color: #fec810 !important;
  border-color: #fec810 !important;
  color: white;
}

.btn-primary:active,
.btn-primary:focus {
  -webkit-box-shadow: 0 0 0 0.2rem rgba(254, 209, 55, 0.5) !important;
  box-shadow: 0 0 0 0.2rem rgba(254, 209, 55, 0.5) !important;
}

body {
  overflow-x: hidden;
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
p {
  line-height: 1.75;
}
a {
  color: #fed136;
}
a:hover {
  color: #fec503;
}
.text-primary {
  color: #fed136 !important;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}
.page-section {
  padding: 100px 0;
}
.page-section h2.section-heading {
  font-size: 40px;
  margin-top: 0;
  margin-bottom: 15px;
}
.page-section h3.section-subheading {
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 75px;
  text-transform: none;
  font-family: "Droid Serif", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
@media (min-width: 768px) {
  section {
    padding: 150px 0;
  }
}
::-moz-selection {
  background: #fed136;
  text-shadow: none;
}
::selection {
  background: #fed136;
  text-shadow: none;
}
img::-moz-selection {
  background: 0 0;
}
img::selection {
  background: 0 0;
}
img::-moz-selection {
  background: 0 0;
}
.btn {
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
}
.btn-xl {
  font-size: 18px;
  padding: 20px 40px;
}
.btn-primary {
  background-color: #fed136;
  border-color: #fed136;
}
.btn-primary:active,
.btn-primary:focus,
.btn-primary:hover {
  background-color: #fec810 !important;
  border-color: #fec810 !important;
  color: #fff;
}
.btn-primary:active,
.btn-primary:focus {
  -webkit-box-shadow: 0 0 0 0.2rem rgba(254, 209, 55, 0.5) !important;
  box-shadow: 0 0 0 0.2rem rgba(254, 209, 55, 0.5) !important;
}

#mainNav {
  background-color: #212529;
}

#mainNav .navbar-toggler {
  font-size: 12px;
  right: 0;
  padding: 13px;
  text-transform: uppercase;
  color: white;
  border: 0;
  background-color: #fed136;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

#mainNav .navbar-brand {
  color: #fed136;
  font-family: "Kaushan Script", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

#mainNav .navbar-brand.active,
#mainNav .navbar-brand:active,
#mainNav .navbar-brand:focus,
#mainNav .navbar-brand:hover {
  color: #fec503;
}

#mainNav .navbar-nav .nav-item .nav-link {
  font-size: 90%;
  font-weight: 400;
  padding: 0.75em 0;
  letter-spacing: 1px;
  color: white;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

#mainNav .navbar-nav .nav-item .nav-link.active,
#mainNav .navbar-nav .nav-item .nav-link:hover {
  color: #fed136;
}

@media (min-width: 992px) {
  #mainNav {
    padding-top: 25px;
    padding-bottom: 25px;
    -webkit-transition: padding-top 0.3s, padding-bottom 0.3s;
    transition: padding-top 0.3s, padding-bottom 0.3s;
    border: none;
    background-color: transparent;
  }
  #mainNav .navbar-brand {
    font-size: 1.75em;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  #mainNav .navbar-nav .nav-item .nav-link {
    padding: 1.1em 1em !important;
  }
  #mainNav.navbar-shrink {
    padding-top: 0;
    padding-bottom: 0;
    background-color: #212529;
  }
  #mainNav.navbar-shrink .navbar-brand {
    font-size: 1.25em;
    padding: 12px 0;
  }
}

header.masthead {
  text-align: center;
  color: white;
  background-image: url("../img/header-bg.jpg");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
}

header.masthead .intro-text {
  padding-top: 150px;
  padding-bottom: 100px;
}

header.masthead .intro-text .intro-lead-in {
  font-size: 22px;
  font-style: italic;
  line-height: 22px;
  margin-bottom: 25px;
  font-family: "Droid Serif", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

header.masthead .intro-text .intro-heading {
  font-size: 50px;
  font-weight: 700;
  line-height: 50px;
  margin-bottom: 25px;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

@media (min-width: 768px) {
  header.masthead .intro-text {
    padding-top: 300px;
    padding-bottom: 200px;
  }
  header.masthead .intro-text .intro-lead-in {
    font-size: 40px;
    font-style: italic;
    line-height: 40px;
    margin-bottom: 25px;
    font-family: "Droid Serif", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
  header.masthead .intro-text .intro-heading {
    font-size: 75px;
    font-weight: 700;
    line-height: 75px;
    margin-bottom: 50px;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
}
</style>
