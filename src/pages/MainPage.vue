<template>
    <HeaderComponent />
    <MainPageComponent />
    <FooterComponent />
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import MainPageComponent from "../components/MainPageComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

    export default {
        components: {
            HeaderComponent,
            MainPageComponent,
            FooterComponent
        }
    }
</script>

<style scoped>

</style>