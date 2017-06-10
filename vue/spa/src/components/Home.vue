<template>
	 <div class="home">
	 	<h1> {{ message }} </h1>
	 	<newCard></newCard>
	 	<card></card>

	 </div>	

</template>

<script>
import Card from './Card.vue'
import newCard from './newCard.vue'
	export default {
		name: 'Home',
		data() {
			return {
				message: 'Knowledge Base'
			}
		},	
	}
</script>

<style scoped>
	h1 {
		font-family: 'Verdana';
		color: #444;
	}
</style>