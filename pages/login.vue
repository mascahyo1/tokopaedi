<template>
    <div>
        <section class="bg-gray-50 dark:bg-gray-900" data-aos="fade-up">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <nuxt-link to="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
                    Flowbite    
                </nuxt-link>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <div v-if="error" class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            {{ error }}
                        </div>
                        <form class="space-y-4 md:space-y-6" action="#" @submit.prevent="loginUser">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input v-model="email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input v-model="password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                            </div>
                            <div class="flex items-center justify-between">
                                <!-- <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div> -->
                                <nuxt-link to="/forgot-password" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</nuxt-link>
                            </div>
                            <spinner v-if="loading" />
                            <button v-else type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <nuxt-link to="/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</nuxt-link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script >
import { setCookie } from 'h3'


  definePageMeta({ layout: 'auth' })

  export default {
    name: 'Login',
    layout: 'auth',
    data() {
      return {
        email: '',
        password: '',
        error: '',
        loading: false
      };
    },
    methods: {
      async loginUser() {
        try {
            this.loading = true;
          const response = await fetch( this.$config.public.apiBase + '/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: this.email,
              password: this.password
            })
          });
          console.log(response)
          console.log(response.ok)
          if (response.ok) {
            // Successful login, perform necessary actions
            // For example, redirect to a different page
            let data = await response.json();
            let stringify_data = JSON.stringify(data.data)
            document.cookie = 'user=' + stringify_data + '; path=/'; // Replace 'user' with your desired cookie name and response.data with the appropriate value
            console.log(document.cookie)
            this.$router.push('/');
          } else {
            // Handle login error
            this.error = 'Invalid email or password';
          }
        } catch (error) {
            console.log(error)
          // Handle network or server errors
          this.error = 'An error occurred. Please try again later.';
        }
        this.loading = false;
      }
    }
  }
</script>
