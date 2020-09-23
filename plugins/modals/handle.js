import Layout from './layout'

const VModel = {
  install(Vue) {
    this.EventBus = new Vue()

    Vue.component('v-modal', Layout)

    Vue.prototype.$modal = {
      open(params) {
        VModel.EventBus.$emit('open', params)
      },
      close(params) {
        VModel.EventBus.$emit('close', params)
      },
    }
  },
}

export default VModel
