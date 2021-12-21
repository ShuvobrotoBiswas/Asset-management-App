<template>
    
 <form @submit.prevent="simulateSubmit" class="q-pa-md">
    <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input v-model="text" label="First Name" />
      <q-input v-model="text" label="Last Name" />
    </div>
    </div>  
    <div class="row justify-end">
      <q-btn
        type="reset"
        :loading="resetting"
        label="CANCEL"
        class="q-mt-md"
        color="gray"
        text-color="gray"
      >
      </q-btn>
      <q-btn
      to="/Users"
        type="Cancel"
        :loading="submitting"
        label="SAVE"
        class="q-mt-md"
        color="blue"
      >
      </q-btn>
    </div>
  </form>

</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const test = ref('')
    const submitting = ref(false)

    function simulateSubmit () {
      submitting.value = true

      setTimeout(() => {
        submitting.value = false
      }, 3000)
    }

    return {
      test,
      submitting,
      
      simulateSubmit,
      text: ref('')
    }
  }
}
</script>
