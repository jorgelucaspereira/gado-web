<style/>

<template>
    <div class="card">
        <form @submit.stop.prevent="$emit('submit')">
            <section class="card-content">
                <h1 class="title">
                    <b-icon :icon="icone" class="m-r-sm" size="is-small" v-if="icone"/> {{ titulo }}
                </h1>
                <slot/>
            </section>
            <footer class="b-t">
                <b-button></b-button>
            </footer>
        </form>
    </div>
</template>


<script>
    export default {
    }
</script>
