<template>
    <v-col >
        <video :width="videoWidth" controls class="video">
            <source :src="src" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </v-col>
</template>

<script>
export default {
    name: "BoxVideo",
    props: ['src'],
    data: () => ({
        videoWidth:0,
    }),
    methods: {
        setWidth(){
            if (this.$store.getters.isMobile){
                //this.videoWidth = window.innerWidth - 67 + 'px';
                this.videoWidth = '100%'
            }
            else {
                this.videoWidth = '660px';
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.setWidth);
        });
        this.setWidth();
    }
}
</script>

<style scoped>
    .video{
        display: block;
        margin: auto;
    }
</style>
