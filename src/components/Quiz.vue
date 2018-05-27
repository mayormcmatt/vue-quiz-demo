<template>
	<!-- Conditionally render the question based on ID -->
	<div v-if="id <= qNum">
		<p>{{id}}.</p>
		<p>{{question}}</p>
		<quizOptions v-for="option in options" :optionText="option.option"></quizOptions>
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
		}
	}
</script>

<style lang="scss"></style>