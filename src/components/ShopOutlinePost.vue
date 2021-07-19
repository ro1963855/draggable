<template lang="pug">
.HU__shopOutlinePost {{ name }}
</template>

<script>
import { ref } from "vue";

export default {
  name: "ShopOutlinePost",
  components: {},
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