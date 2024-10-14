import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
export default defineNuxtPlugin(async () => {
    return {
        provide: {
            axios: axios,
        }
    }
})