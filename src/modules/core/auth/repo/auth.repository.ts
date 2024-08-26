
import { HttpService } from "@/infra/axios/http.services";
import { inject, singleton } from "tsyringe";
import { UserResponse } from "../../users/interfaces/user.response";
import { LoginDto } from "../dtos/login.dto";
import { ILoginResponse, IResponse } from "@/modules/ui/auth/interfaces/respone.interface";

@singleton()
export class AuthRepository {
    constructor(
        @inject(HttpService) private _http: HttpService,
    ) {
    }

    async login(input: LoginDto): Promise<IResponse<any>> {

        const res = await this._http.post<ILoginResponse<UserResponse>, LoginDto>(`users/login`, input);
        localStorage.setItem("auth", JSON.stringify(res));
        localStorage.setItem("token", JSON.stringify(res.data.auth_token))

        return {
            data: res.data,
            status: 'success',
            message: "login success"
        }
    }

    async logout(): Promise<IResponse<string>> {
        const res = await this._http.get(`users/logout`)
        return {
            data: res.data,
            message: "logout success",
            status: "success"
        }
    }
}
