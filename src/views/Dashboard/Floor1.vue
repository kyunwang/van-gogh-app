<template>
<div class="dashboard-floor">
		<nav-dash>
		</nav-dash>
	<main>	
		<section class="linechart">
			<h2>Floor 1 <span>Every visitor who is present on this floor</span></h2>
			<line-chart :chartData="floorOneChart"></line-chart>
			<h2>Paintings</h2>
			<ul>
				<li v-for="(item, index) in images" :key="index" :style="{backgroundImage:`url(/assets/images/${item.imageUrl})`}">
					<router-link :to="'/dashboard/floor-1/' + item.number">
							{{item.number}}
					</router-link>
				</li>
			</ul>
		</section>
		<section class="overview-navigation">
				<ul>
					<li class="verd0">
						<a  href="/dashboard/floor-0">
							<div>
								<h3>Floor 0</h3>
								<line-chart :chartData="floorZeroChart" :width="400" :height="200" />
							</div>
						</a>
					</li>
					<li class="verd2">
						<a href="/dashboard/floor-2">
							<div>
								<h3>Floor 2</h3>
								<line-chart :chartData="floorTwoChart" :width="400" :height="200" />
							</div>
						</a>
					</li>
					<li class="verd3">
						<a  href="/dashboard/floor-3">
							<div>
								<h3>Floor 3</h3>
								<line-chart :chartData="floorThreeChart" :width="400" :height="200" />
							</div>
						</a>
					</li>
				</ul>
		</section>
	</main>
</div>
</template>



<script>
import LineChart from '../../components/Charts/LineChart.vue';
import LazyImage from '../../components/LazyImage.vue';
import NavDash from '../../components/Navdash.vue';
import { generateFakeTime, createInterval, generateNumber, getTime } from '../../../services/helpers.js';

export default {
	name: 'Dashboard',
	components: { LineChart, LazyImage, NavDash },
	data() {
		return {
			labels: [getTime(new Date(), true)],
			floorZeroData: [4],
			floorOneData: [0],
			floorTwoData: [5],
			floorThreeData: [7],
			floorZeroChart: null,
			floorOneChart: null,
			floorTwoChart: null,
			floorThreeChart: null,
			socket: null,
			images: [
				{
					number: '50',
					description: 'the famous potatoeaters piece of van Gogh',
					imageUrl: 'aardappeleters-min.jpg',
				},
				{
					number: '28',
					description: 'The cottage',
					imageUrl: 'thecottage-min.jpg',
				},
				{
					number: '16',
					description:
						'The theme. An image of a woman in a blue dress to depict the theme Legacy of Van Gogh',
					imageUrl: 'peasantheads-min.jpg',
				},
				{
					number: '13',
					description:
						"The theme. An image of a portrait of Vincent's brother Theo to depict the theme Family Van Gogh",
					imageUrl: 'stillbiblelife-min.jpg',
				},
				{
					number: '41',
					description:
						'The theme. An image of red cabbages and onions to depict the theme Learning by doing',
					imageUrl: 'skeletSigaret-min.jpg',
				},
				{
					number: '55',
					description:
						'The theme. An image of a self portrait of Vincent with a grey felt hat to depict the theme The modern portrait',
					imageUrl: 'headofprostitute-min.jpg',
				},
				{
					number: '38',
					description:
						'The theme. An image of people eating potatoes to depict the theme Changing techniques',
					imageUrl: 'treesandundergrowth-min.jpg',
				},
				{
					number: '18',
					description: 'The theme. An image of Sunflowers to depict the theme Simplicity',
					imageUrl: 'gardenwithcourtingcouple-min.jpg',
				},
				{
					number: '14',
					description:
						'The theme. An image of a wheatfield to depict the theme The wealth of nature',
					imageUrl: 'grijzeVilthoed-min.jpg',
				},
				{
					number: '30',
					description:
						'The theme. An image of self portrait as painter to depict the theme Driven and goal oriented',
					imageUrl: 'portretAlsSchilder-min.jpg',
				},
				{
					number: '02',
					description:
						'The theme. An image of the seascape new les saintes-maties-de-la-mer to depict the theme Color effects',
					imageUrl: 'pinkOrchard-min.jpg',
				},
				{
					number: '29',
					description:
						'The theme. An image of the hospital garden to depict the theme Work as a medicine',
					imageUrl: 'anoldwomanofarles-min.jpg',
				},
				{
					number: '53',
					description:
						'The theme. An image of almond blossoms to depict the theme In search of perfect light',
					imageUrl: 'stoelVGauguin-min.jpg',
				},
				{
					number: '37',
					description: 'The theme. An image of a sower to depict the theme Conserving Van Gogh',
					imageUrl: 'zaaier-min.jpg',
				},
				{
					number: '04',
					description:
						'The theme. An image of a skeleton who is smoking to depict the theme A different mind',
					imageUrl: 'yellowhouse-min.jpg',
				},
				{
					number: '76',
					description:
						'The theme. An image of a skeleton who is smoking to depict the theme A different mind',
					imageUrl: 'zonnebloemen-min.jpg',
				},
			],
		};
	},
	created() {
		this.fillData();
	},
	mounted() {
		// Create an socket instance for dashboard
		this.socket = io();
		this.socket.emit('Dashboard');

		this.socket.on('startTour', this.startTour);
		this.socket.on('cancelTour', this.cancelTour);
		this.socket.on('completeTour', this.completeTour);
		this.socket.on('sendPosition', this.sendPosition);
		this.socket.on('exitAudio', this.exitAudio);

		// Create a set interval
		this.dataInterval = createInterval(3000, this.tourInterval);

				// gradient color 1
		this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);

		this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)');
		this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
		this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

		// gradient color 2
		this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);

		this.gradient2.addColorStop(0, 'rgb(65, 184, 131, 0.1)');
		this.gradient2.addColorStop(0.5, 'rgb(65, 184, 131, 0.5)');
		this.gradient2.addColorStop(1, 'rgb(65, 184, 131, 0.25)');
	},
	methods: {
			fillData() {
				(this.floorZeroChart = {
					labels: this.labels,
					datasets: [
						{
							label: 'visitors',
							pointBorderColor: 'white',
							borderColor: '#f89842',
							backgroundColor: this.gradient,
							data: this.floorZeroData,
						},
					],
				}),
					(this.floorOneChart = {
						labels: this.labels,
						datasets: [
							{
								label: 'visitors',
								pointBorderColor: 'white',
								borderColor: '#f87979',
								backgroundColor: this.gradient2,
								data: this.floorOneData,
							},
						],
					}),
					(this.floorTwoChart = {
						labels: this.labels,
						datasets: [
							{
								label: 'visitors',
								pointBorderColor: 'white',
								borderColor: '#acd696',
								backgroundColor: this.gradient3,
								data: this.floorTwoData,
							},
						],
					});
				this.floorThreeChart = {
					labels: this.labels,
					datasets: [
						{
							label: 'visitors',
							pointBorderColor: 'white',
							borderColor: '#00abdf',
							backgroundColor: this.gradient4,
							data: this.floorThreeData,
						},
					],
				};
		},
		fetchData() {},
		startTour(tourData, counter) {
			this.updateTourData(tourData, counter);
		},
		cancelTour(tourData, counter) {
			this.updateTourData(tourData, counter);
		},
		completeTour(tourData, counter) {
			this.updateTourData(tourData, counter);
		},
		sendPosition(tourData, counter, paintingId) {
			// console.log(tourData, counter, paintingId);
		},
		exitAudio(tourData, counter) {},
		updateTourData(tourData, counter) {
			this.floorOneData.push(counter);
		},
		generateVisitors() {
			const labelsLength = this.labels.length;
			const floorZeroLength = this.floorZeroData.length;

			if (labelsLength !== floorZeroLength) {
				this.floorZeroData.push(generateNumber(this.floorZeroData[this.floorZeroData.length - 1]));
				this.floorTwoData.push(generateNumber(this.floorTwoData[this.floorTwoData.length - 1]));
				this.floorThreeData.push(
					generateNumber(this.floorThreeData[this.floorThreeData.length - 1])
				);
			}

			if (labelsLength === 8) {
				this.floorZeroData.splice(0, 1);
				this.floorTwoData.splice(0, 1);
				this.floorThreeData.splice(0, 1);
			}
		},
		generateNewLabel() {
			const newLabel = getTime(new Date(), true);
			this.labels.push(newLabel);
		},
		tourInterval() {
			this.generateNewLabel();
			const floorOneLength = this.floorOneData.length;
			const labelsLength = this.labels.length;

			if (labelsLength !== floorOneLength) {
				this.floorOneData.push(this.floorOneData[floorOneLength - 1]);
			}

			this.generateVisitors();

			if (labelsLength === 8) {
				this.floorOneData.splice(0, 1);
				this.labels.splice(0, 1);
			}
			this.fillData();
		},
	},
};
</script>

<style lang="scss" scoped>
.dashboard-floor {
	background-color: black;
	height: 100%;
	padding: 0 1em;
	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 2rem;
		background-color: rgba(0, 0, 0, 1);
		h1 {
			color: white;
		}
	}
	main {
		@media screen and (min-width: 40em) {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}

		.linechart {
			background-color: #464646;
			border-radius: 1rem;
			margin-bottom: 2em;

			padding: 1em;
			@media screen and (min-width: 40em) {
				width: 100%;
				margin-right: 2em;
			}
			h1,
			h2 {
				color: white;
				span {
					font-size: 0.5em;
					font-style: italic;
					color: white;
					margin-bottom: 0.4em;
				}
			}
			ul {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				margin-right: 2em;
				list-style: none;
				li {
					background-size: cover;
					background-repeat: no-repeat;
					border-radius: 1rem;
					margin-right: 0.3em;
					margin-bottom: 0.5em;
					@media screen and (min-width: 40em) {
						margin-right: 1em;
						margin-bottom: 1em;
					}
					a {
						display: block;
						padding: 4em 3em;
						color: white;
						text-decoration: none;
						text-shadow: 2px 2px 5px black;
					}
				}
			}
		}
		.overview-navigation {
			ul {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				margin: 0;
				padding: 0;
				list-style: none;
				li {
					margin-bottom: 2em;
					@media screen and (min-width: 40em) {
						margin-right: 2em;
					}
					a {
						text-decoration: none;
						padding: 1rem 0rem;
						div {
							padding: 0.5em;
							background-color: #454545;
							border-radius: 1rem;
							max-width: 86vw;
							h3 {
								color: white;
							}
						}
					}
				}
			}
		}
	}
	.floorplan {
		background-color: #464646;
		border-radius: 1rem;
		margin-bottom: 2em;
		padding: 1em;
		svg {
			width: 100%;
			padding-top: 2.5em;
		}
	}
}
</style>
