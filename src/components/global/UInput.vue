<script setup>
import {defineProps, defineEmits, ref, watch} from 'vue'

const emits = defineEmits(['update:modelValue'])

const {modelValue} = defineProps( {
  modelValue: String,
  placeholder: String,
  type: {
    type:String,
    default: 'text',
    validator: (val) => [
      'text',
      'password',
      'tel',
      'search',
      'email',
      'textarea',
    ].includes(val)
  }
})

const inputValue = ref(modelValue)

watch(inputValue, () =>{
  console.log('inputValue', inputValue)
  emits('update:modelValue', inputValue.value)
})
</script>

<template>
  <div>
    <input
      v-if="type !== 'textarea'"
      :type="type"
      :placeholder="placeholder"
      class="form-control mb-3"
      v-model="inputValue"
    >

    <textarea
        v-else
        rows="3"
        class="form-control mb-3"
        placeholder="Что понравилось, что нет?"
        v-model="inputValue"
    ></textarea>
  </div>
</template>


