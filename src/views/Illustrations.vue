<template>
    <div class="illustrations">
        <h1>{{ $store.getters.getDictionary.menu.illustrations }}</h1>
<!--        <div class="top-shadow"/>-->
        <perfect-scrollbar class="list" v-if="!$store.getters.isMobile">
            <v-row class="pictures-row" justify="center">
                <box-image v-for="(name, index) in illustrations" :key="index" :src="'img/illustrations/' + name" :index="index" @open-carousel="openCarousel"/>
            </v-row>
            <v-row class="animations-box">
                <v-col>
                    <h2>{{ $store.getters.getDictionary.illustrations.subheader[1] }}</h2>
                </v-col>
            </v-row>
            <v-row>
                <box-video  v-for="(name, index) in videos" :key="index" :src="'video/' + name" :index="index" />
            </v-row>
        </perfect-scrollbar>
        <div v-else class="list">
            <box-image v-for="(name, index) in illustrations" :key="index" :src="'img/illustrations/' + name" :index="index" @open-carousel="openCarousel"/>
            <div class="animations-box">
                <h2>{{ $store.getters.getDictionary.illustrations.subheader[1] }}</h2>
            </div>
            <box-video  v-for="(name, index) in videos" :key="index + illustrations.length" :src="'video/' + name" :index="index" />
        </div>
        <v-overlay :value="overlay">
            <v-progress-circular v-if="progress" indeterminate size="64" class="progress"></v-progress-circular>
            <transition appear enter-active-class="animated fadeIn delay-1s" leave-active-class="">
                <div>
                    <div class="close-carousel">
                        <v-btn icon @click="overlay = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </div>
                    <v-carousel>
                        <v-carousel-item
                            v-for="(item,i) in illustrations"
                            :key="i"
                            :src="'img/illustrations/' + item"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                        >
                            <img :src="'img/illustrations/' + item" alt="illustrations" class="img"/>
                        </v-carousel-item>
                    </v-carousel>
                </div>
            </transition>
        </v-overlay>
        <div class="shadow"/>
        <div class="tail" >
            <svg v-if="!$store.getters.isMobile"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 800 40"
                 height="40"
                 width="800">
                <g
                    transform="translate(158.77041,101.19349)"
                    id="layer1">
                    <path
                        id="path1934"
                        fill="#2f1e28"
                        d="m -158.77041,-101.19349 271.94658,9.0517 c 0,0 52.97405,2.425231 63.22411,7.57985 33.25638,16.72425 45.05327,23.166744 64.82931,23.36845 19.77599,-0.201534 31.57292,-6.644246 64.82931,-23.36845 10.25005,-5.154619 63.2241,-7.57985 63.2241,-7.57985 l 271.94659,-9.0517 h -400 z" />
                </g>
            </svg>
            <svg v-else
                 width="260"
                 height="40"
                 viewBox="0 0 260 40"
                 xmlns="http://www.w3.org/2000/svg">
                <g
                    id="layer1"
                    transform="translate(-111.22959,101.19349)">
                    <path
                        transform="translate(-158.77041,-101.19349)"
                        d="m 300,0 h -30 c 14.44643,1.250829 60.07819,14.070297 65.16992,16.630859 C 368.4263,33.355109 380.22396,39.798294 400,40 419.77599,39.798466 431.57369,33.355063 464.83008,16.630859 469.92179,14.070304 515.55396,1.250886 530,0 H 500 400 Z"
                        fill="#2f1e28"
                        id="path1934" />
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
import BoxImage from "@/components/BoxImage";
import BoxVideo from "@/components/BoxVideo";
export default {
    name: "Illustrations",
    components: {BoxVideo, BoxImage},
    data : ()=> ({
        illustrations: [
            'perspective.jpg', 'Cover.jpg', 'pp1.jpg' , 'joeChef-Revisited.jpg', 'MRACERmotorart.jpg', 'Leira.jpg',
        ],
        videos : [
            'vowelfixed.mp4', 'video-1076.mp4', 'moral-of-the-story.ogv'
        ],
        overlay:false,
        progress: true,
    }),
    methods:{
        openCarousel(id){
            this.progress = true;
            this.overlay = true;
            setTimeout(()=>{
                let but = document.querySelector('button[value="' + id +'"]');
                but.click();
            },1);
            const that = this;
            setTimeout(()=>{
                that.progress = false;
            },900)
        }
    }
}
</script>

<style scoped>
.shadow{
    height: 40px;
    width: 100%;
}
.top-shadow{
    height: 40px;
    width: 100%;
    position: absolute;
    z-index: 1;
}
.top-shadow:after{
    content:"";
    display:block;
    height:40px;
    position:relative;

    background-image:linear-gradient(to top, rgba(255, 255, 255, 0), #2f1e28 55%)
}
.shadow:before{
    content:"";
    display:block;
    height:40px;
    position:relative;
    margin-top: -40px;
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0), #2f1e28 55%)
}
.close-carousel{
    position: absolute;
    z-index: 2;
    right: 10px;
    top: 10px;
}
.close-carousel button{
    background-color: black;
    opacity: 0.3;
}
.img{
    height: 100%;
    margin: auto;
    display:block;
}
.progress{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.illustrations{
    width: 100%;
    height: 100%;
    color: white;
    max-width: 800px;
    margin: auto;
}
.illustrations h1{
    color:#C83737;
    font-size: 2.5rem;
    margin: 25px;
    font-family: 'Lobster', cursive;
    z-index: 1;
}
.list{
    padding-left: 25px;
    padding-right: 25px;
    background-color: #2f1e28;
}
.ps {
    height: 500px;
}
.animations-box{
//margin-top: 20px;
    height: 50px;
}
.animations-box h2{
    color:#C83737;
    font-size: 2rem;
    margin-left: 25px;
    font-family: 'Lobster', cursive;
    z-index: 1;
}
.tail{
    width: 100%;
    height: 40px;
    margin-bottom: 50px;
    transition: all 1s ease-in-out;
}
.tail svg{
    position: relative;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
}
@media only screen and (max-width: 660px){
    .list{
        width: 100%;
    }
    .img{
        width: 100%;
        margin: auto;
        display:block;
    }
}
</style>
<style>
.v-image, .v-window{
    height: unset;
}
.v-image__image, .v-image__image--cover{
    background: none!important;
}
.v-responsive__content{
    width: 100%!important;
}
@media only screen and (max-width: 660px){
    .v-carousel__item, .v-carousel{
        height: unset!important;
    }
}
</style>
