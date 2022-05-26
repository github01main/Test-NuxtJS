import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta:{
        meta:[
            {'http-equiv':'X-UA-Compatible', content:'IE=edge'}, // Compatible
        ],
        script:[],
        link:[],
    },
    css : ["assets/styles/main.scss"]
})
