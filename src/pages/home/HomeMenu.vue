<style scoped>
    #margin-top {
        margin-top: 20px;
    }
</style>

<template>
    <div class="navbar-start" id="margin-top">
        <a class="navbar-item">
            <img src="https://i.imgur.com/ttoLziN.png">
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Finanças </a>
            <div class="navbar-dropdown">
                <router-link class="navbar-item" to="/spent">
                    <b-icon icon="clock" class="m-r-sm"/>
                    Gastos
                </router-link>
                <router-link class="navbar-item" to="/output">
                    <b-icon icon="exchange-alt" class="m-r-sm"/>
                    Saídas
                </router-link>
                <router-link class="navbar-item" to="/input">
                    <b-icon icon="exchange-alt" class="m-r-sm"/>
                    Entradas
                </router-link>
            </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Animais </a>
            <div class="navbar-dropdown">
                <router-link class="navbar-item" to="/animal">
                    <b-icon icon="clock" class="m-r-sm"/>
                    Animais
                </router-link>
                <router-link class="navbar-item" to="/animal-type">
                    <b-icon icon="exchange-alt" class="m-r-sm"/>
                    Tipos Animais
                </router-link>
            </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Estoques </a>
            <div class="navbar-dropdown">
                <router-link class="navbar-item" to="/stock">
                    <b-icon icon="clock" class="m-r-sm"/>
                    Estoque
                </router-link>
                <router-link class="navbar-item" to="/product">
                    <b-icon icon="exchange-alt" class="m-r-sm"/>
                    Produto
                </router-link>
            </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Medicamentos </a>
            <div class="navbar-dropdown">
                <router-link class="navbar-item" to="/medicine">
                    <b-icon icon="clock" class="m-r-sm"/>
                    Medicamentos
                </router-link>
                <router-link class="navbar-item" to="/medicine-type">
                    <b-icon icon="exchange-alt" class="m-r-sm"/>
                    Tipos Medicamentos
                </router-link>
            </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Pastos </a>
            <div class="navbar-dropdown">
                <router-link class="navbar-item" to="/lot">
                    <b-icon icon="clock" class="m-r-sm"/>
                    Lotes
                </router-link>
                <router-link class="navbar-item" to="/terrain">
                    <b-icon icon="exchange-alt" class="m-r-sm"/>
                    Terrenos
                </router-link>
            </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Atores </a>
            <div class="navbar-dropdown">
                <router-link class="navbar-item" to="/user">
                    <b-icon icon="clock" class="m-r-sm"/>
                    Usuário
                </router-link>
                <router-link class="navbar-item" to="/seller">
                    <b-icon icon="exchange-alt" class="m-r-sm"/>
                    Vendedor
                </router-link>
            </div>
        </div>

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
