<template>
    <div class="sidebar">
        <h3 class="sidebar__heading">Tags</h3>
        <div class="sidebar__tags">
            <div class="tag" v-for="tag in getArticleTags" :key="tag.id" :class="{ active: tag.active }"
                @click="change_article_tag(tag)">{{ tag.text }}</div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters(['getArticleTags']),
        },
        methods: {
            ...mapActions(['change_article_tag']),
        },
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

.sidebar {
    position: sticky;
    top: 20%;
    width: 30%;
    margin-left: 4%;
    margin-bottom: 10%;
    /* float: right; */

    &__heading {
        font-family: DM Serif Display;
        font-size: 25px;
        font-weight: 400;
        line-height: 31px;
        letter-spacing: 0.02em;
        text-align: left;
        color: $headingColor;
        margin-bottom: 24px;
    }

    &__tags {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }
}
.tag {
    border-radius: 10px;
    padding: 1rem 2rem;
    background: #F4F0EC;
    color: $headingColor;
    font-family: Jost;
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.02em;
    text-align: center;

    &:hover,
    .active {
        background: $headingColor;
        color: #FFF;
    }
}

.active {
    background: $headingColor;
    color: #FFF;
}
</style>