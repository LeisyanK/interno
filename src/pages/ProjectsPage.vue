<template>
    <HeaderComponent />
    <BannerComponent />
    <ProjectCategoriesComponent />
    <ProjectListComponent />
    <!-- <PaginationComponent /> -->
    <FooterComponent></FooterComponent>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import BannerComponent from "../components/BannerComponent.vue";
import ProjectCategoriesComponent from "../components/ProjectCategoriesComponent.vue";
import ProjectListComponent from "../components/ProjectListComponent.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

    export default {
        components: {
            HeaderComponent,
            BannerComponent,
            ProjectCategoriesComponent,
            ProjectListComponent,
            PaginationComponent,
            FooterComponent
        }
    }
</script>

<style scoped>

</style>