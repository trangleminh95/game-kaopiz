<template>
  <div class="hello">
    <div class="col-12">
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped bg-danger"
          role="progressbar"
          v-bind:style="{ width: (nowNum / dataCode.length) * 100 + '%' }"
        ></div>
      </div>
    </div>

    <div class="" v-if="submitStatus">
      <div style="margin: 10%">
        <h1>Submit thành công!</h1>
      </div>
      <a href=".">
        <button class="btn btn-outline-danger">Chơi lại</button>
      </a>
    </div>

    <div class="" v-else-if="dataCode.length == 0">
      <div style="margin: 10%">
        <h1>Đang tải dữ liệu...</h1>
      </div>
    </div>

    <div class="col" v-else-if="isSuccess()">
      <div style="margin: 10%">
        <h1>Chúc mừng bạn đã hoàn thành thử thách!</h1>
      </div>
      <form id="code" class="form-group">
        <div class="form-group">
          <input
            type="code"
            v-model="submitName"
            class="form-control"
            placeholder="Nhập tên để nhận thưởng"
          />
        </div>
        <button
          type=""
          @click="submitAward"
          class="btn btn-outline-danger"
        >
          Submit
        </button>
      </form>
    </div>

    <div class="col" v-else>
      <div style="margin: 10%">
        <h1>Question {{ nowNum + 1 }}</h1>
      </div>

      {{ question[nowNum] }}
      <form id="code" class="form-group">
        <div class="form-group">
          <!-- {{ msg }} -->
          <input
            type="code"
            v-model="submitCode"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Nhập câu trả lời tại đây"
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
      question: [],
      dataCode: [],
      firestore: "",
      submitName: "",
      submitCode: "",
      submitStatus: false,
    }),
    created() {
      db.collection("code")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.dataCode.push(doc.data().code);
            this.question.push(doc.data().name);
          });
        });
    },
    methods: {
      submit() {
        if (
          this.dataCode[this.nowNum].toLowerCase() ===
          this.submitCode.toLowerCase()
        ) {
          this.nowNum = this.nowNum + 1;
        } else {
          this.nowNum = 0;
        }
        this.submitCode = "";
      },
      isSuccess() {
        return this.nowNum === this.dataCode.length;
      },
      submitAward() {
        var today = new Date();
        var date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();
        var time =
          today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        db.collection("winner")
          .add({
            name: this.submitName,
            submitTime: date + " " + time,
            timestamp: Date.now(),
          })
          .then((docRef) => {
            console.log("Document written with ID: inside", docRef.id);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
          this.submitStatus = true;
      },
    },
  };
</script>

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
