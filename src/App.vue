<template>
<div class="container mx-auto shadow">
  <header class="bg-white">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-2xl font-bold text-yellow-600 text-center md:text-right font-serif italic">
          Let us all work for the greatness of India.
        </h1>
      </div>
    </header>
  <NavBar />
  <router-view />
</div>
</template>
<script>
  import NavBar from '@/components/NavBar.vue'
  export default {
      name: 'App',
      components: {
        NavBar
      }
    };
</script>