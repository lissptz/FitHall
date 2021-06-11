<template>
	<div class="home">
		<Contacts />

		<Feauters :data="featureData"/>
	</div>
</template>

<script>
	import {featureData} from '../data/data.feauters.js'
	// @ is an alias to /src
	import Contacts from '../components/Contacts'
	import Feauters from '../components/Feauters'
	export default {
		name: 'Home',
		components: {
			Contacts,
			Feauters,
		},
		data() {
			return {
				featureData: featureData,
			}
		},
	}
</script>
