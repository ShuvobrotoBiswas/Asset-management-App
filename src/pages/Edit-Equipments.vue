<template>
   <div class="q-pa-md q-gutter-md" style="max-width: 2400px">
     <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
     <!-- Inputs -->
     <q-select v-model="model" :options="options" label="CATEGORY" />
     <!-- Date -->
      <q-input  v-model="date" mask="date" :rules="['date']" label="DATE ADDED">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
            <q-date v-model="date">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
     </q-input>
     <!-- Date End -->
     <q-input v-model="text" label="BRAND" />
     <q-input v-model="text" label="MODEL" />
     <q-input v-model="text" label="DESCRIPTION" />

     <!-- Checkbox -->
     <div>
      <q-checkbox
        v-model="customModel"
        color="blue"
        label="Mark Discarded"
        true-value="yes"
        false-value="no"
      />
     <q-input v-model="text" label="REASON FOR DISCARDING" />
    <q-option-group
      :options="option1"
      type="checkbox"
      v-model="group"
    />
     <q-input v-model="text" label="REASON FOR DISCARDING" />
     </div>
     <!-- Checkbox End -->
     <q-card-actions align="right" class="text-primary">
        <q-btn label="Cancel" type="reset" color="primary" flat class="q-ml-sm" />
         <q-btn label="Submit" type="submit" color="primary"/>
        </q-card-actions>
     </q-form>
   </div>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
export default {
  // name: 'PageName',
  setup () {
    const text = ref(null)
     const $q = useQuasar()

    return {
      group: ref([]),
      text,
      model: ref(null),
      options: [
        'LAPTOP', 'MOUSE', 'KEYBOARD', 'HEADPHONE', 'PC'
      ],
       option1: [
        { label: 'Mark Discarded', value: 'bat' },
      ],
      date: ref('2022/01/01'),
      customModel: ref(''),
      save: ref(''),
      onSubmit () {''},
      onReset () {text.value = null}
    }
  }
}
</script>
