<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <product class="product"
        v-for="product in products" 
        v-bind:key="product.id" 
        v-bind:product="product"
      ></product>
    </v-flex>
  </v-layout>
</template>


<script>
import { mapGetters } from "vuex";
import Product from "./Product";

export default {
  components: {
    Product
  },
  computed: mapGetters({
    products: "allProducts"
  }),
  created() {
    this.$store.dispatch("getAllProducts");
  }
};
</script>

<style scoped>
.product {
  margin-bottom: 1rem;
}
</style>
