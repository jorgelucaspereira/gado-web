<style/>

<template>
    <div class="card">
        <form @submit.prevent="salvaAnimal">
            <div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                    <p class="modal-card-title">Formulário - Saída</p>
                </header>
                <section class="modal-card-body">
                    <div class="columns">
                        <div class="column">
                            <b-field label="Selecione o Tipo de Animal">
                                <b-select placeholder="Selecione o Tipo de Animal" v-model="animal.id_animal_tipo" required>
                                    <option v-for="animalTipo in animalTipos" :value="animalTipo.codigo" :key="animalTipo.id">{{ animalTipo.nome }}</option>
                                </b-select>
                            </b-field>
                        </div>
                        <div class="column">
                            <b-field label="Selecione o Lote">
                                <b-select placeholder="Selecione o Lote" v-model="animal.id_lote" required>
                                    <option v-for="lote in lotes" :value="lote.codigo" :key="lote.id">{{ lote.codigo }}</option>
                                </b-select>
                            </b-field>
                        </div>
                        <div class="column">
                            <b-field label="Selecione o Terreno">
                                <b-select placeholder="Selecione o Terreno" v-model="animal.id_terreno" required>
                                    <option v-for="terreno in terrenos" :value="terreno.codigo" :key="terreno.id">{{ terreno.codigo }}</option>
                                </b-select>
                            </b-field>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <b-field label="Valor Compra">
                                <money v-model="animal.valor_compra" class="input"/>
                            </b-field>
                        </div>
                        <div class="column">
                            <b-field label="Valor Venda">
                                <money v-model="animal.valor_venda" class="input"/>
                            </b-field>
                        </div>
                        <!--<div class="column">-->
                            <!--<b-field label="Observação">-->
                                <!--<b-input placeholder="Digite uma observação para a saída."-->
                                         <!--v-model="saida.observacao"-->
                                         <!--required-->
                                         <!--name="motivo"/>-->
                            <!--</b-field>-->
                        <!--</div>-->
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <button class="button" type="button" @click="$parent.close()">Cancelar</button>
                    <button class="button is-info">Salvar</button>
                </footer>
            </div>
        </form>
    </div>
</template>


<script>
    import Constante from '../../../constante'
    import {mask} from 'vue-the-mask'

    export default {
        directives: {mask},
        created() {
            this.listarGastos()
            this.listaUsuarios()
            this.listaAnimalTipo()
            this.listarLote()
            this.listarTerreno()
        },
        data() {
            return {
                animal: {
                    id_lote: null,
                    id_animal_tipo: null,
                    id_terreno: null,
                    valor_venda: null,
                    valor_compra: null
                },
                errors: [],
                gastos: [],
                usuarios: [],
                animalTipos: [],
                lotes: [],
                terrenos: []
            }
        },
        methods: {
            listaUsuarios() {
                Constante.listaUsuarios().then(res => {
                    this.usuarios = res.data
                })
            },
            listaAnimalTipo() {
                Constante.listaAnimaisTipo().then(res => {
                    this.animalTipos = res.data
                })
            },
            listarGastos() {
                Constante.listaGasto().then(res => {
                    this.gastos = res.data
                })
            },
            listarLote() {
                Constante.listaLotes().then(res => {
                    this.lotes = res.data
                })
            },
            listarTerreno() {
                Constante.listaTerrenos().then(res => {
                    this.terrenos = res.data
                })
            },
            salvaAnimal() {
                Constante.salvaAnimal(this.saida).then(res => {
                    this.saida = []
                    this.$emit('close')
                }).catch(e => {
                    this.errors = e.response.data.message
                    this.$toast.open({
                        duration: 5000,
                        message: this.errors,
                        type: 'is-danger'
                    })
                })
            }
        }
    }
</script>
