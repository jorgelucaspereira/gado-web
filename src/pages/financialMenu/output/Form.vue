<style/>

<template>
    <div class="card">
        <form @submit.prevent="salvaSaida">
            <div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                    <p class="modal-card-title">Formulário - Saída</p>
                </header>
                <section class="modal-card-body">
                    <div class="columns">
                        <div class="column">
                            <b-field label="Selecione o Gasto">
                                <b-select placeholder="Selecione o Gasto" v-model="saida.id_gasto" required>
                                    <option v-for="gasto in gastos" value="1">{{ gasto.id }}</option>
                                </b-select>
                            </b-field>
                        </div>
                        <div class="column">
                            <b-field label="Selecione o Usuário">
                                <b-select placeholder="Selecione o Usuário" v-model="saida.id_usuario" required>
                                    <option v-for="usuario in usuarios">{{ usuario.id }}</option>
                                </b-select>
                            </b-field>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <b-field label="Valor">
                                <money v-model="saida.valor" class="input"/>
                            </b-field>
                        </div>
                        <div class="column">
                            <b-field label="Observação">
                                <b-input placeholder="Digite uma observação para a saída."
                                         v-model="saida.observacao"
                                         required
                                         name="motivo"/>
                            </b-field>
                        </div>
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
        },
        data() {
            return {
                saida: {
                    id_gasto: null,
                    observacao: null,
                    valor: null,
                    id_usuario: null
                },
                errors: [],
                gastos: [],
                usuarios: []
            }
        },
        methods: {
            listaUsuarios() {
                Constante.listaUsuarios().then(res => {
                    this.usuarios = res.data
                })
            },
            listarGastos() {
                Constante.listaGasto().then(res => {
                    this.gastos = res.data
                })
            },
            salvaSaida() {
                Constante.salvaSaida(this.saida).then(res => {
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
