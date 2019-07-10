<style/>

<template>
    <section class="container">
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">{{ this.entradas.length < 2 ? 'Qtd. Entrada' : 'Qrd. Entradas' }}</p>
                    <p class="subtitle">{{ this.entradas.length < 10 ? '0' + this.entradas.length : this.entradas.length
                        }}</p>
                </article>
            </div>

            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">{{ this.entradas.length < 2 ? 'Total Entrada' : 'Total Entradas' }}</p>
                    <p class="subtitle">{{ entradasResumo.totalEntrada | currency }}</p>
                </article>
            </div>
        </div>

        <div style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title"><b>{{ this.entradas.length < 2 ? 'Lista de Entrada' : 'Lista de Entradas'
                    }}</b></p>
                <b-button rounded
                          size="is-medium"
                          icon-left="plus"
                          @click="formGasto">
                    Adicionar Entrada
                </b-button>
            </header>
        </div>
        <b-table hoverable
                 paginated
                 :per-page="porPag"
                 class="row-click"
                 :data="entradas">
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

                <b-table-column field="id_gasto" label="N° Gasto" sortable>
                    {{ props.row.id_gasto }}
                </b-table-column>

                <b-table-column field="observacao" label="Observação" sortable>
                    {{ props.row.observacao }}
                </b-table-column>

                <b-table-column field="valor" label="Valor" sortable>
                    {{ props.row.valor | currency }}
                </b-table-column>

                <b-table-column field="id_usuario" label="Usuário" sortable>
                    {{ props.row.id_usuario = 1 ? "Jorge Lucas" : "Luiz Antônio" }}
                </b-table-column>
            </template>
        </b-table>
    </section>
</template>

<script>
    import Constante from '../../../constante'
    import Form from '../input/Form'

    export default {
        created() {
            this.listaEntradas()
            this.listaResumoEntradas()
        },
        data() {
            return {
                entradas: [],
                entradasResumo: [],
                porPag: 15
            }
        },
        methods: {
            listaEntradas() {
                Constante.listaEntradas().then(res => {
                    this.entradas = res.data
                })
            },
            listaResumoEntradas() {
                Constante.listaResumoEntradas().then(res => {
                    this.entradasResumo = res.data
                })
            },
            formGasto() {
                this.$modal.open({
                    component: Form,
                    width: 600,
                    canCancel: true,
                }).$on('close')
            }
        }
    }
</script>
