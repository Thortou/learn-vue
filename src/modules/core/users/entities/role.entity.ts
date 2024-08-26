import { PermissionEntity } from "./permission.entity";
export class RoleEntity {
    id?: number = 0
    name: string = ""
    description: string = "";
    permissions: PermissionEntity[] = [];
    createdAt: Date = new Date()
    updatedAt: Date = new Date()
}
