<template lang="pug">
.HU__expandable
  .HU__expandable__title
    FontAwesomeIcon.HU__expandable__title__icon(
      v-if="isLocalExpand"
      :icon="['fas', 'caret-down']"
      @click="handleExpandToggle"
    )
    FontAwesomeIcon.HU__expandable__title__icon(
      v-else
      :icon="['fas', 'caret-right']"
      @click="handleExpandToggle"
    )
    slot(name="title")
  .HU__expandable__submenu(v-if="isLocalExpand")
    slot(name="submenu")
</template>

<script>
import { ref } from "vue";

export default {
  name: "Expandable",
  setup() {
    const isLocalExpand = ref(false)

    function handleExpandToggle() {
      isLocalExpand.value = !isLocalExpand.value
    }

    return {
      isLocalExpand,
      handleExpandToggle,
    }
  },
};
</script>

<style lang="scss">
.HU__expandable {
  &__title {
    position: relative;
    
    &__icon {
      cursor: pointer;
      position: absolute;
      left: -16px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>