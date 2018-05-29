<template>
	<div class="quiz-option">
		<label class="sans-serif-font">
			<input type="radio"
				:value="optionText"
				v-model="selectedValue"
				@click="selected">
					{{optionText}}
		</label>
	</div>
</template>

<script>
	export default {
		props: ['optionText'],
		data() {
			return {
				selectedValue: ''
			}
		},
		methods: {
			selected: function() {
				this.$emit('selectedEvent', this.selectedValue)
			}
		}
	}
</script>

<style lang="scss">
	.quiz-option {
		padding: 16px 0 16px 25px;
		width: 425px;
		margin: 0 auto;

		label {
			margin-left: -25px;
		}
	}
</style>