import conRate from './src/conRate';

conRate.install = function(Vue) {
    Vue.component(conRate.name, conRate);
};

export default conRate;