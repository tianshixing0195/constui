import ConPoint from './src/ConPoint'
/* istanbul ignore next */

ConPoint.install = function(Vue) {
    Vue.component(ConPoint.name, ConPoint);

};

export default ConPoint;