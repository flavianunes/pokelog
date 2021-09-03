<template>
  <section>
    <h1>Find your Pokemón</h1>
    <pokemon-list />
  </section>
</template>

<script>
import PokemonList from "@/components/PokemonList";
export default {
  name: "Home",
  components: { PokemonList },
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: #87f;
  font-size: 3rem;
  margin-top: 2rem;
}
</style>
