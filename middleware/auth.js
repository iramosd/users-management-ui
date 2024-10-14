import {useAuthStore} from "~/stores/useAuthStore.ts";
export default defineNuxtRouteMiddleware((to, from) => {
    const {user, userPermissions} = storeToRefs(useAuthStore());

    if (userPermissions.length || user.length) {
        return navigateTo('/login')
    }
})