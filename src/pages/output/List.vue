<style/>

<template>
    <section class="container">
        <!--<div class="tile is-ancestor">-->
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

        <!--<div class="tile is-parent">-->
        <!--<article class="tile is-child box">-->
        <!--<p class="title">Qtd. Pagos</p>-->
        <!--<p class="subtitle">-->
        <!-- - {{ this.gastosResumo.qtdGastosPagos < 10 ? '0' + this.gastosResumo.qtdGastosPagos-->
        <!--: this.gastosResumo.qtdGastosPagos }}-->
        <!--/ {{ this.gastos.length < 10 ? '0' + this.gastos.length : this.gastos.length }}</p>-->
        <!--</article>-->
        <!--</div>-->

        <!--<div class="tile is-parent">-->
        <!--<article class="tile is-child box">-->
        <!--<p class="title">Total Pago</p>-->
        <!--<p class="subtitle"><b>R$: </b>{{ gastosResumo.totalPago }}</p>-->
        <!--</article>-->
        <!--</div>-->

        <!--<div class="tile is-parent">-->
        <!--<article class="tile is-child box">-->
        <!--<p class="title">Falta Pagar</p>-->
        <!--<p class="subtitle"><b>R$: </b>{{ gastosResumo.totalGasto - gastosResumo.totalPago }}</p>-->
        <!--</article>-->
        <!--</div>-->
        <!--</div>-->

        <b-table :data="saidas" default-sort="descricao" class="row-button">
            <template slot-scope="props">
                <b-table-column label="#">
                    <small>{{ props.index + 1 }}</small>
                    .
                </b-table-column>

                <b-table-column field="criacao" label="Data Criação" sortable>
                    {{ props.row.criacao }}
                </b-table-column>

                <b-table-column field="alteracao" label="Data Alteração" sortable>
                    {{ props.row.alteracao }}
                </b-table-column>

                <b-table-column field="motivo" label="id_gasto" sortable>
                    {{ props.row.id_gasto }}
                </b-table-column>

                <b-table-column field="motivo" label="Observação" sortable>
                    {{ props.row.observacao }}
                </b-table-column>

                <b-table-column field="pago" label="valor" sortable>
                    {{ props.row.valor }}
                </b-table-column>

                <b-table-column field="necessario" label="id_usuario" sortable>
                    {{ props.row.id_usuario }}
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

    export default {
        created() {
            this.listaSaidas()
        },
        data() {
            return {
                saidas: []
            }
        },
        methods: {
            listaSaidas() {
                Constante.listaSaidas().then(res => {
                    this.saidas = res.data
                    console.log(this.saidas)
                })
            }
        }
    }
</script>
