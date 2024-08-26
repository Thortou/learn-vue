import { RoleEntity } from "./role.entity"

export class UserEntity {
  id: number = 0
  username: string = ''
  email: string = ''
  verify: string = ''
  phone: string = ''
  roles: RoleEntity[] = []
  createdAt: Date = new Date()
  updatedAt: Date = new Date()
}
