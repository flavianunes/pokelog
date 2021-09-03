<template>
  <header>
    <nav>
      <router-link to="/">
        <img src="@/assets/logo.svg" alt="Pokelog" />
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
}
</style>
