<template>
    <section class="banner">
        <!-- <img :src="bannerImg" alt="баннер"> -->
        <img :src="bannerInfo[bannerNumber].img" alt="баннер">
        <div class="banner_align">
            <div class="intro">
                <h1 class="intro__heading"> {{ bannerInfo[bannerNumber].heading }}</h1>
                <div class="breadcrumbs">
                    <a class="breadcrumbs__link" href="index.html">Home</a>
                    <a class="breadcrumbs__link" :href="breadcrumbsLink">{{ bannerInfo[bannerNumber].pageName }}</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';

export default {
    // props: {
    //     bannerInfo: Object,
    // },
    data() {
        return {
            bannerNumber: 0,
            // bannerImg: require("@/assets/img/blog/banner.jpg"),
            // bannerImg: this.bannerInfo.img,
            // breadcrumbsLink: this.bannerInfo.pageName.toLowerCase() + '.html',
        }
    },
    methods: {
        getBannerNumber(){
            // console.log(window.location.hash);
            console.log(window.location.pathname);
            if (window.location.pathname === '/blog') {
                this.bannerNumber = 1;
            }
        }
    },
    computed: {
        ...mapState(['bannerInfo']),
    },
    created(){
        this.getBannerNumber();
    },
}
</script>

<style lang="scss">
// подключаем переменные
@import '@/assets/scss/style.scss';

.banner {
    margin-bottom: 200px;

    img {
        width: 100%;
        background: #CDA274;
    }

    &_align {
        display: flex;
        justify-content: center;
        align-items: flex-end;

    }

    .intro {
        max-width: 503px;
        max-height: 178px;
        background-color: #FFF;
        border-radius: 50px 50px 0 0;
        margin-top: -178px;
        position: relative;
        z-index: 1;
        padding: 41px 78px;
        text-align: center;
        // margin-left: ;

        &__heading {
            font-family: DM Serif Display;
            font-size: 50px;
            font-weight: 400;
            line-height: 63px;
            letter-spacing: 0em;
            // text-align: left;
            color: $headingColor;
        }
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