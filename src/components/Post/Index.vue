<template>
  <div class="post">
    <post-header class="post__header" :post="post"></post-header>
    <!-- <post-midia-content class="post__midia-content"></post-midia-content>
    <post-text-content class="post__text-content"></post-text-content>
    <post-actions></post-actions> -->
  </div>
</template>

<script>
import PostModel from '../../js/models/PostModel';
import PostHeader from './PostHeader.vue';

export default {
  name: 'Post',

  props: {
    post: {
      type: PostModel,
      required: true,
    },
  },

  components: {
    PostHeader,
  },

  methods: {
  },
};
</script>

<style lang="scss">
@import "../../scss/_style.scss";

.post {
  background-color: $white;
  border: 1px solid $sinbad;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
}
</style>
