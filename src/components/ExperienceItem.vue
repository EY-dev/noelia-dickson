<template>
    <div class="item">
        <h2>{{ item.header }}</h2>
        <h3>{{ item.subheader }}</h3>
        <div class="period" v-for="(period, index) in item.period" :key="index">
            {{ period }}
        </div>
        <div class="description">
            {{ item.description }}
        </div>
    </div>
</template>

<script>
export default {
    name: "ExperienceItem",
    props: ['item']
}
</script>

<style scoped>
    .item{
        width: 100%;
        margin-bottom: 50px;
    }
    .item h2{
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-style: italic;
        color: #e3e3e3;
        font-size: 2rem;
    }
    .item h3{
        font-family: 'Alata', sans-serif;
        color: #C83737;
    }
    .period{
        font-family: 'Alata', sans-serif;
        color: #515151;
        font-weight: 200;
    }
    .description{
        margin-top: 10px;
        text-align: justify;
        text-indent: 25px;
        color: #c6c5c5;
        font-style: italic;
    }
    @media only screen and (max-width: 660px){
        .item h2{
            font-size: 1.2rem;
        }
        .item h3, .period{
            font-size: 1rem;
        }
        .description{
            font-size: 0.8rem;
        }
    }
</style>
