<style scoped>
    #margin-top {
        margin-top: 20px;
    }

    #margin-right {
        margin-right: 10px;
    }

    #margin-left {
        margin-left: 10px;
    }
</style>

<template>
    <div class="navbar-start" id="margin-top">
        <router-link class="navbar-item" to="/home">
            <a class="navbar-item">
                <img src="https://i.imgur.com/ttoLziN.png">
            </a>
        </router-link>

        <router-link class="navbar-item" to="/tabs-financial">
            <b-icon id="margin-right" icon="funnel-dollar" class="m-r-xs"/>
            <span>Finanças</span>
        </router-link>

        <router-link class="navbar-item" to="/tabs-animal">
            <b-icon id="margin-right" icon="horse" class="m-r-xs"/>
            <span>Animais</span>
        </router-link>

        <!--<div class="navbar-item has-dropdown is-hoverable">-->
        <!--<a class="navbar-link"> Estoques </a>-->
        <!--<div class="navbar-dropdown">-->
        <!--<router-link class="navbar-item" to="/stock">-->
        <!--<b-icon id="margin-right" icon="clock" class="m-r-sm"/>-->
        <!--Estoque-->
        <!--</router-link>-->
        <!--<router-link class="navbar-item" to="/product">-->
        <!--<b-icon id="margin-right" icon="exchange-alt" class="m-r-sm"/>-->
        <!--Produto-->
        <!--</router-link>-->
        <!--</div>-->
        <!--</div>-->

        <!--<div class="navbar-item has-dropdown is-hoverable">-->
        <!--<a class="navbar-link"> Medicamentos </a>-->
        <!--<div class="navbar-dropdown">-->
        <!--<router-link class="navbar-item" to="/medicine">-->
        <!--<b-icon id="margin-right" icon="syringe" class="m-r-sm"/>-->
        <!--Medicamentos-->
        <!--</router-link>-->
        <!--<router-link class="navbar-item" to="/medicine-type">-->
        <!--<b-icon id="margin-right" icon="notes-medical" class="m-r-sm"/>-->
        <!--Tipos Medicamentos-->
        <!--</router-link>-->
        <!--</div>-->
        <!--</div>-->

        <!--<div class="navbar-item has-dropdown is-hoverable">-->
        <!--<a class="navbar-link"> Atores </a>-->
        <!--<div class="navbar-dropdown">-->
        <!--<router-link class="navbar-item" to="/user">-->
        <!--<b-icon id="margin-right" icon="user" class="m-r-sm"/>-->
        <!--Usuário-->
        <!--</router-link>-->
        <!--<router-link class="navbar-item" to="/seller">-->
        <!--<b-icon id="margin-right" icon="user-tie" class="m-r-sm"/>-->
        <!--Vendedor-->
        <!--</router-link>-->
        <!--</div>-->
        <!--</div>-->

        <!--<router-link class="navbar-item" to="/terrain">-->
        <!--<b-icon id="margin-right" icon="mountain" class="m-r-xs"/>-->
        <!--<span>Pastos</span>-->
        <!--</router-link>-->
    </div>
</template>

<script>

    export default {
        watch: {
            '$route'() {
                this.$forceUpdate()
            }
        }
    }
</script>
