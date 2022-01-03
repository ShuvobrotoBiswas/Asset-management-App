<template>
  <div>
    <q-list bordered separator class="text-weight-bolder">
      <q-item to="/User-Equipments" clickable v-ripple
        v-for="list in listUser"
        :key="list.uid"
      >
        <q-item-section avatar>
          <q-avatar>
            <img :src="list.avatar" alt="" />
          </q-avatar>
        </q-item-section>
        <q-item-section>{{ list.name }}</q-item-section>
      </q-item>
    </q-list>
    <div class="q-pa-md q-gutter-sm fixed-bottom-right " >
    <q-btn
      @click="prompt = true"
      id="add"
      round
      color="primary"
      icon="add"
      class="q-ma-md"
    />
    </div>
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <q-form>
            <q-input type="text" label="First Name" />
            <q-input type="text" label="Last Name" />
            <q-card-actions align="right">
              <q-btn class="q-mt-xl" color="gray" text-color="#ddd"
                unelevated
                label="Cancel"
                no-caps
                v-close-popup
              />
              <q-btn
                class="q-mt-xl"
                color="blue"
                text-color="white"
                unelevated
                label="Save"
                no-caps
                v-close-popup
              />
            </q-card-actions>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
   
  </div>

</template>

<script>
const userList = [
  {
    uid: 1,
    name: "Reza Khan",
    avatar: require("../assets/users/15800314_10154926544776410_2425918391803358445_o.png"),
  },
  {
    uid: 2,
    name: "John Doe",
    avatar: require("../assets/users/jon-doe.png"),

  },
  {
    uid: 3,
    name: "Dong-Seok Han",
    avatar: require("../assets/users/idphoto.png"),
  },
  {
    uid: 4,
    name: "Nur Rony",
    avatar: require("../assets/users/Nikola-Vukovic-772x1030.png"),
  },
  {
    uid: 5,
    name: "Sandra Deibert",
    avatar: require("../assets/users/images3.png"),

  },
];

export default {
  // name: 'PageName',
   data() {
    return {
      prompt: false,
      listUser: userList,
      address: "",
    };
  },

}
</script>
<style>

</style>
