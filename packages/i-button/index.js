import IButton from './src/index.vue';

export const IButtonPlugin = {
  install(Vue) {
    Vue.component('IButton', IButton);
  },
};

export { IButton }
