<template>
   <v-app>
      <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm12 md9>
                  <v-row no-gutters >
                     <v-col cols="6" sm="6" >
                        <v-sheet height="100% !important">
                           <v-card class="elevation-6" height="100% !important">
                           <v-img src="../assets/domestic.jpeg" height="100%" cover
                                 ></v-img>
                           </v-card>
                        </v-sheet>

                     </v-col>
                     <v-col cols="6" sm="6" >
                        <v-sheet height="100% !important">
                           <v-card class="elevation-6" height="100% !important">
                              <v-toolbar dark color="primary">
                                 <v-toolbar-title>{{ isRegister ? stateObj.register.name : stateObj.login.name }}
                                 </v-toolbar-title>
                              </v-toolbar>
                              <v-card-text>
                                 <form ref="form" @submit.prevent="isRegister ? register() : login()">
                                    <v-text-field v-model="username" name="username" label="Nom d'utilisateur ou Email"
                                       type="text" placeholder="username" required></v-text-field>

                                    <v-text-field v-model="password" name="password" label="Mot de passe" type="password"
                                       placeholder="Mot de passe" required></v-text-field>

                                    <v-text-field v-if="isRegister" v-model="confirmPassword" name="confirmPassword"
                                       label="Confirm Password" type="password" placeholder="Confirmer mot de passe"
                                       required></v-text-field>
                                    <v-text-field v-if="isRegister" v-model="email" label="E-mail" type="email"
                                       placeholder="Email" name="email" required></v-text-field>
                                    <div class="red--text"> {{ errorMessage }}</div>
                                    <v-btn type="submit" class="mt-4" color="primary" value="log in">{{ isRegister ?
                                       stateObj.register.name : stateObj.login.name }}</v-btn>
                                    <div class="grey--text mt-4" v-on:click="isRegister = !isRegister;">
                                       {{ toggleMessage }}
                                    </div>
                                 </form>
                              </v-card-text>
                           </v-card>
                        </v-sheet>
                     </v-col>

                  </v-row>


               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
   </v-app>
</template>
<script>
export default {
   name: "App",
   data() {
      return {
         username: "",
         password: "",
         confirmPassword: "",
         email: "",
         isRegister: false,
         errorMessage: "",
         stateObj: {
            register: {
               name: 'Inscription',
               message: 'Vous avez déjà un compte? Se Connecter.'
            },
            login: {
               name: 'Connexion',
               message: 'Inscription'
            }
         }
      };
   },
   methods: {

      login() {
         const { username, password } = this;
         console.log(username + "logged in")
         const user = {
            usernameOrEmail: username,
            password: password
         };

         this.$axios.post(this.api + "auth/login", user)
            .then(response => {
               console.log("response server ", response)
               localStorage.setItem('token', response.data.accessToken)
               this.$router.replace({ name: "dashboard", params: { username: username } });
            })
            .catch(error => {
               this.errorMessage = error.message;
               console.error("There was an error!", error);
            });
      },
      register() {
         if (this.password == this.confirmPassword) {
            const user = {
               username: this.username,
               email: this.email,
               password: this.password
            };
            this.$axios.post(this.api + "auth/register", user)
               .then(response => {
                  console.log("response server ", response)
                  this.isRegister = false;
                  this.errorMessage = "";
                  this.$refs.form.reset();
               })
               .catch(error => {
                  this.errorMessage = error.response.data.message;
                  console.error("There was an error!", error);
               });

         }
         else {
            this.errorMessage = "password did not match"
         }
      }
   },
   computed: {
      toggleMessage: function () {
         return this.isRegister ? this.stateObj.register.message : this.stateObj.login.message
      }
   }
};
</script>