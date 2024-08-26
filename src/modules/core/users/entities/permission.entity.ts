import { RoleEntity } from "./role.entity";

export class PermissionEntity {
    id: number = 0;
    name: string = '';
    displayName: string = '';
    description: string = '';
    type: string = '';
    roles: RoleEntity[] = [];
    createdAt: Date = new Date();
    updatedAt: Date = new Date()
}
