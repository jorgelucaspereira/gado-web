<style/>

<template>
    <div class="card">
        <form @submit.stop.prevent="salvaGasto(id)">
            <div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                    <p class="modal-card-title">Formulário - Gasto</p>
                </header>
                <section class="modal-card-body">
                    <div class="columns">
                        <div class="column">
                            <b-field label="Motivo">
                                <b-input placeholder="Digite o motivo do gasto."
                                         v-model="gasto.motivo"
                                         required
                                         name="motivo"/>
                            </b-field>
                        </div>

                        <div class="column">
                            <b-field label="Valor">
                                <money v-model="gasto.valor" required class="input"/>
                            </b-field>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <b-field label="Pago">
                                <b-switch v-model="gasto.pago"
                                          name="pago">
                                    {{ gasto.pago ? 'Sim' : 'Não'}}
                                </b-switch>
                            </b-field>
                        </div>
                        <div class="column">
                            <b-field label="Necessário">
                                <b-switch v-model="gasto.necessario"
                                          name="necessario">
                                    {{ gasto.necessario ? 'Sim' : 'Não'}}
                                </b-switch>
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
        data() {
            return {
                gasto: {
                    id: null,
                    motivo: '',
                    valor: '',
                    pago: false,
                    necessario: false
                },
                errors: []
            }
        },
        methods: {
            salvaGasto(id) {
                Constante.salvaGasto(this.gasto).then(res => {
                    this.gasto = []
                    this.$emit('close')
                }).catch(e => {
                    this.errors = e.response.data.message
                    this.$toast.open({
                        duration: 5000,
                        message: this.errors,
                        type: 'is-danger'
                    })
                })
            },
            deletaGasto() {
                Constante.deletaGasto(objeto.id).then(res => {
                })
            }
        }
    }
</script>
