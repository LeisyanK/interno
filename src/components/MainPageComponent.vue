<template>
    <div class="banner center">
        <!-- <img class="banner__img" src="img/index/Photo.jpg" alt=""> -->
        <div class="banner__block">
            <h1 class="banner__heading">Let Your Home Be Unique</h1>
            <p class="banner__text">There are many variations of the passages of
                lorem Ipsum from available, majority.</p>
            <button class="banner__btn" @click="playAnimation">Get Started
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
        <img class="banner__img" :src="banner" alt="">
    </div>

    <section class="projects center">
        <div class="projects__header_center">
            <div class="projects__header_size">
                <h2 class="projects__heading">Follow Our Projects</h2>
                <p class="projects__text">It is a long established fact that a reader will be distracted by the of
                    readable content of page lookings at its layouts points.</p>
            </div>
        </div>
        <div class="projects__box">
            <div class="project" v-for="project in projects" :key="project.id">
                <img class="project__img right-top-corner" v-if="project.id % 4 === 1" :src="project.img[0]"
                    alt="project1">
                <img class="project__img left-top-corner" v-else-if="project.id % 4 === 2" :src="project.img[0]"
                    alt="project2">
                <img class="project__img right-bottom-corner" v-else-if="project.id % 4 === 3" :src="project.img[0]"
                    alt="project3">
                <img class="project__img left-bottom-corner" v-else-if="project.id % 4 === 0" :src="project.img[0]"
                    alt="project4">

                <div class="project__textBox">
                    <div>
                        <h3 class="project__heading">{{ project.title }}</h3>
                        <p class="project__text">{{ project.links }}</p>
                    </div>
                    <!-- <div class="project__btn"> -->
                        <router-link class="project__btn" :to="getProjectDetailsLink(project.id)"><i
                                class="fa-solid fa-chevron-right"></i></router-link>
                    <!-- </div> -->
                </div>
            </div>
        </div>
    </section>

    <section class="counter center">
        <div class="counter__box">
            <div class="counter__item">
                <h2 class="counter__heading">12</h2>
                <p class="counter__text">Years Of Experiance</p>
            </div>
            <div class="counter__item">
                <h2 class="counter__heading">85</h2>
                <p class="counter__text">Success Project</p>
            </div>
            <div class="counter__item">
                <h2 class="counter__heading">15</h2>
                <p class="counter__text">Active Project</p>
            </div>
            <div class="counter__item">
                <h2 class="counter__heading">95</h2>
                <p class="counter__text">Happy CUstomers</p>
            </div>
        </div>
    </section>

    <section class="blog center">
        <div class="blog__header_center">
            <div class="blog__header_size">
                <h2 class="blog__heading">Articles & News</h2>
                <p class="blog__text">It is a long established fact that a reader will be distracted by the of readable
                    content of a page when lookings at its layouts the points of using.</p>
            </div>
        </div>

        <div class="articles">
            <div v-for="article in getThreeArticles" :key="article.id" class="article article_small">

                <!-- <SingleArticleComponent :article="article" /> -->

                <!-- <div class="article article_small"> -->
                <div class="article__img">
                    <img :src="article.img" alt="статья">
                    <p class="article__tag">{{ article.tag }}</p>
                </div>
                <div class="article__text">
                    <h2 class="article__heading">{{ article.heading }}</h2>
                </div>
                <div class="article__block">
                    <p class="article__date">{{ article.date }}</p>
                    <!-- <div class="article__btn"><i class="fa-solid fa-chevron-right"></i></div> -->
                    <router-link class="article__btn" :to="getArticleDetailsLink(article.id)"><i
                            class="fa-solid fa-chevron-right"></i></router-link>
                </div>
                <!-- </div> -->
            </div>
        </div>
    </section>

</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';

export default {
    data() {
        return {
            banner: require("@/assets/img/index/banner.jpg"),

        }
    },
    computed: {
        ...mapState({
            projects: (state) => state.projects.slice(0, 4)
        },
            'articles'),
        ...mapGetters(['getThreeArticles', 'getAllArticles']),
        // ...mapGetters(['getAllArticles']),
    },
    methods: {
        getProjectDetailsLink(projectNumber) {
            return `/project/details/${projectNumber}`;
        },
        getArticleDetailsLink(articleNumber) {
            // 02.05.2024
            // определяем tag у выбранной статьи и меняем его active на значение true, у остальных тегов будет false
            console.log("articleNumber ", articleNumber);
            const articleTag = this.getAllArticles[articleNumber].tag;
            console.log(articleTag);
            // this.change_article_tag(tag);
            // март 2024
            return `/blog/details/${articleNumber}`;
        },
        //     // ...mapMutations(['SET_DATA']),
        //     ...mapActions(['fetchData']),
        playAnimation() {
            document.querySelector('.banner__btn').classList.add('vibrate-1');
            setTimeout(() => {
                document.querySelector('.banner__btn').classList.remove('vibrate-1');
            }, 2000);
        }
    },
    // mounted() {
    //     this.SET_DATA(this.fetchData);
    //     // this.$store.dispatch
    //     // console.log(this.getArticles);
    // },
    // перенесла в App.vue для всего проекта
    // created() {
    //     // получение данных при загрузке страницы
    //     this.$store.dispatch('fetchData');
    // },

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

/* ----------------------------------------------
 * Generated by Animista on 2024-9-24 17:57:37
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation vibrate-1
 * ----------------------------------------
 */
@-webkit-keyframes vibrate-1 {
    0% {
        -webkit-transform: translate(0);
        transform: translate(0);
    }

    20% {
        -webkit-transform: translate(-2px, 2px);
        transform: translate(-2px, 2px);
    }

    40% {
        -webkit-transform: translate(-2px, -2px);
        transform: translate(-2px, -2px);
    }

    60% {
        -webkit-transform: translate(2px, 2px);
        transform: translate(2px, 2px);
    }

    80% {
        -webkit-transform: translate(2px, -2px);
        transform: translate(2px, -2px);
    }

    100% {
        -webkit-transform: translate(0);
        transform: translate(0);
    }
}

@keyframes vibrate-1 {
    0% {
        -webkit-transform: translate(0);
        transform: translate(0);
    }

    20% {
        -webkit-transform: translate(-2px, 2px);
        transform: translate(-2px, 2px);
    }

    40% {
        -webkit-transform: translate(-2px, -2px);
        transform: translate(-2px, -2px);
    }

    60% {
        -webkit-transform: translate(2px, 2px);
        transform: translate(2px, 2px);
    }

    80% {
        -webkit-transform: translate(2px, -2px);
        transform: translate(2px, -2px);
    }

    100% {
        -webkit-transform: translate(0);
        transform: translate(0);
    }
}

.vibrate-1 {
    -webkit-animation: vibrate-1 0.3s linear 1 both;
    animation: vibrate-1 0.3s linear 1 both;
}

.banner {
    position: relative;
    margin-bottom: 96px;

    &__img {
        border-radius: 50px;
        background-color: #F4F0EC;
    }

    &__block {
        position: absolute;
        width: 434px; //36%;
        margin-top: 208px;
        margin-bottom: 208px;
        margin-left: 52px;
        display: flex;
        flex-direction: column;
        gap: 18px;
    }

    &__heading {
        font-family: DM Serif Display;
        font-size: 65px;
        font-weight: 400;
        line-height: 81px;
        letter-spacing: 0em;
        text-align: left;
        color: $headingColor;
    }

    &__text {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: left;
        color: $textColor;
    }

    &__btn {
        border-radius: 18px;
        padding: 1rem 2rem;
        font-family: Jost;
        font-size: 18px;
        font-weight: 600;
        line-height: 23px;
        letter-spacing: 0.02em;
        text-align: center;
        color: #FFFFFF;
        background-color: $headingColor;
        // border: 1px solid $headingColor;
        max-width: 50%;
        transition: background-color .3s ease;
        // transition: all .3s ease;

        &:hover {
            background-color: #292F36DD; //$textColor;
            // border-color: #292F36EE; //$textColor;
        }
    }

    i {
        color: #CDA274;

    }
}

.projects,
.blog {
    margin-bottom: 96px;

    &__header {
        &_center {
            text-align: center;
            margin-bottom: 93px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 8px; //93px;
        }

        &_size {
            width: 61%;
        }

        &_left {
            margin-bottom: 27px;
        }
    }

    &__heading {
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 63px;
        letter-spacing: 0.02em;
        color: $headingColor;
    }

    &__text {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        color: $textColor;
    }

    &__box {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(548px, 1fr));
        column-gap: 8%; //104px; // 8%;
        row-gap: 56px;
    }
}

.project {
    // width: 46%;

    &__img {
        background-color: #C4C4C4;
        margin-bottom: 24px;
    }

    &__textBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__btn {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: #F4F0EC;
        color: $headingColor;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__heading {
        font-family: DM Serif Display;
        font-size: 25px;
        font-weight: 400;
        line-height: 31px;
        letter-spacing: 0.02em;
        text-align: left;
        color: $headingColor;
    }

    &__text {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: left;
        color: $textColor;
    }
}

.project:hover {
    -webkit-filter: brightness(0.8);
    filter: brightness(0.8);
}

.right-top-corner {
    border-radius: 0 50px 0 0;
}

.right-bottom-corner {
    border-radius: 0 0 50px 0;
}

.left-top-corner {
    border-radius: 50px 0 0 0;
}

.left-bottom-corner {
    border-radius: 0 0 0 50px;
}

.counter {
    background-color: #F4F0EC;
    margin-bottom: 96px;

    &__box {
        display: flex;
        justify-content: space-between;
        padding: 151px 0;
    }

    &__item {
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }

    &__item:not(:last-child) {
        border-right: 1px solid #CDA274;
        // width: 25%;
    }

    &__heading {
        font-family: DM Serif Display;
        font-size: 85px;
        font-weight: 400;
        line-height: 106px;
        letter-spacing: 0.02em;
        text-align: left;
        color: #CDA274;
    }

    &__text {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: left;
        color: $textColor;
    }
}

.articles {
    // display: grid;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 30px;
}

.article_small {
    width: 32%;
}

.article {
    padding: 20px;
    border: 1px solid #E7E7E7;
    border-radius: 50px;

    &_small {
        width: 32%;
    }

    &__img {
        position: relative;
        margin-bottom: 20px;
    }

    &__img img {
        border-radius: 40px 40px 0 0;
        background-color: #EAEAEA;
    }

    &__tag {
        position: absolute;
        left: 20px;
        bottom: 20px;
        font-family: Jost;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.01em;
        text-align: left;
        padding: 0.5rem 1rem;
        color: $textColor;
        background-color: #FFF;
        border-radius: 5px 5px 5px 0;
    }

    &__text {
        width: 85%; //80%;
        // margin-bottom: 20px;
    }

    &__heading {
        font-family: DM Serif Display;
        font-size: 25px;
        font-weight: 400;
        line-height: 31px;
        letter-spacing: 0.02em;
        text-align: left;
        color: $headingColor;
        margin-bottom: 20px;
        white-space: pre-line; // используем, чтобы отображались переносы строк
    }

    &__content {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: left;
        color: $textColor;
        margin-bottom: 41px;
    }

    &__block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
    }

    &__date {
        font-family: Jost;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.01em;
        text-align: left;
    }

    &__btn {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background: #F4F0EC;
        color: $headingColor;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.article:hover {
    background-color: #F4F0EC;
}

.article:hover .article__btn {
    background-color: #FFF;
}
</style>