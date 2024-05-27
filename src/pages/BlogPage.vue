<template>
    <HeaderComponent />
    <BannerComponent />
    <BlogComponent />
    
    <FooterComponent></FooterComponent>

</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import BannerComponent from "../components/BannerComponent.vue";
import BlogComponent from "../components/BlogComponent.vue";

import FooterComponent from "../components/FooterComponent.vue";

    export default {
        components: {
            HeaderComponent,
            BannerComponent,
            BlogComponent,
            FooterComponent
        }
    }
</script>

<style scoped>

</style>