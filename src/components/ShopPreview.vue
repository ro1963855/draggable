<template lang="pug">
.HU__shopPreview
  component.HU__shopPreview__section(
    v-for="element in list"
    :key="element.id"
    :is="`ShopPreview${element.component}`"
    :element="element"
  )
</template>

<script>
import ShopPreviewBanner from "./preview_elements/ShopPreviewBanner.vue";
import ShopPreviewImage from "./preview_elements/ShopPreviewImage.vue";
import ShopPreviewPost from "./preview_elements/ShopPreviewPost.vue";

export default {
  name: "ShopPreview",
  components: {
    ShopPreviewBanner,
    ShopPreviewImage,
    ShopPreviewPost,
  },
  props: {
    list: {
      type: Array,
      defautl: [],
    },
  },
};
</script>

<style lang="scss">
  .HU__shopPreview {
    padding-left: var(--gutter);
    padding-right: var(--gutter);

    &__section {
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }
</style>