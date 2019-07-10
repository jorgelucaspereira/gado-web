<style/>

<template>
    <b-tabs type="is-boxed" expanded>
        <b-tab-item>
            <template slot="header">
                <b-icon id="margin-right" icon="money-bill-alt" class="m-r-xs"/>
                <span> Lista de Gastos <b-tag rounded> {{ this.gastos.length }} </b-tag> </span>
            </template>
            <gasto @atualizar="listarGastos()"></gasto>
        </b-tab-item>

        <b-tab-item>
            <template slot="header">
                <b-icon id="margin-right" icon="angle-double-up" class="m-r-xs"/>
                <span> Lista de Entradas <b-tag rounded> {{ this.entradas.length }} </b-tag> </span>
            </template>
            <entradas @atualizar="listaEntradas()"></entradas>
        </b-tab-item>

        <b-tab-item>
            <template slot="header">
                <b-icon id="margin-right" icon="angle-double-down" class="m-r-xs"/>
                <span> Lista de Saídas <b-tag rounded> {{ this.saidas.length }} </b-tag> </span>
            </template>
            <saidas @atualizar="listaSaidas()"></saidas>
        </b-tab-item>
    </b-tabs>
</template>

<script>
    import Constante from '../../constante'
    import Gasto from '../financialMenu/spent/List'
    import Entradas from '../financialMenu/input/List'
    import Saidas from '../financialMenu/output/List'

    export default {
        components: { Gasto, Entradas, Saidas },
        created() {
            this.listarGastos()
            this.listaSaidas()
            this.listaEntradas()
        },
        data() {
            return {
                gastos: [],
                saidas: [],
                entradas: []
            }
        },
        methods: {
            listarGastos() {
                Constante.listaGasto().then(res => {
                    this.gastos = res.data
                })
            },
            listaSaidas() {
                Constante.listaSaidas().then(res => {
                    this.saidas = res.data
                })
            },
            listaEntradas() {
                Constante.listaEntradas().then(res => {
                    this.entradas = res.data
                })
            }
        }
    }
</script>
