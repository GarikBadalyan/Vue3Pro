<script setup>
import increment from './components/Increment.vue'
import users from './components/Users.vue'
import products from './components/ProductsComputed.vue'
import reactiveComp from './components/reactActiveComponent.vue'
import reactiveComp2 from './components/reactiveComponent2.vue'
import productRevers from './components/productReversComputed.vue'
import productHard from './components/ProductsComputedHard.vue'
import ReviewForm from './components/ReviewForm.vue'
import PostJavascript from "@/components/posts/PostJavascript.vue";
import OrdinaryStore from "@/components/ordinaryStoreExample/OrdinaryStore.vue";
</script>

<template>
  <div>
    <increment />
    ===============================
    <users />
    ===============================
    <products />
    <br>
    ===============================
    <reactiveComp />
    <br>
    ===============================
    <reactiveComp2 />
    <br>
    ===============================
    <productRevers />
    <br>
    ===============================
    <productHard />
    ===============================
    <div>
      composition API
    </div>
    <ReviewForm />
    ===============================
    <PostJavascript />
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    <div class="bg-gray-200 p-4">
      store - Pinia
    </div>
    ==========================================================================================================
    <!--    https://www.youtube.com/watch?v=TWIu6JUQqi8&list=PL2hgv2vHkQ7DE77DNxPPEqzdk89PA4gkX&index=5-->
    <OrdinaryStore />
  </div>
</template>

<style>

</style>
