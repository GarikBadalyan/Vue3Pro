<script setup>
import {ref} from 'vue'

const users = ref([
  {
    name: "Nar", age: 23, id: 1
  },
  {
    name: "Gar", age: 55, id: 2
  },
  {
    name: "Armen", age: 44, id: 3
  }
])
</script>

<template>
  <div>
<!--    <UInput />-->
 <ul>
   <li class="text-"
     v-for="user in users"
     :key="user.id"
   >
     {{user.name}}
     <sub
       :class="{
         'red-color': user.age > 50,
         'font-size-size' : user.name === 'Nar'
     }"
     >
       {{user.age}}
     </sub>
   </li>
 </ul>
  </div>
</template>

<style>
.red-color{
  color: red;
}

.font-size-size {
  font-size: 30px;
}
</style>

