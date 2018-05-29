<template>
	<!-- Conditionally render the question based on ID -->
	<div class="quiz-question" v-if="id <= qNum">
		<p class="question-number">{{id}}.</p>
		<p class="sans-serif-font question-text">{{question}}</p>
		<!-- Iterate over quiz options, radio button for each; listen for optionSelected event, change things -->
		<quizOptions
			v-for="option in options"
			:optionText="option.option"
			@selectedEvent="nextQuestion(), optionSelected = $event">
		</quizOptions>
		<p v-model="optionSelected">{{optionSelected}}</p>
		<p class="sans-serif-font hint-text">{{hintText}}</p>
		<div class="bottom-border"></div>
	</div>
</template>

<script>
	// Import discreet QuizOptions component, register below in export object
	import QuizOptions from './QuizOptions.vue'

	export default {
		// Need the following props from the parent component: question, id, options and question number
		props: ['question', 'id', 'options', 'hintText', 'qNum'],
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

<style lang="scss">
	.quiz-question {
		width: 700px;
		margin: 0 auto;

		p {
			margin: 0;
			padding: 0;
		}

		.question-number {
			font-family: 'Arapey', serif;
			font-size: 45px;
			font-style: italic;
			text-align: center;
			padding: 12px 0;
		}

		.question-text {
			font-size: 24px;
			text-transform: uppercase;
			text-align: center;
			padding-bottom: 16px;
		}

		.hint-text {
			font-size: 14px;
			padding: 25px 12%;
			text-align: center;
		}

		.bottom-border {
			width: 625px;
			margin: 0 auto;
			height: 1px;
			border-bottom: 1px solid #999;
		}
	}
</style>