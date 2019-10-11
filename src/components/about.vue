<template>
  <v-app>
    <!-- About -->
    <b-section class="page-section" id="about">
      <b-container>
        <b-row>
          <b-col col lg="12 text-center">
            <h2 class="section-heading text-uppercase">About</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </b-col>
        </b-row>
        <b-row>
          <b-col col lg="12">
            <ul class="timeline">
              <b-list-group>
                <div class="timeline-image">
                  <b-img class="rounded-circle img-fluid" src="img/about/1.jpg" alt></b-img>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>2009-2011</h4>
                    <h4 class="subheading">Our Humble Beginnings</h4>
                  </div>
                  <div class="timeline-body">
                    <p
                      class="text-muted"
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </b-list-group>
              <b-list-group class="timeline-inverted">
                <div class="timeline-image">
                  <b-img class="rounded-circle img-fluid" src="img/about/2.jpg" alt></b-img>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>March 2011</h4>
                    <h4 class="subheading">An Agency is Born</h4>
                  </div>
                  <div class="timeline-body">
                    <p
                      class="text-muted"
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </b-list-group>
              <b-list-group>
                <div class="timeline-image">
                  <b-img class="rounded-circle img-fluid" src="img/about/3.jpg" alt></b-img>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>December 2012</h4>
                    <h4 class="subheading">Transition to Full Service</h4>
                  </div>
                  <div class="timeline-body">
                    <p
                      class="text-muted"
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </b-list-group>
              <b-list-group class="timeline-inverted">
                <div class="timeline-image">
                  <b-img class="rounded-circle img-fluid" src="img/about/4.jpg" alt></b-img>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>July 2014</h4>
                    <h4 class="subheading">Phase Two Expansion</h4>
                  </div>
                  <div class="timeline-body">
                    <p
                      class="text-muted"
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </b-list-group>
              <b-list-group class="timeline-inverted">
                <div class="timeline-image">
                  <h4>
                    Be Part
                    <br />Of Our
                    <br />Story!
                  </h4>
                </div>
              </b-list-group>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </b-section>
  </v-app>
</template>

<script>
export default {
  name: "About"
};
</script>