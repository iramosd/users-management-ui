export default defineNuxtRouteMiddleware((to, from) => {
    const userToken = useCookie('auth_token')

    if (!userToken.value) {
        return navigateTo('/login')
    }
})