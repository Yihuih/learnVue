import {defineStore} from 'pinia'
import {ref} from 'vue'


const store=defineStore('userStore',()=>{
    const uname=ref('yhh')
    const password=ref('123')


    return{
        uname,
        password
    }

})
export default store