<template>
	<div>
		<slot>{{questions}}</slot>
	</div>
</template>

<script>
	export default {
		props: ['jsonURL'],
		data: function () {
			return {
				// jsonURL: 'https://api.myjson.com/bins/17nqsm',
				questions: [],
				responses: []
			}
		},
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