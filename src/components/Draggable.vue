<template lang="pug">
.HU__draggable
  span
    slot
  FontAwesomeIcon.HU__draggable__icon(:icon="['fas', 'grip-vertical']")
</template>

<script>
export default {
  name: "Draggable",
  components: {},
};
</script>

<style lang="scss" scoped>
.HU__draggable {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  &__icon {
    flex: 0 0 auto;
    cursor: grab;
  }
}
</style>