<template>
    <div>
        
        <div id="exampleWrapper" class="flex justify-center mb-3" data-aos="fade-in">
          <div id="gallery" class="relative w-full" data-carousel="slide">
            <!-- Carousel wrapper -->
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
              <!-- Item 1 -->
              <div class="duration-700 ease-in-out absolute inset-0 transition-transform transform -translate-x-full z-10 hidden" data-carousel-item="">
                <img src="/assets/img/1.jpg" class="object-cover absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
              </div>
              <!-- Item 2 -->
              <div class="duration-700 ease-in-out absolute inset-0 transition-transform transform -translate-x-full z-10 hidden" data-carousel-item="active">
                <img src="/assets/img/2.jpg" class="object-cover absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
              </div>
              <!-- Item 3 -->
              <div class="duration-700 ease-in-out absolute inset-0 transition-transform transform -translate-x-full z-10" data-carousel-item="">
                <img src="/assets/img/3.jpg" class="object-cover absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
              </div>
              <!-- Item 4 -->
              <div class="duration-700 ease-in-out absolute inset-0 transition-transform transform translate-x-0 z-20" data-carousel-item="">
                <img src=" /assets/img/4.jpg" class="object-cover absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
              </div>
              <!-- Item 5 -->
              <div class="duration-700 ease-in-out absolute inset-0 transition-transform transform z-10 translate-x-full" data-carousel-item="">
                <img src="/assets/img/5.jpg" class="object-cover absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
              </div>
            </div>
            <!-- Slider controls -->
            <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>

        <div class="container mx-auto">
            
            <div class="flex justify-between p-4">
              <div class="dark:text-white text-lg font-bold text-left mb-3" data-aos="fade-right">Kategori 1</div>
              <nuxt-link to="/products" class="dark:text-white text-lg font-bold text-right mb-3" data-aos="fade-left">More</nuxt-link>
 
            </div>
            <div class="flex justify-center flex-wrap">
                <div class="w-full mx-auto p-4 md:w-1/3 lg:w-1/4">
                    <products-card/>
                </div>
                <div class="w-full mx-auto  p-4 md:w-1/3 lg:w-1/4">
                    <products-card/>
                </div>
                <div class="w-full mx-auto p-4 md:w-1/3 lg:w-1/4">
                    <products-card/>
                </div>
                <div class="w-full mx-auto p-4 md:w-1/3 lg:w-1/4">
                    <products-card/>
                </div>
            </div>
            
            <div class="flex justify-between p-4">
              <div class="dark:text-white text-lg font-bold text-left mb-3" data-aos="fade-right">Kategori 2</div>
              <nuxt-link to="/products" class="dark:text-white text-lg font-bold text-right mb-3" data-aos="fade-left">More</nuxt-link>
 
            </div>
            <div class="flex justify-center flex-wrap">
                <div class="w-full mx-auto p-4 md:w-1/3 lg:w-1/4">
                    <products-card/>
                </div>
                <div class="w-full mx-auto  p-4 md:w-1/3 lg:w-1/4">
                    <products-card/>
                </div>
                <div class="w-full mx-auto p-4 md:w-1/3 lg:w-1/4">
                    <products-card/>
                </div>
                <div class="w-full mx-auto p-4 md:w-1/3 lg:w-1/4">
                    <products-card/>
                </div>
            </div>
            
            <div class="flex justify-between p-4">
              <div class="dark:text-white text-lg font-bold text-left mb-3" data-aos="fade-right">Kategori 3</div>
              <nuxt-link to="/products" class="dark:text-white text-lg font-bold text-right mb-3" data-aos="fade-left">More</nuxt-link>
            </div>
            <div class="flex justify-center flex-wrap">
                <div class="w-full mx-auto p-4 md:w-1/3 lg:w-1/4">
                    <products-card/>
                </div>
                <div class="w-full mx-auto  p-4 md:w-1/3 lg:w-1/4">
                    <products-card/>
                </div>
                <div class="w-full mx-auto p-4 md:w-1/3 lg:w-1/4">
                    <products-card/>
                </div>
                <div class="w-full mx-auto p-4 md:w-1/3 lg:w-1/4">
                    <products-card/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Carousel } from 'flowbite';


</script>