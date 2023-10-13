<template>
    <div class="AlertBox" v-if="show"  ref="AlertBoxRef">
        {{ message }}
    </div>
</template>

<script setup>
import { ref , nextTick} from 'vue';

    let message=ref('')
    let show=ref(false)
    const AlertBoxRef=ref(null)

    const showAlert=(newMessage,type)=>{
        if(['warn','success','error'].includes(type)){
            message.value=newMessage
            show.value=true
            nextTick(()=>{
                switch (type) {
                    case 'success':
                        AlertBoxRef.value.style.backgroundColor='green'
                        break;
                    case 'warn':
                        AlertBoxRef.value.style.backgroundColor='yellow'
                        break;
                    case 'error':
                        AlertBoxRef.value.style.backgroundColor='red'
                        break;
                    default:
                        break;
                }
            })
            setTimeout(()=>{
                show.value=false
            },3000)
        }else{
            throw Error('type must be one of warn、success or error')
        }
    }
    //将showAlert方法暴露
    defineExpose({
        showAlert
    })
</script>

<style scoped>
.AlertBox{
    position: fixed;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    padding: 5px;
    height: 30px;
    line-height: 30px;
    width: 100px;
    border-radius: 5px;
    text-align: center;
    font-size: 12px;
    opacity: 0.5;
    background-color: palegreen;
}
</style>