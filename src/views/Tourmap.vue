<template>
    <main>
        <h1>{{title}}</h1>
        <div class="map">
            <img src="/assets/floor1.svg" alt="floor 1">
			<a href="#"><div class="circle"> 60 </div></a>
        </div>
        <button>Skip floor</button>
    </main>
</template>

<script>
export default {
	data() {
		return {
			title: `Floor 1`,
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
		right: 4;
		bottom: -30px;
		background-color: black;
		color: white;
		padding: 0.5em 0.7em;
		border: none;
		border-radius: 0.5em;
	}
	#buttonAnimation {
		bottom: 3;
		transition: bottom 2s ease-in;
	}
}
</style>