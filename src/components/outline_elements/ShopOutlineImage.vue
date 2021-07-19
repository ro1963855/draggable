<template lang="pug">
.HU__shopOutlineImage
  Draggable {{ name }}
</template>

<script>
import { ref } from "vue";
import Draggable from "../Draggable.vue";

export default {
  name: "ShopOutlineImage",
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
    const name = ref("圖庫");

    return {
      name,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>