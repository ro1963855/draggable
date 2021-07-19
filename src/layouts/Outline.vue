<template>
  <aside class="HU__outline">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: "Outline",
};
</script>

<style lang="scss" scoped>
.HU__outline {
  width: 100%;
  outline: 1px solid gray;
}
</style>