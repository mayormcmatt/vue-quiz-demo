import Vue from 'vue'
import App from './App.vue'
const json = require("../src/assets/quizQuestions.json")

new Vue({
  el: '#app',
  data: {
	  jsonData: json
  },
  render: h => h(App)
})
