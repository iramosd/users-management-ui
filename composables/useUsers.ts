import {ref} from "vue";
import axios from "axios";
export function useUsers() {
    const users = ref(null);
    const processing = ref(false);
    const errors = ref({});

    const getUsers = async () => {
        processing.value = true;
        await axios.get('http://localhost:8000/api/users').
            then((data) => {
                console.log(data)
            }).finally(() => {
                processing.value = false;
            })
    }

    return {getUsers, users, processing, errors};
}