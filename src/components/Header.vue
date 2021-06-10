<template>
<div class="header">
	<nav class="navbar navbar-light bg-light">
  <div class="container">
  <div class="container-logo">  <a class="navbar-brand " href="/"><img class="img-logo" src="../assets/images/logo_1.png" alt="logo"></a>
  </div>
			<div class="nav_wrap"  >
				<ul class="ul_navigation">
					<li class="nav_menu-link" v-for="(menu, index) in headerMenuList" :key="index">
						<router-link class="nav-link active_header" aria-current="page" :to="menu.path">
							{{ menu.name }}
						</router-link>
					</li>
				</ul> 
  </div>
  <div class="icons"> 
				<a class="icon_link" href="https://www.facebook.com/fitnesshallptz/" target="blank"><img  class="icons_image" src="../assets/images/icons/f.png" alt="" /></a>
				<a class="icon_link" href="https://www.instagram.com/fitnesshall_ptz/" target="blank"><img class="icons_image" src="../assets/images/icons/insta.png" alt="" /></a>
				<a class="icon_link" href="https://vk.com/fitnesshallptz" target="blank"><img src="../assets/images/icons/vk.png" alt="" /></a>
					
				</div>
  </div>
</nav>
	</div>
</template>

<script>
import{menuList} from '../constant/menuLinks'
	export default {
		name: 'HelloWorld',
		props: {
			msg: String,
		},
		data() {
			return {
				headerMenuList: menuList,
			}
		},
	}
</script>

<style scoped>
/* @media (max-width: 1200px){
.imglogo {
				width:50px;
			}} */
</style>