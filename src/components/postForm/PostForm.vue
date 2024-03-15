<template>
  <form @submit.prevent>

    <h4>Create post</h4>
    <my-input
        type="text"
        placeholder="Name"
        v-model="post.title"
    />
      <my-input
          type="text"
          placeholder="Opisanie"
          v-model="post.body"
      />
        <my-button
            style="align-self: flex-end; margin-top: 15px"
            @click="createPost"
        >
          Create
        </my-button>
  </form>
</template>

<script>

export default {

  data(){
    return{
      post:{
        title: '',
        body: ''
      }
    }
  },

  methods: {
    createPost(){
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>
form{
  display: flex;
  flex-direction: column;
}
</style>