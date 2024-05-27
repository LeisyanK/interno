<template>
    <HeaderComponent />
    <BlogDetailsComponent />
    <FooterComponent></FooterComponent>

</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import BlogDetailsComponent from "../components/BlogDetailsComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

    export default {
    components: {
        HeaderComponent,
        BlogDetailsComponent,
        FooterComponent
    }
    }
</script>

<style scoped>

</style>