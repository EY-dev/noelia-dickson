<template>
    <v-col class="file" justify="center">
        <img :src="src" alt="zxcv" @click="openImg()"/>
    </v-col>
</template>

<script>
export default {
    name: "BoxImage",
    props: ['src', 'index'],
    methods:{
        openImg(){
            this.$emit('open-carousel', this.index)
        }
    }
}
</script>

<style scoped>
    .file{
        height: 200px;
        z-index: 0;
    }
    .file img{
        height: 100%;
        background-color: white;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    @media only screen and (min-width: 661px){
        .file:hover img{
            width: unset;
        }
        .file:hover{
            cursor: pointer;
            transform: scale(1.1, 1.1);
            filter: drop-shadow(0 0 0.75rem #C83737);
            z-index: 1;
        }
    }
    @media only screen and (max-width: 660px){
        .file{
            width: 100%;
            height: unset;
        }
        .file img{
            width: 100%;
            display: block;
            height: unset;
        }
    }
</style>
