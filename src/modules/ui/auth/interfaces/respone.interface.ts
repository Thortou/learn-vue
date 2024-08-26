export type responseStatus = 'success' | 'warn' | 'error'

export interface IResponse<Entity> {
    data: Entity
    message?: string
    status: responseStatus
}

export interface ILoginResponse<Entity> extends Omit<IResponse<Entity>, "status"> {
    auth_token: string,
}
