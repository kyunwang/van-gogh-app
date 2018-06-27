<script>
import { Line, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;

export default {
	extends: Line,
	// We are extending the base chart class as mentioned above
	mixins: {reactiveProp},
	props: ['chartData'],
	data() {
		return {
			options: {
				//Chart.js options
				scales: {
					yAxes: [
						{
							ticks: {
<<<<<<< HEAD
								fontColor: "white",
=======
								beginAtZero: true,
								stepSize: 2,
								suggestedMin: 0,
								suggestedMax: 16,
								maxTicksLimit: 6
>>>>>>> ae5056a7f7776557b92e4b241d4ade4596570478
							},
							gridLines: {
								display: true,
							},
						},
					],
					xAxes: [
						{
							gridLines: {
								display: false,
							},
							ticks:{
								fontColor: "white",
							}
						},
					],
				},
				legend: {
					display: false,
				},
				responsive: true,
				maintainAspectRatio: false,
				animation: false,
			},
		};
	},
	mounted() {
		// this.chartData is created in the mixin
		this.renderChart(this.chartData, this.options);
	},
	watch: {
		chartData() {
			console.log('changed');
			this.renderChart(this.chartData, this.options);
			
		}
	}
};
</script>
