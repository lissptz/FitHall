<template>
	<nav class="navbar navbar-expand-lg navbar-light ">
		<div class="container">
			<a class="navbar-brand logo" href="/"><img src="../assets/images/logo_1.png" alt="logo"></a>

			<div class="collapse collapse-fontsize navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item menu-link" v-for="(menu, index) in headerMenuList" :key="index">
						<router-link class="nav-link active" aria-current="page" :to="menu.path">
							{{ menu.name }}
						</router-link>
					</li>
				</ul>
				<div class="icons"> 
				<a href="https://www.facebook.com/fitnesshallptz/" target="blank"><img src="../assets/images/icons/f.png" alt="" /></a>
				<a href="https://www.instagram.com/fitnesshall_ptz/" target="blank"><img src="../assets/images/icons/insta.png" alt="" /></a>
				<a href="https://vk.com/fitnesshallptz" target="blank"><img src="../assets/images/icons/vk.png" alt="" /></a>
					
				</div>
				
				
			</div>
			
		</div>
		
	</nav>
			
	
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

