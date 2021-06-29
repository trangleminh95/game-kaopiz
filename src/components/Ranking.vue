<template>
  <div class="main">
    <div v-if="winners.length == 0">
      Chưa có cao thủ, submit ngay để đứng top nào!
    </div>
    <div v-else>
      <div v-for="(name, key) in this.winners" :key="name">
        {{ key + 1 }} . {{ name }}
      </div>
    </div>
  </div>
</template>



<script>
import { db } from "../firebase";

export default {
  name: "Ranking",
  data: () => ({
    winners: [],
  }),
  created() {
    db.collection("winner")
      .orderBy("timestamp")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.winners.push(doc.data().name);
        });
      });
  },
  methods: {},
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
