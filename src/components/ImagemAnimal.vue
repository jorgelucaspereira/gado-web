<style scoped>
    .redondo {
        border-radius: 100%;
    }
</style>

<template>
    <b-tooltip :label="nome" type="is-info">
        <img class="img-circle redondo" :src="link" width="60"/>
    </b-tooltip>
</template>

<script>

    export default {
        props: {
            link: {
                type: String
            },
            nome: {
                type: String
            }
        }
    }
</script>
