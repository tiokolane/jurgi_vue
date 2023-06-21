<template>
    <v-layout class="rounded rounded-md">
      <v-app-bar app clipped-left color="#1776D1 !important">
        <v-toolbar-title>
          <span class="first-word font uppercase text">JURGI</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>
  
      <v-navigation-drawer app clipped flat color="#1776D1 !important" expand-on-hover>
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/men/11.jpg"></v-img>
  
            </v-list-item-avatar>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="text-h6 text">
                  {{ username || 'Username' }}
                </v-list-item-title>
                <v-list-item-subtitle v-on:click="logout"> <span class="text">Se Déconnecter</span></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
  
          </v-list-item>
  
          <v-divider class="border-opacity-25" color="white"></v-divider>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img :src="require('@/assets/animals/' + selectedImage)"></v-img>
  
            </v-list-item-avatar>
            <v-list-item link>
              <v-list-item-content>
  
                <v-list-item-subtitle v-on:click="goTo('#/dashboard')"> <span class="text">Mes
                    Animaux</span></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
  
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main class="d-flex align-center justify-center" style="min-height: 300px; margin-top: 2%;">
       
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
    console.log("token ", localStorage.getItem('token'))


    return {
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
        this.$router.currentRoute?.name != page ?  this.$router.replace({ name: page }) : null
    }
  }
}
</script>