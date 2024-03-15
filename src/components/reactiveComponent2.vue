<script setup>
import { reactive,  } from 'vue'

const counter = reactive({
 count: 5
})

const increment = () => {
  counter.count++
}

</script>

<template>
  <button @click="increment">
    {{ counter.count }}
  </button>
</template>