<template>
  <div class="HU__app">
    <Outline class="HU__app__outline"> 123 </Outline>
    <Main class="HU__app__main"> 456 </Main>
  </div>
</template>

<script>
import Main from "./layouts/Main.vue";
import Outline from "./layouts/Outline.vue";

export default {
  name: "App",
  components: {
    Main,
    Outline,
  },
};
</script>

<style lang="scss" scoped>
.HU__app {
  display: flex;
  flex-direction: row;

  &__outline,
  &__main {
    height: 100vh;
    max-height: 100vh;
  }

  &__outline {
    max-width: 300px;
    flex: 1 1 30%;
  }
}
</style>
