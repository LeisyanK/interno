<template>
  <!-- <HeaderComponent /> -->
  <RouterView />

  <!-- <MainPage></MainPage>
  <BlogPage />
  <BlogDetailsPage />
  <ProjectsPage />
  <ProjectDetailsPage />
  <NotFoundPage /> -->
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';

import HeaderComponent from "./components/HeaderComponent.vue";

import MainPage from "./pages/MainPage.vue";
import BlogPage from "./pages/BlogPage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import ProjectDetailsPage from "./pages/ProjectDetailsPage.vue";
import BlogDetailsPage from "./pages/BlogDetailsPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

export default {
  components: { 
    HeaderComponent,
    MainPage, 
    BlogPage,
    ProjectsPage ,
    ProjectDetailsPage,
    BlogDetailsPage,
    NotFoundPage

  },
  methods: {
    // ...mapMutations(['SET_DATA']),
    ...mapActions(['fetchData']),
  },
  created() {
    // получение данных при загрузке страницы - всего проекта
    this.$store.dispatch('fetchData');
  },
}
</script>

<style lang="scss">

</style>
