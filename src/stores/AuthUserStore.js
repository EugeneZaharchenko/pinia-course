import { defineStore } from "pinia";

export const useAuthUserStore = defineStore('AuthUserStore',
{
    state: () => {
        return {
            username: "J0nny"
        }
    }
})