<template>
    <div>
        <navbar />
        <slot/>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'dark:bg-gray-900 overflow-x-hidden'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})

</script>
