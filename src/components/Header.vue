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
		methods: {
			checkRoute() {
				// console.log(this.$route);
			}
		}
	};
</script>

<style lang="scss" scoped>
	header {
		padding: .4rem .8rem;
		color: #f3f3f3;
	}
</style>
