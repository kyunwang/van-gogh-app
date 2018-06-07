<template>
	<header>
		<h3 @click="goBack">header</h3>
		<p @click="checkRoute">CHECK</p>
	</header>
</template>

<script>
export default {
	props: [],
	data() {
		return {};
	},
	methods: {
		goBack() {
			if (this.$route.path !== '/') {
				console.log('Going back');

				this.$router.go(-1);
			}
		},
		checkRoute() {
			console.log(this.$route);
		},
	},
};
</script>

<style lang="scss" scoped>
</style>