<script setup>
import {ref, computed} from 'vue'

const products = ref([
  {title: 'Banan', price: 123},
  {title: 'Xndzor', price: 13},
  {title: 'tandz', price: 34},
  {title: 'mandarin', price: 23},
  {title: 'apelsin', price: 55},
  {title: 'dzmeruk', price: 673},
  {title: 'emish', price: 157},
])

const query = ref('')

const productsQuery = computed(() => {
  let p = products.value
  if(query.value) {
    p = p.filter( (prod) => {
      return prod.title.indexOf(query.value) !== -1 ||
           prod.price.toString().indexOf(query.value) !== -1
    } )
  }

  return p
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
    <ul>
      <li
          v-for="product in productsQuery"
          :key="product"
      >
        {{product.title}}
        <sub>   {{product.price.toLocaleString()}}$</sub>
      </li>
    </ul>
  </div>
</template>
