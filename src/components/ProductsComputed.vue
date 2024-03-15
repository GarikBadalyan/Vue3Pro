<script setup>
import {ref, computed} from 'vue'

const products = ref(['Xndzor', 'tandz', 'mandarin', 'apelsin', 'dzmeruk', 'emish']);
const query = ref('');

const productsQuery = computed(() => {
   return products.value.filter( (product) => product.indexOf(query.value) !== -1 )
})
</script>

<template>
  <div>
    <input
        style="border: 2px solid black; padding: 5px 10px"
      type="search"
      placeholder="grel ..."
      v-model="query"
    >
    <br> <br>
    <ul>
      <li
          v-for="product in productsQuery"
          :key="product"
      >
        {{product}}
      </li>
    </ul>
  </div>
</template>

<!--<script setup>-->
<!--import {ref, computed} from 'vue'-->

<!--const users = ref(['aram', 'karen', 'hayk', 'serob', 'tigran', 'hakob'])-->
<!--const query = ref('')-->
<!--const queryUsers = computed(() => {-->
<!--  // return users.value.filter( (usr) => usr.indexOf(query.value) !== -1)-->
<!--  return users.value.filter( (product) => product.indexOf(query.value) !== -1 )-->
<!--})-->

<!--</script>-->

<!--<template>-->
<!--  <div>-->
<!--    <input-->
<!--      type="search"-->
<!--      v-model="query"-->
<!--    >-->
<!--    <ul>-->
<!--      <li v-for="user in queryUsers"-->
<!--      :key="user"-->
<!--      >-->
<!--    {{user}}-->
<!--      </li>-->
<!--    </ul>-->
<!--  </div>-->
<!--</template>-->