import { HttpService } from "@/infra/axios/http.services";
import { inject, singleton } from "tsyringe";

@singleton()
export class UserService {
   constructor(
    @inject(HttpService) private _http: HttpService,
   ){}

   async getAll(): Promise<any[]> {

    const res = await this._http.get(`users`)

    return res.data.getItem
  }
}