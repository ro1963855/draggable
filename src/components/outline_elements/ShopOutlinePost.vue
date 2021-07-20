<template lang="pug">
.HU__shopOutlinePost
  Expandable
    template(#title)
      Draggable {{ mainTitle }}
    template(#submenu)
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
        template(#footer)
          NewItem.HU__shopOutline__submenu__item(
            @click="handlePostIncrement"
          ) {{ incrementTitle }}
</template>

<script>
import { ref } from "vue";
import draggable from "vuedraggable";
import Draggable from "../Draggable.vue";
import Expandable from "../Expandable.vue";
import NewItem from "../NewItem.vue";
import { addPost } from "../../store/useCMSStore.js";

export default {
  name: "ShopOutlinePost",
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
    const mainTitle = ref("推薦文");
    const subTitle = ref("文章");
    const incrementTitle = ref("新增文章");

    function handlePostIncrement() {
      addPost(props.element.id)
    }

    return {
      mainTitle,
      subTitle,
      incrementTitle,
      handlePostIncrement,
    };
  },
};
</script>

<style lang="scss">
</style>