<template>
  <div class="post">
    <post-header class="post__header" :post="post"></post-header>
    <post-content :post="post"> </post-content>
    <post-media :post="post"> </post-media>
    <post-actions :post="post"></post-actions>
    <!-- <post-midia-content class="post__midia-content"></post-midia-content>
    <post-text-content class="post__text-content"></post-text-content>
    <post-actions></post-actions> -->
  </div>
</template>

<script>
import PostModel from '../../js/models/PostModel';
import PostHeader from './PostHeader.vue';
import PostMedia from './PostMedia.vue';
import PostContent from './PostContent.vue';
import PostActions from './PostActions.vue';

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
    PostMedia,
    PostContent,
    PostActions,
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
  border-radius: 4px;
  min-height: 270px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
}
</style>
