<template>
    <div class="notFound ">
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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                img404: require("@/assets/img/NotFound.jpg"),
            }
        },
        
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_vars.scss';
.notFound {
    padding-left: calc(50% - $widthSite / 2);
    display: grid;
    grid-template-columns: 40% auto;
    // grid-template-columns: 48% 1fr;
    align-items: center;
    // grid-template-columns: 1fr 1fr;

    // grid-template-columns: auto auto;

    &__heading {
        font-family: DM Serif Display;
        font-size: 250px;
        font-weight: 400;
        line-height: 312.5px;
        text-align: left;
        color: #CDA274;
    }
    &__text {
        font-family: DM Serif Display;
        font-size: 35px;
        font-weight: 400;
        line-height: 52.5px;
        letter-spacing: 0.01em;
        text-align: left;
        color: $headingColor;
        margin-bottom: 24px;
    }
    &__btn {
        padding: 26px 54px 26px 54px;
        gap: 10px;
        border-radius: 18px;
        background-color: $headingColor;
            font-family: Jost;
            font-size: 18px;
            font-weight: 600;
            line-height: 22.5px;
            letter-spacing: 0.02em;
            text-align: center;
            color: #FFF;
    }
    i {
        // border: 2px solid #CDA274;
        color: #CDA274;
    }
    &__img {
        max-width: 100%
    }
}
</style>