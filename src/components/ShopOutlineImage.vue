<template lang="pug">
.HU__shopOutlineImage {{ name }}
</template>

<script>
import { ref } from "vue";

export default {
  name: "ShopOutlineImage",
  components: {},
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