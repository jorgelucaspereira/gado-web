<style/>

<template>
    <section class="container">
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">{{}}</p>
                    <p class="subtitle">{{}}</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">{{}}</p>
                    <p class="subtitle">{{}}</p>
                </article>
            </div>
        </div>
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">{{}}</p>
                    <p class="subtitle">{{}}</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">{{}}</p>
                    <p class="subtitle">{{}}</p>
                </article>
            </div>
        </div>
    </section>
</template>


<script>
    import Constante from '../../constante'

    export default {
        created() {
            this.listaSaidas()
        },
        data() {
            return {
                saidas: []
            }
        },
        methods: {
            listaSaidas() {
                Constante.listaSaidas().then(res => {
                    this.saidas = res.data
                })
            }
        }
    }
</script>
