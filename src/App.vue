<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body,
ul,
li,
h1,
h2,
p {
  margin: 0;
  padding: 0;
}
img {
  max-width: 100%;
  display: block;
}
ul {
  list-style: none;
}
body {
  font-family: "Avenir", Arial, sans-serif;
  color: #345;
  background: url("./assets/pattern.svg"), repeat, top;
}
a {
  color: #345;
  text-decoration: none;
}

main {
  flex: 1;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.btn {
  display: block;
  padding: 10px 30px;
  background-color: #87f;
  color: #fff;
  text-align: center;
  font-family: "Avenir", Arial, sans-serif;
  border-radius: 4px;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  cursor: pointer;
}
.btn:hover {
  background: #65d;
  scale: 1.1;
}
.avoid-clicks {
  pointer-events: none;
}
</style>
