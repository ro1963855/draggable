<template lang="pug">
.HU__shopOutlineImage
  Expandable
    template(#title)
      Draggable {{ mainTitle }}
    template(#submenu)
      draggable.HU__shopOutline__submenu(
        :list="element.data.images"
        item-key="id"
        ghost-class="HU__shopOutline__item--ghost"
        handle=".HU__draggable__icon"
        @start="dragging = true"
        @end="dragging = false"
      )
        template(#item="{ element: subElement }")
          Draggable
            .HU__shopOutline__submenu__item {{ subTitle }}
        template(#footer)
          NewItem.HU__shopOutline__submenu__item(
            @click="handleImageIncrement"
          ) {{ incrementTitle }}
</template>

<script>
import { ref } from "vue";
import draggable from "vuedraggable";
import Draggable from "../Draggable.vue";
import Expandable from "../Expandable.vue";
import NewItem from "../NewItem.vue";
import { addImage } from "../../store/useCMSStore.js";

export default {
  name: "ShopOutlineImage",
  components: {
    draggable,
    Draggable,
    Expandable,
    NewItem,
  },
  props: {
    element: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const mainTitle = ref("圖庫");
    const subTitle = ref("圖片");
    const incrementTitle = ref("新增圖片");

    function handleImageIncrement() {
      addImage(props.element.id)
    }

    return {
      mainTitle,
      subTitle,
      incrementTitle,
      handleImageIncrement,
    };
  },
};
</script>

<style lang="scss">
</style>