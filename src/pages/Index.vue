<template>
 <div class="flex-break q-py-md"></div>
 <div class="flex-break q-py-md"></div>
 <div class="flex-break q-py-md"></div>

<div class="flex flex-center">
  <img 
      alt="Laptop logo"
      src="~assets/laptop.png"
      style="width: 85px; height: 85px"
    />
</div>
 <div class="flex-break q-py-md"></div>
             
<div class="q-pa-md" style="max-width: 1920px">
    
    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input v-model="email" filled type="email" hint="email@example.com"  label="EMAIL" >
         <template v-slot:append>
         <q-icon name="highlight_off" />
         </template>
      </q-input>
      <q-input v-model="password" filled type="password" label="PASSWORD">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>


      <div class="q-pa-md">
        <q-btn label="LOGIN" to="/Users" type="submit" color="dark"/>
      </div>
    </q-form>
    <div class="q-pa-md">
    Don't have account with us? <strong  >REGISTER</strong>
  <br>
    Don't remember password? <strong  >REQUEST PASSWORD</strong>
  </div>
  </div>
  
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({

  name: 'PageIndex'
})

</script>
<style lang="sass">

</style>