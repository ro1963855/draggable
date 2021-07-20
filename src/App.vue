<template lang="pug">
.HU__app
  Outline.HU__app__outline
    ShopOutline(:list="list")
  Main.HU__app__main
    ShopPreview(:list="list")
</template>

<script>
import Main from "./layouts/Main.vue";
import Outline from "./layouts/Outline.vue";
import ShopOutline from "./components/ShopOutline.vue";
import ShopPreview from "./components/ShopPreview.vue";
import { cmsData } from "./store/useCMSStore.js";

export default {
  name: "App",
  components: {
    Main,
    Outline,
    ShopOutline,
    ShopPreview,
  },
  setup() {
    const list = cmsData;

    return {
      list,
    };
  },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --gutter: 16px;
}

body {
  margin: 0;
}

.HU__app {
  display: flex;
  flex-direction: row;

  &__outline,
  &__main {
    height: 100vh;
    min-height: 100vh;
    overflow-y: auto;
  }

  &__outline {
    max-width: 300px;
    flex: 1 1 30%;
  }
}
</style>
