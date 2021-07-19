<template lang="pug">
.HU__shopOutlineBanner
  Draggable {{ name }}
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
    const name = ref("橫幅");

    return {
      name,
    };
  },
};
</script>

<style lang="scss">
.HU__shopOutlineBanner {
  display: flex;
  justify-content: space-between;
}
</style>