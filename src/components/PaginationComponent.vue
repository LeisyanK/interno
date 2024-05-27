<template>
    <div class="pagination">
        <div class="pagination__btn pagination__btn_active">01</div>
        <div class="pagination__btn">02</div>
        <div class="pagination__btn">03</div>
        <div class="pagination__btn"><i class="fa-solid fa-chevron-right"></i></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_vars.scss';

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
</style>