<template>
  <div class="q-pa-md" style="max-width: 1920px">
    <q-list >
     <div class="flex-break q-py-md"></div>

      <q-item  clickable v-ripple to="/User-Equipments">
        <q-item-section avatar>
          <q-avatar>
            <img src="~assets/15800314_10154926544776410_2425918391803358445_o.png">
          </q-avatar>
        </q-item-section>

        <q-item-section ><div class="text-weight-bolder">Reza Khan </div></q-item-section>
      </q-item>
      <q-separator />
       
      <q-item  clickable v-ripple>
        <q-item-section avatar>
         <q-avatar>
            <img src="~assets/jon-doe.png">
          </q-avatar>
        </q-item-section>

        <q-item-section ><div class="text-weight-bolder"> John Doe </div></q-item-section>
      </q-item>
      <q-separator />
       
      <q-item  clickable v-ripple>
        <q-item-section avatar>
         <q-avatar>
            <img src="~assets/idphoto.png">
          </q-avatar>
        </q-item-section>

        <q-item-section><div class="text-weight-bolder">Dong-Seok Han</div></q-item-section>
      </q-item>
      <q-separator />
      
      <q-item  clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="~assets/Nikola-Vukovic-772x1030.png">
          </q-avatar>
            
        </q-item-section>

        <q-item-section><div class="text-weight-bolder">Nur Rony</div></q-item-section>
      </q-item>

      <q-separator />
      <q-item  clickable v-ripple>
        <q-item-section avatar>
          <q-avatar >
            <img src="~assets/images3.png">
          </q-avatar>
            
        </q-item-section>

        <q-item-section><div class="text-weight-bolder">Sandra Deibert</div></q-item-section>
      </q-item>

    
    </q-list>
    <div class="q-pa-md q-gutter-sm fixed-bottom-right " >
    <q-btn to="/Mod-Users" round color="primary" icon="add" />
  </div>
  </div>
  
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
