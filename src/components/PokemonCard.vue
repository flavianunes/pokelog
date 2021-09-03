<template>
  <div v-if="isDefault" class="card">
    <div v-if="image">
      <img :alt="name" :src="image" loading="lazy" />
      <h2>{{ name }}</h2>
    </div>
  </div>
</template>

<script>
import { api } from "@/services";
export default {
  name: "PokemonCard",
  props: ["name"],
  data() {
    return {
      image: "",
      isDefault: false,
    };
  },
  methods: {
    getPokemons() {
      api
        .get(`https://pokeapi.co/api/v2/pokemon/${this.name}`)
        .then(({ data }) => {
          if (data.is_default) {
            this.image = data.sprites.front_default;
            this.isDefault = true;
          }
        });
    },
  },
  created() {
    this.getPokemons();
  },
};
</script>

<style scoped>
.card {
  width: 200px;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  background-color: #fff;
  margin: 15px;
  padding: 15px;
  text-align: center;
  transition: all 0.2s ease-in-out;
}
img {
  width: 96px;
  height: 96px;
  margin: auto;
}
.card:hover {
  transform: scale(1.2);
}
.btn {
  display: inline;
  float: center;
}
h2 {
  margin-bottom: 1rem;
}
@media screen and (max-width: 481px) {
  .card {
    margin: 6px 0;
    padding: 15px 5px;
    width: 150px;
  }
}
</style>
