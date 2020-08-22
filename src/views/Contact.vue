<template>
    <div class="contact">
        <h1>{{ $store.getters.getDictionary.menu.contact }}</h1>
        <div class="info-row">
            <div class="info-col-left">
                <contact-information style="z-index: 3"/>
            </div>
            <div class="info-col-right">
                <transition appear enter-active-class="animated slideInDown delay-2s" leave-active-class="animated slideOutUp">
                    <email-form style="z-index: 0"/>
                </transition>
            </div>
        </div>
        <div style="width: 100%;" class="space"/>
    </div>
</template>

<script>
import ContactInformation from "@/components/ContactInformation";
import EmailForm from "@/components/EmailForm";
export default {
    name: "Contact",
    components: {EmailForm, ContactInformation}
}
</script>

<style scoped>
.contact{
    width: 100%;
    height: 100%;
    //min-height: 750px;
    color: white;
    max-width: 800px;
    margin: auto;
}
.contact h1{
    color:#C83737;
    font-size: 2.5rem;
    margin: 25px;
    font-family: 'Lobster', cursive;
    z-index: 1;
}
.info-row{
    display: inline-flex;
    margin: auto;
    width: 100%;
    min-height: 650px;
    padding-right: 25px;
    padding-left: 25px;
}
.info-col-left{
    min-width: 336px;
    width: 50%;
    z-index: 1;
    background-color: transparent;
}
.info-col-right{
    width: 50%;
    z-index: 0;
}

@media only screen and (max-width: 660px){
    .contact{
        display: grid;
    }
    .info-col-left{
        min-width: 0;
        width: 100%;
    }
    .info-col-right{
        width: 100%;
        display: block;
        margin: auto;
        padding-right: 0;
    }
    .info-row{
        width: 100%;
        display: grid;
        padding: 0;
    }
    .space{
        height: 100px;
    }
}
@media only screen and (max-width: 376px){

}
</style>
