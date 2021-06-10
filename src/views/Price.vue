
<template>

	<div class="home">
		<Price/>
        <Feauters :data="featureData"/>
	</div>
</template>

<script>
	import {featureData} from '../data/data.feauters.js'
	
	import Price from '../components/Price'
	import Feauters from '../components/Feauters'
	export default {
		name: 'Home',
		components: {
			Price,
			Feauters,
		},
		data() {
			return {
				featureData: featureData,
			}
		},
	}
</script>


