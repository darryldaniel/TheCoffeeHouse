<template>
  <v-card>
    <v-card-title primary-title>
      <v-flex justify-start>
        <div class="headline product__name">{{product.name}}</div>
        <div class="product__price">R{{product.price}}</div>
      </v-flex>
    </v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="addToCart(product)" flat>add to cart</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["product"],
  methods: mapActions(["addToCart"])
};
</script>


<style scoped>
.product__name {
  text-align: left;
}

.product__price {
  text-align: left;
}
</style>
