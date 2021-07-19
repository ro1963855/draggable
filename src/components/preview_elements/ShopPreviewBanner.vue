<template lang="pug">
section.HU__shopPreviewBanner
  span.HU__shopPreviewBanner__title {{ element.data.title }}
</template>

<script>
export default {
  name: "ShopPreviewBanner",
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
.HU__shopPreviewBanner {
  position: relative;
  width: calc(100% + var(--gutter) * 2);
  padding-bottom: 50%;
  background-color: gray;
  margin-left: calc(var(--gutter) * -1);
  margin-right: calc(var(--gutter) * -1);

  &__title {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 32px;
  }
}
</style>