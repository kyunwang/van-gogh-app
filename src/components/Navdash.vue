<template>
    	<nav>
			<h1>Multi Media Tour Dashboard</h1>
			<ul>
				<li><router-link to="/dashboard/">Floors</router-link></li>
				<li><router-link to="/dashboard/paintinglist">Paintings</router-link></li>
				<li><router-link to="/dashboard/devicelist">Devices</router-link></li>
			</ul>
		</nav>
</template>

<style lang="scss" scoped>
nav {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0 1em;
	background-color: rgba(0, 0, 0, 1);
	h1 {
		color: white;
	}
	ul {
		display: flex;
		flex-direction: row;
		li {
			border: none;
			padding: 1em 2em;
			margin-right: 0.5em;
			a {
				background-color: #454545;
				text-decoration: none;
				color: white;
				padding: 1em 2em;
				&.router-link-exact-active {
					background-color: #f0b0b1 !important;
				}
			}
		}
	}
}
</style>
