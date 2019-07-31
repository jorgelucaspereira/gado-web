<style>
    #margin-right {
        margin-right: 20px;
    }
</style>

<template>
    <section class="container">
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">Qtd. Pago</p>
                    <p class="subtitle">
                        {{ this.gastosResumo.qtdGastosPagos < 10 ? '0' + this.gastosResumo.qtdGastosPagos
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
        <div style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title"><b>{{ this.gastos.length < 2 ? 'Lista de Gasto' : 'Lista de Gastos' }}</b>
                </p>
                <b-tooltip label="Atualizar Lista.">
                    <b-button id="margin-right"
                              rounded
                              size="is-medium"
                              icon-pack="fas"
                              icon-left="sync"
                              @click="listarGastos">
                    </b-button>
                </b-tooltip>
                <b-button rounded
                          size="is-medium"
                          icon-pack="fas"
                          icon-left="plus"
                          @click="formGasto">
                    Adicionar Gasto
                </b-button>
            </header>
        </div>
        <b-table
                hoverable
                paginated
                class="row-click"
                :data="gastos">
            <template slot-scope="props">
                <b-table-column label="#" sortable>
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
                    <b-tooltip label="Editar Gasto">
                        <b-button size="is-small" @click.native="formGasto(props.row)">
                            <b-icon size="is-small" icon="pencil-alt"/>
                        </b-button>
                    </b-tooltip>
                </b-table-column>
            </template>
        </b-table>
    </section>
</template>

<script>
    import Constante from '../../../constante'
    import Form from '../spent/Form'
    import BButton from "buefy/src/components/button/Button";
    import BTooltip from "buefy/src/components/tooltip/Tooltip";

    export default {
        components: {BTooltip, BButton},
        created() {
            this.listarGastos()
            this.listarResumo()
        },
        data() {
            return {
                gastos: [],
                gastosResumo: [],
                valorTotal: null
            }
        },
        methods: {
            listarGastos() {
                Constante.listaGasto().then(res => {
                    this.gastos = res.data
                })
            },
            listarResumo() {
                Constante.listaGastoResumo().then(res => {
                    this.gastosResumo = res.data
                })
            },
            formGasto(gasto) {
                this.$modal.open({
                    component: Form,
                    width: 600,
                    canCancel: true,
                    props: {gasto, store: this.$store}
                }).$on('close', () => {
                    this.listarGastos()
                    this.listarResumo()
                    this.$emit('atualizar')
                })
            }
        }
    }
</script>
