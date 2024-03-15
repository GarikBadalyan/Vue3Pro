<script setup>
import {ref, computed} from 'vue'
const query = ref('')

const reversQuery = computed(() => {
  return query.value.split('').reverse().join('')
})
</script>

<template>
  <div>
    <input
        type="search"
        placeholder="grel ..."
        v-model="query"
    >
    <br> <br>
        {{ reversQuery }}
  </div>
</template>
