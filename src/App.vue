<template>
  <v-app>
    <div id="app">
      <div class="nav">
        <Appbar />
      </div>
      <router-view />
      <div>
        <Footer />
      </div>
    </div>
  </v-app>
</template>
<script>
import Appbar from "@/components/Appbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Appbar,
    Footer,
  },
};
</script>
<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5f6368;
}
.nav {
  margin-top: 10px;
}
html {
  min-width: 400px;
}
a:visited {
  color: rgba(0, 0, 0, 0.87);
}
a {
  color: rgba(128, 122, 122, 0.87);
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
