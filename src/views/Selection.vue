<template>
	<div>
		<h2>Header and back</h2>
		<section>List of first half</section>
		<section>List of last half</section>
		<footer>
			<section>selection</section>
			<button @click="$router.go(-1)">confirm</button>
		</footer>
	</div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
	props: ['backTo'],
	data() {
		return {};
	},
	methods: {
		test() {
			console.log('Got clicked');
		},
	},
	created() {},
};
</script>

<style lang="scss" scoped>
</style>