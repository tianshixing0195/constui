import conUpload from './src/conUpload';

conUpload.install = function(Vue) {
    Vue.component(conUpload.name, conUpload);
};

export default conUpload;