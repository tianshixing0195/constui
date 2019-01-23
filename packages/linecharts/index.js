import ConChartLine from './src/ConChartLine'
/* istanbul ignore next */

ConChartLine.install = function(Vue) {
    Vue.component(ConChartLine.name, ConChartLine);

};

export default ConChartLine;