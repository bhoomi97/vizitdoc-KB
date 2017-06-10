// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

 
Vue.component('card', {
	props: ['link', 'title','body' ],
	
	template: `
		<div class="card">
			<h2><a href="google.com"> sample Card title </a></h2>
			<p class="body"> blah blah blah </p>
			<button @click="showComments"> show comments </button>
			<div class="comments" v-show="isVisible">
				<comments v-for="comment in comments"> {{ comment.message }} </comments>
			</div>
		</div>
	`,
	methods: {
		showComments() {
			this.isVisible = true
		}
	},
	data() {
		return {
			comments: [
				{ message: 'heyyyey ye nice post' } ,
				{ message:'helpful' }
			],
			isVisible: false
		}
	}
});

Vue.component('comments', {
	
	template:`
		<p><span class="username"> user : </span><slot></slot></p>
	`,
	
});
        
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
