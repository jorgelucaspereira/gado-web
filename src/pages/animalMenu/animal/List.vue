<style/>

<template>
    <section class="container">
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">{{ this.animais.length < 2 ? 'Qtd. Animal' : 'Qtd. Animais' }}</p>
                    <p class="subtitle">{{ this.animais.length < 10 ? '0' + this.animais.length : this.animais.length
                        }}</p>
                </article>
            </div>

            <!--<div class="tile is-parent">-->
            <!--<article class="tile is-child box">-->
            <!--<p class="title">{{ this.animais.length < 2 ? 'Total Saída' : 'Total Saídas' }}</p>-->
            <!--<p class="subtitle">{{ this.animaisResumo.totalSaida | currency }}</p>-->
            <!--</article>-->
            <!--</div>-->
        </div>
        <div style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title"><b>{{ this.animais.length < 2 ? 'Lista de Animal' : 'Lista de Animais'
                    }}</b>
                </p>
                <b-button rounded
                          size="is-medium"
                          icon-left="plus"
                          @click="formAnimal">
                    Adicionar Animal
                </b-button>
            </header>
        </div>
        <b-table detailed
                 hoverable
                 paginated
                 :per-page="porPag"
                 class="row-click"
                 :data="animais">
            <template slot-scope="props">
                <b-table-column label="#" sortable>
                    <small>{{ props.index + 1 }}.</small>
                </b-table-column>

                <b-table-column field="criacao" label="Data Criação" sortable>
                    {{ props.row.criacao | moment("DD/MM/YYYY") }}
                </b-table-column>

                <b-table-column field="alteracao" label="Data Alteração" sortable>
                    {{ props.row.alteracao | moment("DD/MM/YYYY") }}
                </b-table-column>

                <b-table-column field="alteracao" label="Data Nascimento" sortable>
                    {{ props.row.nascimento | moment("DD/MM/YYYY") }}
                </b-table-column>

                <b-table-column field="codigo" label="Código" sortable>
                    {{ props.row.codigo }}
                </b-table-column>

                <b-table-column field="nome" label="Nome" sortable>
                    {{ props.row.nome }}
                </b-table-column>

                <b-table-column label="Tipo Animal" sortable>
                    {{ props.row.animalTipo.id }} - {{ props.row.animalTipo.nome }}
                </b-table-column>

                <b-table-column label="Valor Compra" sortable>
                    {{ props.row.valor_compra | currency}}
                </b-table-column>

                <b-table-column field="sexo" label="Sexo" sortable>
                    {{ props.row.sexo }}
                </b-table-column>

                <b-table-column>
                    <imagem-animal :link="props.row.link" :nome="props.row.nome"/>
                </b-table-column>
            </template>

            <template slot="detail" slot-scope="props">
                <table :data="animais" class="table is-fullwidth m-t-sm">
                    <tr>

                        <th>Valor Venda</th>

                        <th>Lote Compra</th>

                        <th>Terreno</th>
                    </tr>
                    <tr>
                        <b-table-column>
                            {{ props.row.valor_venda | currency}}
                        </b-table-column>

                        <b-table-column>
                            {{ props.row.lote.id }} - {{ props.row.lote.codigo }}
                        </b-table-column>

                        <b-table-column>
                            {{ props.row.terreno.id }} - {{ props.row.terreno.codigo }}
                        </b-table-column>
                    </tr>
                    <!--<tr>-->
                    <!--<th>Qtd</th>-->
                    <!--</tr>-->
                    <!--<tr v-for="item in props.row.nome">-->
                    <!--<td>{{ props.row.nome }}</td>-->
                    <!--</tr>-->
                </table>
            </template>
        </b-table>
    </section>
</template>


<script>
    import Constante from '../../../constante'
    import Form from './Form'
    import ImagemAnimal from "../../../components/ImagemAnimal";

    export default {
        components: {ImagemAnimal},
        props: ['lista'],
        created() {
            this.listaResumoAnimais()
            this.listaAnimais()
            this.listaAnimaisTipo()
        },
        data() {
            return {
                resumoAnimais: [],
                animais: [],
                animaisTipos: []
            }
        },
        methods: {
            listaResumoAnimais() {
                Constante.listaResumoAnimais().then(res => {
                    this.resumoAnimais = res.data
                })
            },
            listaAnimais() {
                Constante.listaAnimais().then(res => {
                    this.animais = res.data
                })
            },
            listaAnimaisTipo() {
                Constante.listaAnimaisTipo().then(res => {
                    this.animaisTipos = res.data
                })
            },
            formAnimal() {
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
