<template>
  <div class="q-pa-md q-gutter-sm" style="max-width: 2400px">
    <q-btn label="Delete Item" color="primary" @click="confirm = true" />

   

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">Are you sure you want to delete this category and all equipment under it?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="CANCEL" color="black" v-close-popup />
          <q-btn flat label="DELETE" color="red" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

   
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  // name: 'PageName',
   setup () {
    return {
      alert,
      confirm: ref(false),
      address: ref('')
    }
  }
}
</script>
