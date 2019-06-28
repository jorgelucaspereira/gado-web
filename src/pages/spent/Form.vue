<style/>

<template>
    <div class="card">
        <form action="">
            <div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                    <p class="modal-card-title">Formulário - Animal</p>
                </header>
                <section class="modal-card-body">

                    <b-field label="Teste">
                        <b-input
                                v-mask = "'## / ## / ####'"
                                v-model="objeto"
                                name="diasVisibilidade"
                                data-vv-as="diasVisibilidade"/>
                    </b-field>

                    <b-field label="Teste">
                        <b-input
                                v-model="objeto"
                                name="diasVisibilidade"
                                data-vv-as="diasVisibilidade"/>
                    </b-field>
                </section>
                <footer class="modal-card-foot">
                    <button class="button" type="button" @click="$parent.close()">Cancelar</button>
                    <button class="button is-primary" @click="salvar()">Salvar</button>
                </footer>
            </div>
        </form>
    </div>
</template>


<script>
    import {mask} from 'vue-the-mask'

    export default {
        directives: {mask}
    }
</script>
