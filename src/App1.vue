<template>

    <img :src='image' width="700" height="700" style="margin-bottom:100px"/>
    <input v-model="name"   type="text"/>
    <button v-on:click="getName">Search</button>
    <div class="container">
    <img :src='coll'  class="search"/>
    <img :src='coll1'  class="search"/>
    <img :src='coll2'  class="search"/>
    <img :src='coll3'  class="search"/>
    <img :src='coll4'  class="search"/>
    <img :src='coll5'  class="search"/>
    <img :src='coll6'  class="search"/>
    <img :src='coll7'  class="search"/>
    </div>
    </template>
    
    <script>
    export default {
       name: "App1",
       methods:{
         fetchRandomPhoto(){
            fetch(this.url + `?client_id=${this.accesKey}`)
              .then(response => response.json())
            .then((json)=>{
              this.image=json.urls.small
              console.log('json',json)
            }).
            catch((err)=>{
              console.log('error',err)
            })
         },
         fetchSearchPhoto(){
            fetch(this.url1+ this.nameChanged +`?&client_id=${this.accesKey}`)
              .then(response => response.json())
            .then((json)=>{
              this.coll=json.results[0].cover_photo.urls.full
              this.coll1=json.results[1].cover_photo.urls.full
              this.coll2=json.results[2].cover_photo.urls.full
              this.coll3=json.results[3].cover_photo.urls.full
              this.coll4=json.results[4].cover_photo.urls.full
              this.coll5=json.results[5].cover_photo.urls.full
              this.coll6=json.results[6].cover_photo.urls.full
              this.coll7=json.results[7].cover_photo.urls.full
              console.log('json',json)
            }).
            catch((err)=>{
              console.log('error',err)
            })
         }
       },
       created(){
          this.fetchRandomPhoto()
          this.fetchSearchPhoto()
       },
       data(){
         return{
           nameChanged: 'dog',
           nameSearch: 'cats',
           coll: '',
           coll1: '',
           coll2: '',
           coll3: '',
           coll4: '',
           coll5: '',
           coll6: '',
           coll7: '',
           image:'',
           accesKey:'Zb9RJtRbhjoe6fXk-PUB0fYAQbPQAPWwnqdAiHmG2i0',
           url:'https://api.unsplash.com/photos/random',
           url1:'https://api.unsplash.com/search/collections?page=1&query='
         }
       },
       getName(name,nameChanged,fetchSearchPhoto){
           nameChanged = name;
           fetchSearchPhoto();
       }
    };
    </script>
    
    <style>
    #app {
       font-family: Avenir, Helvetica, Arial, sans-serif;
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
       text-align: center;
       color: #2c3e50;
       margin-top: 20px;
    }
    .search {
        display: inline-block;
        width: 300px;
        height: 300px;
        margin-bottom: 20px;
        margin-left: 20px;
    }

    .container {
        margin-left: 15%;
        width: 1300px;
    }
    </style>