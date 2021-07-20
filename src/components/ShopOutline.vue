<template lang="pug">
draggable.HU__shopOutline(
  :list="list"
  item-key="id"
  ghost-class="HU__shopOutline__item--ghost"
  handle=".HU__draggable__icon"
  @start="dragging = true"
  @end="dragging = false"
)
  template(#item="{ element }")
    component.HU__shopOutline__item(
      :is="`ShopOutline${element.component}`"
      :element="element"
    )
</template>

<script>
import draggable from "vuedraggable";
import ShopOutlineImage from "./outline_elements/ShopOutlineImage.vue";
import ShopOutlineBanner from "./outline_elements/ShopOutlineBanner.vue";
import ShopOutlinePost from "./outline_elements/ShopOutlinePost.vue";

export default {
  name: "ShopOutline",
  components: {
    draggable,
    ShopOutlineImage,
    ShopOutlineBanner,
    ShopOutlinePost,
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
  .HU__shopOutline {
    &--ghost {
      opacity: 0.5;
      background: #c8ebfb;
    }

    &__item {
      line-height: 1.5;
      margin: 8px 24px;

      &--ghost {
        opacity: 0.5;
        background: #c8ebfb;
      }
    }
  }
</style>