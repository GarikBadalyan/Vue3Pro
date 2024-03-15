<script setup>
import {reactive, computed, ref, watch} from 'vue'
import axios from 'axios'

const review = reactive({
  author: '',
  stars: null,
  text: '',
  photo: null,
  isRecommended: true
})
const previewFilePath = computed( () => {
  if (review.photo){
    return URL.createObjectURL(review.photo)
  }

  return '#'
} )
const stars = ref( [1,2,3,4,5]);
const submit = () => {
  console.log('submit')

  axios.post('api/review', review, {
    headers: {
      'Content-type':'multipart/form-data'
    }
  })
      .then( (res) => {
        console.log(res)
      } )
      .catch( (err) => {
        console.log(err)
      } )
      .finally( () => {
        console.log('end')
      } )
}

const upLoadFile = (e) => {
  const file = e.target.files[0]
  review.photo = file;
}

</script>

<template>
  <form
      @submit.prevent.stop="submit"
      class="container pt-5 pb-5">
    <input
        type="text"
        v-model="review.author"
        placeholder="Как вас зовут?"
        class="form-control mb-3"
    >
    <textarea
        v-model="review.text"
        rows="3"
        class="form-control mb-3"
        placeholder="Что понравилось, что нет?"
    ></textarea>
    <h4>Оценка</h4>
    <div
        v-for="star in stars"
        :key="star"
        class="form-check">
      <input
          class="form-check-input"
          type="checkbox"
          v-model="review.stars"
          :true-value="star"
          :false-value="null"
          :id="`star${star}`">
      <label class="form-check-label" :for="`star${star}`">
       {{ star }}
      </label>
    </div>

    <div class="mb-3 mt-3">
      <label class="form-label">Фото</label>
      <input
          class="form-control"
          type="file"
          @change="upLoadFile"
      >
      <img :src="previewFilePath" alt="" class="w-100 mt-2">
    </div>

    <div class="form-check">
      <input
          class="form-check-input"
          type="radio"
          id="adv1"
          v-model="review.isRecommended"
          :value="false"
      >
      <label class="form-check-label" for="adv1">
        Не советую
      </label>
    </div>

    <div class="form-check">
      <input
          class="form-check-input"
          type="radio"
          id="adv2"
          v-model="review.isRecommended"
          :value="true"
      >
      <label class="form-check-label" for="adv2">
        Советую
      </label>
    </div>

    <button class="mt-4 btn btn-primary">
      otpravit
    </button>
  </form>
</template>