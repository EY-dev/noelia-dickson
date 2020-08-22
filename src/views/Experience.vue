<template>
    <div class="experience">
        <h1>{{ $store.getters.getDictionary.menu.experience }}</h1>
        <perfect-scrollbar class="list" v-if="!$store.getters.isMobile">
            <experience-item v-for="(item, index) in $store.getters.getDictionary.experience.list" :key="index" :item="item"/>
        </perfect-scrollbar>
        <div v-else class="list">
            <experience-item  v-for="(item, index) in $store.getters.getDictionary.experience.list" :key="index" :item="item"/>
        </div>
    </div>
</template>

<script>
import ExperienceItem from "@/components/ExperienceItem";
export default {
    name: "Experience",
    components: {ExperienceItem}
}
</script>

<style scoped>
.experience{
    width: 100%;
    height: 100%;
    color: white;
    max-width: 800px;
    display: block;
    margin: auto;
}
.experience h1{
    color:#C83737;
    font-size: 2.5rem;
    margin: 25px;
    font-family: 'Lobster', cursive;
}
.list{
    padding-left: 25px;
    padding-right: 25px;

}
.ps {
    height: 500px;
}
@media only screen and (max-width: 660px){
    .list{
        width: 100%;
    }
}
</style>
