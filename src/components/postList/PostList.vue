<template>
  <div v-if="posts.length > 0">
  <h3>spisok polzowateley</h3>
 <post-item v-for="post in posts"
   :post="post"
   :key="post.id"
   @remove="$emit('remove', post)"
 />
  </div>
  <div v-else style="color: red">
    CHKA EL POSTS
  </div>
</template>

<script>
import PostItem from "@/components/postItem/PostItem.vue";

export default {
  components: {PostItem},
props:{
  posts:{
    type: Array,
    required:true
  }
}
}
</script>

<style scoped>

</style>