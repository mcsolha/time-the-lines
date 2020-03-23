<template>
  <div id="app" class="container">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <post v-for="post in posts" :key="post.id" :post="post"></post>
      </div>
    </div>
  </div>
</template>

<script>
import Post from './components/Post/Index.vue';
import posts from './store/mock';

export default {
  name: 'App',
  components: {
    Post,
  },
  data: () => ({
    posts,
  }),
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
