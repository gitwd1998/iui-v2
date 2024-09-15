import {{ compName }} from './src/index.vue';

export const {{ compName }}Plugin = {
  install(Vue) {
    Vue.component({{ compName }}.name, {{ compName }});
  },
};

export { {{ compName }} }
