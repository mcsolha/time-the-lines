<template>
  <div class="post-content">
    <p class="is-medium">{{post.textContent}}</p>
  </div>
</template>

<script>
import PostModel from '../../js/models/PostModel';

export default {
  name: 'PostContent',

  props: {
    post: {
      type: PostModel,
      required: true,
    },
  },
  mounted() {
    console.log(this.post);
  },
};
</script>

<style lang="scss">
.post-content {
  padding: 8px;
  display: flex;
}

</style>
