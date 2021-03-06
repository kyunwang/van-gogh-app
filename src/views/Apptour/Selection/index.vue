<template>
	<div>
		<form
			v-if="noJavascript"
			method="POST"
			action="/api/tour-select"
		>
			<transition-group
				class="item-container"
				tag="section"
				name="selected-item"
				mode="out-in"
				appear
			>
				<select-item
					v-for='(theme, i) in themes'
					v-if="!selectedThemes.includes(theme)"
					:key="theme + i"
					:theme="theme"
					:itemStyle="{
						overflow: 'hidden',
						backgroundImage: `url(/assets/images/${theme.imageUrl}')`
					}"
					:onSelect="addTheme"
				/>
			</transition-group>

			<footer>
				<transition-group
					tag="ul"
					name="selected-item"
					mode="out-in"
					appear
				>
					<li
						v-for="(theme, i) in selectedThemes"
						:key="i"
						@click="removeTheme(theme, i, $event)"
					>
						<selected-item :theme="theme" />
					</li>

				</transition-group>

				<vue-button
					:onClick="confirmTour"
					:isDisabled="isDisabled"
					:btnText="'Confirm'"
					:btnType="'submit'"
				/>
			</footer>
		</form>

		<main v-else>
			<transition-group
				tag="section"
				name="selected-item"
				appear
			>
				<select-item
					v-for='(theme, i) in themes'
					v-if="!selectedThemes.includes(theme)"
					:key="theme + i"
					:theme="theme"
					:itemStyle="{
						backgroundImage: `url(/assets/images/${theme.imageUrl}')`
					}"
					:onSelect="addTheme"
				/>
			</transition-group>

			<footer>
				<p v-if="selectedThemes.length === 1">
					Add one more theme
				</p>
				<transition-group
					tag="ul"
					name="selected-item"
					appear
				>
					<li
						v-for="(theme, i) in selectedThemes"
						:key="i"
						@click="removeTheme(theme, i, $event)"
					>
						<selected-item :theme="theme" />
					</li>
				</transition-group>

				<vue-button
					:onClick="confirmTour"
					:isDisabled="isDisabled"
					:btnText="'Confirm'"
					:btnType="'submit'"
				/>
			</footer>
		</main>
	</div>
</template>

<script>
import SelectItem from './SelectItem.vue';
import SelectedItem from './SelectedItem.vue';
import VueButton from '../../../components/Button.vue';

export default {
	components: {
		SelectItem,
		SelectedItem,
		VueButton,
	},
	props: [],
	data() {
		return {
			themes: this.$store.state.themes,
			selectedThemes: [],
			isDisabled: false,
			noJavascript: true,
		};
	},
	methods: {
		addTheme(theme) {
			if (this.selectedThemes.includes(theme)) return;
			this.selectedThemes.push(theme);
		},
		removeTheme(theme, i) {
			this.selectedThemes.splice(i, 1);
		},
		confirmTour(evt) {
			evt.preventDefault();
			const selected = this.selectedThemes.map(theme => theme.title);
			this.$store.dispatch('selectThemes', selected);

			this.$router.push('/tour-overview');
		},
		checkLength() {
			if (this.selectedThemes.length > 1) {
				this.isDisabled = false;
			} else {
				this.isDisabled = true;
			}
		},
	},
	beforeMount() {
		// If there is javascript we can set the button to disabled
		this.isDisabled = true;
		this.noJavascript = false;
	},
	watch: {
		// Watch the $route propertie and run method change
		selectedThemes: 'checkLength',
	},
};
</script>

<style lang='scss' scoped>
section {
	position: relative;
	display: flex;
	flex-direction: row;
	list-style: none;
	overflow-x: scroll;
	overflow-y: hidden;
	padding: 0;
	height: 45vh;
}

footer {
	display: flex;
	justify-content: space-between;
	position: fixed;
	bottom: 0;
	width: 100%;

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		min-height: 0.1rem;
		max-height: 0.1rem;
		width: 35%;

		background: #f4f4f4;
	}

	ul {
		display: flex;
		overflow: scroll;
		flex-wrap: nowrap;
		height: 3.8rem;
		width: 100%;
		margin-right: 5%;
		padding: 0;
	}

	li {
		min-width: 3.8rem;
		max-width: 3.8rem;
		margin-right: 5%;

		&:first-of-type {
			margin-left: 8%;
		}
	}
}

@media all and (min-width: 60rem) {
	footer {
		max-width: 50rem;
	}
}

.selected-item {
	display: inline-block;
	transition: all 1s;
	margin-right: 10px;
}

.selected-item-leave-active {
	position: absolute;
	transition: transform 0.3s;
}

.selected-item-leave-to {
	opacity: 0;
	transition: all 0.3s;
}

.selected-item-move {
	transition: transform 1s;
}



p {
	margin-left: 5%;
}
</style>
