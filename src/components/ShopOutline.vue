<template>
  <draggable
    class="HU__shopOutline"
    :list="list"
    item-key="name"
    ghost-class="HU__shopOutline--ghost"
    @start="dragging = true"
    @end="dragging = false"
  >
    <template #item="{ element }">
      <div class="list-group-item" :class="{ 'not-draggable': !enabled }">
        {{ element.name }}
      </div>
    </template>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "ShopOutline",
  components: {
    draggable,
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

    > .list-group-item {
      line-height: 1.5;
      margin-left: 8px;
    }
  }
</style>