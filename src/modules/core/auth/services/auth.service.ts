import {inject, singleton} from "tsyringe";
import { LoginCommand, LoginHandler } from "../commands/login.command";
import { IResponse } from "@/modules/ui/auth/interfaces/respone.interface";
import { UserEntity } from "../../users/entities/user.entity";
import { LogoutCommand } from "../commands/logout.command";
@singleton()
export class AuthService {
    constructor(
        @inject(LoginHandler) private readonly _login: LoginHandler,
        @inject(LogoutCommand) private readonly _logout: LogoutCommand,
    ) {}

    async login(input: LoginCommand): Promise<IResponse<UserEntity>> {
        return await this._login.execute(input);
    }

    async logout(): Promise<IResponse<string>> {
        return await this._logout.execute();
    }
}


