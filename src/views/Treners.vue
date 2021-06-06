<template>
	<div class="home">
		<Treners />
        <Feauters :data="featureData"/>
	</div>
</template>

<script>
	import {featureData} from '../data/data.feauters.js'
	
	import Treners from '../components/TrenCard'
	import Feauters from '../components/Feauters'
	export default {
		name: 'Home',
		components: {
			Treners,
			Feauters,
		},
		data() {
			return {
				featureData: featureData,
			}
		},
	}
</script>
