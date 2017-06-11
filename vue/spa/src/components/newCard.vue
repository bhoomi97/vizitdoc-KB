<template>
	<newCard></newCard>
	
</template>

<script>
	import Vue from 'vue'
	export default {
		name: 'newCard'
	}

	Vue.component('newCard', {
		template: `
			<div>
	 			<button @click="addNew">Post a new link : </button>
	 		

				<form v-show="isVisible" v-if="!submitted">
					<label>Title : </label>
					<input type="text" v-model="card.title" required>
					<label> Link : </label>
					<input type="text" v-model="card.link">
					<label> Description : </label>
					<input type="text" v-model="card.description">
					<button type="submit" @click="postCard"> Post! </button>

				</form>
				<div v-if="submitted">
					<h4> Link Posted ! </h4>
				</div>
			</div>
		`,
		methods: {
			addNew() {
				this.isVisible = true
			},
			postCard() {
				this.$http.post('http://localhost:3000/', {
					title: this.card.title,
					link: this.card.link,
					description: this.card.description 
				}).then(function(){
					this.submitted = true;
					console.log(data);
					console.log(this.submitted)
				})
				
			}
		},
		data() {
			return {
				isVisible:false,
				submitted: false,
				card: {
					title:"",
					link:"",
					description: ""
				}
			}
		},

	});

</script>

<style>

</style>