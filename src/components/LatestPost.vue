<template>
    <div class="latestArticle article">
        <img :src="latestArticle" alt="статья">
        <div class="latestArticle__textBlock">
            <div>
                <div class="article__text">
                    <h2 class="article__heading">Low Cost Latest Invented Interior Designing Ideas</h2>
                </div>
                <p class="article__content">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpis dignissim
                    maximus.posuere in.Contrary to popular
                    belief.
                </p>
                <p class="article__content">
                    Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
            </div>

            <div class="article__block">
                <p class="article__date">26 December,2022</p>
                <div class="article__btn"><i class="fa-solid fa-chevron-right"></i></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                latestArticle: require('@/assets/img/blog/latestArticle.jpg'),
            }
        },
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_vars.scss';

.latestArticle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 65px;
    margin-bottom: 150px;

    img {
        border-radius: 40px;
        background-color: #C4C4C4;
        ;
    }

    &__textBlock {
        padding-right: 34px;
    }
}
.article {
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
</style>