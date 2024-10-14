import {useAuthStore} from "~/stores/useAuthStore.ts";
export default defineNuxtRouteMiddleware((to, from) => {
    const {user, userPermissions} = storeToRefs(useAuthStore());

    if (userPermissions.value.length === 0 || Object.keys(user.value).length === 0) {
        return navigateTo('/login')
    }
})