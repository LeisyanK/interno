<template>

    <div class="project__banner">
        <img :src="projectDetailsBanner" alt="баннер">
    </div>
    <div class="project center">
        <div class="project__about">
            <h2 class="project__heading">{{ projects[projectNumber].title }}</h2>
            <p class="project__text">{{ projects[projectNumber].text }}</p>
            <!-- <h2 class="project__heading">Minimal Look Bedrooms</h2> -->
            <!-- <p class="project__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis
                dignissim maximus.
                Aliquam
                sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in
                mi
                fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.
                <br><br>
                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc,
                mattis
                quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis
                convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id
                purus porttitor.
            </p> -->
        </div>
        <!-- <div class="project__slider">slider</div> -->
        <!-- <SliderComponent :images="projects[projectNumber].img" /> -->
        <!-- <SliderComponent /> -->

        <!-- <img :src="projects[projectNumber].img[0]" alt="">
        <img :src="projects[projectNumber].img[1]" alt="">
        <img :src="projects[projectNumber].img[2]" alt=""> -->

        <div class="slider">
            <div class="imgBox">
                <img class="img" :src="projects[projectNumber].img[currentImgNumber]" :class="{ resize: resizeFlag }"
                    @dblclick="resizeFlag = !resizeFlag" @click="nextImage">
            </div>

            <!-- <img v-for="item in projects[projectNumber].img" :key="item.id" :src="item" alt="">
            <div class="imgBox">
                <img class="img" :src="currentImg" :class="{ resize: resizeFlag }" @dblclick="resizeFlag = !resizeFlag"
                    @click="nextImage">
            </div> -->

            <div class="dots">
                <div v-for="(item, index) in projects[projectNumber].img">
                    <div v-if="index === currentImgNumber" class="dot dot-current"></div>
                    <div v-else class="dot" @click="nextDot(index)"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import SliderComponent from './SliderComponent.vue';

    export default {
        components: { SliderComponent },
        data() {
            return {
                currentImgNumber: 0,

                projectDetailsBanner: require('@/assets/img/projects/Banner_project_details.jpg'),
                projectNumber: null,
            }
        },
        methods: {
            // получаем id проекта из адресной строки
            getProjectNumber() {
                // console.log('pathname=', window.location.pathname);
                const projectNumberParam = parseInt(this.$route.params.projectNumber) - 1;
                console.log('project number=', projectNumberParam);
                this.projectNumber = isNaN(projectNumberParam) || projectNumberParam;
            },

            nextImage(){
                console.log(this.projectNumber);
                if (this.currentImgNumber === this.projects[this.projectNumber].img.length - 1) 
                    this.currentImgNumber = 0;
                else this.currentImgNumber++;
                this.currentImg = this.projects[this.projectNumber].img[this.currentImgNumber];
            },
            nextDot(index) {
                this.currentImgNumber = index;
                this.currentImg = this.projects[this.projectNumber].img[this.currentImgNumber];
            },
        },
        computed: {
            ...mapState(['projects']),
        },
        created() {
            this.getProjectNumber();
        },
        
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_vars.scss';

.project {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__banner {
    margin-bottom: 200px;

    img {
        width: 100%;
        background: #CDA274;
    }}

    &__about {
        width: 55%;
        margin-bottom: 100px;
    }
    &__heading {
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 62.5px;
        letter-spacing: 0.02em;
        text-align: left;
        color: $headingColor;
        margin-bottom: 12px;
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

.slider {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 200px;
}

.img {
    border-radius: 50px;
    margin-bottom: 16px;
}

.resize {
    width: 100vw;
}

.dots {
    display: flex;
    justify-content: center;
}

.dot {
    border-radius: 50%;
    width: 16px;
    height: 16px;
    border: solid 1px $headingColor;
    margin: 4px;
    cursor: pointer;
}

.dot-current {
    background-color: $headingColor;
}
</style>