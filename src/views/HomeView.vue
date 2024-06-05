<template>
  <div class="home">
    <!-- <p>My Name:{{ name }}</p>
    <p>My Age{{ age }}</p> -->
    <!-- <p>My Name:{{ this.$store.state.name }}</p>
    <p>My Age{{ this.$store.state.age }}</p>
    <input type="text " v-model="this.$store.state.name" />
    <p>{{ this.$store.getters.getNameWithTitle }}</p> -->
    <!-- <button @click="this.$store.commit('changeTitle')">change title</button> -->
    <!-- <button @click="this.$store.dispatch('getProducts')">get Products</button> -->
    <button @click="getByProducts">get Products</button>

    <ul >
    <!-- <li v-for="product in productsModule.products" :key="product.id">{{ product.title }}</li> -->
    </ul>
    <!-- <img alt="Vue 
    logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState ,  mapActions} from 'vuex';
export default {
  name: "HomeView",
  components: {
    // HelloWorld,
  },
  computed:{
...mapState(["productsModule"]),
  },
  mounted() {
    console.log(this.$store);
  },
  data: () => ({
    name: "ahmad",
    age: 22,
  }),
  methods:{
    ...mapActions(['getProducts']),
async getByProducts(){
  await this.$store.dispatch('getProducts');
  console.log(this.state.productsModule.products);
 }
  }
};
</script>
