export default {
  state: {
    name: "ahmad",
    age: 22,
    title: "Frontend",
    products: [],
  },
  getters: {},
  mutations: {
    getProduct(state, products) {
      state.products = products;
      console.log(products);
    },
  },
  actions: {
    async getProducts(context) {
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.commit("getProduct", data.products);
        });
    },
  },
};
