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
      @submit.prevent="login"
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
            :name="isPwd "
          />
        </template>
      </q-input>


      <div class="q-pa-md">
        <q-btn to="/Users" label="LOGIN"  type="submit" color="dark"/>
        <!-- Email : monir@gmail.com
        Password: 123123 
        I was onClick routing to Users.vue-->
      </div>
    </q-form>
    <div class="q-pa-md" >
    Don't have account with us? <q-btn to="/Registration" > REGISTER </q-btn>
  <br>
    Don't remember password? <strong  >REQUEST PASSWORD</strong>
  </div>
  </div>
  
</template>

<script>
import axios from "axios";
import { defineComponent } from 'vue';

export default defineComponent({

  name: 'PageIndex',
name: 'Login',
  data () {
    return {
      email: '',
      username: '',
      password: '',
      isPwd: '',

    }
  },
  methods: {   
    
login (){
  const login = new FormData();
  login.append( "password",  this.password);
  login.append( "email",  this.email);


    const options = {
  method: 'POST',
  url: 'https://assets-api.dev.sandbox3000.com/api/login',
  headers: { "Authorization": "Bearer 1|taTce8r3WAtjHOnmPQfoB9l1PELcyyzhhiQQgr2Q"},
  data: login,
};
 axios.request(options).then((response) => {
   console.log(response.data);
   this.login = response.data;
 })
 .catch(function (error) { console.error(error) ;
 } );

// this.$refs.login.validate().then(success => {
//     if (success) {

//       auth.login(FormData).then(err => {        
//         this.loading = false;
//         if (err) {
//           this.$q.notify({ color: 'negative', message: err });
//           return;
//         }
//         this.$q.notify({ color: 'positive', message: 'You have been successfully logged in.' });
//         this.$router.push('/Users');
//       });  

//     }else{
//       this.$q.notify({ color: 'orange', message: 'Please enter required field' });       
//     }
//   })

},
},
})

</script>
