<template>

    <div class="row"  >
        <q-item to="/Equipments">
      <div class="col"  > 
        <q-item-section >{{ list.name  }} 
        </q-item-section>
      </div>
        </q-item>
      <div class="col">
        <q-btn active clickable v-ripple flat round dense icon="more_vert" class="q-mr-xs">
        <q-menu>
          <q-list style="min-width: 100px"> 
            <q-item @click="confirm1 = true"  clickable v-close-popup>
              <q-item-section>Edit</q-item-section>
            </q-item>
             <q-separator />
             <q-item  @click="confirm = true" clickable v-close-popup >
              <q-item-section>Delete</q-item-section>
          </q-item>
             <q-separator />
          </q-list>
        </q-menu>
      </q-btn>
      </div>
    </div>


</template>

<style lang="sass" scoped>
.row > div
  padding: 10px 15px
  background: rgba(86,61,124,.15)
  border: 1px solid rgba(86,61,124,.2)
.row + .row
  margin-top: 1rem
</style>
