<template>
	<div>
		<label>
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

<style lang="scss"></style>