// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    runtimeConfig: {
        // The private keys which are only available within server-side
        // Keys within public, will be also exposed to the client-side
        public: {
            apiBase: process.env.API_BASE || "https://apitokopaedi.cahyosoft.my.id/api",
        }
    }
    
    
})
