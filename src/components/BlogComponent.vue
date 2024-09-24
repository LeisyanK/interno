<template>
    <section class="blog center blog_margin">
        <div class="blog__header_left">
            <div class="blog__header">
                <h2 class="blog__heading">Latest Post</h2>
            </div>
        </div>
        <div class="articles">
            <LatestPost></LatestPost>
        </div>
        <div class="blog__header_left">
            <div class="blog__header">
                <h2 class="blog__heading">Articles & News</h2>
            </div>
        </div>

        <div v-if="paginatedArticles.length > 1" class="articles">
            <div v-for="article in paginatedArticles" :key="article.id" class="article article_small">
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
            </div>
        </div>

        <!-- <PaginationComponent /> -->
        <div v-if="totalPages > 1" class="pagination">
            <router-link class="pagination__btn" v-for="pageNumber in totalPages" :key="pageNumber"
                :to="getPageLink(pageNumber)" @click="changePageNumberColor">
                {{ pageNumber }}
            </router-link>

            <!-- <div v-for="pageNumber in totalPages" :key="pageNumber"> -->
            <!-- <router-link v-if="pageNum == pageNumber" class="pagination__btn pagination__btn_active"
                    :to="getPageLink(pageNumber)">{{
                    pageNumber }}</router-link> -->
            <!-- <router-link class="pagination__btn" :to="getPageLink(pageNumber)">0{{ pageNumber
                    }}</router-link>
            </div>

            <router-link class="pagination__btn" :to="getPageLink(totalPages)"><i
                    class="fa-solid fa-chevron-right"></i></router-link> -->
        </div>
    </section>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';

import LatestPost from './LatestPost.vue';
import PaginationComponent from './PaginationComponent.vue';

    export default {
    components: { 
        LatestPost,
        PaginationComponent
    },
    data() {
        return {
            itemsPerPage: 6,
            // pageNum: 1,
        }
    },
    computed: {
        // ...mapState({
        //     projects: (state) => state.articles.slice(0, 6)
        // }),
        ...mapGetters(['getAllArticles']),
        totalPages() {
            return Math.ceil(this.getAllArticles.length / this.itemsPerPage);
        },
        paginatedArticles() {
            let pageNumber = this.getCurrentPageNumber();
            console.log('pageNumber', pageNumber);
            // this.pageNum = this.getCurrentPageNumber();
            let startIndex = (pageNumber - 1) * this.itemsPerPage;
            let endIndex = startIndex + this.itemsPerPage;
            if (endIndex > this.getAllArticles.length) {
                endIndex = this.getAllArticles.length;
            }
            console.log(startIndex, endIndex);
            console.log(this.getAllArticles.slice(startIndex, endIndex));            
            return this.getAllArticles.slice(startIndex, endIndex);
        },
    },
    methods: {
        // 02.05.2024
        // ...mapActions(['change_article_tag']),

        getCurrentPageNumber() {
            const pageNumberParam = parseInt(this.$route.params.pageNumber);
            console.log('pageNumberParam', pageNumberParam);
            return isNaN(pageNumberParam) || pageNumberParam < 1
                ? 1
                : pageNumberParam;
        },
        getPageLink(pageNumber) {
            return `/blog/${pageNumber}`;
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
        colorFirstPaginationNumber() {
            // закрашиваем номер текущей страницы
            const firstPageNumber = document.querySelector('.pagination__btn');
            console.log('firstPageNumber', firstPageNumber);
            firstPageNumber.classList.add('pagination__btn_active');
        },
        changePageNumberColor() {
            const paginationNumbers = document.querySelectorAll('.pagination__btn');
            paginationNumbers.forEach(pageNum => {
                pageNum.classList.remove('pagination__btn_active');
            });
        },
    },
    mounted() {
        this.colorFirstPaginationNumber();
    },
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

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
            gap: 8px;
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
        ;
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
        column-gap: 8%;
        row-gap: 56px;
    }
}

.articles {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 30px;
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
        width: 100%;
    }

    &__img img {
        border-radius: 40px 40px 0 0;
        background-color: #EAEAEA;
        width: 100%;
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
        width: 85%;
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
        white-space: pre-line;
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

.pagination {
    display: flex;
    gap: 20px;
    justify-content: center;
    padding-top: 51px;

    &__btn {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background: #FFF;
        color: $headingColor;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #CDA274;

        &_active {
            background: #F4F0EC;
            border: 1px solid #F4F0EC;
        }
    }
}
.router-link-active {
    //router-link-exact-active 
    background: #F4F0EC;
    border: 1px solid #F4F0EC;
}
</style>