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
        <a class="navbar-item">
            <img src="https://i.imgur.com/ttoLziN.png">
        </a>
        <router-link class="navbar-item" to="/home">
            <b-icon id="margin-left" icon="home" class="m-r-sm"/>
        </router-link>
        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Finanças </a>
            <div class="navbar-dropdown">
                <router-link class="navbar-item" to="/spent">
                    <b-icon id="margin-right" icon="funnel-dollar" class="m-r-sm"/>
                    Gastos
                </router-link>
                <router-link class="navbar-item" to="/output">
                    <b-icon id="margin-right" icon="angle-double-down" class="m-r-sm"/>
                    Saídas
                </router-link>
                <router-link class="navbar-item" to="/input">
                    <b-icon id="margin-right" icon="angle-double-up" class="m-r-sm"/>
                    Entradas
                </router-link>
            </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Animais </a>
            <div class="navbar-dropdown">
                <router-link class="navbar-item" to="/animal">
                    <b-icon id="margin-right" icon="horse" class="m-r-sm"/>
                    Animais
                </router-link>
                <router-link class="navbar-item" to="/animal-type">
                    <b-icon id="margin-right" icon="horse-head" class="m-r-sm"/>
                    Tipos Animais
                </router-link>
                <router-link class="navbar-item" to="/lot">
                    <b-icon id="margin-right" icon="newspaper" class="m-r-sm"/>
                    Lotes
                </router-link>
            </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Estoques </a>
            <div class="navbar-dropdown">
                <router-link class="navbar-item" to="/stock">
                    <b-icon id="margin-right" icon="clock" class="m-r-sm"/>
                    Estoque
                </router-link>
                <router-link class="navbar-item" to="/product">
                    <b-icon id="margin-right" icon="exchange-alt" class="m-r-sm"/>
                    Produto
                </router-link>
            </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Medicamentos </a>
            <div class="navbar-dropdown">
                <router-link class="navbar-item" to="/medicine">
                    <b-icon id="margin-right" icon="syringe" class="m-r-sm"/>
                    Medicamentos
                </router-link>
                <router-link class="navbar-item" to="/medicine-type">
                    <b-icon id="margin-right" icon="notes-medical" class="m-r-sm"/>
                    Tipos Medicamentos
                </router-link>
            </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Atores </a>
            <div class="navbar-dropdown">
                <router-link class="navbar-item" to="/user">
                    <b-icon id="margin-right" icon="user" class="m-r-sm"/>
                    Usuário
                </router-link>
                <router-link class="navbar-item" to="/seller">
                    <b-icon id="margin-right" icon="user-tie" class="m-r-sm"/>
                    Vendedor
                </router-link>
            </div>
        </div>

        <router-link class="navbar-item" to="/terrain">
            <b-icon id="margin-right" icon="mountain" class="m-r-xs"/>
            <span>Pastos</span>
        </router-link>
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
