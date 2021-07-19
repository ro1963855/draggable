<template lang="pug">
draggable.HU__shopOutline(
  :list="list"
  item-key="id"
  ghost-class="HU__shopOutlineItem--ghost"
  handle=".HU__draggable__icon"
  @start="dragging = true"
  @end="dragging = false"
)
  template(#item="{ element }")
    ShopOutlineItem(:element="element")
</template>

<script>
import draggable from "vuedraggable";
import ShopOutlineItem from "./ShopOutlineItem.vue";

export default {
  name: "ShopOutline",
  components: {
    draggable,
    ShopOutlineItem,
  },
  props: {
    list: {
      type: Array,
      defautl: [],
    },
  },
};
</script>

<style lang="scss" scoped>
  .HU__shopOutline {
    &--ghost {
      opacity: 0.5;
      background: #c8ebfb;
    }

    &__item {
      line-height: 1.5;
      margin-left: 8px;
    }
  }
</style>