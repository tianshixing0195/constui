import TextScroll from './src/TextScroll'
/* istanbul ignore next */
TextScroll.install = function(Vue) {
    Vue.component(TextScroll.name, TextScroll);
};

export default TextScroll;