<template>
  <div class="__footer">
    <v-row class="text-left">
      <v-col class="ml-5" cols="6" sm="3" md="5">
        <div class="pa-2" outlined tile>Cameroon</div>
      </v-col>
    </v-row>
    <v-row class="__footer-links" no-gutters>
      <v-col cols="12" sm="5" md="10">
        <div class="pa-2 ml-5 links" outlined tile>
          <router-link to="/">Advertising</router-link>
          <router-link to="/">Business</router-link>
          <router-link to="/">About</router-link>
          <router-link to="/">How Search works</router-link>
        </div>
      </v-col>
      <v-col cols="12" md="2" sm="5">
        <div class="pa-3 links __links_right" outlined tile>
          <router-link to="/">Privacy</router-link>
          <router-link to="/">Terms</router-link>
          <router-link to="/">Settings</router-link>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
.__footer {
  color: #5f6368;
  font-size: 14.5px;
  background: #f2f2f2;
  border-top: 1px solid #d2d2d2;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.__links_right {
  padding-left: 10px;
}
.links {
  display: flex;
}
.links a {
  padding-right: 20px;
}
.__footer-links {
  justify-content: space-between;
  border-top: 1px solid #d2d2d2;
}
a:visited {
  color: #5f6368;
}
a {
  color: #5f6368;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>