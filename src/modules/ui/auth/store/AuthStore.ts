import {defineStore} from "pinia";
import {container} from "tsyringe";
import {ref} from "vue";
import { useRouter } from "vue-router";
import { HandleException } from "@/assets/exception/handler.exception";
import { LoginFormInterface } from "../interfaces/login.interface";
import { AuthService } from "@/modules/core/auth/services/auth.service";
import { LoginCommand } from "@/modules/core/auth/commands/login.command";

export const useAuthStore = defineStore('auth', () => {
    const {push} = useRouter();
    const authService = container.resolve(AuthService);
    const isLoading = ref(false)
    async function login(input: LoginFormInterface) {
        try {
            isLoading.value = true;
            
            const res = await authService.login(new LoginCommand(input));
            
            if (res.status === "success") {
                isLoading.value = false;
                push({
                    name: "layout"
                }).catch(() => {
                })
            }
        } catch (error) {
            isLoading.value = false;
            new HandleException(error)
        }
    }

    async function logout() {
        try {
            const res = await authService.logout();
            if (res.status === "success") {
                push({
                    name: "login.index"
                }).catch(() => {
                })

                localStorage.removeItem("Credential");
                localStorage.removeItem("token");
            }
        } catch (e) {
            new HandleException(e)
        }
    }

    return {
        isLoading,
        login,
        logout
    }
})
