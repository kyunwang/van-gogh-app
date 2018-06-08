<template>
    <main>
        <h1>{{title}}</h1>
        <div class="map">
            <img src="/assets/floor1.svg" alt="floor 1">
        </div>
        <button>Go to next floor</button>
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

<style>
h1 {
	color: white;
}
</style>