<template>
  <div class="hello">

    <div class="col-12">
      <div class="progress">
        <div class="progress-bar progress-bar-striped bg-danger" 
              role="progressbar" 
              v-bind:style="{ width: nowNum/dataCode.length*100 + '%' }">
        </div>
      </div>
    </div>
      
    <div class="col" v-if="isSuccess()">
      <div style = "margin:10%;">
        <h1>Chúc mừng bạn đã hoàn thành thử thách!</h1>
      </div>
      <a href=".">
        <button class="btn btn-outline-danger">
          Chơi lại
        </button>
      </a>
    </div>

    <div class="col" v-else>
        <div style = "margin:10%;">
            <h1>Question {{ isSuccess() ? "" : nowNum + 1 }}</h1>
        </div>
        
        <form id="code" class="form-group">
          <div class="form-group">
            <!-- {{ msg }} -->
            <input
              type="code"
              v-model="submitCode"
              class="form-control"
              id="exampleInputEmail1"
              :placeholder="question[nowNum]"
            />
          </div>

          <button type="" @click.prevent="submit" class="btn btn-outline-danger">
            Submit
          </button>
        </form>
    </div>  

  </div>


</template>


<script>
import { db } from "../firebase";

export default {
  name: "Decode",
  data: () => ({
    nowNum: 0,
    msg: "",
    question: [],
    dataCode: [],
    firestore: "",
  }),
  created() {
  db.collection("code").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        this.dataCode.push(doc.data().code);
        this.question.push(doc.data().name);
    });
  });

  },
  methods: {
    
    submit() {
      if (this.dataCode[this.nowNum] === this.submitCode.toLowerCase()) {
        this.msg = "Thành công";
        this.cls = "alert alert-success";
        this.nowNum = this.nowNum + 1;
      } else {
        this.msg = "Sai rồi :)";
        this.nowNum = 0;
      }
      this.submitCode = '';
    },
    isSuccess() {
      return this.nowNum === this.dataCode.length;
    },
    getCodeByKey() {},
  },
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
