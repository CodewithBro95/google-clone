<template>
  <div>
    <div class="__search">
      <v-text-field
        append-icon="mdi-microphone"
        prepend-inner-icon="mdi-magnify"
        rounded
        solo
      ></v-text-field>
    </div>
    <div class="__action_buttons">
      <v-btn :ripple="{ class: '#f8f8f815' }" class="button" depressed>
        Google Search
      </v-btn>
      <v-btn class="button" depressed> I'm Feeling Lucky </v-btn>
      <div class="mt-8 __lang">
        Google offered in: <router-link to="/">Français</router-link>
      </div>
    </div>
  </div>
</template>
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
</style>