<script setup>
import {ref} from 'vue'

const count = ref(2)

const increment = () => {
  count.value++
}
</script>

<template>
  <div class="">
    <button>
      <strong @click="increment" class="textFieldInput">
        count:{{count}}
      </strong>
    </button>
  </div>
</template>



