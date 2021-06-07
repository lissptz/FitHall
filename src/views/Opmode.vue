<template>

	<div class="home">
		<Opmode/>
        <Feauters :data="featureData"/>
	</div>
</template>

<script>
	import {featureData} from '../data/data.feauters.js'
	
	import Opmode from '../components/OpmodeCards'
	import Feauters from '../components/Feauters'
	export default {
		name: 'Home',
		components: {
			Opmode,
			Feauters,
		},
		data() {
			return {
				featureData: featureData,
			}
		},
	}
</script>

