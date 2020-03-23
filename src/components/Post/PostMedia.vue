<template>
  <div class="post-media">
    <figure class="image is-3by1">
      <img :src="post.midiaSrc">
    </figure>
  </div>
</template>

<script>
import PostModel from '../../js/models/PostModel';

export default {
  name: 'PostMedia',

  props: {
    post: {
      type: PostModel,
      required: true,
    },
  },

};
</script>

<style lang="scss">
.post-media {
  figure {
    img{
      object-fit: cover;
    }
  }
}

</style>
