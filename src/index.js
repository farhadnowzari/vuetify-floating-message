import VuetifyFloatingMessage from './VuetifyFloatingMessage.vue';

export default function install(Vue, options = {}) {
    const property = '$message';
    const vuetify = options.vuetify;
    delete options.vuetify;
    if(!vuetify) {
        console.warn("The module VuetifyFloatingMessage needs vuetify instance. Use Vue.use(VuetifyFloatingMessage, { vuetify })");
        return;
    }
    const Ctor = Vue.extend(Object.assign({ vuetify }, VuetifyFloatingMessage));
    function createDialogComponent(options) {
      const container = document.querySelector('[data-app=true]') || document.body;
      const component = new Ctor(Object.assign({}, {
          propsData: Object.assign({}, Vue.prototype[property].options, options),
      }));
      container.appendChild(component.$mount().$el);
    }

    function show(message, options = {}) {
        options.message = message;
        return createDialogComponent(options);
    }

    const messageTypes = {
        info(message, options = {}) {
            options.type = 'info';
            show(message, options);
        },
        warning(message, options = {}) {
            options.type = 'warning';
            show(message, options);
        },
        success(message, options = {}) {
            options.type = 'success';
            show(message, options);
        },
        error(message, options = {}) {
            options.type = 'error';
            show(message, options);
        }
    }

    Vue.prototype[property] = messageTypes;
    Vue.prototype[property].options = options || {};
}

if(typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(install);
}