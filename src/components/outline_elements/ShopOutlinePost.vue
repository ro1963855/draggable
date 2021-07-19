<template lang="pug">
.HU__shopOutlinePost
  Draggable {{ name }}
</template>

<script>
import { ref } from "vue";
import Draggable from "../Draggable.vue";

export default {
  name: "ShopOutlinePost",
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
    const name = ref("文章");

    return {
      name,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>