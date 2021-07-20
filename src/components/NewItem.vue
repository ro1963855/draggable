<template lang="pug">
.HU__newItem
  FontAwesomeIcon.HU__newItem__icon(:icon="['fas', 'plus-square']")
  span
    slot
</template>

<script>
export default {
  name: "NewItem",
  components: {},
};
</script>

<style lang="scss">
.HU__newItem {
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;

  &__icon {
    flex: 0 0 auto;
    margin-right: 8px;
  }
}
</style>