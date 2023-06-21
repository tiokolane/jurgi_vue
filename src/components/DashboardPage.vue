<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar app clipped-left color="#1776D1 !important">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-toolbar-title>
          <span class="first-word font uppercase text">JURGI</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>
  
      <v-navigation-drawer app clipped flat color="#1776D1 !important" expand-on-hover  v-model="drawer">
        <v-list>         
         <v-list-item class="px-2" >
           <v-list-item-avatar>
             <v-img :src="require('@/assets/home.png' )"></v-img>
  
           </v-list-item-avatar>
           <v-list-item link >
             <v-list-item-content>
  
               <v-list-item-subtitle v-on:click="goTo('dashboard')"> <span class="text">Accueil</span></v-list-item-subtitle>
             </v-list-item-content>
           </v-list-item> 
         </v-list-item>
  
          <v-divider class="border-opacity-25" color="white"></v-divider>
         
          <v-list-item class="px-2" >
            <v-list-item-avatar>
              <v-img :src="require('@/assets/animals/' + selectedImage)"></v-img>
  
            </v-list-item-avatar>
            <v-list-item link >
              <v-list-item-content>
  
                <v-list-item-subtitle v-on:click="goTo('my-animals')"> <span class="text">Mes
                    Animaux</span></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item> 
          </v-list-item>
  
          <v-divider class="border-opacity-25" color="white"></v-divider>
         
         <v-list-item class="px-2" >
           <v-list-item-avatar>
             <v-img :src="require('@/assets/wedding.png' )"></v-img>
  
           </v-list-item-avatar>
           <v-list-item link >
             <v-list-item-content>
  
               <v-list-item-subtitle v-on:click="goTo('my-weedings')"> <span class="text">Mes
                   Mariages</span></v-list-item-subtitle>
             </v-list-item-content>
           </v-list-item> 
         </v-list-item>
  

         <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/men/11.jpg"></v-img>
  
            </v-list-item-avatar>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="text-h6 text">
                  Mon Profil
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
  
          </v-list-item>
          <v-divider class="border-opacity-25" color="white"></v-divider>

         <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img :src="require('@/assets/logout.png' )"></v-img>
  
            </v-list-item-avatar>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="text-h6 text" v-on:click="logout">
                  Se Déconnecter
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
  
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    <v-main class="d-flex align-center justify-center" style="min-height: 300px; margin-top: 2%;">
      
      <template>
        <v-container class="grey lighten-5">
          <v-row>
            <v-col v-for="n in 5" :key="n" cols="12" sm="6">
              <template>
                <v-card class="mx-auto" max-width="344">
                  <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

                  <v-card-title>
                    Top western road trips
                  </v-card-title>

                  <v-card-subtitle>
                    1,000 miles of wonder
                  </v-card-subtitle>

                  <v-card-actions>
                    <v-btn color="orange lighten-2" text>
                      Explore
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn icon @click="show = !show">
                      <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                  </v-card-actions>

                  <v-expand-transition>
                    <div v-show="show">
                      <v-divider></v-divider>

                      <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have
                        time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that
                        data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry?
                        I've got to find a way to escape.
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </template>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-main>
  </v-layout>
</template>
<style>
.text {
  color: white;

}
</style>
<script>
export default {
  data() {

    return {
      drawer: true,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' },
      ],
      username: this.$route.params.username,
      cards: [
        {
          "title": "title1",
          "texte": "texte"

        },
        {
          "title": "title2",
          "texte": "texte2"

        },
      ],   // Array with cards and information
      showExtraIndex: null,
      show: false,
      selectedImage: ''
    }
  },
  created() {
    const illustrations = require.context(
      '@/assets/animals',
      true,
      /^.*\.png$/
    )
    const idx = Math.floor(Math.random() * illustrations.keys().length)
    this.selectedImage = illustrations.keys()[idx].replace("./", "")
  },
  methods: {
    logout() {
      this.$router.replace({ name: 'login' })
    },
    goTo(page) {
      console.log(this.$router.currentRoute?.name, page)
      this.$router.currentRoute?.name != page ?  this.$router.replace({ name: page }) : null
    }
  }
}
</script>