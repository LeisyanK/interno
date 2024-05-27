<template>
    <HeaderComponent />
    <ProjectDetailsComponent />
    <FooterComponent />
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import ProjectDetailsComponent from "../components/ProjectDetailsComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
    components: { HeaderComponent, ProjectDetailsComponent, FooterComponent }

}
</script>

<style scoped></style>