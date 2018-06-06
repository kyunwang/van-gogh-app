<template>
<div id="app">
	<h2>Van Goh Tour</h2>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
</div>
</template>

<script>
export default {
	name: 'app',
	data() {
		return {
			title: 'hello',
		};
	},
};
</script>

<style>
</style>