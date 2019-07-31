<style/>

<template>
    <b-tabs type="is-boxed" expanded>
        <b-tab-item>
            <template slot="header">
                <b-icon id="margin-right" icon="horse" class="m-r-xs"/>
                <span> Lista de Animais <b-tag rounded> {{ this.animais.length }} </b-tag> </span>
            </template>
            <animais @atualizar="listaAnimais()"></animais>
        </b-tab-item>

        <b-tab-item>
            <template slot="header">
                <b-icon id="margin-right" icon="horse-head" class="m-r-xs"/>
                <span> Lista de Animais Tipos <b-tag rounded> {{ this.animaisTipos.length }} </b-tag> </span>
            </template>
            <animais-tipos @atualizar="listaAnimaisTipos()"></animais-tipos>
        </b-tab-item>

        <b-tab-item>
            <template slot="header">
                <b-icon id="margin-right" icon="newspaper" class="m-r-xs"/>
                <span> Lista de Lotes <b-tag rounded> {{ this.lotes.length }} </b-tag> </span>
            </template>
            <lotes @atualizar="listaLotes()"></lotes>
        </b-tab-item >
    </b-tabs>
</template>

<script>
    import Constante from '../../constante'
    import Animais from '../../pages/animalMenu/animal/List'
    import AnimaisTipos from '../../pages/animalMenu/animalType/List'
    import Lotes from '../../pages/animalMenu/lot/List'

    export default {
        components: { Animais, AnimaisTipos, Lotes },
        created() {
            this.listaAnimais()
            this.listaLotes()
            this.listaAnimaisTipos()
        },
        data() {
            return {
                animais:[],
                animaisTipos:[],
                lotes:[]
            }
        },
        methods: {
            listaAnimais(){
                Constante.listaAnimais().then(res =>{
                    this.animais = res.data
                })
            },
            listaLotes(){
                Constante.listaLotes().then(res =>{
                    this.lotes = res.data
                })
            },
            listaAnimaisTipos(){
                Constante.listaAnimaisTipo().then(res =>{
                    this.animaisTipos = res.data
                })
            }
        }
    }
</script>
