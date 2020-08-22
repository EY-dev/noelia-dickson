<template>
    <div class="contact-information">
        <v-row v-for="(item, index) in $store.getters.getDictionary.contact.contactInformation" :key="index">
            <v-col cols="6" class="header">
                {{ item.header }}:
            </v-col>
            <v-col cols="6" class="value" v-if="!item.isLink">
                {{ item.value }}
            </v-col>
            <v-col cols="6" class="value" v-else>
                <a :href="item.link">{{ item.value }}</a>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="description">
                {{ $store.getters.getDictionary.contact.description }}
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "ContactInformation"
}
</script>

<style scoped>
    .contact-information{
        padding-left: 25px;
        width: 100%;
    }
    .header{
        font-family: 'Alata', sans-serif;
        font-size: 1.2rem;
        max-width: 100px;
        padding: 0;
        color: #e3e3e3;
    }
    .value{
        padding: 0;
        font-family: 'Alata', sans-serif;
        font-size: 1.2rem;
        color: #818181;
        min-width: 200px;
    }
    .description{
        padding: 20px 0 0;
        font-family: 'Alata', sans-serif;
        font-size: 1rem;
        color:#C83737;
    }
    .value a{
        text-decoration: none;
    }
    @media only screen and (max-width: 660px){
        .header, .value{
            font-size: 1rem;
        }
        .description{
            font-size:0.8rem;
        }
    }
</style>
