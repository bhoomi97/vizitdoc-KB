<template>
	<card></card>
</template>

<script>
	import Vue from 'vue'

	export default {
		name: 'Card'
	}
	
	Vue.component('card', {
	props: ['link', 'title','body' ],
	
	template: `
		<div class="card">
			<h2><a href="google.com"> sample Card title </a></h2>
			<p class="body"> blah blah blah </p>


			<button @click="showComments"> show comments </button>
			<button @click="addComment"> Add comment </button>


			<div class="comments" v-show="isVisible">
				<comments v-for="comment in comments"> {{ comment.message }} </comments>
			</div>


			<div class="addComment" v-show="isVisible">
				<input type="text" v-model="newComment">
				<button type="button" @click="postComment"> Post comment </button>
			</div>
		</div>
	`,
	methods: {
		showComments() {
			this.isVisible = true
		},
		addComment() {
			this.isVisible = true
		},
		postComment() {
			var newComment = {message: this.newComment}
			this.comments.push(newComment)
		}
	},
	data() {
		return {
			comments: [
				{ message: 'heyyyey ye nice post' } ,
				{ message:'helpful' }
			],
			isVisible: false,
			newComment: '',
		}
	}
});

Vue.component('comments', {
	
	template:`
		<p><span class="username"> user : </span><slot></slot></p>
	`,
	
});


</script>