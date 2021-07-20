<template lang="pug">
.HU__shopOutlineBanner
  Expandable
    template(v-slot:title)
      Draggable {{ name }}
    template(v-slot:submenu) 123
</template>

<script>
import { ref } from "vue";
import Draggable from "../Draggable.vue";
import Expandable from "../Expandable.vue";

export default {
  name: "ShopOutlineBanner",
  components: {
    Draggable,
    Expandable,
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
}
</style>