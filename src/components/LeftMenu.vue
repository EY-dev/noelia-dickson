<template>
    <div class="left-menu">
        <div class="navigation-button">
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
            <div id="menu-button" @click="closeMenu()">
                <v-icon v-if="!isOpen">menu</v-icon>
                <v-icon id="close-button" v-else>close</v-icon>
            </div>
        </div>
        <v-divider style="margin-top: 15px"/>
        <div class="links">
            <ul class="pages-list">
                <li id="home" @click="openPage('/')">{{$store.getters.getDictionary.menu.home}}</li>
                <li id="about" @click="openPage('/about')">{{$store.getters.getDictionary.menu.about}}</li>
                <li id="illustrations" @click="openPage('/illustrations')">{{$store.getters.getDictionary.menu.illustrations}}</li>
                <li id="experience" @click="openPage('/experience')">{{$store.getters.getDictionary.menu.experience}}</li>
                <li id="contact" @click="openPage('/contact')"><div class="contact">{{$store.getters.getDictionary.menu.contact}}</div></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "LeftMenu",
    data: () => ({
        menu: null,
        isOpen:false,
    }),
    methods:{
        openPage(page){
            this.menu.classList.add('hover-menu-in')
            document.querySelector('.pages-list').classList.add('hide');
            const that = this;
            setTimeout(()=> {
                that.menu.classList.remove('hover-menu-in');
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
            });
            const div = document.querySelector('li div');
            div.classList.remove('contact-hover');

            const el = document.getElementById(page.split('/')[1])
            if (page === '/contact'){
                div.classList.add("contact-hover");
            }else {
                el.classList.add("hover");
            }
            this.menu.classList.remove("hover-menu");
            setTimeout(()=> {
                document.querySelector('.pages-list').classList.remove('hide');
            }, 1000);
            this.isOpen = false;
        },
        closeMenu(){
            this.isOpen = !this.isOpen;
            if (!this.isOpen){
                this.menu.classList.remove("hover-menu");
            }
            else{
                this.menu.classList.add("hover-menu");
            }
        }
    },
    mounted() {
        document.querySelector('.pages-list').classList.add('hide');
        this.menu = document.querySelector('.left-menu');
        this.menu.classList.remove('hover-menu-in');
        this.redirect(window.location.pathname)
        this.menu.addEventListener("mouseleave", () => {
            this.menu.classList.remove("hover-menu");
            this.isOpen = false;
        });
    }
}
</script>

<style scoped>
.hide {
    opacity: 0;
}
.left-menu{
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    clip-path: circle(2.1% at 90.5% 28px);
    background: rgba(47, 30, 40, 0);
    z-index: 1000;
    transition: all .5s ease-in-out;
}
.pages-list{
    list-style: none;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    padding: 0;
    text-decoration: none;
    color: white;
}
.navigation-button{
    margin: 15px;
    width: 100%;
}
.navigation-button i:hover{
    text-decoration:none;
    color: #C83737;
    cursor: pointer;
}
.navigation-button i{
    text-decoration:none;
    color: white;
    left: 90%;
    transform: translate(-100%, 0);
}

.pages-list li{
    text-align: center;
    margin-bottom: 15px;
}
.pages-list li:hover, .hover {
    color: #C83737;
    cursor: pointer;
}
.contact:hover, .contact-hover{
    color: white;
    background: #C83737;
}
li div{
    background: #EDA994;
    color: black;
}
.contact{
    margin-top: 15px;
    border-radius: 25px;
    padding-left: 20px;
    padding-right: 20px;
    min-width: 150px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
}

.hover-menu{
    background: rgba(47, 30, 40, 1);
    clip-path: circle(75% at 90.5% 28px);
}
.hover-menu-in{
    background: rgba(47, 30, 40, 1);
    clip-path: circle(175% at 90.5% 28px);
}
.logo{
    height: 34px;
    position: absolute;
    left: 41px;
    top: 11px
}
@media only screen and (max-width: 375px){
    .hover-menu{
        clip-path: circle(75% at 90.5% 28px);
    }
}
@media only screen and (max-width: 360px){
    .hover-menu{
        clip-path: circle(75% at 90.5% 28px);
    }
}

</style>
