<template>
  <section>
    <input name="search" type="text" v-model="search" />
    <clip-loader :loading="loading" color="#87f"></clip-loader>
    <div class="container" v-if="!loading">
      <pokemon-card
        v-for="{ name } in filteredPokemons"
        :key="name"
        :name="name"
      />
    </div>
  </section>
</template>

<script>
import { api } from "@/services";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";
import PokemonCard from "./PokemonCard.vue";
export default {
  data() {
    return {
      pokemons: [],
      search: "",
      loading: true,
    };
  },
  components: { PokemonCard, ClipLoader },
  computed: {
    filteredPokemons() {
      return this.pokemons.filter(({ name }) =>
        name.includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    getPokemons() {
      api
        .get(`https://pokeapi.co/api/v2/pokemon?limit=1118`)
        .then(({ data }) => {
          this.pokemons = data.results;
          this.loading = false;
        });
    },
  },
  created() {
    this.getPokemons();
  },
};
</script>

<style scoped>
section {
  max-width: 1000px;
  margin: auto;
  padding: 10px;
}
input {
  width: 500px;
  display: block;
  margin: 15px auto 100px;
  padding: 10px;
  border: 2px solid #87f;
  border-radius: 4px;
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-between;
  justify-items: center;
}

@media screen and (max-width: 481px) {
  .container {
    grid-template-columns: 1fr 1fr;
  }
  input {
    width: 80vw;
  }
}
</style>
