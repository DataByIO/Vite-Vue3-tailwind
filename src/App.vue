

<template>
  <div class="bg-gray-900 text-white p-10 text-center">
    <h1 class="text-4xl font-bold">Tailwind 작동 확인</h1>
  </div>
<!--  <Header/>-->
<!--  <RouterView/>-->
<!--  <Footer/>-->
</template>

<script>
import VueHeader from "@/components/VueHeader.vue";
import VueFooter from "@/components/VueFooter.vue";

export default {
  name: 'App',
  components: {
    Header: VueHeader,
    Footer: VueFooter,
  }
}
</script>