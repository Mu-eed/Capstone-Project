<template>
    <div>
<section id="products">
    <div class="container da-prod">
      <div class="row">
        <div class="col-md-4 mt-5 mt-4" v-for="item in items" :key="item.prodID">
          <div class="card">
            <div>
              <img
                :src="item.imgURL"
                class="card-img-top"
                
                style="height: 18rem; max-width: 16rem"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ item.prodName }}</h5>
              <p class="card-text">R {{ item.price }}</p>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: "products",
  components: {
  },
  data() {
    return {
      items: this.$store.state.products,
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      const res = await axios.get(
        `https://meedleez.onrender.com/products`
      );
      this.items = res.data.results;
      console.log(res);
    },
  },
};
</script>
<style>
#products {
    min-height: 100vh;
    background-position: center;
    /* background-size: cover; */
    background-color: crimson;
}


</style>