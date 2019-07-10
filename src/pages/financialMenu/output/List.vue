<style/>

<template>
    <section class="container">
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">{{ this.saidas.length < 2 ? 'Qtd. Saída' : 'Qtd. Saídas' }}</p>
                    <p class="subtitle">{{ this.saidas.length < 10 ? '0' + this.saidas.length : this.saidas.length
                        }}</p>
                </article>
            </div>

            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">{{ this.saidas.length < 2 ? 'Total Saída' : 'Total Saídas' }}</p>
                    <p class="subtitle">{{ this.saidasResumos.totalSaida | currency }}</p>
                </article>
            </div>
        </div>
        <div style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title"><b>{{ this.saidas.length < 2 ? 'Lista de Saída' : 'Lista de Saídas' }}</b>
                </p>
                <b-button rounded
                          size="is-medium"
                          icon-left="plus"
                          @click="formSaida">
                    Adicionar Saída
                </b-button>
            </header>
        </div>
        <b-table hoverable
                 paginated
                 :per-page="porPag"
                 class="row-click"
                 :data="saidas">
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

                <b-table-column field="motivo" label="Número Gasto" sortable>
                    {{ props.row.gasto.id }}
                </b-table-column>

                <b-table-column field="motivo" label="Motivo Gasto" sortable>
                    {{ props.row.gasto.motivo }}
                </b-table-column>

                <b-table-column field="motivo" label="Observação" sortable>
                    {{ props.row.observacao }}
                </b-table-column>

                <b-table-column field="pago" label="valor" sortable>
                    {{ props.row.valor | currency}}
                </b-table-column>

                <b-table-column field="necessario" label="Usuário" sortable>
                    {{ props.row.usuario.nome }}
                </b-table-column>
            </template>
        </b-table>
    </section>
</template>

<script>
    import Constante from '../../../constante'
    import Form from '../output/Form'

    export default {
        created() {
            this.listaSaidas()
            this.listaResumoSaidas()
        },
        data() {
            return {
                saidas: [],
                saidasResumos: []
            }
        },
        methods: {
            listaSaidas() {
                Constante.listaSaidas().then(res => {
                    this.saidas = res.data
                })
            },
            listaResumoSaidas() {
                Constante.listaResumoSaidas().then(res => {
                    this.saidasResumos = res.data
                })
            },
            formSaida() {
                this.$modal.open({
                    component: Form,
                    width: 600,
                    canCancel: true,
                }).$on('close', () => {
                    this.listaSaidas()
                    this.listaResumoSaidas()
                    this.$emit('atualizar')
                })
            }
        }
    }
</script>
