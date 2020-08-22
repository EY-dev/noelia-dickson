<template>
    <v-bottom-navigation dark app  shift>
        <v-btn>
            <span>{{ $store.getters.getDictionary.bottomMenu.animation }}</span>
            <v-icon>mdi-television-play</v-icon>
        </v-btn>
        <v-btn>
            <span>{{ $store.getters.getDictionary.bottomMenu.books }}</span>
            <v-icon>mdi-book</v-icon>
        </v-btn>
        <v-btn>
            <span>{{ $store.getters.getDictionary.bottomMenu.pictures }}</span>
            <v-icon>mdi-image</v-icon>
        </v-btn>
        <v-switch
            v-model="isEnglish"
            color="#f7931e"
            :label="isEnglish ? 'Español' : 'English'"
            @click="switchLanguage"
            class="language-switcher"
        ></v-switch>
    </v-bottom-navigation>
</template>

<script>

export default {
    name: "BottomMenu",
    data: () => ({
        isEnglish: true,
    }),
    created() {
        this.isEnglish = this.$store.getters.isEnglish;
    },
    methods:{
        switchLanguage(){
            const content = document.querySelector('.v-main__wrap');
            content.classList.add('hide');
            setTimeout(() => {
                this.$store.dispatch('setEnglish', this.isEnglish);
                content.classList.remove('hide');
            },1)
        }
    }
}
</script>

<style scoped>
.v-btn:not(.v-btn--round).v-size--default {
    height: 100%;
}
.language-switcher{
    min-width: 112px;
}
@media only screen and (min-width: 661px){
    .language-switcher{
        position: fixed;
        right: 20px;
    }
}
</style>
<style>
.v-input--selection-controls__input{
    transform: rotate(-90deg);
}
.v-main__wrap{
    transition: all .5s ease-in-out;
}
.hide{
    opacity: 0.3;
}
</style>
