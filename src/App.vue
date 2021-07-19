<template lang="pug">
.HU__app
  Outline.HU__app__outline
    ShopOutline(:list="list")
  Main.HU__app__main 456
</template>

<script>
import { ref } from "vue";
import Main from "./layouts/Main.vue";
import Outline from "./layouts/Outline.vue";
import ShopOutline from "./components/ShopOutline.vue";

export default {
  name: "App",
  components: {
    Main,
    Outline,
    ShopOutline,
  },
  setup() {
    const list = ref([
      {
        id: 0,
        component: "Image",
      },
      {
        id: 1,
        component: "Banner",
      },
      {
        id: 2,
        component: "Post",
      },
    ]);

    return {
      list,
    };
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
