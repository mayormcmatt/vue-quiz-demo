<template>
	<div id="app">
		<!-- Iterate over question objects in JSON, render that many quizComponent elements, bind the individual questions and options so as to pass them as props into the component -->
		<quizComponent v-for="question in questions" :question="question.question" :id="question.id" :options="question.options"></quizComponent>
	</div>

	<!-- <button @click=""></button> -->
</template>

<script>
	// Import Quiz component, register below in export object
	import Quiz from './components/Quiz.vue'

	export default {
		name: 'app',
		data() {
			return {
				jsonURL: 'https://raw.githubusercontent.com/mayormcmatt/vue-quiz-demo/master/src/assets/quizQuestions.json',
				questions: [],
				userResponses: []
			}
		},
		components: {
			quizComponent: Quiz
		},
		// Lifecycle hook: on Vue app creation run a fetch of the JSON and then set response as data property
		created() {
			fetch(this.jsonURL)
				.then(res => res.json())
				.then(res => {
					this.questions = res.questions
				})
		}
	}
</script>

<style lang="scss"></style>