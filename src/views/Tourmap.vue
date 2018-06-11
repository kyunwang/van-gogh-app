<template>
    <main>
        <h1>{{title}}</h1>
        <div class="map">
            <img src="/assets/floor1.svg" alt="floor 1">
			<a @click="paintingClick"><div class="circle"> 50 </div></a>
        </div>
        <button>Skip floor</button>
    </main>
</template>

<script>
export default {
	data() {
		return {
			title: `Floor 1`,
			paintingClick: function() {
				let button = document.querySelector('button');
				button.classList.add('buttonAnimation');
			},
		};
	},
};
</script>

<style lang="scss" scoped>
main {
	margin: 0 0.8em;

	h1 {
		color: white;
	}
	.map {
		width: 100%;
		img {
			width: 22em;
		}
	}
	button {
		position: fixed;
		right: 0;
		margin: 0 1em 0em 0;
		bottom: -4em;
		background-color: black;
		color: white;
		padding: 1em 1.7em;
		border: none;
		border-radius: 0.5em;
	}
	.buttonAnimation {
		bottom: 10px;
		transition: bottom 0.6s ease-in;
	}
	a {
		position: absolute;
		color: white;
		text-decoration: none;
		right: 19%;
		top: 49%;
		.circle {
			background-color: black;
			border-radius: 6em;
			padding: 0.5em;
			width: auto;
		}
	}
}
</style>