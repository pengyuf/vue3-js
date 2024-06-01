import { defineStore } from 'pinia';
import { computed, ref } from 'vue';



// 选项式API写法
export const useCounterStore = defineStore('counter',{
    state:()=>({count:1}),
    getters:{
        doubleCount:(state)=>state.count*2,
        /**
         * 
         * @returns {number}
         */
        doubleCountOne(){
            return this.doubleCount+1
        }
    },
    actions:{
        increment(){
            this.count++
        }
    }
})

// export const useStore = defineStore('main',{
//     getters:{
//         getUserById:(state)=>{
//             return (userId)=>state.users.find((user)=>user.id === userId)
//         }
//     }
// })

