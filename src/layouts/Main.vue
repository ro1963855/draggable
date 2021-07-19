<template>
  <main class="HU__main">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: "Main",
};
</script>


<style lang="scss" scoped>
.HU__main {
  width: 100%;
  outline: 1px solid gray;
}
</style>