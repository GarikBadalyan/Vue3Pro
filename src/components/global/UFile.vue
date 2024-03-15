<script setup>
import {computed, defineProps, defineEmits, watch, ref} from "vue";

const emits = defineEmits(['update:modelValue'])

const {modelValue} = defineProps({
  modelValue: String,
  label: String
})

const fileValue = ref(modelValue)
const upLoadFile = (e) => {
  const file = e.target.files[0]
  fileValue.value = file;
}

const previewFilePath = computed( () => {
  if (fileValue.value){
    return URL.createObjectURL(fileValue.value)
  }

  return '#'
} )

watch(fileValue, () => {
  emits('update:modelValue', fileValue.value)
})
</script>

<template>
  <div class="mb-3 mt-3">
    <label class="form-label"> {{label}} </label>
    <input
        class="form-control"
        type="file"
        @change="upLoadFile"
    >
    <img :src="previewFilePath" alt="" class="w-100 mt-2">
  </div>
</template>