(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b618e94"],{"9e90":function(t,n,a){"use strict";a.d(n,"c",(function(){return r})),a.d(n,"b",(function(){return c})),a.d(n,"a",(function(){return u}));var e=a("b775");function r(t){return Object(e["a"])({url:"/stat/user",method:"get",params:t})}function c(t){return Object(e["a"])({url:"/stat/order",method:"get",params:t})}function u(t){return Object(e["a"])({url:"/stat/goods",method:"get",params:t})}},b327:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"app-container"},[a("ve-line",{attrs:{extend:t.chartExtend,data:t.chartData,settings:t.chartSettings}})],1)},r=[],c=a("9e90"),u=a("3792"),s=a.n(u),o={components:{VeLine:s.a},data:function(){return{chartData:{},chartSettings:{},chartExtend:{}}},created:function(){var t=this;Object(c["b"])().then((function(n){t.chartData=n.data.data,t.chartSettings={labelMap:{orders:"订单量",customers:"下单用户",amount:"订单总额",pcr:"客单价"}},t.chartExtend={xAxis:{boundaryGap:!0}}}))}},i=o,d=a("5d22"),h=Object(d["a"])(i,e,r,!1,null,null,null);n["default"]=h.exports}}]);