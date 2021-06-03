<template>
    <div class="grid_wrap">
        <div class="row_1"></div>
  
    </div>
</template>
<style scoped>
.grid_wrap{
    margin:40px;
    display:grid;
    grid-template-columns: 2,1fr;
    grid-template-rows: 6fr repeat(3,3fr) repeat(3,5fr) 3fr;
}
.row_1{
    grid-column: 1/5;
    background: aqua;
    
}
</style>