<style lang="scss">
    // Import Bulma's core
    @import "~bulma/sass/utilities/_all";

    $primary: #209CEE;
    $primary-invert: findColorInvert($primary);

    // Setup $colors to use as bulma classes
    $colors: (
            "white": ($white, $black),
            "black": ($black, $white),
            "light": ($light, $light-invert),
            "dark": ($dark, $dark-invert),
            "primary": ($primary, $primary-invert),
            "info": ($info, $info-invert),
            "success": ($success, $success-invert),
            "warning": ($warning, $warning-invert),
            "danger": ($danger, $danger-invert)
    );

    // Import Bulma and Buefy styles
    @import "~bulma";
    @import "~buefy/src/scss/buefy";
    #app{
        border-radius: 20px;
        margin-top: 15px;
        margin-right: 80px;
        margin-left: 80px;
        margin-bottom: 15px;
        background-color: #FAFAFA;
    }
</style>

<template>
    <div id="app">
        <div class="navbar-start" id="teste"><hr/>
            <home-menu/><hr/>
        </div>
        <hr/><div class="container">
            <router-view/>
        </div>
        <div><hr/>
            <home-footer class="footer"/>
        </div>
    </div>
</template>

<script>
    import HomeMenu from "./pages/home/HomeMenu";
    import HomeFooter from "./pages/home/HomeFooter";

    export default {
        components: {HomeMenu, HomeFooter}
    }
</script>

