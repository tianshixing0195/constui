import conButton from './src/conButton';

conButton.install = function(Vue) {
    Vue.component(conButton.name, conButton);
};

export default conButton;