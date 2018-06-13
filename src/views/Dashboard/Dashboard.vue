<template>
	<div class="dashboard--content">
		<nav>
			<h1>MMT Dashboard</h1>
			<input id="search" type="text" name="search">
		</nav>
		<main>
			<section>
				<h2>Verdieping 0</h2>
				<table>
					<tr>
						<th scope="col">Schilderij</th>
						<th scope="col">Bezoekers</th>
						<th scope="col">druk</th>
					</tr>
					<tr class='clickable-row' data-href='/painting-50'>
						<td>#50 Aardappeleters</td>
						<td>99</td>
						<td>druk</td>
					</tr>
				</table>
			</section>
			<section>
				<h2>Verdieping 1</h2>
				<ul>
					<li></li>
				</ul>
			</section>
			<section>
				<h2>Verdieping 2</h2>
				<ul>
					<li></li>
				</ul>
			</section>
			<section>
				<h2>Verdieping 3</h2>
				<ul>
					<li></li>
				</ul>
			</section>
		</main>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
.dashboard--content {
	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 2rem;
		background-color: rgba(224, 90, 50, 1);
		#search {
			height: 2rem;
			border-radius: 0.8rem;
			border: none;
		}
		h1 {
			color: white;
		}
	}
}
</style>
