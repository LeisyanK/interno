<!-- пагинация в отдельном компоненте -->
<template>
    <div class="projects center">
        <div class="project" v-for="project in getFilteredProjects" :key="project.id">
            <!-- <ProjectComponent :project="project" @change-like="changeLike" /> -->
            <!-- {{ project.title }} -->
            <img class="project__img" :src="project.img[0]" alt=""
                @click="CHANGE_LIKE(project.id)">
            <div class="project__block">
                <div>
                    <h3 class="project__heading">{{ project.title }}</h3>
                    <p class="project__text">{{ project.links }}</p>
                </div>
                <!-- <p>{{ project.img }}</p> -->
                <div class="project__btn"><i class="fa-solid fa-chevron-right"></i></div>
                <!-- <img v-if="project.like" class="star" :src="like" alt="" @click="project.like = !project.like"> -->
                <img v-if="project.like" class="star" :src="like" alt=""
                    @click="CHANGE_LIKE(project.id)">
            </div>
        </div>
    </div>
</template>

<script>
import ProjectComponent from './ProjectComponent.vue';
import { mapActions, mapMutations, mapGetters } from 'vuex';

    export default {
        data() {
            return {
                like: require('@/assets/img/projects/star.png'),
            }
        },
        components: { ProjectComponent },
        computed: {
            // ...mapState({
            //     projects: (state) => state.projects
            // }),
            ...mapGetters(['getFilteredProjects']),
            ...mapActions(['changeLike']),  // не сработал
        },
        methods: {
            ...mapMutations(['CHANGE_LIKE']), // работает
        },

    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

.projects {
    column-count: 2;
    margin-bottom: 60px;
}
.project {
    page-break-inside: avoid;
    break-inside: avoid;
    position: relative;

    &__img {
        width: 100%;
        background-color: #C4C4C4;
        margin-bottom: 24px;
    }

    &__block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 36px;
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

    .star {
        position: absolute;
        right: 10px;
        top: 10px;
        z-index: 2;
    }
}
</style>