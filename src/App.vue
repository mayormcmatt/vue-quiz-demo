<template>
	<div id="app">
		<headerComponent></headerComponent>

		<div class="main-content">
			<heroComponent></heroComponent>
			<!-- Iterate over question objects in JSON, render that many quizComponent elements, bind the individual questions and options so as to pass them as props into the component; listen for nexQuestionPlease event, do stuff -->
			<quizComponent v-for="question in questions" :question="question.question" :id="question.id" :options="question.options" :hintText="question.hintText" :qNum="qNum" @nextQuestionPlease="qNum++">
			</quizComponent>
		</div>

		<footerComponent></footerComponent>
	</div>
</template>

<script>
	// Import Quiz component, register below in export object
	import Header from './components/Header.vue'
	import Hero from './components/Hero.vue'
	import Quiz from './components/Quiz.vue'
	import Footer from './components/Footer.vue'

	export default {
		name: 'app',
		data() {
			return {
				jsonURL: 'https://raw.githubusercontent.com/mayormcmatt/vue-quiz-demo/master/src/assets/quizQuestions.json',
				questions: [],
				userResponses: [],
				qNum: 1
			}
		},
		components: {
			headerComponent: Header,
			heroComponent: Hero,
			quizComponent: Quiz,
			footerComponent: Footer
		},
		// Lifecycle hook: on Vue app creation run a fetch of the JSON and then set response as data property
		created: function () {
			fetch(this.jsonURL)
				.then(response => response.json())
				.then(response => {
					this.questions = response.questions
				})
		}
	}
</script>

<style lang="scss">
	.main-content {
		margin: 0 auto;
		width: 1300px;
	}
</style>