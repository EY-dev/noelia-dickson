<template>
    <div class="home">
        <transition appear enter-active-class="animated slideInDown delay-2s" leave-active-class="">
            <div class="home">
                <div class="rect">
                    <div class="block">
                        <div class="header">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 119 166"
                                height="100%"
                                width="54">
                                <g
                                    transform="translate(-27.194796,-18.293973)"
                                    id="layer1">
                                    <polygon
                                        transform="matrix(0.99726788,0,0,0.99899993,-303.89814,-364.20312)"
                                        style="fill:#1a1a1a"
                                        class="st8"
                                        points="429.88,398.12 399.29,398.12 399.29,489.88 362.59,431.76 332,431.76 332,548 362.59,548 362.59,489.88 400.82,548 429.88,548 "
                                        id="polygon110" />
                                    <polygon
                                        transform="matrix(0.99726788,0,0,0.99899993,-303.89814,-364.20312)"
                                        style="fill:#29abe2"
                                        class="st11"
                                        points="435,382.88 404.41,382.88 404.41,474.65 367.71,416.53 337.12,416.53 337.12,532.76 367.71,532.76 367.71,474.65 405.94,532.76 435,532.76 "
                                        id="polygon112" />
                                </g>
                            </svg>
                            <h1 class="first-name">oelia</h1>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="107 0 106 177"
                                height="100%"
                                width="54">
                                <g
                                    transform="translate(-27.194796,-18.293973)"
                                    id="layer1">
                                    <path
                                        style="fill:#1a1a1a;stroke-width:0.998133"
                                        class="st8"
                                        d="M 230.37816,135.68644 C 223.45713,74.108103 139.42734,92.789392 139.42734,92.789392 l 1.61558,102.497378 c 0,0 96.25626,1.97803 89.33524,-59.60033 z m -66.02908,24.48551 -2.21394,-43.45652 c 0,0 39.67128,-6.73322 43.82989,19.46051 4.15861,26.19379 -41.61595,23.99601 -41.61595,23.99601 z"
                                        id="path106" />
                                    <path
                                        style="fill:#f7931e;stroke-width:0.998133"
                                        class="st9"
                                        d="M 233.83869,122.13003 C 226.91762,60.551665 142.88783,79.232974 142.88783,79.232974 l 1.61557,102.497376 c 0,0 96.25632,1.988 89.33529,-59.60032 z m -66.02913,24.49547 -2.21393,-43.45651 c 0,0 39.67133,-6.73323 43.82994,19.46051 4.1486,26.19379 -41.61601,23.996 -41.61601,23.996 z"
                                        id="path108" />
                                </g>
                            </svg>
                            <h1>ickson</h1>
                        </div>
                        <div class="subheader">
                            <h2>{{ $store.getters.getDictionary.home.subheader }}</h2>
                        </div>
                        <v-row class="buttons-navigation" justify="center" align-content="center" align="center">
                            <v-col justify="center" align-content="center" align="center">
                                <v-btn class="ma-2 left-button" rounded outlined color="#C83737" @click="openPage('/illustrations')">
                                    {{ $store.getters.getDictionary.home.buttons.button1 }}
                                </v-btn>
                            </v-col>
                            <v-col justify="center" align-content="center" align="center">
                                <v-btn class="ma-2 right-button" rounded outlined color="#C83737" @click="openPage('/experience')">
                                    {{ $store.getters.getDictionary.home.buttons.button2 }}
                                </v-btn>
                            </v-col>
                        </v-row>
                    </div>
                </div>
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
        </transition>
        <div class="quote">
            <div class="box">
                <div>A work of <span class="art">Art</span> is above all an <span class="art">Adventure</span> of the mind.</div>
                <div class="author">- Eugene Ionesco</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Home',
    data() {
        return {
            year: new Date().getFullYear(),
            link: 'https://ey-dev.github.io/my-page/#/'
        }
    },
    methods:{
        openPage(page){
            let el = document.getElementById('about');
            if (page === '/illustrations'){
                el = document.getElementById('illustrations');
            }
            else if (page === '/experience'){
                el = document.getElementById('experience');
            }
            const el2 = document.querySelector('.rect');
            el2.classList.add('rect-out')
            document.querySelector('.header').classList.add('hide');
            document.querySelector('.subheader').classList.add('hide');
            document.querySelector('.buttons-navigation').classList.add('hide');
            setTimeout(()=>{el.click();},1000);
        },
    },
    mounted() {
        const tail = document.querySelector('.tail');
        const card = document.querySelector('.rect');
        const block = document.querySelector('.block');
        tail.addEventListener('click', ()=>{
            card.classList.toggle('rect-in');
            block.classList.toggle('block-out');
        })
    }
}
</script>
<style scoped>
.art{
    font-family: 'Damion', cursive;
    font-size: 55pt;
    color: #C83737;
}
.quote{
    max-width: 800px;
    margin: auto;
    height: 50%;
    min-height: 400px;
    position: relative;
}
.box{
    font-family: 'Courgette', cursive;
    font-size: 35pt;
    color: #e7e7e7;
    text-align: center;
    width: 100%;
    position: absolute;
    top: 25%;
    left: 50%;

    transform: translate(-50%, 0);
}
.author{
    float: right;
    color: #707070;
    margin-top: 25px;
}
.hide{
    opacity: 0;
}
.home{
    width: 100%;
    height: 100%;
    min-height: 475px;
    position: absolute;
    background: transparent;
    z-index: 2;
}
.tail{
    width: 100%;
    height: 40px;
    transition: all 1s ease-in-out;
}
.tail svg{
    position: relative;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
}
.tail svg g path:hover {
    fill: fuchsia;
    cursor: pointer;
}
.rect{
    height: 50%;
    min-height: 400px;
    width: 100%;
    padding-top: 100px;
    background-color: #2f1e28;
    transition: all 1s ease-in-out;
}
.rect-in{
    padding: 0;
    height: 1px;
    transition: all 1s ease-in-out;
    min-height: 1px;
}
.rect-in-transform{
    transform: translate(0, -99%);
}
.rect-out{
    height: 100%;
}
.block{
    transition: all 1s ease-in-out;
}
.block-out{
    transform: translate(0, -150%);
}
.header{
    display: block;
    margin: auto;
    color:white;
    font-size: 1.5rem;
    font-family: 'Karla', sans-serif;
    font-weight: 700;
    width: 421px;
    transition: all 0.3s ease-in-out;
}
.header svg, .header h1{
    display: inline-flex;
    align-content: space-between;
}
.header svg{
    margin-top: 5px;
}
.first-name{
    margin-right: 50px;
}

.subheader{
    color: #696969;
    top:150px;
    font-family: 'Karla', sans-serif;
    font-weight: 400;
    text-align: center;
    transition: all 0.3s ease-in-out;
}
.buttons-navigation{
    width: 100%;
    margin: auto;
    transition: all 0.3s ease-in-out;
}

.wings{
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    top: 325px;
    z-index: 1;
}
@media only screen and (min-width: 500px){
    .buttons-navigation{
        width: 500px;
    }
}
@media only screen and (min-width: 961px){
    .left-button{
        margin-right: 50px!important;
    }
    .right-button{
        margin-left: 50px!important;
    }
}
@media only screen and (max-width: 960px){
    .art{
        font-size: 25pt;
    }
    .box{
        font-size: 35pt;
        margin: 0;
    }
    .quote{
        max-width: 450px;
    }
    .subheader{
        top:120px;
        font-size: 0.8rem;
    }
    .header{
        font-size: 1rem;
        width: 280px;
    }
    .first-name{
        margin-right: 25px;
    }
    .header svg{
        width: 40px;
    }
    .buttons-navigation{
        top:180px;
    }
    .left-button{
        margin-right: 30px!important;
    }
    .right-button{
        margin-left: 30px!important;
    }
}
@media only screen and (max-width: 660px){
    .box{
        font-size: 16pt;
        margin: 0;
    }
    .quote{
        max-width: 350px;
    }
    .header{
        font-size: 1rem;
        width: 260px;
    }
    .first-name{
        margin-right: 25px;
    }
    .header svg{
        width: 30px;
    }
    .buttons-navigation{
        top:150px;
    }
    .subheader{
        top:90px;
        font-size: 0.6rem;
        min-width: 240px;
    }
    .left-button{
        margin-right: 5px!important;
    }
    .right-button{
        margin-left: 5px!important;
    }
}
@media only screen and (max-width: 370px){
    .quote{
        margin: 0 25px 25px;
    }
}

</style>
