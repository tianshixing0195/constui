import ConLogin from './src/ConLogin'
/* istanbul ignore next */

ConLogin.install = function(Vue) {
    Vue.component(ConLogin.name, ConLogin);

};

export default ConLogin;