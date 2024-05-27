<template>
    <div class="slider">
        <div class="imgBox">
            <img class="img" :src="currentImg" :class="{ resize: resizeFlag }" @dblclick="resizeFlag = !resizeFlag"
                @click="nextImage">
        </div>
        <!-- <div class=" buttons">
            <button id="prev">НАЗАД</button>
            <button id="next">ВПЕРЕД</button>
        </div> -->
        <!-- <div class="dots">
            <div v-for="(item, index) in images">
                <div v-if="index === currentImgNumber" class="dot dot-current"></div>
                <div v-else class="dot" @click="nextDot(index)"></div>
            </div>
        </div> -->
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

    export default {
        props: {
            images: Array,
        },
        data() {
            return {
                // projectImages: [require("@/assets/img/projects/bedroom1.jpg"), require("@/assets/img/projects/bedroom2.jpg"), require("@/assets/img/projects/bedroom3.jpg")],
                // currentImg: require("@/assets/img/projects/Photo.png"),
                currentImgNumber: 0,
                currentImg: this.images[currentImgNumber],
                resizeFlag: false,
            }
        },
        methods: {
            nextImage(){
                if (this.currentImgNumber === this.images.length - 1) 
                    this.currentImgNumber = 0;
                else this.currentImgNumber++;
                this.currentImg = this.images[this.currentImgNumber];
            },
            nextDot(index) {
                this.currentImgNumber = index;
                this.currentImg = this.images[this.currentImgNumber];
            },
        },
        computed: {
            // ...mapState({
            //     projectImages: (state) => state.projects.slice(0,1).img[0],
            // }),
            ...mapGetters(['getImages']),
        },
        // created(){
        //     const dotArray = document.querySelectorAll('.dot');
        //     dotArray[0].classList.add('dot-current');
        // }
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_vars.scss';

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

#prev,
#next {
    background-color: $headingColor;
    color: white;
    padding: 1rem 2rem;
    border-radius: 10px;
}

</style>