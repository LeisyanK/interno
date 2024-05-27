<template>
    <div class="projects center">
        <!-- <div class="project" v-for="project in paginatedProjects" :key="project.id" @click=""> -->
        <div class="project" v-for="project in paginatedProjects" :key="project.id">
            <img class="project__img" :src="project.img[0]" alt="проект" @click="CHANGE_LIKE(project.id)">
            <div class="project__block">
                <div>
                    <h3 class="project__heading">{{ project.title }}</h3>
                    <p class="project__text">{{ project.links }}</p>
                </div>
                <router-link class="project__btn" :to="getProjectDetailsLink(project.id) "><i
                        class="fa-solid fa-chevron-right"></i></router-link>
                <img v-if="project.like" class="star" :src="like" alt="like" @click="CHANGE_LIKE(project.id)">
            </div>
        </div>
    </div>

    <div v-if="totalPages > 1" class="pagination">
        <router-link class="pagination__btn" v-for="pageNumber in totalPages" :key="pageNumber"
            :to="getPageLink(pageNumber)" @click="changePageNumberColor">{{ pageNumber }}</router-link>
        <!-- <div class="pagination__btn pagination__btn_active">01</div>
        <div class="pagination__btn">02</div>
        <div class="pagination__btn">03</div> -->
        <!-- <div class="pagination__btn"><i class="fa-solid fa-chevron-right"></i></div> -->

        <!-- стрелка направо -->
        <!-- <router-link class="pagination__btn" :to="getPageLink(totalPages)"><i class="fa-solid fa-chevron-right"></i></router-link> -->
    </div>

    <!-- готовый компонент -->
    <!-- v-model - текущая страница
        :page-count вызывает метод подсчета общего количества страниц 
        :click-handler запускает функцию, которая будет менять страницы
    -->
    <!-- <paginate v-model="currentPage" :page-count="totalPages" :page-range="3" :margin-pages="2"
        :click-handler="changePage" :prev-text="'Prev'" :next-text="'Next'" :container-class="'pagination'"
        :page-class="'page-item'">
    </paginate> -->
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
import Paginate from "vuejs-paginate-next"

    export default {
        components: {
            paginate: Paginate, // готовый компонент
        },
        data() {
            return {
                like: require('@/assets/img/projects/star.png'),
                itemsPerPage: 2,
                page: 1, // текущая страница
                pagination_offset: 0, // сколько элементов с начала массива пропускаем при выводе текущей страницы
                // paginatedProjectList: this.getFilteredProjects.slice(0, this.itemsPerPage),
                paginatedProjectList: this.getProjectsForFirstPage,
            }
        },
        computed: {
            // ...mapState({
            //     projects: (state) => state.projects
            // }),
            ...mapGetters(['getFilteredProjects']),

            totalPages() {
                // добавить проверку: если массив пустой, то вернуть null или 0
                return Math.ceil(this.getFilteredProjects.length / this.itemsPerPage);
            },
            paginatedProjects() {
                const pageNumber = this.getCurrentPageNumber();
                const startIndex = (pageNumber - 1) * this.itemsPerPage;
                const endIndex = startIndex + this.itemsPerPage;
                return this.getFilteredProjects.slice(startIndex, endIndex);
            },
            // getProjectsForFirstPage() {
            //     return this.getFilteredProjects.slice(0, this.itemsPerPage);
            // },
        },
        methods: {
            ...mapMutations(['CHANGE_LIKE']), // работает
            getCurrentPageNumber() {
                const pageNumberParam = parseInt(this.$route.params.pageNumber);
                return isNaN(pageNumberParam) || pageNumberParam < 1
                    ? 1
                    : pageNumberParam;
            },
            getPageLink(pageNumber) {
                return `/project/${pageNumber}`;
            },
            getProjectDetailsLink(projectNumber) {
                return `/project/details/${projectNumber}`;
            },
            changePage(pageNum) {   // номер страницы, на которую переходим
            //    console.log(pageNum);
               this.page = pageNum;
               this.pagination_offset = (this.itemsPerPage * pageNum) - this.itemsPerPage;
               if (pageNum === 1) {
                   this.$router.push('/project/');
               } else {
                   this.$router.push(`/project/?page=${pageNum}`)
               }
               // получаем список карточек текущей страницы
                this.paginatedProjectList = this.getFilteredProjects.splice(this.pagination_offset, this.itemsPerPage);
               // переход в начало страницы
               window.scrollTo(0, 0); 
            },
            colorFirstPaginationNumber() {
                // закрашиваем номер текущей страницы
                const firstPageNumber = document.querySelector('.pagination__btn');
                // console.log('firstPageNumber', firstPageNumber);
                firstPageNumber.classList.add('pagination__btn_active');
            },
            changePageNumberColor() {
                const paginationNumbers = document.querySelectorAll('.pagination__btn');
                paginationNumbers.forEach(pageNum => {
                    pageNum.classList.remove('pagination__btn_active');
                });
            }
        },
        mounted() {
            this.colorFirstPaginationNumber();
        },
        // updated() {
        //     const firstPageNumber = document.querySelector('.pagination__btn');
        //     console.log('firstPageNumber', firstPageNumber);
        //     // firstPageNumber.classList.remove('router-link-active');
        // }
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
.pagination {
    display: flex;
    gap: 20px;
    justify-content: center;
    padding-top: 51px;
    margin-bottom: 200px;

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
.router-link-active {  //router-link-exact-active 
    background: #F4F0EC;
    border: 1px solid #F4F0EC;
}
// .page-item {
//     width: 52px;
//     height: 52px;
//     border-radius: 50%;
//     background: #FFF;
//     color: $headingColor;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border: 1px solid #CDA274;
// }
// .active {
//     background: #F4F0EC;
//     border: 1px solid #F4F0EC;
// }
</style>