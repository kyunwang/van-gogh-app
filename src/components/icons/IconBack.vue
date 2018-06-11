<template>
	<svg
		@click="goBack"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 48 48"
		width="48"
		height="48"
		aria-labelledby="back"
		role="presentation"
	>
		<title>Back button</title>
		<g class="nc-icon-wrapper" fill="#111111">
			<path d="M42 22H13.66l7.17-7.17L18 12 6 24l12 12 2.83-2.83L13.66 	26H42z"/>
		</g>
	</svg>
</template>

<script>
	export default {
		props: ['goBack'],
		methods: {
			watchStart() {
				console.log('Start icon');
			},
			goBack() {
				if (this.$route.path !== '/') {
					console.log('Going back');
					this.$router.go(-1);
				}
			},
		}
	};
</script>
