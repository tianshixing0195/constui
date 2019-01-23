
import Tip from "./packages/tip"
import ConTab from "./packages/tab"
import ConTimeDown from "./packages/timedown"
import TextScroll from "./packages/textscroll"
import ConNav from "./packages/nav"
import ConMoveNav from "./packages/movenav"
import ConPoint from "./packages/point"
import header from "./packages/header"
import ConLogin from "./packages/login"
import ConChartBar from "./packages/barcharts"
import ConChartLine from "./packages/linecharts"
import ConChartPie from "./packages/piecharts"
import conShopping from "./packages/conShopping"
import conButton from  "./packages/button"
import conRate from "./packages/fiveStar"
import RunText from "./packages/runtext"
import conKeyborad from "./packages/keyboard"
import ConList from "./packages/list"
import ConListTop from "./packages/topList"
import conTable from "./packages/contable"
import ConDicuss from "./packages/comment"
import conUpload from "./packages/loadmore"
import ConFooter from "./packages/footer"
import table from  "./packages/table"

const ConstUI= {}

ConstUI.install = function(Vue){
    Vue.prototype.$tip = Tip;
    Vue.component(ConDicuss.name, ConDicuss);
    Vue.component(table.name, table);
    Vue.component(ConTab.name, ConTab);
    Vue.component(ConTimeDown.name, ConTimeDown);
    Vue.component(ConMoveNav.name, ConMoveNav);
    Vue.component(TextScroll.name, TextScroll);
    Vue.component(ConNav.name, ConNav);
    Vue.component(ConPoint.name, ConPoint);
    Vue.component(header.name, header);
    Vue.component(ConFooter.name, ConFooter);
    Vue.component(ConLogin.name, ConLogin);
    Vue.component(ConChartLine.name, ConChartLine);
    Vue.component(ConChartPie.name, ConChartPie);
    Vue.component(ConChartBar.name,ConChartBar);
    Vue.component(conShopping.name,conShopping);
    Vue.component(conButton.name,conButton);
    Vue.component(conRate.name,conRate);
    Vue.component(RunText.name,RunText);
    Vue.component(conKeyborad.name,conKeyborad);
    Vue.component(ConList.name,ConList);
    Vue.component(ConListTop.name,ConListTop);
    Vue.component(conTable.name,conTable);
    Vue.component(conUpload.name,conUpload);


}

export  default ConstUI