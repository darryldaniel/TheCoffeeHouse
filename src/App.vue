<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app />
    <v-toolbar fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>The Coffee House</v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
        <v-btn to="/" flat>home</v-btn>
        <v-btn to="/products" flat>products</v-btn>
        <v-btn to="/cart" flat small>
          <v-icon>shopping_cart</v-icon>
          <div class="body-2 header__cart-item-count">{{ cartTotalItems }}</div>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {},
  data: () => ({
    drawer: false
  }),
  computed: {
    ...mapGetters({
      cartTotalItems: "numberOfItems"
    })
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header__cart-item-count {
  padding: 0.225rem;
}
</style>
