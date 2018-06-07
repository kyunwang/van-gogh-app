<template>
	<main>
    	<h1>{{ title }}</h1>
		<section class="vanGoghMain">
			<div class='text-image'>
				<router-link to="/selection"><img src="https://www.arlestourisme.com/assets/components/phpthumbof/cache/van_gogh_cafe.b349b397fbeeb31f34f671c94d95eb3f16.jpg" alt="people sitting in a restaurant painting">
				<div class="text-block">
					<h2>Personalised tour</h2>
				</div>
				</router-link>
			</div>
			<div class="pictures-in-twos">
				<div class='text-image'>
				<img src="https://www.arlestourisme.com/assets/components/phpthumbof/cache/van_gogh_cafe.b349b397fbeeb31f34f671c94d95eb3f16.jpg" alt="people sitting in a restaurant painting">
				<div class="text-block">
					<h4>Personalised tour</h4>
				</div>
			</div>
				<div class='text-image'>
				<img src="https://www.arlestourisme.com/assets/components/phpthumbof/cache/van_gogh_cafe.b349b397fbeeb31f34f671c94d95eb3f16.jpg" alt="people sitting in a restaurant painting">
				<div class="text-block">
					<h4>Personalised tour</h4>
				</div>
			</div>
			</div>
		</section>
		<section>
			<div class='text-image'>
				<router-link to="/selection"><img src="https://img.whichmuseum.com/van-gogh-museum/large/van-gogh-japan.png" alt="people sitting in a restaurant painting">
				<div class="text-block">
					<h2>van Gogh x Japan</h2>
				</div>
				</router-link>
			</div>
		</section>
	</main>
</template>

<script>
export default {
	data() {
		return {
			title: 'Choose your tour',
		};
	},
};
</script>
 
<style lang="scss" scoped>
section {
	margin-left: 1em;

	.text-image {
		position: relative;
		width: 90%;
		img {
			width: 100%;
		}
		.text-block {
			position: absolute;
			bottom: 1.2rem;
			right: 1.2rem;
			background-color: black;
			color: white;
			padding-left: 1.2rem;
			padding-right: 1.2rem;
		}
	}
}

.pictures-in-twos {
	display: flex;
	flex-direction: row;
	width: 90%;
	div {
		width: 90%;
		img {
			height: 15em;
		}
	}
	div:first-of-type {
		margin-right: 0.6em;
	}
}
</style>