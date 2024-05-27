<template>
    <!-- <img class="project__img" :src="project.img[0]" alt="" @click="changeLike(project.id)" > -->
    <div class="project__block">
        <div>
            <h3 class="project__heading">{{ project.title }}</h3>
            <p class="project__text">{{ project.links }}</p>
        </div>
        <!-- <p>{{ project.img }}</p> -->
        <div class="project__btn"><i class="fa-solid fa-chevron-right"></i></div>
        <!-- <img v-if="project.like" class="star" :src="like" alt="" @click="project.like = !project.like"> -->
        <img v-if="project.like" class="star" :src="like" alt="" @click="changeLike(project.id)">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>