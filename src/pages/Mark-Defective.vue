<template>
 <div class="q-pa-md q-gutter-sm" style="max-width: 1920px">
    <q-btn label="Defect" color="primary" @click="prompt = true" />

    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Explain the defect
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="save" autofocus @keyup.enter="prompt = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="CANCEL" v-close-popup />
          <q-btn flat label="SAVE" v-close-popup />
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
      prompt: ref(false),

      save: ref('')
    }
  }
}
</script>
