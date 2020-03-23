<template>
  <div class="post-actions">

    <div class="post-actions__like">
      <font-awesome-icon :icon="['fas', 'thumbs-up']"></font-awesome-icon>
      <p>Curtir</p>
    </div>

    <div class="post-actions__comment">
      <font-awesome-icon :icon="['fas', 'comment-alt']"></font-awesome-icon>
      <p>Comentar</p>
    </div>

    <div class="post-actions__share">
      <font-awesome-icon :icon="['fas', 'share-alt-square']"></font-awesome-icon>
      <i class="fas fa-share-alt-square"></i>
      <p>Compartilhar</p>
    </div>

  </div>
</template>

<script>
import PostModel from '../../js/models/PostModel';

export default {
  name: 'PostActions',

  props: {
    post: {
      type: PostModel,
      required: true,
    },
  },

};
</script>

<style lang="scss">

.post-actions {
  display: flex;
  justify-content: space-between;
  padding: 8px;

  &__like,
  &__comment,
  &__share {
    display: flex;
    align-items: center;
    svg {
      margin-right: 8px;
    }
  }
}
</style>
