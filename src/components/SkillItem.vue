<template>
    <div class="skill-item">
        <div class="header">
            <v-progress-circular v-if="!$store.getters.isMobile"
                :rotate="90"
                :size="100"
                :width="15"
                :value="percent"
                color="#C83737"
            >
                {{ percent }}%
            </v-progress-circular>
            <span v-else>
                {{ value }}
            </span>
        </div>
        <div class="value">
            <v-progress-linear v-model="percent" height="15" v-if="$store.getters.isMobile" color="#C83737" dark>
                <strong>{{ percent }}%</strong>
            </v-progress-linear>
            <span v-else>
                {{ value }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "SkillItem",
    props: ['index', 'value', 'badge'],
    data: () => ({
        percent : 0,
        interval: {},
    }),
    beforeDestroy () {
        clearInterval(this.interval)
    },
    mounted () {
        this.interval = setInterval(() => {
            if (this.percent === this.badge) {
                return (this.percent = this.badge)
            }
            this.percent += 1
        }, 50)
    },
}
</script>

<style scoped>
    .skill-item{
        width: 150px;
        display: block;
        margin: auto;
    }
    .skill-item .header{
        text-align: center;
    }
    .skill-item .value{
        text-align: center;
        font-size: 1rem;
    }
    .skill-item:hover .value, .skill-item:hover .header{
        color: #C83737;
    }
    .v-progress-circular{

    }
    @media only screen and (max-width: 660px){
        .skill-item{
            width: 100%;
            display: inline-flex;
            min-width: 300px;
        }
        .skill-item .header{
            text-align: left;
            font-size: 1rem;
            min-width: 130px;
        }
        .skill-item .value{
            padding-left: 20px;
            text-align: left;
            font-size: 0.6rem;
            margin: auto;
            width: 100%;
        }
    }
</style>
