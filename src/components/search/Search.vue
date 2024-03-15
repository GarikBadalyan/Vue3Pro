<template>
  <form @submit.prevent="searchStore.getMovies(searchMovie)">
    <p>Api</p>
    <p>
      API https://developers.themoviedb.org/3/g...</p>
    <div>
      posik karox enq tal orinal
      <h1>batman, Alone, spider </h1>
    </div>
    <button
        style="background: #9ca3af; padding: 10px 20px; border-radius: 7px"
        @click="searchStore.getMovies(searchMovie)">
      Search
    </button>
    <input
      type="text"
      class="search-input"
      placeholder="Input movie"
      v-model="searchMovie"
    />
  </form>
  <Loader v-if="searchStore.loader" />
  <div v-else>
    <Movie
        v-for="movie of searchStore.movies"
        :key="movie.id"
        :movie="movie"
        :is-search="true"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useSearchStore } from "@/stores/SearchStore.js";
import Loader from "@/components/Loader.vue";
import Movie from "@/components/move/Movie.vue";

const searchStore = useSearchStore();
const searchMovie = ref("");
</script>

<style scoped>
.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>