<template>
    <div class="articles">
        <div v-for="article in getArticles.slice(0, 3)" :key="article.id">

            <!-- <SingleArticleComponent :article="article" /> -->

            <div class="article article_small">
                <div class="article__img">
                    <img :src="article.img" alt="статья">
                    <p class="article__tag">{{ article.tag }}</p>
                </div>
                <div class="article__text">
                    <h2 class="article__heading">{{ article.heading }}</h2>
                </div>
                <div class="article__block">
                    <p class="article__date">{{ article.date }}</p>
                    <div class="article__btn"><i class="fa-solid fa-chevron-right"></i></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';

    export default {
    computed: {
        ...mapState(['articles']),
        ...mapGetters(['getArticles']),

    },
    methods: {
        ...mapMutations(['SET_DATA']),
        ...mapActions(['fetchData']),
    },
    created() {
        this.SET_DATA(this.fetchData);
        // console.log(this.getArticles);
    }
        
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

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
        width: 85%;//80%;
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