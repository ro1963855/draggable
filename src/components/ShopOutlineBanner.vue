<template lang="pug">
.HU__shopOutlineBanner {{ name }}
</template>

<script>
import { ref } from "vue";

export default {
  name: "ShopOutlineBanner",
  components: {},
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

<style lang="scss" scoped>
</style>