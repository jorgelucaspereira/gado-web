<style/>

<template>
    <section class="container">
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">Qtd. Tipo de Animal</p>
                    <p class="subtitle">{{ this.animaisTipos.length < 10 ? '0' + this.animaisTipos.length : this.animaisTipos.length }}</p>
                </article>
            </div>
        </div>
        <div style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title"><b>{{ this.animaisTipos.length < 2 ? 'Lista de Tipo de Animal' : 'Lista de Tipos de  Animais' }}</b>
                </p>
                <b-button rounded
                          size="is-medium"
                          icon-left="plus"
                          icon-pack="fas"
                          @click="carregar">
                    Adicionar Tipo de Animal
                </b-button>
            </header>
        </div>
        <b-table hoverable
                 paginated
                 class="row-click"
                 :data="animaisTipos">
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

                <b-table-column field="Nome" label="Nome" sortable>
                    {{ props.row.nome }}
                </b-table-column>

                <b-table-column field="nome" label="Qtd. Meses Venda" sortable>
                    {{ props.row.qtd_meses_venda }}
                </b-table-column>

                <b-table-column field="Qtd. Hectare" label="Qtd. Hectare" sortable>
                    {{ props.row.qtd_por_hectare }}
                </b-table-column>
            </template>
        </b-table>
    </section>
</template>


<script>
    import Constante from '../../../constante'
    import Form from './Form'
    import ImagemAnimal from "../../../components/ImagemAnimal";

    export default {
        components: { ImagemAnimal},
        props: ['lista'],
        created() {
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
            listaAnimaisTipo() {
                Constante.listaAnimaisTipo().then(res => {
                    this.animaisTipos = res.data
                })
            },
            carregar() {
                this.$modal.open({
                    component: Form,
                    width: 600,
                    canCancel: true,
                }).$on('close', () => {
                    this.listaAnimaisTipo()
                    this.$emit('atualizar')
                })
            }
        }
    }
</script>
