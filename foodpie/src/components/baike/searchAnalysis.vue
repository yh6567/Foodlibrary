<template>
    <div>
     <mt-header fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back" :title="title">{{title}}e</mt-button>

      </router-link>
      <select slot="right">
          <option value="1">全部</option>
            <option v-for="i in foodFamilylist">{{i.name}}</option>
      </select>

    </mt-header>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
