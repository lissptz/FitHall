<template>
	<nav class="navbar navbar-expand-lg navbar-light ">
		<div class="container">
			<a class="navbar-brand logo" href="/"><img src="../assets/images/logo4.png" alt="logo"></a>

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
				<div class="home_name">
			<p>Тренажерный и фитнесс центр</p>
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
<style lang ='scss'>
@import  '../assets/layouts/index';
.navbar{
	padding-top:30px;
 
}

.logo{
padding-right: 80px;
border: 1px solid rgb(253, 252, 252);
border-radius: 20px;
overflow: hidden;


}
.collapse-fontsize{
	font-size: 25px;
}
.menu-link{
	padding: 10px 20px;
    &:hover{
        transition-duration: 700ms;
		background: $orange;
		border-radius: 10px;
	}

	}
.icons{
		a {width: 45px;
		height: 40px;
		text-align: center;
		border: 1px solid $orange;
		border-radius: 8px;
		margin-right: 10px;
		display: inline-block;}
}
.icons>a:hover{     
transition-duration: 700ms;
background: $orange;

}

.home_name{
font-size: 12px;
 text-transform: uppercase;
 padding-left: 135px;
  letter-spacing: 4px;
    line-height: 10px;
	font-weight:bold;

}

		

</style>

