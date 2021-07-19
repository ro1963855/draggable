<template lang="pug">
aside.HU__outline
  slot
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