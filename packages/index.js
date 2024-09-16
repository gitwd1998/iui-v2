import { IButtonPlugin } from './i-button'
import { IIconPlugin } from './i-icon'

const iui = {
  install (Vue) {
    IButtonPlugin.install?.(Vue)
    IIconPlugin.install?.(Vue)
  }
}

export default iui

export * from './i-button'
export * from './i-icon'
