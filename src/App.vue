<template>
  <ThemeProvider :theme="isDarkMode ? dark : light">
    <Wrapper id="app">
      <div id="nav">
        <input type="checkbox" v-model="isDarkMode" />
      </div>
      <router-view />
    </Wrapper>
  </ThemeProvider>
</template>

<script>
import { ThemeProvider } from "vue-styled-components";
import light from "./theme/light";
import dark from "./theme/dark";
import Wrapper from "./components/Wrapper";

export default {
  components: {
    ThemeProvider,
    Wrapper
  },
  data() {
    return {
      light,
      dark,
      isDarkMode: false
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#nav {
  padding: 30px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
