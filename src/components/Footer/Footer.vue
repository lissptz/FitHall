<template>
	<footer class="footer footer_bg">
		<div class="container">
			<div class="row">
				<FooterIcons />
				<FooterNavi :footerMenu="footerMenu" />
				<FooterClient :footerMenuClient="footerMenuClient" />
				<FooterContacts />
			</div>
		</div>
	</footer>
</template>

<script>
	import { menuList, menuClient } from '/src/constant/menuLinks.js'
	import FooterIcons from './FooterIcons'
	import FooterNavi from './FooterNavi'
	import FooterClient from './FooterClient'
	import FooterContacts from './FooterContacts'
	export default {
		data() {
			return {
				footerMenu: menuList,
				footerMenuClient: menuClient,
			}
		},
		components: {
			FooterIcons,
			FooterNavi,
			FooterClient,
			FooterContacts,
		},
	}
</script>