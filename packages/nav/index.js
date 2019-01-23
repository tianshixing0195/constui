import ConNav from './src/ConNav'
/* istanbul ignore next */

ConNav.install = function(Vue) {
    Vue.component(ConNav.name, ConNav);

};

export default ConNav;