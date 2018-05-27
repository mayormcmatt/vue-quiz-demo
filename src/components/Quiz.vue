<template>
	<!-- Conditionally render the question based on ID -->
	<div v-if="id <= qNum">
		<p>{{id}}.</p>
		<p>{{question}}</p>
		<!-- Iterate over quiz options, radio button for each; listen for optionSelected event, change things -->
		<quizOptions
			v-for="option in options"
			:optionText="option.option"
			@selectedEvent="nextQuestion(), optionSelected = $event">
		</quizOptions>
		<p v-model="optionSelected">{{optionSelected}}</p>
	</div>
</template>

<script>
	// Import discreet QuizOptions component, register below in export object
	import QuizOptions from './QuizOptions.vue'

	export default {
		// Need the following props from the parent component: question, id, options and question number
		props: ['question', 'id', 'options', 'qNum'],
		components: {
			quizOptions: QuizOptions
		},
		data() {
			return {
				optionSelected: ''
			}
		},
		methods: {
			nextQuestion: function() {
				this.$emit('nextQuestionPlease')
			}
		}
	}
</script>

<style lang="scss"></style>