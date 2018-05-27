import Vue from "vue";
import Router from "vue-router";

import HelloWorld from "../components/HelloWorld";
import Products from "../products/Products";
import Cart from "../cart/Cart";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: HelloWorld
    },
    {
      path: "/products",
      name: "Products",
      component: Products
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart
    }
  ]
});
