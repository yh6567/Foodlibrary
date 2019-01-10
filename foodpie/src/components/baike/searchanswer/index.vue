<template>
    <div>
        <search-com/>
        <foodlist-com/>
    </div>
</template>

<script>
    import search from '../search/search'
    import foodlist from  './foodList'
    export default {
        components:{
            'search-com':search,
            'foodlist-com':foodlist,
        }
    }
</script>

<style>

</style>
