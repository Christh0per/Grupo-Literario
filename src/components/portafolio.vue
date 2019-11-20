<template>
  <v-app id="portafolio">
    <!-- Vista -->
    <section class="bg-light page-section" id="portfolio">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Portfolio</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" v-b-modal.portfolioModal1>
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="../img/portfolio/01-thumbnail.jpg"
                alt
              />
            </a>
            <div class="portfolio-caption">
              <h4>Threads</h4>
              <p class="text-muted">Illustration</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" v-b-modal.portfolioModal2>
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="../img/portfolio/02-thumbnail.jpg"
                alt
              />
            </a>
            <div class="portfolio-caption">
              <h4>Explore</h4>
              <p class="text-muted">Graphic Design</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" v-b-modal.portfolioModal3>
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="../img/portfolio/03-thumbnail.jpg"
                alt
              />
            </a>
            <div class="portfolio-caption">
              <h4>Finish</h4>
              <p class="text-muted">Identity</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" v-b-modal.portfolioModal4>
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="../img/portfolio/04-thumbnail.jpg"
                alt
              />
            </a>
            <div class="portfolio-caption">
              <h4>Lines</h4>
              <p class="text-muted">Branding</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" v-b-modal.portfolioModal5>
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="../img/portfolio/05-thumbnail.jpg"
                alt
              />
            </a>
            <div class="portfolio-caption">
              <h4>Southwest</h4>
              <p class="text-muted">Website Design</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" v-b-modal.portfolioModal6>
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="../img/portfolio/06-thumbnail.jpg"
                alt
              />
            </a>
            <div class="portfolio-caption">
              <h4>Window</h4>
              <p class="text-muted">Photography</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container text-center">
        <router-link to="/news">
          <button class="btn btn-primary">Ver mas</button>
        </router-link>
      </div>
    </section>

    <!-- Modals -->

    <!-- Modal 1-->
    <b-modal id="portfolioModal1" tabindex="-1" role="article" aria-hidden="true" size="xl" hide-footer=true>
        <b-modal-content>
          <b-container>
            <b-row>
              <b-col col lg="8 mx-auto">
                <b-modal-body>
                  <!-- Project Details Go Here -->
                  <h2 class="text-uppercase">Project Name</h2>
                  <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img
                    class="img-fluid d-block mx-auto"
                    src="../img/portfolio/01-full.jpg" 
                    alt
                  >
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul class="list-inline">
                    <b-list-group>Date: January 2017</b-list-group>
                    <b-list-group>Client: Threads</b-list-group>
                    <b-list-group>Category: Illustration</b-list-group>
                  </ul>
                </b-modal-body>
              </b-col>
            </b-row>
          </b-container>
        </b-modal-content>
    </b-modal>

    <!-- Modal 2-->
    <b-modal id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true" size="xl" hide-footer=true>
      <b-modal-dialog>
        <b-modal-content>
          <b-container>
            <b-row>
              <b-col col lg="8 mx-auto">
                <b-modal-body>
                  <!-- Project Details Go Here -->
                  <h2 class="text-uppercase">Project Name</h2>
                  <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img
                    class="img-fluid d-block mx-auto"
                    src="../img/portfolio/02-full.jpg" 
                    alt
                  >
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul class="list-inline">
                    <b-list-group>Date: January 2017</b-list-group>
                    <b-list-group>Client: Threads</b-list-group>
                    <b-list-group>Category: Illustration</b-list-group>
                  </ul>
                </b-modal-body>
              </b-col>
            </b-row>
          </b-container>
        </b-modal-content>
      </b-modal-dialog>
    </b-modal>

    <!-- Modal 3-->
    <b-modal id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true" size="xl" hide-footer=true>
      <b-modal-dialog>
        <b-modal-content>
          <b-container>
            <b-row>
              <b-col col lg="8 mx-auto">
                <b-modal-body>
                  <!-- Project Details Go Here -->
                  <h2 class="text-uppercase">Project Name</h2>
                  <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img
                    class="img-fluid d-block mx-auto"
                    src="../img/portfolio/03-full.jpg" 
                    alt
                  >
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul class="list-inline">
                    <b-list-group>Date: January 2017</b-list-group>
                    <b-list-group>Client: Threads</b-list-group>
                    <b-list-group>Category: Illustration</b-list-group>
                  </ul>
                </b-modal-body>
              </b-col>
            </b-row>
          </b-container>
        </b-modal-content>
      </b-modal-dialog>
    </b-modal>

    <!-- Modal 4-->
    <b-modal id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true" size="xl" hide-footer=true>
      <b-modal-dialog>
        <b-modal-content>
          <b-container>
            <b-row>
              <b-col col lg="8 mx-auto">
                <b-modal-body>
                  <!-- Project Details Go Here -->
                  <h2 class="text-uppercase">Project Name</h2>
                  <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img
                    class="img-fluid d-block mx-auto"
                    src="../img/portfolio/04-full.jpg" 
                    alt
                  >
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul class="list-inline">
                    <b-list-group>Date: January 2017</b-list-group>
                    <b-list-group>Client: Threads</b-list-group>
                    <b-list-group>Category: Illustration</b-list-group>
                  </ul>
                </b-modal-body>
              </b-col>
            </b-row>
          </b-container>
        </b-modal-content>
      </b-modal-dialog>
    </b-modal>

    <!-- Modal 5-->
    <b-modal id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true" size="xl" hide-footer=true>
      <b-modal-dialog>
        <b-modal-content>
          <b-container>
            <b-row>
              <b-col col lg="8 mx-auto">
                <b-modal-body>
                  <!-- Project Details Go Here -->
                  <h2 class="text-uppercase">Project Name</h2>
                  <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img
                    class="img-fluid d-block mx-auto"
                    src="../img/portfolio/05-full.jpg" 
                    alt
                  >
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul class="list-inline">
                    <b-list-group>Date: January 2017</b-list-group>
                    <b-list-group>Client: Threads</b-list-group>
                    <b-list-group>Category: Illustration</b-list-group>
                  </ul>
                </b-modal-body>
              </b-col>
            </b-row>
          </b-container>
        </b-modal-content>
      </b-modal-dialog>
    </b-modal>

    <!-- Modal 6-->
    <b-modal id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true" size="xl" hide-footer=true>
      <b-modal-dialog>
        <b-modal-content>
          <b-container>
            <b-row>
              <b-col col lg="8 mx-auto">
                <b-modal-body>
                  <!-- Project Details Go Here -->
                  <h2 class="text-uppercase">Project Name</h2>
                  <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img
                    class="img-fluid d-block mx-auto"
                    src="../img/portfolio/06-full.jpg" 
                    alt
                  >
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul class="list-inline">
                    <b-list-group>Date: January 2017</b-list-group>
                    <b-list-group>Client: Threads</b-list-group>
                    <b-list-group>Category: Illustration</b-list-group>
                  </ul>
                </b-modal-body>
              </b-col>
            </b-row>
          </b-container>
        </b-modal-content>
      </b-modal-dialog>
    </b-modal>
  </v-app>
</template>

<script>

export default {
  name: "Portafolio",
  components: {
  }
};
</script>

<style>
  #portfolio .portfolio-item {
  right: 0;
  margin: 0 0 15px;
}

#portfolio .portfolio-item .portfolio-link {
  position: relative;
  display: block;
  max-width: 400px;
  margin: 0 auto;
  cursor: pointer;
}

#portfolio .portfolio-item .portfolio-link .portfolio-hover {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-transition: all ease 0.5s;
  transition: all ease 0.5s;
  opacity: 0;
  background: rgba(254, 209, 54, 0.9);
}

#portfolio .portfolio-item .portfolio-link .portfolio-hover:hover {
  opacity: 1;
}

#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content {
  font-size: 20px;
  position: absolute;
  top: 50%;
  width: 100%;
  height: 20px;
  margin-top: -12px;
  text-align: center;
  color: white;
}

#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content i {
  margin-top: -12px;
}

#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content h3,
#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content h4 {
  margin: 0;
}

#portfolio .portfolio-item .portfolio-caption {
  max-width: 400px;
  margin: 0 auto;
  padding: 25px;
  text-align: center;
  background-color: #fff;
}

#portfolio .portfolio-item .portfolio-caption h4 {
  margin: 0;
  text-transform: none;
}

#portfolio .portfolio-item .portfolio-caption p {
  font-size: 16px;
  font-style: italic;
  margin: 0;
  font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

#portfolio * {
  z-index: 2;
}

@media (min-width: 767px) {
  #portfolio .portfolio-item {
    margin: 0 0 30px;
  }
}

.portfolio-modal .modal-dialog {
  margin: 1rem;
  max-width: 100vw;
}

.portfolio-modal .modal-content {
  padding: 100px 0;
  text-align: center;
}

.portfolio-modal .modal-content h2 {
  font-size: 3em;
  margin-bottom: 15px;
}

.portfolio-modal .modal-content p {
  margin-bottom: 30px;
}

.portfolio-modal .modal-content p.item-intro {
  font-size: 16px;
  font-style: italic;
  margin: 20px 0 30px;
  font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

.portfolio-modal .modal-content ul.list-inline {
  margin-top: 0;
  margin-bottom: 30px;
}

.portfolio-modal .modal-content img {
  margin-bottom: 30px;
}

.portfolio-modal .modal-content button {
  cursor: pointer;
}

.portfolio-modal .close-modal {
  position: absolute;
  top: 25px;
  right: 25px;
  width: 75px;
  height: 75px;
  cursor: pointer;
  background-color: transparent;
}

.portfolio-modal .close-modal:hover {
  opacity: 0.3;
}

.portfolio-modal .close-modal .lr {
  /* Safari and Chrome */
  z-index: 1051;
  width: 1px;
  height: 75px;
  margin-left: 35px;
  /* IE 9 */
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  background-color: #212529;
}

.portfolio-modal .close-modal .lr .rl {
  /* Safari and Chrome */
  z-index: 1052;
  width: 1px;
  height: 75px;
  /* IE 9 */
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  background-color: #212529;
}
</style>