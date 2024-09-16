import IIcon from './src/index.vue'

export const IIconPlugin = {
  install (Vue) {
    Vue.component('IIcon', IIcon)
  }
}

export { IIcon }
