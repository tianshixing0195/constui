import ConTip from './src/ConTip'
import Vue from "vue"

let ConTipConstructor  = Vue.extend(ConTip)
/* istanbul ignore next */
let Tip = (text,duration)=> {
  let toastDom = new ConTipConstructor({
    el: document.createElement('div')   //将toast组件挂载到新创建的div上

  })
  document.body.appendChild(toastDom.$el)   //把toast组件的dom添加到body里}
  toastDom.text = text;
  toastDom.duration = duration;     // 在指定 duration 之后让 toast消失

   setTimeout(()=>{
     toastDom.isShow = false;
     }, toastDom.duration);

}

  export default Tip;




