<template>
	<div class="home">
		<Carusel />

		<Feauters :data="featureData"/>
	</div>
</template>

<script>
	import {featureData} from '../data/data.feauters.js'
	// @ is an alias to /src
	import Carusel from '../components/Caorusel'
	import Feauters from '../components/Feauters'
	export default {
		name: 'Home',
		components: {
			Carusel,
			Feauters,
		},
		data() {
			return {
				featureData: featureData,
			}
		},
	}
</script>
