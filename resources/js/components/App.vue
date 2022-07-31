<template>
    <div class="container">
        <div id="nav">
            <router-link :to="{ name: 'Home' }">Home</router-link>
            <router-link :to="{ name: 'About' }">About</router-link>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
</style>