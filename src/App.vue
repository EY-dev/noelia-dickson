<template>
    <v-app>
        <v-app-bar app dark class="main-gradient">
            <v-spacer></v-spacer>
            <top-menu/>
            <v-btn @click="accept" v-if="showUpdateUI">
                <span class="mr-2">Latest Release</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
        </v-app-bar>
        <v-main class="main-gradient">
            <left-menu v-if="$store.getters.isMobile"/>
            <router-view style="position: inherit;"/>
            <div class="decoration-circle" v-if="!$store.getters.isMobile"/>
            <div class="circle-animation circle-animation-in"/>
        </v-main>
        <div class="copyright">
            © {{year}} {{ $store.getters.getDictionary.bottomMenu.copyright[0] }} <v-icon color="red" class="copyright-icon">favorite</v-icon> {{ $store.getters.getDictionary.bottomMenu.copyright[1] }}
            <a :href="link" target="_blank" rel="noopener">EY-dev</a>&nbsp;{{ $store.getters.getDictionary.bottomMenu.copyright[2] }}
        </div>
        <bottom-menu/>
    </v-app>
</template>

<script>
import TopMenu from "@/components/TopMenu";
import LeftMenu from "@/components/LeftMenu";
import BottomMenu from "@/components/BottomMenu";

export default {
    name: 'App',
    components: {
        BottomMenu,
        LeftMenu,
        TopMenu,
    },

    data: () => ({
        showUpdateUI: false,
        windowH:0,
        year: new Date().getFullYear(),
        link: 'https://ey-dev.github.io/my-page/#/'
    }),
    created() {
        if (this.$workbox) {
            this.$workbox.addEventListener("waiting", () => {
                this.showUpdateUI = true;
            });
        }
        this.$store.dispatch('setLanguage', true)
    },
    mounted() {
        this.loadingStatus();
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        });
        this.onResize();
    },
    methods:{
        async accept() {
            this.showUpdateUI = false;
            await this.$workbox.messageSW({ type: "SKIP_WAITING" });
        },
        loadingStatus(){
            this.windowH = window.innerHeight + 'px';
            if (!this.$store.getters.isLoaded){
                const that = this;
                setTimeout(function () {
                    that.$store.dispatch('setLoaded', true)
                },1)
            }
        },
        onResize() {
            this.windowH = window.innerHeight + 'px';
            if (window.innerHeight < 200 || window.innerWidth < 660){
                this.$store.dispatch('setMobile', true)
            }else{
                if (!(/Mobi|Android/i.test(navigator.userAgent)))
                    this.$store.dispatch('setMobile', false)
            }
        }
    }
};
</script>
<style>
    .circle-animation{
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
        transition: all .5s ease-in-out;

        clip-path: circle(0% at 95% 90%);
        background: rgba(47, 30, 40, 1);
    }

    .circle-animation-in{
        background: rgba(47, 30, 40, 1);
        clip-path: circle(150% at 95% 90%);
    }
    .main-gradient{
        background: rgb(63,0,60);
        background: linear-gradient(90deg, rgba(63,0,60,1) 0%, rgba(117,20,113,1) 100%);
    }
    .copyright{
        position: absolute;
        bottom: 60px;
        left: 50%;
        transform: translate(-50%);
        font-size: 12px;
        color: #f5f5f5;
        text-align: center;
        min-width: 300px;
        z-index: 2;
    }
    .copyright a{
        text-decoration: none;
    }
    .v-application a{
        color: #eda994!important;
    }
    .decoration-circle{
        height: 550px;
        width: 550px;
        background-color: rgba(47, 30, 40, 1);
        border-radius: 50%;
        position: fixed;
        left:100%;
        top: 100%;
        transform: translate(-50%, -50%);
        transition: all .5s ease-in-out;
    }
    @media only screen and (max-width: 812px){
        .decoration-circle{
            height: 400px;
            width: 400px;
        }
    }
    @media only screen and (max-width: 660px){
        .copyright{
            font-size: 10px;
        }
        .copyright-icon{
            font-size: 8px;
        }
    }
</style>
