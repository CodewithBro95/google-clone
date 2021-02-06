<template>
  <v-container>
    <v-col cols="12" sm="8" md="6" class="body__inputContainer">
      <img
        class="google__logo"
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="Google logo"
      />
    </v-col>
    <v-col cols="12" sm="8" md="6" class="body__inputContainer">
      <Search :showButtons="true" />
    </v-col>
  </v-container>
</template>
<script>
import Search from "@/components/Search.vue";

export default {
  components: {
    Search,
  },
};
</script>
<style scoped>
.google__logo {
  padding-top: 105px;
}
.body__inputContainer {
  margin-left: auto;
  margin-right: auto;
}
</style>