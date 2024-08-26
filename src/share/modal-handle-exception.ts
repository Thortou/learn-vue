import { Modal } from 'ant-design-vue'
import { h } from 'vue'

export const ModalHandleException = {
  handleClientError(data: any) {
 console.log('error:',data);
 
    if (typeof data === 'object' && !Array.isArray(data)) {
      const messages = Object.values(data.errors)
      const content = messages.join('\n')
      Modal.warning({
        title: 'ມີບາງຢ່າງຜິດພາດ!',
        content: h(
          'div',
          { style: 'color:#c1121f;font-weight: 400;display:flex;flex-direction:column' },
          content
        )
      })
    }else {
      // If data is not an object, handle it as before
      Modal.warning({
        title: 'ມີບາງຢ່າງຜິດພາດ!',
        content: data
      })
    }
  },

  handleServerError(message: any) {
    Modal.error({
      title: 'ເຊີບເວີຜິດພາດ!',
      content: message
      // okType: 'primary'
    })
  }
}
