<template>
    <div class="col">
        <div class="footer_client_wrap">
				<h3 class="footer_title">Клиентам</h3>
				<ul class="footer_list footer_list_capitalize">
					<li  v-for="({name,path},i) in footerMenuClient" :key="i">
					<router-link :to="path" class="footer_link_two">{{name}}</router-link>
						</li>
				</ul>
</div>
				</div>
</template>
<script>
export default{
    props:{
        footerMenuClient:{
            type:Array,
            required: true,
        },
    },
}
</script>
