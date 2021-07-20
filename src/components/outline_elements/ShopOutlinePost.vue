<template lang="pug">
.HU__shopOutlinePost
  Expandable
    template(v-slot:title)
      Draggable {{ mainTitle }}
    template(v-slot:submenu)
      draggable.HU__shopOutline__submenu(
        :list="element.data.posts"
        item-key="id"
        ghost-class="HU__shopOutline__item--ghost"
        handle=".HU__draggable__icon"
        @start="dragging = true"
        @end="dragging = false"
      )
        template(#item="{ element: subElement }")
          Draggable
            .HU__shopOutline__submenu__item {{ `${subTitle}(${subElement.title})` }}
</template>

<script>
import { ref } from "vue";
import draggable from "vuedraggable";
import Draggable from "../Draggable.vue";
import Expandable from "../Expandable.vue";

export default {
  name: "ShopOutlinePost",
  components: {
    draggable,
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
    const mainTitle = ref("推薦文");
    const subTitle = ref("推薦文");

    return {
      mainTitle,
      subTitle,
    };
  },
};
</script>

<style lang="scss">
</style>