<template>
    <div class="min-height">
        <Header-com></Header-com>
        <Name-com></Name-com>
        <Details-com></Details-com>
        <Footer-com></Footer-com>
    </div>
</template>

<script>
    import Header from './foodDetailHeader';
    import Name from './foodDetailName';
    import Details from './foodDetailDetails';
    import Footer from '../footer/index';
    export default {
        components:{
            'Header-com':Header,
            'Name-com':Name,
            'Details-com':Details,
            'Footer-com':Footer,
        },
    }
</script>

<style lang='scss' scoped>
    .min-height{
        background: #F6F6F6;
        height: 13.34rem;
        overflow-x: scroll;
    }
</style>
