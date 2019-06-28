<style/>

<template>
    <section>
        <h1>oi</h1>
        <b-field
                label="Error"
                type="is-danger"
                message="Something went wrong with this field">
            <b-select placeholder="Select a character">
                <option v-for="item in animaisTipos"> {{ item.nome }}</option>
            </b-select>
        </b-field>
        <a class="button is-medium">
    <span class="icon">
      <i class="fab fa-github"></i>
    </span>
            <span>GitHub</span>
        </a>
    </section>
</template>


<script>
    import Constante from '../../constante'

    export default {
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
            }
        }
    }
</script>
