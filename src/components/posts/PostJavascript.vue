<template>
  <div class="app">
    <h1>
      strnica s postami
    </h1>
    <div class="app-btns">
      <my-button
          @click="showDialog"
      >
        Create post
      </my-button>

      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>

      <my-dialog
          v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
      </my-dialog>
    <post-list
      v-if="!isLoadingPost"
    :posts="posts"
    @remove="removePost"
    />
    <div v-else>Gnum e zagrozka ... </div>
  </div>
</template>

<script>
import PostForm from "@/components/postForm/PostForm.vue";
import PostList from "@/components/postList/PostList.vue";
import MyButton from "@/components/UI/MyButton.vue";
import axios from 'axios'
import MySelect from "@/components/UI/MySelect.vue";
export default {
  components: {
    MySelect,
    MyButton,
    PostForm,
    PostList
  },

  data(){
    return{
      posts: [],
      dialogVisible: false,
      isLoadingPost: false,
      selectedSort: '',
      sortOptions:[
        {value:'title', name: 'po nazvaniu'},
        {value:'body', name: 'po soderjimu'}
      ]
    }
  },

  methods:{
    createPost(post){
      console.log('post1', post)
      this.posts.push(post);
      this.dialogVisible = false
    },

    removePost(post){
      this.posts = this.posts.filter( (p) => p.id !== post.id)
    },
    showDialog(){
      this.dialogVisible = true
    },

    async fetchPosts(){
     try {
       const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
       console.log('response', response)
       this.posts = response.data
     } catch(e) {
       console.log(e)
     }
     finally {
       this.isLoadingPost = false
     }
    }
  },
  mounted() {
    this.fetchPosts()
  },

  watch: {
    selectedSort(newValue){
      console.log('newValue', newValue)
    }
  }
}
</script>

<style>
.app{
  padding: 20px;
}

.app-btns{
  margin:15px 0;
  display: flex;
  justify-content: space-between;
}

</style>