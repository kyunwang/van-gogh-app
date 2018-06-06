<template>
	<div>
		<h2>Header and back</h2>
		<section>List of first half</section>
		<section>List of last half</section>
		<footer>
			<section>selection</section>
			<button @click="test">confirm</button>
		</footer>
	</div>
</template>

<script>
	export default {
		props: ['backTo'],
		data() {
			return {}
		},
		methods: {
			test() {
				console.log('Got clicked');
			}
		},
		created() {}
	}
</script>

<style lang="scss" scoped>
</style>