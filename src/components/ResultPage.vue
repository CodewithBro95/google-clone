<template>
  <div>
    <div class="__header">
      <div class="pl-10 pr-10 mt-2">
        <div class="__image_container">
          <router-link to="/">
            <v-img
              class="google__logo_result"
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt="Google logo"
              contain
            />
          </router-link>
        </div>
      </div>
      <div class="__search_section">
        <Search />
      </div>
    </div>
    <div class="__header_wrapper">
      <div class="__menu">
        <div class="__menu_left">
          <div class="__menu_item active">
            <v-icon color="#1a73e8" small> mdi-magnify</v-icon> All
          </div>
          <div class="__menu_item">
            <v-icon class="mr-1" small>mdi-play-box-outline</v-icon>Video
          </div>
          <div class="__menu_item"><v-icon small>mdi-image</v-icon> Images</div>
          <div class="__menu_item">
            <v-icon small>mdi-map-marker-outline</v-icon> Maps
          </div>
          <div class="__menu_item">
            <v-icon class="mr-1" small>mdi-newspaper</v-icon>News
          </div>
          <div class="__menu_item">
            <v-icon small>mdi-dots-vertical</v-icon>More
          </div>
        </div>
        <div class="__menu_right">
          <div class="__menu_item">Settings</div>
          <div class="__menu_item">Tools</div>
        </div>
      </div>
    </div>

    <div class="__results">
      <div class="__results_count pt-4 pb-5">
        About
        <span v-if="data">{{
          data.searchInformation.formattedTotalResults
        }}</span>
        results (
        <span v-if="data">
          {{ data.searchInformation.formattedSearchTime }}
        </span>
        seconds)
      </div>
      <span v-if="data">
        <div
          class="__actual_result mb-5"
          v-for="item in data.items"
          :key="item.cacheId"
        >
          <a class="__display_link" :href="item.link">
            <div class="display_link">
              {{ item.displayLink }} <v-icon>mdi-menu-down</v-icon>
            </div>
          </a>
          <div class="data_title">
            <a :href="item.link">{{ item.title }}</a>
          </div>
          <!-- v-html is to render text data to html !important -->
          <div class="data_body" v-html="item.htmlSnippet"></div>
        </div>
      </span>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
import Search from "@/components/Search.vue";
// import Response from "@/responseData";
import store from "@/store";

export default {
  components: {
    Search,
  },
  data() {
    return {
      data: null,
    };
  },
  watch: {
    // watch store changes so i can update the results in realtime
    "$store.state.responseData": function () {
      console.log("Store changed");
      this.data = store.state.responseData;
    },
  },
  mounted: function () {
    this.data = store.state.responseData;
    console.log(this.data);
  },
};
</script>
<style scoped>
.__image_container {
  width: 100px;
}
.__search_section {
  width: 700px;
}
.__header,
.__menu,
.__menu_right,
.__menu_left {
  display: flex;
}

.__menu .__menu_item {
  padding: 10px;
  padding-left: 20px;
  cursor: pointer;
}

.__menu .__menu_right {
  padding-left: 71px;
}
.__menu {
  margin-left: 190px;
  font-size: 12px;
}
.__header_wrapper {
  border-bottom: 1px solid rgb(235, 235, 235);
}

/* Active */
.__menu_item.active {
  border-bottom: 3px solid #1a73e8;
  color: #1a73e8;
}
.__results_count {
  font-size: 12px;
  text-align: left;
  width: 400px;
  margin-left: 190px;
}
.__actual_result {
  text-align: left;
  max-width: 700px;
  margin-left: 190px;
  word-wrap: break-word;
}
.data_title a {
  font-size: 20px;
  color: #1a0dab;
}
.data_title a:visited {
  color: #609;
}
.display_link,
.data_body {
  font-size: 14px;
}
.__header {
  position: sticky;
  top: 0px;
  z-index: 1;
  background-color: #fff;
  padding-top: 14px;
}
.__actual_result .__display_link {
  text-decoration: none;
  color: inherit;
}
.__results {
  margin-bottom: 13% !important;
}
</style>