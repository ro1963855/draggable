<template lang="pug">
section.HU__shopPreviewPost
  a.HU__shopPreviewPost__post(
    v-for="post in element.data.posts"
    :key="post.id"
    :href="post.href"
    target="_blank"
  )
    .HU__shopPreviewPost__post__image(
      :style="`background-image: url('${post.imageUrl}');`"
    )
    .HU__shopPreviewPost__post__content
      .HU__shopPreviewPost__post__content__title {{ post.title }}
      .HU__shopPreviewPost__post__content__description {{ post.description }}
</template>

<script>
export default {
  name: "ShopPreviewPost",
  components: {},
  props: {
    element: {
      type: Object,
      required: true,
    },
  },
  setup() {},
};
</script>

<style lang="scss">
.HU__shopPreviewPost {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  &.HU__shopPreview__section {
    margin-bottom: -8px;
  }

  &__post {
    text-decoration: none;
    flex: 0 0 auto;
    width: calc(100% / 3 - 16px);
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: 8px;
    border: 1px solid gray;
    border-radius: 5px;

    &__image {
      padding-bottom: 100%;
      background-color: gray;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    &__content {
      padding: 8px;

      &__title, &__description {
        line-height: 1.5;
        color: black;
      }
  
      &__title {
        font-size: 16px;
      }
  
      &__description {
        font-size: 14px;
      }
    }
  }
}
</style>