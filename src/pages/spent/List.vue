<style/>

<template>
    <section class="container">
        <div class="tile is-ancestor">
            <!--<div class="tile is-parent">-->
                <!--<article class="tile is-child box">-->
                    <!--<p class="title">Total Gasto</p>-->
                    <!--<p class="subtitle"><b>R$: </b>{{ gastosResumo.totalGasto }}</p>-->
                <!--</article>-->
            <!--</div>-->

            <!--<div class="tile is-parent">-->
                <!--<article class="tile is-child box">-->
                    <!--<p class="title">Count Gastos</p>-->
                    <!--<p class="subtitle">-->
                        <!-- - {{ this.gastos.length < 10 ? '0' + this.gastos.length : this.gastos.length }}</p>-->
                <!--</article>-->
            <!--</div>-->

            <!--<div class="tile is-parent">-->
                <!--<article class="tile is-child box">-->
                    <!--<p class="title">Count Necessários</p>-->
                    <!--<p class="subtitle">-->
                        <!-- - {{ this.gastosResumo.qtdGastosNecessarios < 10 ? '0' + this.gastosResumo.qtdGastosNecessarios-->
                        <!--: this.gastosResumo.qtdGastosNecessarios }}-->
                        <!--/ {{ this.gastos.length < 10 ? '0' + this.gastos.length : this.gastos.length }}</p>-->
                <!--</article>-->
            <!--</div>-->

            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">Qtd. Pagos</p>
                    <p class="subtitle">
                        - {{ this.gastosResumo.qtdGastosPagos < 10 ? '0' + this.gastosResumo.qtdGastosPagos
                        : this.gastosResumo.qtdGastosPagos }}
                        / {{ this.gastos.length < 10 ? '0' + this.gastos.length : this.gastos.length }}</p>
                </article>
            </div>

            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">Total Pago</p>
                    <p class="subtitle">{{ gastosResumo.totalPago | currency }}</p>
                </article>
            </div>

            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">Falta Pagar</p>
                    <p class="subtitle">{{ gastosResumo.totalGasto - gastosResumo.totalPago | currency }}</p>
                </article>
            </div>
        </div>

        <b-table
                hoverable
                paginated
                :per-page="porPag"
                class="row-click"
                :data="gastos">
            <template slot-scope="props">
                <b-table-column label="#">
                    <small>{{ props.index + 1 }}</small>
                    .
                </b-table-column>

                <b-table-column field="criacao" label="Data Criação" sortable>
                    {{ props.row.criacao | moment("DD/MM/YYYY") }}
                </b-table-column>

                <b-table-column field="alteracao" label="Data Alteração" sortable>
                    {{ props.row.alteracao | moment("DD/MM/YYYY") }}
                </b-table-column>

                <b-table-column field="motivo" label="Motivo Gasto" sortable>
                    {{ props.row.motivo }}
                </b-table-column>

                <b-table-column field="valor" label="Valor Total" sortable>
                    {{ props.row.valor | currency }}
                </b-table-column>

                <b-table-column field="pago" label="Pago" sortable>
                    {{ props.row.pago ? "Sim" : "Não" }}
                </b-table-column>

                <b-table-column field="necessario" label="Necessário" sortable>
                    {{ props.row.necessario ? "Sim" : "Não" }}
                </b-table-column>

                <b-table-column label="">
                    <b-button size="is-small" icon="pencil-alt" @click="atualizaGasto(props.row)"/>

                </b-table-column>
            </template>
        </b-table>
    </section>
</template>

<script>
    import Constante from '../../constante'
    import Form from './Form'

    export default {
        created() {
            this.listarGastos()
            this.listarResumo()
        },
        data() {
            return {
                gastos: [],
                gastosResumo: [],
                valorTotal: null,
                porPag: 15
            }
        },
        methods: {
            listarGastos() {
                Constante.listaGasto().then(res => {
                    this.gastos = res.data
                })
            },
            atualizaGasto(parametro) {
                this.$modal.open({
                    component: Form,
                    width: 400,
                    canCancel: true,
                    props: {parametro}
                }).$on('close')
                console.log(parametro)
            },
            listarResumo() {
                Constante.listaGastoResumo().then(res => {
                    this.gastosResumo = res.data
                })
            }
        }
    }
</script>
