<template>
  <v-app>
    <!-- Vista -->
    <b-section class="bg-light page-section" id="portfolio">
      <b-container>
        <b-row>
          <b-col col lg="12 text-center">
            <h2 class="section-heading text-uppercase">Portfolio</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </b-col>
        </b-row>
        <b-row>
          <b-col col md="4" sm="6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" v-b-modal.portfolioModal1>
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <b-img
                class="img-fluid"
                src="https://lacovacha.mx/wp-content/uploads/2018/09/descarga-400x300.jpg"
                alt
              ></b-img>
            </a>
            <div class="portfolio-caption">
              <h4>Threads</h4>
              <p class="text-muted">Illustration</p>
            </div>
          </b-col>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="https://lacovacha.mx/wp-content/uploads/2018/09/descarga-400x300.jpg"
                alt
              />
            </a>
            <div class="portfolio-caption">
              <h4>Explore</h4>
              <p class="text-muted">Graphic Design</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="https://lacovacha.mx/wp-content/uploads/2018/09/descarga-400x300.jpg"
                alt
              />
            </a>
            <div class="portfolio-caption">
              <h4>Finish</h4>
              <p class="text-muted">Identity</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal4">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="https://lacovacha.mx/wp-content/uploads/2018/09/descarga-400x300.jpg"
                alt
              />
            </a>
            <div class="portfolio-caption">
              <h4>Lines</h4>
              <p class="text-muted">Branding</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal5">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="https://lacovacha.mx/wp-content/uploads/2018/09/descarga-400x300.jpg"
                alt
              />
            </a>
            <div class="portfolio-caption">
              <h4>Southwest</h4>
              <p class="text-muted">Website Design</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal6">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="https://lacovacha.mx/wp-content/uploads/2018/09/descarga-400x300.jpg"
                alt
              />
            </a>
            <div class="portfolio-caption">
              <h4>Window</h4>
              <p class="text-muted">Photography</p>
            </div>
          </div>
        </b-row>
      </b-container>
    </b-section>

    <!-- Modal -->
    <b-modal id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
      <b-modal-dialog>
        <b-modal-content>
          <b-container>
            <b-row>
              <b-col col lg="8 mx-auto">
                <b-modal-body>
                  <!-- Project Details Go Here -->
                  <h2 class="text-uppercase">Project Name</h2>
                  <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <b-img
                    class="img-fluid d-block mx-auto"
                    src="https://lacovacha.mx/wp-content/uploads/2018/09/descarga-400x300.jpg"
                    alt
                  ></b-img>
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
  name: "Portafolio"
};
</script>