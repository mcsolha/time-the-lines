<template>
  <div class="post-header">
    <div class="post-header__row">
      <div class="post-header__img-container">
        <img :src="post.category.imgSrc" alt=".. niutubiu">
      </div>
      <div class="post-header__title">{{ post.category.name }}</div>
      <div class="post-header__empty-column"></div>
      <div class="post-header__options">
        <font-awesome-icon :icon="['fas', 'ellipsis-h']"></font-awesome-icon>
      </div>
    </div>
    <div class="post-header__row"></div>
  </div>
</template>

<script>
import PostModel from '../../js/models/PostModel';

export default {
  name: 'PostHeader',

  props: {
    post: {
      type: PostModel,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  .post-header {
    display: flex;
    flex-direction: column;
    padding: 8px;

    &__options {
      font-size: 22px;
    }

    &__row {
      display: flex;
    }

    &__empty-column {
      flex-grow: 1;
    }

    &__img-container {
      max-width: 32px;
      max-height: 32px;
      border-radius: 50%;

      img {
        border-radius: 50%;
      }
    }
  }
</style>
