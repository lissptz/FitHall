<template>
    <div class="col">
				<h3 class="footer_title">Контакты</h3>
				<ul class="footer_list footer_list_capitalize">
              <li>	
                <p>г.Петрозаводск, ул.Белорусская д.17</p>
						</li>
			<li>
                <p>Телефон:8 (814)2 770-337</p>
            </li>
            <li>
                <a class="footer_link_two footer_link_two_orange footer link_underline" href="mailto:fit-hall@yandex.ru" target="blank">
            fit-hall@yandex.ru</a>
            </li> 

                </ul>
				</div>
</template>
<script>
export default{
    props:{
        footerMenuClient:{
            type:Array,
            required: true,
        }
    }
}
</script>
