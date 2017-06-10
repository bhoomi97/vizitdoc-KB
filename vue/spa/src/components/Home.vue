<template>
	 <div class="home">
	 	<h1> {{ message }} </h1>

	 </div>	
</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
				message: 'Knowledge Base'
			}
		}
	}
</script>

<style scoped>
	h1 {
		font-family: 'Verdana';
		color: #444;
	}
</style>