<template>
    <div class="opmodeTitle">
        <h2>Тренажерный зал</h2>
         </div>
        <div class="containerOpmode">
        <div class="opmodegrid">
        <div class="gridcontant"><h4>Понедельник-Пятница</h4></div>
            <div class="gridcontant_orange"><h4>Суббота-Воскресенье</h4></div>
                <div class="gridcontant"><h4>9:00-21:45</h4></div>
                    <div class="gridcontant_orange"><h4>11:00-19:00</h4></div>
        </div>
        </div>
     
 
 <div class="opmodeTitle ">
                  <h2>Фитнес зал</h2>
               </div>
               <!-- карточка -->
               <div class="opmodeContainerCard">
               <div class="card center">

    <div class="front">
        <img src="../assets/images/1.jpg" alt="">
    </div>

    <div class="back">

        <div class="back-content center">
            <p>9:00-10:00 проект "Спорт 50+"</p>
            <p>10:00-10:45 проект "Спорт 50+"</p>
            <p>16:30-18:30 Капоэйра(аренда)</p>
            <p>18-30-19:30 Табата</p>
            <p>19:30-20:30 Силовая аэробика</p>
            <p>20:30-21:30 "Timez"(аренда)</p>
 
        </div>

    </div>

</div>
</div>
             
</template>
        
<style scoped>

.containerOpmode{
    margin: 10px 120px;
    height: 50%;
  
}
.opmodeTitle{
    padding-top: 30px;
    margin-bottom: 60px;
    text-align: center;
}
.opmodegrid{
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-gap: 10px;
   height: 200px;
   text-align: center;
  

}
.gridcontant,.gridcontant_orange{
   
    background-repeat: no-repeat;
   background-size: cover;
   border-radius: 20px;
  
}
.gridcontant>h4,.gridcontant_orange>h4{
    padding:30px;
    font-size: 25px;
    font-weight:bolder;
  
}
.gridcontant{
    border:2px solid orange;
}
.gridcontant_orange{
    background: orange;

}
.opmodeTitlefit{
    padding-top: 30px;
    margin-bottom: 60px;
  text-align: center;
}
/* карточки */

.opmodeContainerCard{
 
    /* margin:30px 120px; */
    margin: 0px 90px;
    padding: 0px 40px;
}

.card{
    cursor: pointer;
    width: 180px;
    height: 280px;
}

.front,
.back{
    width: 100%;
    height: 100%;
    overflow: hidden;
    backface-visibility: hidden;
    position: absolute;
    transition: transform .6s linear;
}

.front img{
    height: 100%;
}

.front{
    transform: perspective(600px) rotateY(0deg);
}

.back{
    transform: perspective(600px) rotateY(180deg);
    background-color: #f1f1f1;
}

.back-content{
    width: 100%;
    text-align: left;
    color: #333333;
}
.back-content>p{
    display:block;
    padding: 5px;
    font-size: 10px;
}

h2{
    margin-bottom: 20px;
}

span{
    display: block;
    font-size: 20px;
}

.fas{
    display: block;
    margin: 20px 0;
    color: red;
    font-size: 30px;
}

.card:hover > .front{
    transform: perspective(600px) rotateY(-180deg);
}
.card:hover > .back{
    transform: perspective(600px) rotateY(0deg);
}

</style>