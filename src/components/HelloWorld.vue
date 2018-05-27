<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img class="home__image" src="../assets/The Coffee House_3.jpg" alt="" width="100%">
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "The Coffee House"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

</style>
