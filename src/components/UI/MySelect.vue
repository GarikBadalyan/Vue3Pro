<template>
  <div>
    <select
        :value="modelValue"
      @change="changeOption"
    >
      <option disabled value="">
        Viberite iz spisok
      </option>
      <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      >
        {{option.name}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'my-select',

  props:{
    modelValue: {
      type: String,
    },

    options:{
      type:Array,
      default:() => []
    }
  },

  methods:{
    changeOption(event){
      this.$emit('update.modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>