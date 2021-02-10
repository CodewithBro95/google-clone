<template>
  <form>
    <span v-if="showButtons">
      <div class="__search">
        <v-text-field
          v-model="searchTerm"
          append-icon="mdi-microphone"
          prepend-inner-icon="mdi-magnify"
          rounded
          solo
        >
        </v-text-field>
      </div>
      <div class="__action_buttons">
        <v-btn type="submit" @click="search" class="button" depressed>
          Google Search
        </v-btn>
        <v-btn class="button" depressed> I'm Feeling Lucky </v-btn>
        <div class="mt-8 __lang">
          Google offered in: <router-link to="/">Français</router-link>
        </div>
      </div>
    </span>
    <span v-else>
      <div class="__search withOutButtons">
        <v-text-field
          v-model="searchTerm"
          append-icon="mdi-microphone"
          prepend-inner-icon="mdi-magnify"
          rounded
          solo
        >
          <template slot="append">
            <v-icon>mdi-close</v-icon>
            <v-divider vertical class="mr-2 ml-2"></v-divider>
            <v-icon class="mr-3">mdi-microphone</v-icon>
            <v-icon type="submit" @click="search">mdi-magnify</v-icon>
          </template>
        </v-text-field>
      </div>
    </span>
  </form>
</template>
<script>
import API_KEY from "@/Keys";
import store from "@/store";
export default {
  props: {
    showButtons: Boolean,
  },
  data() {
    return {
      searchTerm: "",
      CONTEXT_KEY: "044f83c3f8bfb60e9",
    };
  },
  methods: {
    async search(event) {
      event.preventDefault();
      // create new programmable search here: https://programmablesearchengine.google.com/cse/create/new
      console.log("searchTerm => " + this.searchTerm);

      try {
        // Try login user
        let response = await this.axios.get(
          `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${this.CONTEXT_KEY}&q=${this.searchTerm}`
        );
        console.log(response.data);
        store.commit("setResponseData", response.data); // setting the state for response
        console.log("response stored in state below => ");
        console.log(store.state.responseData);
        // if the current route is not the search route redirect to search route
        if (this.$route.name !== "search") {
          this.$router.push("/search");
        }
      } catch (error) {
        // if an error occures
        console.error("There was an error =>" + error);
      }
    },
  },
};
</script>

<style scoped>
.__action_buttons .button {
  margin: 5px;
  padding: 7px 15px;
  background-color: #f8f8f8;
  border: 1px solid white;
  text-transform: initial;
  color: #5f6368;
  font-size: 13px;
}
.__action_buttons .button:hover {
  box-shadow: 0 1px 1px rgba(238, 238, 238, 0.1);
  background-image: -webkit-repeating-linear-gradient(top, #f8f8f8, #f1f1f1);
  background-color: #ffffff;
  border: 1px solid #c6c6c6;
  color: #222;
}
.__lang {
  font-size: 13px;
}
/* disabling the a href on button search */
a:hover {
  text-decoration: none;
}
.__search {
  max-width: 100%;
}
/* Remove the headerRight for smaller screens */
@media all and (max-width: 1024px) {
  .__search.withOutButtons {
    max-width: 65%;
  }
}
</style>