<template>
	<div>
		<p>{{question}}</p>
		<quizOptions v-for="option in options" :optionText="option.option"></quizOptions>
		<p>{{id}}</p>
	</div>
</template>

<script>
	import QuizOptions from './QuizOptions.vue'

	export default {
		props: ['question', 'id', 'options'],
		data: function () {
			return {

			}
		},
		components: {
			quizOptions: QuizOptions
		}
	}
</script>

<style lang="scss"></style>