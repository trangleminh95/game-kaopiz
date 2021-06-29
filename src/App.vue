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
        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Top dân chơi
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <Ranking />
              </div>
            </div>
          </div>
        </div>

        <Decode />
      </div>
      <div class="col-sm-2 col" style="margin-right: -20%">
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-outline-danger"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Bảng xếp hạng
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <Ranking />
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  </div>
</template>

<script>
import Decode from "./components/Decode";
import Ranking from "./components/Ranking";

export default {
  name: "App",
  components: {
    Decode,
    Ranking,
  },
  props: {},
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
