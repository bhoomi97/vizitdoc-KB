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
	 		

			<form v-show="isVisible">
				<label>Title : </label>
				<input type="text" v-model="card.title" required>
				<label> Link : </label>
				<input type="text" v-model="card.link">
				<label> Description : </label>
				<input type="text" v-model="card.description">
				<button type="submit"> Post! </button>

			</form>
			</div>
		`,
		methods: {
			addNew() {
				this.isVisible = true
			}
		},
		data() {
			return {
				isVisible:false,
				card: {
					title:"",
					link:"",
					description: ""
				}
			}
		}

	});

</script>