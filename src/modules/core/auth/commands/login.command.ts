import { LoginFormInterface } from "@/modules/ui/auth/interfaces/login.interface";
import {inject, singleton} from "tsyringe";
import { AuthRepository } from "../repo/auth.repository";

export class LoginCommand {
    constructor(public readonly input: LoginFormInterface) {
    }
}

@singleton()
export class LoginHandler {
    constructor(@inject(AuthRepository) private readonly _api: AuthRepository) {
    }

    async execute({input}: LoginCommand): Promise<any> {
        return await this._api.login(input);
    }
}
