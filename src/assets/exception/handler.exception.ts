import { ModalHandleException } from '@/share/modal-handle-exception'
import { AxiosError } from 'axios'

export class HandleException {
  constructor(error: unknown) {
    if (error instanceof AxiosError) {
      if (error.response) {
        if (error.response.status == 400) {
          ModalHandleException.handleClientError(error.response.data)
        } else if (error.response.status === 401) {
          ModalHandleException.handleClientError(error.response.data.message)
        } else if (error.response.status === 409) {
          ModalHandleException.handleClientError(error.response.data.message)
        } else if (error.response.status == 500) {
          ModalHandleException.handleServerError(error.message)
        }else if (error.response.status === 404) {
          ModalHandleException.handleClientError(error.message)
        }
      } else {
        ModalHandleException.handleServerError(error.message)
      }
    }
  }
}
