<template>
    <div class="header">
        <div class="icon">
            <span></span>
        </div>
        <div class="headerName">
            <span>人力资源管理系统</span>
        </div>
        <div class="exit"></div>
    </div>
    <div class="aside">
        <div></div>
    </div>
    <div class="content"></div>
</template>
<script>

</script>

<style scoped>
.header{
    position: relative;
    width: 100%;
    height: 60px;
    color: white;
    line-height: 60px;
    background: #000;
    display: flex;
    align-items: center;
}
.icon{
    position: absolute;
    left: 30px;
    width: 50px;
    height: 50px;
    font-size: x-large;
   
}
.icon span{
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 5px;
    background: url(../assets/icon.jpg) no-repeat;
    background-size: 50px,50px;
}
.headerName{
    position: absolute;
    left: 90px;
    height: 100%;
    line-height: 60px;
    color: transparent;
    background-image: radial-gradient(circle, #0742f4f6, #00ff00);
    -webkit-background-clip: text;
    background-clip: text;
}

</style>