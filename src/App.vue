<template>
  <div id="app">
    <div class="row">
      <div class="col-sm-2" style="margin-top: -2%">
        <img
          class="img"
          alt="Vue logo"
          src="./assets/Book_community.png"
          width="100%"
        />
      </div>
      <div class="col-sm-8">
        <Decode />
      </div>
      <div class="col-sm-2"></div>
    </div>
  </div>
</template>

<script>
import Decode from "./components/Decode";

export default {
  name: "App",
  components: {
    Decode,
  },
  props: {
    challengeCode: String,
    challengeNum: String,
  },
};
</script>

<style>
html {
  background: #fff;
}
#app {
  font-family: "Source Code Pro", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #E18D96;
  margin-top: 60px;
}
@media only screen and (max-width: 600px) {
  .img {
    width: 25%;
    margin-bottom: 20%;
  }
}
</style>
