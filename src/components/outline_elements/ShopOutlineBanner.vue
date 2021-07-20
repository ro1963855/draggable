<template lang="pug">
.HU__shopOutlineBanner
  Draggable {{ mainTitle }}
</template>

<script>
import { ref } from "vue";
import Draggable from "../Draggable.vue";

export default {
  name: "ShopOutlineBanner",
  components: {
    Draggable,
  },
  props: {
    element: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const mainTitle = ref("橫幅");

    return {
      mainTitle,
    };
  },
};
</script>

<style lang="scss">
</style>