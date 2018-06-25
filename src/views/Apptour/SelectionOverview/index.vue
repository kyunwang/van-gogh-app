<template>
	<main>
		Selection overview page
		<h1>{{ this.$route.meta.title }}</h1>
	</main>
</template>

<script>
	import { tourSelect } from '../../../../services/http-service';

	export default {
		methods: {
			confirmTour() {
				// tourSelect(selected).then(res => {
				// 	// res is the generated tour
				// 	this.$store.dispatch('addTour', res);
				// 	this.$store.dispatch('connectSocket', io());
					
				// 	this.$store.state.socket.emit('startTour', res);
				// }).then(() => {
				// 	this.$router.push('/tour-map');
				// });
			}
		}
	};
</script>

<style lang="scss" scoped>

</style>
