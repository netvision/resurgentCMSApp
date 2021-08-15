<template>
  <div class="mt-2 md:grid md:grid-cols-4 md:space-x-1">
    <div class="col-span-3 h-auto w-full">
      <div class="border-b-2">
        <img v-if="featured[0].feature_image" :src="featured[0].feature_image" class="w-full object-cover object-center shadow-md" /> 
        <h2 class="font-serif text-3xl p-3">{{featured[0].title}}</h2>
      </div>
      <div class="flex flex-row gap-2">
        <div class="">
          <img v-if="highlights[0].feature_image" :src="highlights[0].feature_image" class="w-full object-cover object-center shadow-md" /> 
          <h2 class="font-serif text-xl p-3">{{highlights[0].title}}</h2>
        </div>
        <div>
          <img v-if="highlights[1].feature_image" :src="highlights[1].feature_image" class="w-full object-cover object-center shadow-md" /> 
          <h2 class="font-serif text-xl p-3">{{highlights[1].title}}</h2>
        </div>
      </div>
    </div>
    <div class="mx-auto flex flex-col">
      <div v-for="news in newsbriefs" :key="news.id" class="flex bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
        <!-- media -->
        <div class="w-1/2">
          <img class="inset-0 h-full w-full object-cover object-center" :src="news.feature_image" />
        </div>
        <!-- content -->
        <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
          <h3 class="font-semibold text-sm leading-tight wrap">{{ news.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import { ref } from 'vue';
export default {
  name: 'Home',
  components: {
    
  },
  setup(){
    const featured = ref([]);
    const highlights = ref([]);
    const newsbriefs = ref([]);
    
    axios.get('https://cms.resurgentindia.org/ghost/api/v3/content/posts/?key=17e77de2cd693395fa6f1ecdb9&fields=id,title,custom_excerpt,feature_image,published_at&filter=featured:true&limit=5&order=published_at%20desc').then(res =>{
      featured.value = res.data.posts;
    });

    axios.get('https://cms.resurgentindia.org/ghost/api/v3/content/posts/?key=17e77de2cd693395fa6f1ecdb9&fields=id,title,custom_excerpt,feature_image,published_at&filter=tag:hash-headlines&limit=5&order=published_at%20desc').then(res =>{
      highlights.value = res.data.posts;
    });

    axios.get('https://cms.resurgentindia.org/ghost/api/v3/content/posts/?key=17e77de2cd693395fa6f1ecdb9&fields=id,title,custom_excerpt,feature_image,published_at&filter=tag:hash-newsbrief&limit=5&order=published_at%20desc').then(res =>{
      newsbriefs.value = res.data.posts;
    });

    return {
      featured, highlights, newsbriefs
    }
  }
}
</script>
