import { IResponse } from "@/modules/ui/auth/interfaces/respone.interface";
import {inject, singleton} from "tsyringe";
import { AuthRepository } from "../repo/auth.repository";

@singleton()

export class LogoutCommand {
    constructor(@inject(AuthRepository) private readonly _api: AuthRepository) {
    }

    async execute(): Promise<IResponse<string>> {
        return await this._api.logout();
    }
}
