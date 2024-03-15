<script setup>
import { reactive, computed , ref, watch} from 'vue'
import axios from 'axios'
import Ubotton from "@/components/Ubotton.vue";
import UInput from "@/components/global/UInput.vue";
import UFile from "@/components/global/UFile.vue";

const review = reactive({
  author: '',
  stars: null,
  text: '',
  photo: null,
  isRecommended: true
})

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

watch(() => review.author, (newValue, oldValue) => {
  // console.log(`Author changed from ${oldValue} to ${newValue}`);
  console.log('review.author-oldValue', oldValue)
  console.log('review.author-newValue', newValue)
});
watch(() => review.text, (newValue, oldValue) => {
  // console.log(`Author changed from ${oldValue} to ${newValue}`);
  console.log('review.text oldValue', oldValue)
  console.log('review.text newValue', newValue)
});
</script>

<template>
  <form
      @submit.prevent.stop="submit"
      class="container pt-5 pb-5"
  >

    <UInput
      type="text"
      v-model="review.author"
      placeholder="Как вас зовут?"
    />

    <UInput
      type="textarea"
      v-model="review.text"
      placeholder="Что понравилось, что нет?"
    />

<!--tileWinds -ov-->
    <h4 class="text-3xl font-bold underline bg-red-200">Оценка !!</h4>
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

    <UFile
      v-model="review.photo"
      label="photo"
    />

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

   <Ubotton>
     Send !
   </Ubotton>
  </form>
</template>