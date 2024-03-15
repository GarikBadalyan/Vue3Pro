<template>
  <div class="post">
    <div>
      <div><strong> Anun: </strong> {{ post.title }}</div>
      <div><strong> Opisanie: </strong> {{ post.body }}</div>
    </div>
   <div>
     <my-button
       class="post__button"
       @click="$emit('remove', post)"
     >
       remuve
     </my-button>
   </div>
  </div>
</template>

<script>

export default {
  props:{
    post:Object,
    required: true
  }
}
</script>

<style scoped>
.post{
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-self: center;
  justify-content: space-between;
}
</style>