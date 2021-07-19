<template lang="pug">
component.HU__shopOutlineItem(
  :is="element.component"
  :element="element"
)
</template>

<script>
import ShopOutlineImage from "./ShopOutlineImage.vue";
import ShopOutlineBanner from "./ShopOutlineBanner.vue";
import ShopOutlinePost from "./ShopOutlinePost.vue";

export default {
  name: "ShopOutlineItem",
  components: {
    ShopOutlineImage,
    ShopOutlineBanner,
    ShopOutlinePost,
  },
  props: {
    element: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .HU__shopOutlineItem {
    line-height: 1.5;
    margin-left: 8px;

    &--ghost {
      opacity: 0.5;
      background: #c8ebfb;
    }
  }
</style>