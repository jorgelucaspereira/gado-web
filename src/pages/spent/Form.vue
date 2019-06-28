<style/>

<template>
    <div class="card">
        <form @submit="salvar">
            <div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                    <p class="modal-card-title">Formulário - Animal</p>
                </header>
                <section class="modal-card-body">

                    <b-field label="Motivo">
                        <b-input
                                v-model="objeto.motivo"
                                name="motivo"
                                data-vv-as="Motivo"
                                v-validate="'required'"/>
                    </b-field>

                    <b-field label="Motivo">
                        <b-input
                                v-model="objeto.pago"
                                name="motivo"
                                data-vv-as="Motivo"
                                v-validate="'required'"/>
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
    import Constante from '../../constante'

    export default {
    }
</script>
