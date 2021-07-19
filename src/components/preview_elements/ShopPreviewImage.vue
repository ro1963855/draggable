<template lang="pug">
section.HU__shopPreviewImage
  a.HU__shopPreviewImage__image(
    v-for="image in element.data.images"
    :key="image.id"
    :style="`background-image: url('${image.imageUrl}');`"
    :href="image.href"
    target="_blank"
  )
</template>

<script>
export default {
  name: "ShopPreviewImage",
  components: {},
  props: {
    element: {
      type: Object,
      required: true,
    },
  },
  setup() {},
};
</script>

<style lang="scss">
.HU__shopPreviewImage {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  &.HU__shopPreview__section {
    margin-bottom: -8px;
  }

  &__image {
    flex: 0 0 auto;
    width: calc(100% / 3 - 16px);
    padding-bottom: calc(100% / 3 - 16px);
    background-color: gray;
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: 8px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>