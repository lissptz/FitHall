<template>

    <div class="map">	
	<div class="wrp">
		<div class="map-box">
			<h2>Наш адрес</h2>
			<p>г. Петрозаводск, ул.Белорусская, 17.</p>
			<p><a href="tel:+7 (8142) 77-03-37">+7 (814) 2 770-337</a></p>
			<p><a href="fithall@mail.ru">fithall@mail.ru</a></p>
            
		</div>
         <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A2b99b8f6ee74f66aaae810380ee0b468956705cb737d3c6cbbbb9e54a856eada&amp;source=constructor" width="100%" height="450" frameborder="0"></iframe>
   
	</div>


</div>


      
</template>

<style scoped>
.wrp {
	max-width: 1300px;
	margin: 0 auto;
	position: relative;
}
.map-box { 
	position: absolute;
	top: 1px;
	left: 90px; 
	padding: 20px;
	background: #fff;
	border: 1px solid #ddd;
	z-index: 100;
	width: 290px;
	box-shadow: -1px -1px 24px 0px rgba(50, 50, 50, 0.5);
}
.map-box p {
	font-size: 18px;
}


</style>