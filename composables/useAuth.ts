import {ref} from "vue";
import {useRouter} from "vue-router";

export function useAuth(form) {
    const processing = ref(false);
    const errors = ref({});
    const router = useRouter();

    const login = async () => {
        processing.value = true;
        errors.value = {};
        await axios.get('/sanctum/csrf-cookie');
        await axios.post('/login', form.value)
            .then(() => {
                me();
            })
            .catch(({response: {data}}) => {
                errors.value = data.errors;
            })
            .finally(() => {
                processing.value = false
            })
    }

    const logout = async () => {
        const user = ref({});
        const permissions = ref({});

        processing.value = true;
        errors.value = {};
        await axios.post('/logout')
            .then(() => {
                user.value = {};
                permissions.value = [];
                router.push({name:'Login'})
            })
            .catch(({response: {data}}) => {
                errors.value = data.errors;
            })
            .finally(() => {
                processing.value = false
            })
    }

    const me = async () => {
        const user = ref({});
        const permissions = ref({});

        await axios.get('api/user')
            .then(({data}) => {
                console.log(data);
                user.value = data.data.user;
                permissions.value = data.data.permissions;
                console.log(user.value, userPermissions.value)
            })
            .catch(({response: {data}}) => {
                errors.value = data.errors;
            })
            .finally(
                console.log(user.value, permissions.value)
            )

        //return { user.value, permissions.value };
    }

    return {
        processing, errors, login, logout
    };
}