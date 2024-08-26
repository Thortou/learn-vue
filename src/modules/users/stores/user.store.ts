import { defineStore } from 'pinia'
import { container } from 'tsyringe'
import { UserService } from '../repositories/user.services'

export const useUserStore = defineStore('user-store', () => {
  const userService = container.resolve(UserService)

  async function getAll(){
       await userService.getAll()
  }
  return {
    getAll,
  }
})
