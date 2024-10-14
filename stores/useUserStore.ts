export const useUserStore = defineStore('user', ()=>{
    const user = ref({});
    const users = ref([])
    return {
        user,
        users,
    }
})