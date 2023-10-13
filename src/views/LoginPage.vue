<template>
    <div class="header">
        <div class="icon">
            <span></span>
        </div>
        <div class="headerName">
            <span>人力资源管理系统</span>
        </div>
        <div class="right">
            <span>注册</span>
        </div>
    </div>
    <div class="container">
       
      <div class="box">
        <div><span><strong>登陆界面</strong></span></div>
        <div>姓名：<input type="text" ref="inputRef" v-model="input_name"></div>
        <div>密码：<input type="password" v-model="input_password"></div>
        <div><button class="btn" @click="login()">登录</button></div>
      </div>
    </div>
    <AlertPage ref="AlterPageRef"></AlertPage>
</template>
<script setup>
    import { onMounted ,ref, toRefs } from 'vue';
    import UserStoreCreate  from '@/store/user';
import router from '../router';

   
    // 进入页面自动聚焦
    const inputRef=ref(null)
    onMounted(()=>{
        inputRef.value.focus()
        console.log(inputRef.value);
    })
    // 用户输入姓名和密码
    const UserStore=UserStoreCreate()
    const{uname,password} =toRefs(UserStore)

    const input_name=ref('')
    const input_password=ref('')
    
    const AlterPageRef=ref(null)
    function login(){
        console.log(uname.value,input_name.value,password.value,input_password.value);
        if(uname.value===input_name.value && password.value===input_password.value){
            AlterPageRef.value.showAlert('登录成功','success')
            setTimeout(()=>{
                router.push('/index')
            },1000)
        }else if(input_name.value.length===0||input_password.value.length===0){
            AlterPageRef.value.showAlert('用户名密码为空','warn')
        } 
        else{
            AlterPageRef.value.showAlert('密码错误','error')
    }
    }
    

</script>

<style scoped>
.container{
    position: relative;
    width: 100%;
    height: 550px;
    background-color: palegreen;
    background: url(../assets/bgc.jpg) no-repeat;
    background-position: center;
    background-size: 100%,100%;
}
.header{
    position: relative;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: black;
    color: aliceblue;
    text-align: right;
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
    background-image: radial-gradient(circle, #0845fdfd, #00ff00);
    -webkit-background-clip: text;
    background-clip: text;
}
.header .right span{
    margin-right: 20px;
    cursor: pointer;
}
.header .right span:hover{
    color: blue;
}
.header .right span:active{
    color: rgb(255, 0, 217);
}
.box{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    align-items: center;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    width: 300px;
    height: 300px;
    /* background: palegreen; */
}
input{
    border: none;
    border-radius: 5px;
    padding: 5px;
    background-color: paleturquoise;
}
input:focus{
    background-color: palegreen;
    border: none;
    outline: none;
}
</style>