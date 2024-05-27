<template>
    <HeaderComponent />
    <!-- <div class="notFound center">
        <div class="notFound__left">
            <h1 class=" notFound__heading">404</h1>
            <p class="notFound__text">We are sorry, but the page
                you requested was not found</p>
            <button class="notFound__btn">
                Back To Home
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
        <img class="notFound__img" :src="img404" />

    </div> -->
    <NotFoundComponent />
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import NotFoundComponent from "../components/NotFoundComponent.vue";

    export default {
    components: { HeaderComponent, NotFoundComponent },

        data() {
            return {
                img404: require("@/assets/img/NotFound.jpg"),
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>