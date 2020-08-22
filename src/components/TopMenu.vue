<template>
    <div class="navigation">
        <div class="logo">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 207 177"
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
        </div>
        <ul v-if="!$store.getters.isMobile" class="pages-list">
            <li id="home" @click="openPage('/')">{{$store.getters.getDictionary.menu.home}}</li>
            <li id="about" @click="openPage('/about')">{{$store.getters.getDictionary.menu.about}}</li>
            <li id="illustrations" @click="openPage('/illustrations')">{{$store.getters.getDictionary.menu.illustrations}}</li>
            <li id="experience" @click="openPage('/experience')">{{$store.getters.getDictionary.menu.experience}}</li>
            <li id="contact" @click="openPage('/contact')" class="contact">{{$store.getters.getDictionary.menu.contact}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "TopMenu",
    data: () => ({
        menu: null,
    }),
    methods:{
        openPage(page){
            const circle = document.querySelector('.circle-animation');
            circle.classList.add('circle-animation-in')
            const that = this;
            setTimeout(()=> {
                circle.classList.remove('circle-animation-in');
                that.redirect(page)
            }, 1000);
        },
        redirect(page){
            this.$router.push(page).catch(()=>{});
            if (page === '/'){
                page += 'home';
            }
            const pages = document.querySelectorAll('li');
            pages.forEach(li => {
                li.classList.remove('hover')
                li.classList.remove('contact-hover')
            });
            const el = document.getElementById(page.split('/')[1])
            if (page === '/contact'){
                el.classList.add("contact-hover");
            }else {
                el.classList.add("hover");
            }
        }
    },
    mounted() {
        const temp = document.querySelector('.circle-animation');
        if (temp !== null){
            temp.classList.remove('circle-animation-in');
        }
        this.redirect(window.location.pathname)
    }
}
</script>

<style scoped>
    .navigation{
        display: flex;
        width: 100%;
        padding-right: 25px;
        padding-left: 25px;

    }
    ul{
        list-style: none;
        display: flex;
        font-family: 'Roboto', sans-serif;
    }
    .logo, ul, .left-men{
        flex: 1;
    }
    .logo{
        height: 46px;
    }
    ul, .left-menu{
        font-size: 1.5rem;
        justify-content: space-between;
    }
    li:hover, .hover{
        color: #C83737;
    }
    li{
        color: white;
        text-align: center;
        cursor: pointer;
        padding: 5px;
    }
    .contact{
        background: #EDA994;
        border-radius: 25px;
        color: black;
        padding-left: 10px;
        padding-right: 10px;
    }
    .contact:hover{
        color: white;
        background: #C83737;
    }
    .contact-hover{
        color: white;
        background: #C83737;
    }
    @media only screen and (max-width: 800px){
        ul{
            flex:5
        }
    }

    @media only screen and (max-width: 960px){
        ul{
            font-size: 1.0rem;
        }
        .logo{
            height: 34px;
        }
    }
    @media only screen and (min-width: 801px){
        ul{
            flex:2
        }
    }
    @media only screen and (min-width: 1350px){
        ul{
            flex:1
        }
    }
</style>
