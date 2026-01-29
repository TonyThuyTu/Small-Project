<script setup lang="ts">

    import Header from './components/client/partials/header.component.vue';
    import Footer from './components/client/partials/footer.component.vue';
</script>

<template>

    <Header/>

    <router-view/>
  
    <Footer/>

</template>
