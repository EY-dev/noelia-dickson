<template>
    <div class="about">
        <h1>{{ $store.getters.getDictionary.menu.about }}</h1>
        <div class="description">
            <p align="justify">{{ $store.getters.getDictionary.about.description }}</p>
        </div>
        <div class="skills">
            <h2>{{ $store.getters.getDictionary.about.skills.header }}</h2>
            <v-row class="skill-list" justify="center">
                <v-col v-for="(item, index) in $store.getters.getDictionary.about.skills.value" :key="index" justify="center">
                    <skill-item :index="index+1" :value="item.value" :badge="item.badge"/>
                </v-col>
            </v-row>
        </div>
        <div style="width: 100%;" class="space"/>
    </div>
</template>
<script>
import SkillItem from "@/components/SkillItem";
export default {
    name: "About",
    components: {SkillItem}
}
</script>

<style scoped>
.about{
    width: 100%;
    height: 100%;
    color: white;
    max-width: 800px;
    display: block;
    margin: auto;
}
.about h1{
    color:#C83737;
    font-size: 2.5rem;
    margin: 25px;
    font-family: 'Lobster', cursive;
}
.description{
    font-family: 'Assistant', sans-serif;
    margin: 25px;

}
.description p{
    text-indent: 25px;

}

.skills{
    margin: 50px;
}
.skills h2{
    font-size: 1.5rem;
    color: #eda994;
    font-family: 'Roboto', sans-serif;
}
.skill-list{
    list-style: none;
    color: #989898;
    font-size: 1rem;
    display: inline-flex;
    width: 100%;
}
.skills::after{
    content: " ";
    width: 100%;
    height: 25px;
}

@media only screen and (max-width: 660px){
    .skills{
        margin: 25px;
    }
    .col{
        margin: 0;
        padding-bottom: 0!important;
    }
    .space{
        height: 25px;
    }
}
</style>
