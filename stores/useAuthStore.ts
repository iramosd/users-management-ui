export const useAuthStore = defineStore('auth', ()=>{
    const user = ref({});
    const userPermissions = ref([])
    return {
        user,
        userPermissions,
    }
})