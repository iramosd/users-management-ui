import Toast from "vue-toastification";

export default defineNuxtPlugin(async () => {
    return {
        provide: {
            Toast: Toast,
        }
    }
})