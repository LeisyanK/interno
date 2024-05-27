<template>

    <header class="header center">
        <div class="header__left">
            <div class="logo">
                <img class="logo__img" :src="logo" alt="логотип">
                <p class="logo__text">Interno</p>
            </div>
        </div>
        <div class="header__right">
            <div class="menubar">
                <router-link class="menu" v-for="link in getLinks" :key="link.id" :to="link.url">{{ link.title
                    }}</router-link>
                <!-- <a class="menu" href="index.html">Home</a>
                <a class="menu" href="project.html">Project</a>
                <a class="menu" href="blog.html">Blog</a> -->
            </div>
        </div>
    </header>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            logo: require("@/assets/img/Logo.png"),
        }
    },
    computed: {
        ...mapGetters(['getLinks']),
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding: 8px 0;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-bottom: 57px;
}

.menubar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 44px;
}

.menu {
    font-family: Jost;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    color: $headingColor;
}
.logo {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;

    &__text {
        font-family: DM Serif Display;
        font-size: 40px;
        font-weight: 400;
        line-height: 50px;
        letter-spacing: 0em;
        text-align: left;
        color: #292F36;
    }

    &__img {
        width: 34px;
        height: 34px;
    }
}

.breadcrumbs {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4px;

    &__link {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: left;
        color: #4D5053;
    }

    &__link:not(:last-child)::after {
        content: '/';
        padding-left: 4px;
    }
}
</style>