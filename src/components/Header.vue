<template>
	<header>
		<!-- <router-link to="/" > -->
			<!-- <button> -->
				<icon-back></icon-back>
			<!-- </button> -->
		<!-- </router-link> -->
	</header>
</template>

<script>
	import IconBack from './icons/IconBack.vue';

	export default {
		props: [],
		components: {
			IconBack
		},
		data() {
			return {};
		},
		methods: {}
	};
</script>

<style lang="scss" scoped>
	header {
		padding: .4rem .8rem;
		color: #f3f3f3;
	}
</style>
